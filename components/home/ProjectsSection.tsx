"use client";

import CircularGallery from "@/components/circularprojects/CircularGallery";
import { fadeUp, projects } from "@/constants/constants";
import type { Project } from "@/types/types";
import { motion } from "motion/react";
import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems = projects.map((project) => ({
    image: project.imageUrl || "/projects/placeholder.jpg",
    text: project.title,
  }));

  const handleProjectClick = (index: number) => {
    setSelectedProject(projects[index]);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            PROJECTS THAT SHOWCASE MY TECHNICAL EXPERTISE AND CREATIVITY
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Explore my portfolio of innovative solutions—from scalable web
            platforms to AI-driven tools. Each project demonstrates
            problem-solving abilities, modern architecture, and attention to
            performance.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="w-full h-150 md:h-175"
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 15px Figtree"
            scrollSpeed={2}
            scrollEase={0.05}
            onItemClick={handleProjectClick}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-neutral-400 text-sm md:text-base">
            Scroll or drag to explore • Click on any project to view details
          </p>
        </motion.div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
