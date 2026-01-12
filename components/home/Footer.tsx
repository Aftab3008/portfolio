"use client";

import { personalInfo, socialLinks } from "@/constants/constants";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInLink =
    socialLinks.find((link) => link.icon === "Linkedin")?.url || "#";

  const footerRef = useRef<HTMLElement>(null);
  const topBorderRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const bottomBorderRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      if (topBorderRef.current) {
        tl.fromTo(
          topBorderRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut" }
        );
      }

      if (leftColumnRef.current) {
        tl.fromTo(
          leftColumnRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

      if (rightColumnRef.current) {
        tl.fromTo(
          rightColumnRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (bottomBorderRef.current) {
        tl.fromTo(
          bottomBorderRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
          "-=0.2"
        );
      }

      if (copyrightRef.current) {
        tl.fromTo(
          copyrightRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      }

      gsap.to(".heart-icon", {
        scale: 1.3,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="relative py-12 px-6 md:px-12">
      <div
        ref={topBorderRef}
        className="absolute top-0 left-0 right-0 h-px bg-neutral-800"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div ref={leftColumnRef} className="space-y-3 opacity-0">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-normal">
              {personalInfo.title}
            </p>
            <p className="text-neutral-500 text-xs font-normal">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          <div ref={rightColumnRef} className="space-y-4 opacity-0">
            <h4 className="text-base md:text-lg font-semibold text-white inline-block w-fit">
              Let&apos;s Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-neutral-400 text-sm font-normal">
                  Open to opportunities
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <MapPin size={14} className="text-neutral-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Briefcase size={14} className="text-neutral-500" />
                <span>Full-time / Internship</span>
              </div>
            </div>
            <div className="flex items-center gap-8 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon === "Github" && <Github size={18} />}
                  {link.icon === "Linkedin" && <Linkedin size={18} />}
                  {link.icon === "Mail" && <Mail size={18} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div ref={bottomBorderRef} className="h-px bg-neutral-800 mb-8" />

        <div ref={copyrightRef} className="opacity-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm font-medium z-100">
              Developed with{" "}
              <span className="heart-icon text-white font-bold inline-block">
                ❤️
              </span>{" "}
              by{" "}
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-neutral-300 transition-colors"
              >
                {personalInfo.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
