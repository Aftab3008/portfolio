"use client";

import { education } from "@/constants/constants";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

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

      const eduCards = gsap.utils.toArray(".edu-card");
      eduCards.forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });

      const achievementItems = gsap.utils.toArray(".achievement-item");
      achievementItems.forEach((item: any, index) => {
        const isEven = index % 2 === 0;
        const image = item.querySelector(".achievement-image");
        const content = item.querySelector(".achievement-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (image) {
          tl.fromTo(
            image,
            {
              opacity: 0,
              scale: 1.2,
              clipPath: isEven
                ? "inset(0% 100% 0% 0%)"
                : "inset(0% 0% 0% 100%)",
            },
            {
              opacity: 1,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "power3.out",
            }
          );

          gsap.to(image.querySelector("img"), {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (content) {
          tl.fromTo(
            content,
            {
              opacity: 0,
              x: isEven ? 50 : -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.6"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0"
          >
            EDUCATION
          </h2>
        </div>

        <div className="space-y-16">
          {education.map((edu) => (
            <div
              key={edu.institution + edu.degree}
              className="edu-card space-y-4 opacity-0"
            >
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {edu.institution}
                </h3>
                <p className="text-base md:text-lg text-neutral-300 font-normal">
                  {edu.degree} in {edu.field}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-base md:text-lg text-neutral-400">
                <span>
                  {edu.startDate} - {edu.endDate}
                </span>
                {edu.gpa && (
                  <>
                    <span className="text-neutral-600">•</span>
                    <span className="text-white font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </>
                )}
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="pt-8">
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-8 pointer-events-none cursor-default select-none">
                    Achievements
                  </h4>
                  <div className="space-y-12">
                    {edu.achievements.map((achievement, i) => {
                      const isEven = i % 2 === 0;
                      return (
                        <div
                          key={i}
                          className={`achievement-item flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                            isEven ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <div className="achievement-image w-full md:w-1/2 h-64 md:h-80 relative group overflow-hidden">
                            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-neutral-800 group-hover:border-white/50 transition-all duration-300">
                              <img
                                src={achievement.imageUrl}
                                alt={achievement.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            </div>
                          </div>

                          <div className="achievement-content w-full md:w-1/2 space-y-3 flex flex-col justify-center">
                            <h5 className="text-lg md:text-xl font-medium text-white">
                              {achievement.title}
                            </h5>
                            <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-normal">
                              {achievement.description}
                            </p>
                            {achievement.otherLinks && (
                              <a
                                href={achievement.otherLinks}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-lg border-2 border-white/20 hover:border-white hover:bg-white/5 text-white transition-all duration-300 w-fit"
                              >
                                <span className="text-2xl">🔗</span>
                                <span className="text-sm md:text-base font-semibold">
                                  View Profile
                                </span>
                                <svg
                                  className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
