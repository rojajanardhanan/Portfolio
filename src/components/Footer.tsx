"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Download, ArrowUp } from "lucide-react";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1eH6WZDmrE7RipkNZj5mqTgO904w2fS4z";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-14 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#071328]/60 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-display font-extrabold text-slate-900 dark:text-white text-xl tracking-tight">
                ROJA <span className="text-cyan-500">J</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Aspiring Software Development Engineer • Full-Stack &amp; AI
            </p>
          </div>

          {/* Social Icons with Hover Bounce/Rotate Micro-interaction */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/roja-janardhanan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-[#0077b5] dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1.5 hover:rotate-6 transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/rojajanardhanan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1.5 hover:-rotate-6 transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={RESUME_DOWNLOAD_URL}
              download="Roja_Resume.pdf"
              aria-label="Download Resume"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Roja J. All rights reserved.</p>
          <p>Designed &amp; Built with Modern Web Standards</p>
        </div>
      </div>
    </motion.footer>
  );
}
