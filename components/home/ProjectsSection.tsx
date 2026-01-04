"use client";

import CircularGallery from "@/components/circularprojects/CircularGallery";
import { projects } from "@/constants/constants";
import type { Project } from "@/types/types";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectDetailModal from "./ProjectDetailModal";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);

  const galleryItems = projects.map((project) => ({
    image: project.imageUrl || "/projects/placeholder.jpg",
    text: project.title,
  }));

  const handleProjectClick = (index: number) => {
    setSelectedProject(projects[index]);
    setIsModalOpen(true);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 80,
            clipPath: "inset(100% 0% 0% 0%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
          }
        );
      }

      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      if (galleryRef.current) {
        tl.fromTo(
          galleryRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      if (instructionRef.current) {
        tl.fromTo(
          instructionRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

        gsap.to(instructionRef.current, {
          opacity: 0.7,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 opacity-0"
          >
            PROJECTS THAT SHOWCASE MY TECHNICAL EXPERTISE AND CREATIVITY
          </h2>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl opacity-0"
          >
            Explore my portfolio of innovative solutions—from scalable web
            platforms to AI-driven tools. Each project demonstrates
            problem-solving abilities, modern architecture, and attention to
            performance.
          </p>
        </div>

        <div ref={galleryRef} className="w-full h-150 md:h-175 opacity-0">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 15px Figtree"
            scrollSpeed={2}
            scrollEase={0.05}
            onItemClick={handleProjectClick}
          />
        </div>

        <div ref={instructionRef} className="text-center mt-8 opacity-0">
          <p className="text-neutral-400 text-sm md:text-base">
            Scroll or drag to explore • Click on any project to view details
          </p>
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
