"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative p-2.5 rounded-full border border-slate-300/40 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 backdrop-blur-md hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-4 h-4 text-amber-300" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-4 h-4 text-cyan-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
