"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Achievements", href: "#achievements", id: "achievements" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1eH6WZDmrE7RipkNZj5mqTgO904w2fS4z";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    ["hero", "about", "skills", "projects", "experience", "education", "achievements", "contact"],
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/75 dark:bg-[#0B1E3F]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-cyan-500/10 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 select-none focus:outline-none"
            aria-label="Roja J Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1E3F] to-[#1F3864] dark:from-cyan-950 dark:to-slate-900 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center shadow-md group-hover:border-cyan-400 transition-colors">
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                R<span className="text-cyan-400">J</span>
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-900 dark:text-white tracking-wider text-base leading-none">
                ROJA J
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-600 dark:text-cyan-400 leading-tight">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-cyan-950/60 border border-slate-200/60 dark:border-cyan-500/30 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume CTA & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={RESUME_DOWNLOAD_URL}
              download="Roja_Resume.pdf"
              className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#0B1E3F] to-[#1F3864] text-white hover:from-[#132A54] hover:to-[#2B4B82] dark:from-cyan-500 dark:to-cyan-600 dark:text-slate-950 dark:hover:from-cyan-400 dark:hover:to-cyan-500 shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md text-slate-800 dark:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu with Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#071328]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-4 mt-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className={`text-2xl font-display font-bold py-2 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between ${
                    activeSection === link.id
                      ? "text-cyan-500"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={RESUME_DOWNLOAD_URL}
                download="Roja_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-bold shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                Roja J • Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
