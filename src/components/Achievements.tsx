"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Users2, ShieldCheck } from "lucide-react";

interface Achievement {
  id: string;
  badge: string;
  title: string;
  institution: string;
  category: "Award" | "Hackathon" | "Leadership";
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: "synsara-2024",
    badge: "1st Prize",
    title: "Secured 1st Prize (Technical Quiz) at Technical Symposium \"SYNSARA 2024\"",
    institution: "Sai Ram Engineering College",
    category: "Award",
    icon: <Trophy className="w-5 h-5 text-amber-500" />,
  },
  {
    id: "mini-project-expo-2025",
    badge: "1st Place & Best Project",
    title: "Won 1st Place / Best Project Award at Mini Project Expo 2025",
    institution: "SRM VEC",
    category: "Award",
    icon: <Medal className="w-5 h-5 text-cyan-500" />,
  },
  {
    id: "sih-2024",
    badge: "Hackathon & Conference",
    title:
      "Participated in Smart India Hackathon 2024 (Blockchain & Cybersecurity) and presented project work at an International Conference 2025",
    institution: "Velammal Engineering College",
    category: "Hackathon",
    icon: <ShieldCheck className="w-5 h-5 text-sky-500" />,
  },
  {
    id: "csi-leadership",
    badge: "Leadership & Editorial",
    title:
      "Serving as Limelight Editor, CSI Student Chapter; organized a technical event at the CSI Kancheepuram branch and led a mini-project team.",
    institution: "CSI Student Chapter & CSI Kancheepuram Branch",
    category: "Leadership",
    icon: <Users2 className="w-5 h-5 text-emerald-500" />,
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-36 border-t border-slate-200/50 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
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
              06 // Honors
            </span>
            <span className="h-px w-8 bg-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Achievements &amp; Leadership
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Recognitions in competitive technical symposiums, research conferences, and leadership initiatives.
          </p>
        </motion.div>

        {/* Badge Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white leading-relaxed mb-3">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  {item.institution}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
