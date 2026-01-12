"use client";

import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/constants/constants";
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import Silk from "../Silk";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const iconMap: Record<string, any> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Mail: FaEnvelope,
};

interface HeroSectionProps {
  isVisible?: boolean;
}

export default function HeroSection({ isVisible = true }: HeroSectionProps) {
  const topSocialLinks = socialLinks.filter((link) => link.icon !== "Mail");

  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const bioLeftRef = useRef<HTMLDivElement>(null);
  const bioRightRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isVisible) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(
        [
          navRef.current,
          nameRef.current,
          photoRef.current,
          bioLeftRef.current,
          bioRightRef.current,
        ],
        {
          opacity: 0,
        }
      );
      gsap.set(navRef.current, { y: -30 });
      gsap.set(nameRef.current, { y: 50, scale: 0.9 });
      gsap.set(photoRef.current, { scale: 0.5, rotation: -10 });
      gsap.set(bioLeftRef.current, { x: -50 });
      gsap.set(bioRightRef.current, { x: 50 });
      gsap.set(".social-link-hero", { opacity: 0, scale: 0, y: 20 });

      tl.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          nameRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
          },
          "-=0.4"
        )
        .to(
          photoRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.8"
        )
        .to(
          ".social-link-hero",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        .to(
          bioLeftRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .to(
          bioRightRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
    },
    { dependencies: [isVisible], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1}
          rotation={0}
        />
      </div>

      <div
        ref={navRef}
        className="relative z-20 flex items-center justify-between p-6 md:p-8 opacity-0"
      >
        <Button
          variant="outline"
          className="border-neutral-700 hover:bg-neutral-800/50 hover:border-neutral-600 text-neutral-200 font-medium tracking-wide transition-all duration-300 hover:scale-105"
          asChild
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt className="mr-2 h-4 w-4" />
            VIEW RESUME
          </a>
        </Button>

        <div ref={socialLinksRef} className="flex items-center gap-3">
          {topSocialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-hero p-3 rounded-xl bg-neutral-800/40 border border-neutral-700/50 text-neutral-300 hover:text-white hover:bg-neutral-800/70 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:-translate-y-1"
                aria-label={social.name}
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 -mt-16">
        <div className="text-center mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <div
              ref={nameRef}
              className="text-white whitespace-nowrap opacity-0"
            >
              {personalInfo.name}
            </div>
          </h1>
        </div>

        <div className="mb-12">
          <div
            ref={photoRef}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-neutral-700/50 shadow-2xl bg-neutral-900 opacity-0"
          >
            <Image
              src="/profile_image.png"
              alt={personalInfo.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div ref={bioLeftRef} className="text-left opacity-0">
            <p className="text-white text-base md:text-lg leading-relaxed font-medium text-glow">
              {personalInfo.bio}
            </p>
          </div>

          <div ref={bioRightRef} className="text-right opacity-0">
            <p className="text-white text-base md:text-lg leading-relaxed font-medium text-glow">
              {personalInfo.tagline}{" "}
              <span className="inline-flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
