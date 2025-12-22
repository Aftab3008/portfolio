"use client";

import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import Magnet from "@/components/Magnet";
import type { Project } from "@/types/types";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] md:max-w-5xl w-full p-4 md:p-6 bg-black/95 border-neutral-800 gap-6 max-h-[90vh] overflow-y-auto rounded-xl flex flex-col"
        showCloseButton={false}
      >
        <div className="flex w-full justify-end items-center">
          <Magnet
            padding={40}
            magnetStrength={3}
            // wrapperClassName="absolute top-4 right-4 z-10"
          >
            <DialogClose className="p-2 hover:bg-neutral-200 hover:text-black text-white transition-colors rounded-md bg-neutral-900/80 backdrop-blur-sm">
              <FaTimes className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </Magnet>
        </div>

        <div className="flex flex-col md:space-y-8 space-y-6">
          <Card className="bg-neutral-900 border-neutral-800 overflow-hidden p-0">
            <div className="relative">
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-white text-black border-0 font-bold">
                    Featured
                  </Badge>
                </div>
              )}

              <div className="w-full h-64 md:h-96 bg-black">
                <img
                  src={project.imageUrl || "/projects/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="space-y-3">
              <DialogTitle className="text-3xl md:text-4xl font-black text-white">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base md:text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </DialogDescription>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-neutral-700 bg-neutral-800/50 text-neutral-300 px-3 py-1.5 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {project.githubUrl && (
                <Magnet
                  padding={30}
                  magnetStrength={2}
                  wrapperClassName="flex-1 w-full"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 text-white rounded-md transition-colors font-medium"
                  >
                    <FaGithub className="h-5 w-5" />
                    View Source Code
                  </a>
                </Magnet>
              )}
              {project.liveUrl && (
                <Magnet
                  padding={30}
                  magnetStrength={2}
                  wrapperClassName="flex-1 w-full"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-neutral-200 text-black rounded-md transition-colors font-bold"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    Visit Live Demo
                  </a>
                </Magnet>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
