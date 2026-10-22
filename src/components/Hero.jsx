import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Sparkles, Terminal } from 'lucide-react';

const specialties = ['React', 'Redux Toolkit', 'Modern UI/UX Architecture'];

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [typedSpecialty, setTypedSpecialty] = useState(() => (
    prefersReducedMotion ? specialties[0] : ''
  ));
  const [isDeleting, setIsDeleting] = useState(false);
  const displayedSpecialty = prefersReducedMotion ? specialties[0] : typedSpecialty;

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = (event) => setPrefersReducedMotion(event.matches);
    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const specialty = specialties[specialtyIndex];
    let timeout;

    if (!isDeleting && typedSpecialty === specialty) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedSpecialty === '') {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setSpecialtyIndex((current) => (current + 1) % specialties.length);
      }, 250);
    } else {
      timeout = window.setTimeout(() => {
        setTypedSpecialty((current) => (
          isDeleting ? current.slice(0, -1) : specialty.slice(0, current.length + 1)
        ));
      }, isDeleting ? 42 : 88);
    }

    return () => window.clearTimeout(timeout);
  }, [isDeleting, prefersReducedMotion, specialtyIndex, typedSpecialty]);

  return (
    <section className="hero relative flex items-center justify-center overflow-hidden bg-[#0b0f19]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="hero-grid relative z-10 mx-auto grid w-full max-w-6xl items-center px-6">
        {/* Left Main Pitch */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="hero-status inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR SELECT OPPORTUNITIES</span>
            <span className="text-slate-500">/ 2026</span>
          </div>

          <h1 className="hero-title font-bold tracking-tight text-white">
            Frontend Engineer<span className="hero-title-accent"> crafting modern digital experiences.</span>
          </h1>

          <p className="hero-specialty" aria-label="Specialties include React, Redux Toolkit, and Modern UI/UX Architecture">
            I specialize in{' '}
            <span className="hero-specialty-text" aria-hidden="true">
              {displayedSpecialty}
              <span className="hero-type-caret" />
            </span>
          </p>

          <p className="hero-description text-slate-400 max-w-2xl leading-relaxed">
            I build high-performance, accessible, and visual web applications with clean code standards and seamless developer experiences.
          </p>

          {/* CTAs */}
          <div className="hero-actions flex flex-wrap items-center">
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
          initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-quote"
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

            <div className="hero-quote-meta mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
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