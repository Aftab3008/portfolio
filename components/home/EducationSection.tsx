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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { education, fadeUp, staggerContainer } from "@/constants/constants";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
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
            <GraduationCap className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Background
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Formal education and continuous learning that shaped my technical
            foundation
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + edu.degree}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-purple-500/50">
                      <AvatarFallback className="bg-purple-500/20 text-purple-400 text-xl font-bold">
                        {edu.institution
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription className="text-purple-400">
                        {edu.degree} in {edu.field}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.startDate} - {edu.endDate}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-400 font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neutral-400 mb-3">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-neutral-300"
                          >
                            <span className="text-purple-400 mt-1">▸</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block bg-neutral-900/30 border-neutral-800 backdrop-blur-sm">
            <CardContent className="py-6 px-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-purple-500/20">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-neutral-500 mb-1">
                    Continuous Learning
                  </p>
                  <p className="text-neutral-300">
                    Always exploring new technologies and best practices through
                    online courses and certifications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
