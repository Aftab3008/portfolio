"use client";

import LogoLoop from "@/components/logoloop/LogoLoop";
import {
  personalInfo,
  skillCategories,
  techLogos,
} from "@/constants/constants";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const logoLoopRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (logoLoopRef.current) {
        gsap.fromTo(
          logoLoopRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logoLoopRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const skillItems = gsap.utils.toArray(".skill-category-item");
      if (skillItems.length > 0) {
        gsap.fromTo(
          skillItems,
          { opacity: 0, y: 40, x: 30 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.fromTo(
        ".skills-arrow-link",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-arrow-link",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl opacity-0"
          >
            I MAKE SOFTWARES THAT WORKS FOR YOU, NOT THE OTHER WAY AROUND...
          </h2>
        </div>

        <div ref={logoLoopRef} className="mb-20 opacity-0">
          <LogoLoop
            logos={techLogos.map((logo) => ({
              node: (
                <img
                  src={logo.icon}
                  alt={logo.title}
                  className="h-8 w-8 object-contain"
                />
              ),
              title: logo.title,
            }))}
            speed={30}
            direction="left"
            logoHeight={60}
            gap={60}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="rgba(0, 0, 0, 0)"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div ref={bioRef} className="space-y-8 opacity-0">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>
          </div>

          <div ref={skillsContainerRef} className="space-y-10">
            {Object.entries(skillCategories).map(([category, skillNames]) => {
              const categorySkills = skillNames;
              return (
                <div key={category} className="skill-category-item opacity-0">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                    {category}
                  </h3>
                  <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-normal">
                    {categorySkills.join(", ")}
                  </p>
                </div>
              );
            })}

            <a
              href="#projects"
              className="skills-arrow-link inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group underline underline-offset-4 opacity-0"
            >
              <span>How I navigate my project building process</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
