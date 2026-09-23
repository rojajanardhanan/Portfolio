"use client";

import { motion } from "framer-motion";
import { Code2, Globe2, Brain, Sparkles, Languages } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const technicalSkillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-cyan-500" />,
    skills: ["Java", "Python", "JavaScript", "PHP"],
  },
  {
    title: "Web Technologies",
    icon: <Globe2 className="w-5 h-5 text-sky-500" />,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Core Concepts",
    icon: <Brain className="w-5 h-5 text-amber-500" />,
    skills: ["DBMS", "Machine Learning", "Computer Vision (OpenCV)"],
  },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Adaptability",
  "Event Organization",
];

const spokenLanguages = ["English", "Tamil"];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 border-t border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading with Direction-Aware Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              02 // Expertise
            </span>
            <span className="h-px w-8 bg-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A comprehensive foundation in programming languages, web engineering, and core AI concepts.
          </p>
        </motion.div>

        {/* Technical Skills Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {technicalSkillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-7 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Animated underline per category heading */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
                  className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-amber-300 origin-left mb-6"
                />

                {/* Animated Pill/Chip Badges that stagger in */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + catIdx * 0.1 + skillIdx * 0.07,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400/70 hover:shadow-sm cursor-default transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Spoken Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Soft Skills */}
          <div className="p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Soft Skills
              </h3>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] w-12 bg-cyan-400 origin-left mb-6"
            />
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.05 }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Languages
              </h3>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] w-12 bg-amber-400 origin-left mb-6"
            />
            <div className="flex flex-wrap gap-2.5">
              {spokenLanguages.map((lang, idx) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.05 }}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 shadow-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
