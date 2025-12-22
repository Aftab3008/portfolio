"use client";

import { motion } from "motion/react";
import { personalInfo, socialLinks } from "@/constants/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInLink =
    socialLinks.find((link) => link.icon === "Linkedin")?.url || "#";

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-neutral-500 text-xs">
              Crafting digital experiences with precision and passion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                "Hero",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {section}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm font-medium z-100">
              Developed with <span className="text-white font-bold">❤️</span> by{" "}
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
        </motion.div>
      </div>
    </footer>
  );
}
