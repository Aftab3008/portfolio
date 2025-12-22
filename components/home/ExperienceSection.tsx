"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, fadeUp, staggerContainer } from "@/constants/constants";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-neutral-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Briefcase className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Work Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Journey
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Building impactful solutions and growing through diverse challenges
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500 via-purple-500/50 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company + experience.role}
                variants={fadeUp}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-purple-500 border-4 border-[#060010] z-10" />

                {/* Content Card */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <CardTitle className="text-2xl mb-1">
                              {experience.role}
                            </CardTitle>
                            <CardDescription className="text-lg text-purple-400">
                              {experience.company}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-neutral-500 whitespace-nowrap">
                            <Calendar className="h-4 w-4" />
                            {experience.startDate} - {experience.endDate}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Achievements */}
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -20 : 20,
                              }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2 text-neutral-300"
                            >
                              <span className="text-purple-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {experience.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
