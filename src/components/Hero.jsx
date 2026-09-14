import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#0b0f19] pt-16 pb-12">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12">
        {/* Left Main Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start lg:col-span-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR SELECT OPPORTUNITIES</span>
            <span className="text-slate-500">/ 2026</span>
          </div>

          {/* Balanced Refined Typography */}
          <h1 className="mb-6 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            Frontend Engineer specializing in{' '}
            <span className="italic font-serif font-normal bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              React, Redux Toolkit,
            </span>{' '}
            and Modern UI/UX Architecture.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            I build high-performance, accessible, and visual web applications with clean code standards and seamless developer experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923320432812"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Right Architectural Quote Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl relative group hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-4">
              <Terminal className="w-4 h-4" />
              <span>design_philosophy.ts</span>
            </div>

            <blockquote className="text-slate-300 text-sm italic leading-relaxed mb-4">
              "Good design is as little design as possible. Less, but better - because it concentrates on the essential aspects."
            </blockquote>

            <p className="text-xs text-slate-500 font-medium">
              - Dieter Rams, <span className="text-slate-400">Useful North Star</span>
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Pixel-Perfect UI
              </span>
              <span>Islamabad, PK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}