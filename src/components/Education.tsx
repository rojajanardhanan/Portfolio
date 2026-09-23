"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  grade: string;
  period: string;
  badge?: string;
}

const educationData: EducationEntry[] = [
  {
    degree: "B.Tech, Information Technology",
    institution: "SRM Valliammai Engineering College",
    grade: "CGPA 9.22",
    period: "2022–2026",
    badge: "Undergraduate",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Neelan Matriculation Hr. Sec. School",
    grade: "95.5%",
    period: "2021–2022",
    badge: "HSC",
  },
  {
    degree: "SSLC (10th)",
    institution: "Neelan Matriculation Hr. Sec. School",
    grade: "99.4%",
    period: "2019–2020",
    badge: "Distinction",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 md:py-36 border-t border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              05 // Academics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10">
          {/* Animated Drawing Connecting Vertical Line */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gradient-to-b from-cyan-400 via-sky-500 to-amber-400 origin-top"
            />
          </div>

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div key={item.degree} className="relative">
                {/* Popping Node Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                    delay: index * 0.15,
                  }}
                  className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0B1E3F] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,217,255,0.5)] z-10"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </motion.div>

                {/* Education Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-md backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {item.badge}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 ml-11">
                    {item.institution}
                  </p>

                  <div className="ml-11 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-500/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.grade}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
