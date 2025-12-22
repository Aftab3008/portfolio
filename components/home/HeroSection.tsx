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
import { motion } from "motion/react";
import Silk from "../Silk";
import Image from "next/image";

const iconMap: Record<string, any> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Mail: FaEnvelope,
};

export default function HeroSection() {
  const name = personalInfo.name;
  const [firstName, lastName] = name.split(" ");

  // Get social links (excluding email for top bar)
  const topSocialLinks = socialLinks.filter((link) => link.icon !== "Mail");

  return (
    <section
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

      {/* <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05),transparent_50%)]" /> */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between p-6 md:p-8"
      >
        <Button
          variant="outline"
          className="border-neutral-700 hover:bg-neutral-800/50 hover:border-neutral-600 text-neutral-200 font-medium tracking-wide"
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

        <div className="flex items-center gap-4">
          {topSocialLinks.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 -mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-white mb-2 md:mb-4"
            >
              {firstName}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-white"
            >
              {lastName}
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="mb-12"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-neutral-700/50 shadow-2xl bg-neutral-900">
            <Image
              src="/profile_image.png"
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-left"
          >
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="text-right"
          >
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              {personalInfo.tagline}{" "}
              <span className="inline-flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse" />
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
