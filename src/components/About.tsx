"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Award } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden border-t border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              01 // Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image in elegant architectural card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Roja J"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-cyan-500/20 text-xs">
                  <p className="font-display font-bold text-slate-900 dark:text-white">
                    Roja J
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    B.Tech IT • Chennai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient decorative backdrop */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Exact Prompt Bio & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio Quote Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm backdrop-blur-sm">
              <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                &ldquo;Motivated B.Tech Information Technology graduate with a strong foundation in
                full-stack development and Artificial Intelligence, skilled at turning ideas into
                working applications. Eager to bring strong problem-solving ability and adaptability
                to a Software Development Engineer role and contribute to building scalable,
                impactful solutions.&rdquo;
              </p>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-400/60 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Full-Stack
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  End-to-end architecture from interactive UIs to robust DBMS backends.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-400/60 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1">
                  AI &amp; Vision
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Computer vision, model validation, and practical ML solutions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-400/60 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Academic Merit
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  9.22 CGPA at SRM VEC with consistent distinction and awards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
