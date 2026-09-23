"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const points = [
    "Worked on real-world AI modules with focus on data preprocessing, model validation, and result testing.",
    "Developed scripts for automation and validation of ML model outputs.",
    "Collaborated with a team on quality checks and enhancement of AI performance metrics.",
  ];

  return (
    <section
      id="experience"
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
              04 // Career
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10">
          {/* Animated Connecting Vertical Line */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gradient-to-b from-cyan-400 via-sky-500 to-amber-400 origin-top"
            />
          </div>

          {/* Timeline Node Item */}
          <div className="relative pb-10">
            {/* Popping Node Marker */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0B1E3F] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,217,255,0.6)]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-md backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                    AI Intern
                  </h3>
                  <p className="text-base font-medium text-cyan-600 dark:text-cyan-400">
                    Retech Solutions
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Internship</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3.5 mt-5">
                {points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
