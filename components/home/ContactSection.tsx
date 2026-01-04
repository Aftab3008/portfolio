"use client";

import { personalInfo, socialLinks } from "@/constants/constants";
import { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, any> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Mail: FaEnvelope,
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const socialContainerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      if (headingRef.current) {
        mainTl.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateX: 45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      }

      if (leftContentRef.current) {
        const description = leftContentRef.current.querySelector(
          ".contact-description"
        );
        const emailCta = leftContentRef.current.querySelector(".email-cta");

        if (description) {
          mainTl.fromTo(
            description,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.6"
          );
        }

        if (emailCta) {
          mainTl.fromTo(
            emailCta,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
        }
      }

      const socialIcons = gsap.utils.toArray(".social-icon-contact");
      if (socialIcons.length > 0) {
        mainTl.fromTo(
          socialIcons,
          {
            opacity: 0,
            scale: 0,
            y: 50,
            rotation: -20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
      }

      if (contactInfoRef.current) {
        mainTl.fromTo(
          contactInfoRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      }

      socialIcons.forEach((icon: any) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.15,
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-20 px-6 md:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftContentRef} className="space-y-8">
            <div className="space-y-6">
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-white opacity-0"
                style={{ perspective: "1000px" }}
              >
                LET'S TALK
              </h2>

              <div className="space-y-4">
                <p className="contact-description text-lg md:text-xl text-neutral-300 leading-relaxed opacity-0 font-normal">
                  GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON
                  SOMETHING?
                </p>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="email-cta inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-neutral-300 transition-colors underline underline-offset-8 decoration-2 opacity-0 hover:translate-x-2 transform duration-300"
                >
                  <FaEnvelope className="h-6 w-6" />
                  SEND ME AN EMAIL
                </a>
              </div>
            </div>
          </div>

          <div ref={rightContentRef} className="space-y-6">
            <div ref={socialContainerRef} className="flex lg:justify-end gap-8">
              {socialLinks
                .filter((link) => link.icon !== "Mail")
                .map((social) => {
                  const Icon = iconMap[social.icon];
                  const labels: Record<string, string> = {
                    Github: "GH",
                    Linkedin: "LN",
                    Twitter: "TW",
                  };

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-contact group flex flex-col items-center gap-3 opacity-0"
                    >
                      <div className="relative p-6 rounded-full bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-white/5 transition-all duration-300">
                        <Icon className="h-8 w-8 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xl font-bold text-neutral-400 group-hover:text-white transition-colors">
                        {labels[social.icon] ||
                          social.name.slice(0, 2).toUpperCase()}
                      </span>
                    </a>
                  );
                })}
            </div>

            <div
              ref={contactInfoRef}
              className="lg:text-right space-y-4 pt-12 opacity-0"
            >
              <div className="space-y-2">
                <p className="text-neutral-500 text-sm uppercase tracking-wider font-medium">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg text-neutral-300 hover:text-white transition-colors inline-block hover:underline hover:underline-offset-4 font-normal"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-neutral-500 text-sm uppercase tracking-wider font-medium">
                  Location
                </p>
                <p className="text-lg text-neutral-300 font-normal">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
