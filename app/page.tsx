"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeDock from "@/components/home/HomeDock";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import EducationSection from "@/components/home/EducationSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorBoundary from "@/components/ErrorBoundary";
import SkipToContent from "@/components/SkipToContent";
import Blobity from "blobity";
import useBlobity from "blobity/lib/react/useBlobity";
import { blobOptions } from "@/lib/BlobConfig";
import { useScrollControl } from "@/components/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const blobity = useBlobity(blobOptions);
  const blobityRef = useRef<Blobity | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { stopScroll, startScroll } = useScrollControl();

  useEffect(() => {
    if (isLoading) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isLoading, stopScroll, startScroll]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (blobity.current) {
      blobityRef.current = blobity.current;
    }

    return () => {
      if (blobityRef.current) {
        blobityRef.current.destroy();
        blobityRef.current = null;
      }
    };
  }, [isLoading, blobity]);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  useGSAP(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      gsap.set(loadingRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { opacity: 1 });
      gsap.set(".section-animate", { opacity: 1, y: 0 });
      setIsLoading(false);
      document.documentElement.classList.remove("overflow-hidden");
      return;
    }

    gsap.set(loadingRef.current, { opacity: 1 });
    gsap.set(contentRef.current, { opacity: 0 });
    gsap.set(".section-animate", { opacity: 0, y: 30 });

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.documentElement.classList.remove("overflow-hidden");
        sessionStorage.setItem("hasVisited", "true");
      },
    });

    timeline
      .to({}, { duration: 1.2 })
      .to(loadingRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.35"
      )
      .to(
        ".section-animate",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <>
      {/* <SkipToContent /> */}

      {isLoading && (
        <div ref={loadingRef}>
          <LoadingScreen />
        </div>
      )}

      <div ref={contentRef} className="relative w-full">
        <main id="main-content">
          <div className="section-animate">
            <ErrorBoundary>
              <HeroSection isVisible={!isLoading} />
            </ErrorBoundary>
          </div>
          <div className="section-animate">
            <SkillsSection />
          </div>
          <div className="section-animate">
            <ExperienceSection />
          </div>
          <div className="section-animate">
            <ErrorBoundary>
              <ProjectsSection />
            </ErrorBoundary>
          </div>
          <div className="section-animate">
            <EducationSection />
          </div>
          <div className="section-animate">
            <ContactSection />
          </div>
        </main>
        <div className="section-animate">
          <Footer />
        </div>
        <HomeDock />
      </div>
    </>
  );
}
