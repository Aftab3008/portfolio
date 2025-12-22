"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, fadeUp, staggerContainer } from "@/constants/constants";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <FolderGit2 className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A showcase of recent work demonstrating technical expertise and
            problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="inline-flex h-auto p-1 bg-neutral-900/50 border border-neutral-800 mx-auto flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                rotateY: 1,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group"
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-linear-to-br from-purple-900/50 to-neutral-900 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-purple-600 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <FolderGit2 className="h-20 w-20 text-purple-500/30" />
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Long Description */}
                  {project.longDescription && (
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {project.longDescription}
                    </p>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-neutral-700 bg-neutral-900/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-700 hover:bg-neutral-800 flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 flex-1"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
