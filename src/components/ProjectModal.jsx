import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#12141d] border border-brand-500/30 p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 text-left my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-brand-400">
              {project.subtitle}
            </p>
          </div>

          {/* Main Description */}
          <div className="space-y-3 text-gray-300 text-xs sm:text-base leading-relaxed">
            <p>{project.description}</p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#090a0f] border border-white/10 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <span>Key Technical Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
              <span>Technologies & Tools Used</span>
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium bg-brand-500/10 text-brand-300 border border-brand-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:from-brand-500 hover:to-brand-400 shadow-md shadow-brand-500/30 transition-all text-center"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                <span>Visit Live Vercel Demo</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-all text-center"
            >
              <Github className="w-4 h-4 flex-shrink-0" />
              <span>View Source Code on GitHub</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
