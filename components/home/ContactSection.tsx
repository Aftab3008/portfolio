"use client";

import { personalInfo, socialLinks } from "@/constants/constants";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconMap: Record<string, any> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  Mail: FaEnvelope,
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 md:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white">
                LET'S TALK
              </h2>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  GOT A QUESTION, PROPOSAL, PROJECT, OR WANT TO WORK TOGETHER ON
                  SOMETHING?
                </p>

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-neutral-300 transition-colors underline underline-offset-8 decoration-2"
                >
                  <FaEnvelope className="h-6 w-6" />
                  SEND ME AN EMAIL
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex lg:justify-end gap-8">
              {socialLinks
                .filter((link) => link.icon !== "Mail")
                .map((social, index) => {
                  const Icon = iconMap[social.icon];
                  const labels: Record<string, string> = {
                    Github: "GH",
                    Linkedin: "LN",
                    Twitter: "TW",
                  };

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="relative p-6 rounded-full bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-white/5 transition-all duration-300">
                        <Icon className="h-8 w-8 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-2xl font-black text-neutral-400 group-hover:text-white transition-colors">
                        {labels[social.icon] ||
                          social.name.slice(0, 2).toUpperCase()}
                      </span>
                    </motion.a>
                  );
                })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:text-right space-y-4 pt-12"
            >
              <div className="space-y-2">
                <p className="text-neutral-500 text-sm uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg text-neutral-300 hover:text-white transition-colors block"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-neutral-500 text-sm uppercase tracking-wider">
                  Location
                </p>
                <p className="text-lg text-neutral-300">
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
