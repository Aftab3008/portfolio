"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LenisContextType {
  lenis: Lenis | null;
  isReady: boolean;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  isReady: false,
});

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
  enabled?: boolean;
  lerp?: number;
  duration?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  preventTouch?: boolean;
  maxScrollDelta?: number;
}

export default function SmoothScroll({
  children,
  enabled = true,
  lerp = 0.06,
  duration = 1.5,
  wheelMultiplier = 0.5,
  touchMultiplier = 1.2,
  infinite = false,
  preventTouch = true,
  maxScrollDelta = 150,
}: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsReady(true);
      return;
    }

    // Intercept wheel events to clamp scroll delta before Lenis processes them
    const handleWheel = (e: WheelEvent) => {
      // Only intercept if it's a large scroll (aggressive scrolling)
      if (Math.abs(e.deltaY) > maxScrollDelta) {
        e.preventDefault();
        e.stopPropagation();

        // Clamp the delta to max value
        const clampedDelta =
          Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), maxScrollDelta);

        // Manually scroll Lenis with clamped value
        if (lenisRef.current) {
          const currentScroll = lenisRef.current.scroll;
          const targetScroll = currentScroll + clampedDelta;
          lenisRef.current.scrollTo(targetScroll, { immediate: false });
        }
      }
    };

    const lenis = new Lenis({
      lerp,
      duration,
      wheelMultiplier,
      touchMultiplier,
      infinite,
      syncTouch: true,
      syncTouchLerp: 0.04,
      prevent: preventTouch
        ? (node) => node.closest("[data-lenis-prevent]") !== null
        : undefined,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Add wheel event listener with capture to intercept BEFORE Lenis
    window.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    setIsReady(true);

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [
    enabled,
    lerp,
    duration,
    wheelMultiplier,
    touchMultiplier,
    infinite,
    preventTouch,
    maxScrollDelta,
  ]);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, isReady }}>
      {children}
    </LenisContext.Provider>
  );
}

export function scrollToElement(
  target: string | HTMLElement,
  lenis: Lenis | null,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
  }
) {
  const element =
    typeof target === "string" ? document.getElementById(target) : target;

  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.2,
      immediate: options?.immediate ?? false,
    });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function useScrollControl() {
  const { lenis } = useLenis();

  const stopScroll = () => {
    if (lenis) {
      lenis.stop();
    }
  };

  const startScroll = () => {
    if (lenis) {
      lenis.start();
    }
  };

  return { stopScroll, startScroll, lenis };
}
