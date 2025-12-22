"use client";

import { motion } from "motion/react";
import { experiences, fadeUp } from "@/constants/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-5xl">
            WHERE I'VE BUILT AND LEARNED...
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company + experience.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="border-l-2 border-neutral-700 pl-8 md:pl-12"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
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
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      className="text-base md:text-lg text-neutral-300 leading-relaxed"
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <p className="text-base md:text-lg text-neutral-500">
                    {experience.technologies.join(" • ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
