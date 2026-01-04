"use client";

import { experiences } from "@/constants/constants";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading reveal with clip-path animation
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

      // Experience cards with staggered animation and timeline border effect
      const experienceCards = gsap.utils.toArray(".experience-card");
      experienceCards.forEach((card: any, index) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate the border line drawing down
        timeline.fromTo(
          card,
          {
            opacity: 0,
            x: -30,
            borderLeftColor: "transparent",
          },
          {
            opacity: 1,
            x: 0,
            borderLeftColor: "rgb(64 64 64)",
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
          }
        );

        // Animate the role title
        const roleTitle = card.querySelector(".exp-role");
        if (roleTitle) {
          timeline.fromTo(
            roleTitle,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          );
        }

        // Animate achievements with stagger
        const achievements = card.querySelectorAll(".exp-achievement");
        if (achievements.length > 0) {
          timeline.fromTo(
            achievements,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.2"
          );
        }

        // Animate technologies
        const technologies = card.querySelector(".exp-technologies");
        if (technologies) {
          timeline.fromTo(
            technologies,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.1"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-5xl opacity-0"
          >
            WHERE I'VE BUILT AND LEARNED...
          </h2>
        </div>

        <div ref={timelineRef} className="space-y-16">
          {experiences.map((experience) => (
            <div
              key={experience.company + experience.role}
              className="experience-card border-l-2 border-neutral-700 pl-8 md:pl-12 opacity-0"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div className="exp-role">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {experience.role}
                      </h3>
                      <p className="text-xl md:text-2xl text-neutral-400 mt-1">
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-base md:text-lg text-neutral-500 whitespace-nowrap">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {experience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="exp-achievement text-base md:text-lg text-neutral-300 leading-relaxed"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="exp-technologies pt-4">
                  <p className="text-base md:text-lg text-neutral-500">
                    {experience.technologies.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
