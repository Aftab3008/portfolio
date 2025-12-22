"use client";

import LogoLoop from "@/components/logoloop/LogoLoop";
import {
  fadeUp,
  personalInfo,
  skillCategories,
  techLogos,
} from "@/constants/constants";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-5xl">
            I MAKE SOFTWARES THAT WORKS FOR YOU, NOT THE OTHER WAY AROUND...
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            {/* <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              Beyond coding, I'm an avid reader who enjoys exploring technical
              literature, design principles, and product development strategies.
              I find inspiration in compelling narratives—whether through anime
              like One Piece and Naruto, or cinema that showcase strategic
              thinking and problem-solving, elements that directly influence my
              approach to software architecture.
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            {Object.entries(skillCategories).map(
              ([category, skillNames], index) => {
                const categorySkills = skillNames;
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                      {category}
                    </h3>
                    <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                      {categorySkills.join(", ")}
                    </p>
                  </motion.div>
                );
              }
            )}

            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group underline underline-offset-4"
            >
              <span>How I navigate my project building process</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
