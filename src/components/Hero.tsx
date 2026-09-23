"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, Linkedin, Github } from "lucide-react";
import { useMagnetic } from "../hooks/useMagnetic";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1eH6WZDmrE7RipkNZj5mqTgO904w2fS4z";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const btnResumeMagnetic = useMagnetic(0.25);
  const btnContactMagnetic = useMagnetic(0.25);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const nameLetters = "ROJA J".split("");

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Pure CSS/SVG Drifting Ambient Gradient Mesh in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="mesh-blob-1 -top-24 -left-20 opacity-70 dark:opacity-60" />
        <div className="mesh-blob-2 top-1/4 -right-24 opacity-60 dark:opacity-50" />
        <div className="mesh-blob-3 -bottom-24 left-1/3 opacity-50 dark:opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left z-10"
          >
            {/* Status pill badge */}
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-500/30 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                Available for Software Engineering Roles
              </span>
            </motion.div>

            {/* Main Name Heading with Staggered Letters */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-extrabold tracking-tight leading-[1.08] mb-4 text-slate-900 dark:text-white"
            >
              <span className="inline-block mr-3">Hi, I'm</span>
              <span className="inline-flex overflow-hidden">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${
                      char === " "
                        ? "w-3"
                        : "bg-gradient-to-r from-[#0B1E3F] via-[#1F3864] to-[#00D9FF] dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Aspiring Software Development Engineer{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">|</span>{" "}
              Full-Stack &amp; AI Developer
            </motion.p>

            {/* Action Buttons with Magnetic Hover Physics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* Download Resume Button */}
              <div
                ref={btnResumeMagnetic.ref}
                onMouseMove={btnResumeMagnetic.handleMouseMove}
                onMouseLeave={btnResumeMagnetic.handleMouseLeave}
                style={{
                  transform: `translate(${btnResumeMagnetic.position.x}px, ${btnResumeMagnetic.position.y}px)`,
                  transition:
                    btnResumeMagnetic.position.x === 0
                      ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                      : "none",
                }}
              >
                <a
                  href={RESUME_DOWNLOAD_URL}
                  download="Roja_Resume.pdf"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#0B1E3F] to-[#1F3864] hover:from-[#132A54] hover:to-[#2B4B82] dark:from-cyan-400 dark:to-cyan-500 dark:hover:from-cyan-300 dark:hover:to-cyan-400 text-white dark:text-slate-950 shadow-lg shadow-cyan-950/20 dark:shadow-cyan-400/20 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                  <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Get in Touch Button */}
              <div
                ref={btnContactMagnetic.ref}
                onMouseMove={btnContactMagnetic.handleMouseMove}
                onMouseLeave={btnContactMagnetic.handleMouseLeave}
                style={{
                  transform: `translate(${btnContactMagnetic.position.x}px, ${btnContactMagnetic.position.y}px)`,
                  transition:
                    btnContactMagnetic.position.x === 0
                      ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                      : "none",
                }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm hover:shadow-cyan-500/10 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </motion.div>

            {/* Social Icons with Micro-interactions */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
                Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/roja-janardhanan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roja's LinkedIn Profile"
                className="group p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-[#0077b5] dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 hover:rotate-6 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-4 h-4 transition-transform" />
              </a>
              <a
                href="https://github.com/rojajanardhanan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roja's GitHub Profile"
                className="group p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 hover:-rotate-6 transition-all duration-300 shadow-sm"
              >
                <Github className="w-4 h-4 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Headshot with Glowing Ring, Blob Reveal & Floating Bob */}
          <div className="relative flex items-center justify-center">
            {/* Glowing Ambient Gradient Ring Behind Profile */}
            <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-600/20 to-amber-400/30 blur-2xl animate-pulse-subtle pointer-events-none" />

            {/* Outer Rotating Gradient Border Ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-600 to-amber-300 opacity-80 blur-[2px]" />

            {/* Floating Image Wrapper */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative animate-float-slow"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-b from-white to-slate-200 dark:from-[#0B1E3F] dark:to-slate-900 shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/60 dark:border-cyan-400/40">
                  <Image
                    src="/images/profile.jpg"
                    alt="Roja J - Aspiring Software Development Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover object-top select-none hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Decorative Tech Badge overlay */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-0 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/40 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                  SDE &amp; AI
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll-down bouncing indicator fading out on scroll */}
        <motion.div
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 15 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-slate-400/50 dark:border-slate-600 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ height: ["4px", "10px", "4px"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-cyan-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
