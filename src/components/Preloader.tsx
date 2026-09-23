"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#071328] text-white"
        >
          {/* Ambient glow behind monogram */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse" />

          {/* Monogram "RJ" */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative text-6xl md:text-7xl font-extrabold tracking-tighter font-display select-none">
              <span className="text-white">R</span>
              <span className="bg-gradient-to-r from-cyan-400 to-amber-300 bg-clip-text text-transparent">
                J
              </span>
            </div>
            {/* Glowing dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00D9FF]"
            />
          </motion.div>

          {/* Elegant progress line */}
          <div className="mt-8 w-44 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-amber-400"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-xs font-mono tracking-widest text-slate-400 uppercase"
          >
            ROJA J • PORTFOLIO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
