"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft";
  delay?: number;
  duration?: number;
  className?: string;
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, delay },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { duration: 0.5, delay },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any, delay },
    }),
  },
  slideInLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: (delay = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        mass: 0.5,
        stiffness: 100,
        damping: 15,
        delay,
      },
    }),
  },
};

export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration,
  className = "",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
