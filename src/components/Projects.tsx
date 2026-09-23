"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  badge?: string;
}

const projects: ProjectItem[] = [
  {
    id: "smart-assessment",
    title: "Smart Assessment System for Student's Education",
    technologies: ["PHP", "MySQL"],
    description:
      "Built a platform to automate and enhance student performance evaluation, reducing manual grading effort for educators and delivering actionable insights to support personalized learning.",
  },
  {
    id: "inferaboard-ai",
    title: "InferaBoard AI",
    technologies: ["HTML", "JavaScript"],
    description:
      "AI-powered dashboard generation platform that converts raw data into interactive dashboards with automatic preprocessing and AI-based insights.",
    githubUrl: "https://github.com/rojajanardhanan/Inferaboard-",
    badge: "AI Platform",
  },
  {
    id: "voxguard-ai",
    title: "VoxGuard AI",
    technologies: ["Python"],
    description:
      "AI-powered voice fraud detection system that identifies AI-generated and spoofed voices in real time using a computed trust score.",
    githubUrl: "https://github.com/rojajanardhanan/VoxGuard---AI",
    badge: "Voice Security",
  },
  {
    id: "driver-drowsiness",
    title: "Driver Drowsiness Detection",
    technologies: ["Python", "OpenCV", "dlib"],
    description:
      "AI-based safety system that monitors a driver's facial features and eye movements in real time to detect fatigue and trigger alerts.",
    githubUrl: "https://github.com/rojajanardhanan/Driver-Drowsiness",
    badge: "Computer Vision",
  },
  {
    id: "eduspeak",
    title: "EduSpeak",
    technologies: ["Python", "Streamlit", "Gemini AI"],
    description:
      "AI-powered PDF summarizer and translator that extracts text, generates concise summaries via Gemini AI, and translates into regional languages.",
    githubUrl: "https://github.com/rojajanardhanan/Eduspeak",
    badge: "Gen AI",
  },
];

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full flex flex-col justify-between p-7 rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-md hover:shadow-2xl dark:hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
      >
        {/* Subtle accent glow gradient on top edge */}
        <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
          {/* Top Header with Folder Icon & Badge / Link */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-slate-200/80 dark:border-slate-700/80 shadow-sm group-hover:scale-105 transition-transform">
              <FolderGit2 className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              {project.badge && (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-500/30">
                  {project.badge}
                </span>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {/* Project Description (Exact Prompt Text) */}
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Tags at bottom of card */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View on GitHub link with sliding arrow micro-interaction */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group/link hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors pt-1"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-400 italic">
              Academic Project
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 border-t border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              03 // Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A curated selection of software platforms, AI fraud detection systems, and computer vision safety applications.
          </p>
        </motion.div>

        {/* 5 Project Cards in Responsive Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
