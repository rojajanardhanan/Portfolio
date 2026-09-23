"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Download } from "lucide-react";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1eH6WZDmrE7RipkNZj5mqTgO904w2fS4z";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open mailto link as fallback/native handler
    const mailtoUrl = `mailto:rojajanardhanan3023@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section
      id="contact"
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
              07 // Connect
            </span>
            <span className="h-px w-8 bg-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have an opportunity, collaboration, or question? Feel free to reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Cards & Direct Resume */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:rojajanardhanan3023@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    rojajanardhanan3023@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:9150543023"
                className="group flex items-center gap-4 p-5 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    +91 9150543023
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm backdrop-blur-sm">
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                    Chennai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Repeated Download Resume CTA */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0B1E3F] to-[#1F3864] text-white shadow-xl">
              <h3 className="font-display font-bold text-lg mb-1">
                Need a copy of my resume?
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Download the official PDF with complete academic and technical details.
              </p>
              <a
                href={RESUME_DOWNLOAD_URL}
                download="Roja_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Roja, I would love to connect regarding..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0B1E3F] to-[#1F3864] hover:from-[#132A54] hover:to-[#2B4B82] dark:from-cyan-400 dark:to-cyan-500 dark:hover:from-cyan-300 dark:hover:to-cyan-400 text-white dark:text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Opening Mail Client...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
