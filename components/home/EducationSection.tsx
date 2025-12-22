"use client";

import { motion } from "motion/react";
import { education, fadeUp } from "@/constants/constants";

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            EDUCATION
          </h2>
        </motion.div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {edu.institution}
                </h3>
                <p className="text-lg md:text-xl text-neutral-300">
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
                  <h4 className="text-xl font-semibold text-white mb-8">
                    Achievements
                  </h4>
                  <div className="space-y-12">
                    {edu.achievements.map((achievement, i) => {
                      const isEven = i % 2 === 0;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2, duration: 0.6 }}
                          className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                            isEven ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <div className="w-full md:w-1/2 h-64 md:h-80 relative group">
                            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-neutral-800 group-hover:border-white/50 transition-all duration-300">
                              <img
                                src={achievement.imageUrl}
                                alt={achievement.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            </div>
                          </div>

                          <div className="w-full md:w-1/2 space-y-3 flex flex-col justify-center">
                            <h5 className="text-xl md:text-2xl font-bold text-white">
                              {achievement.title}
                            </h5>
                            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
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
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
