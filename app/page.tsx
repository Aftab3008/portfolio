"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HomeDock from "@/components/home/HomeDock";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import EducationSection from "@/components/home/EducationSection";
import ContactSection from "@/components/home/ContactSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling during loading
    document.documentElement.classList.add("overflow-hidden");
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  useGSAP(() => {
    // Set initial states
    gsap.set(loadingRef.current, { opacity: 1 });
    gsap.set(contentRef.current, { opacity: 0 });
    gsap.set(".section-animate", { opacity: 0, y: 30 });

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        // Restore scrolling
        document.documentElement.classList.remove("overflow-hidden");
      },
    });

    // Show loading screen for 2.5 seconds, then animate content in
    timeline
      .to({}, { duration: 2.5 }) // Wait for 2.5 seconds
      .to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3" // Start slightly before loading screen finishes
      )
      .to(
        ".section-animate",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
      {isLoading && (
        <div ref={loadingRef}>
          <LoadingScreen />
        </div>
      )}
      <div ref={contentRef} className="relative w-full">
        <div className="section-animate">
          <HeroSection />
        </div>
        <div className="section-animate">
          <SkillsSection />
        </div>
        <div className="section-animate">
          <ExperienceSection />
        </div>
        <div className="section-animate">
          <ProjectsSection />
        </div>
        <div className="section-animate">
          <EducationSection />
        </div>
        <div className="section-animate">
          <ContactSection />
        </div>
        <HomeDock />
      </div>
    </>
  );
}
