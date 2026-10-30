import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070a] border-t border-brand-500/20 py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-bold text-white">Eyuel Ashenafi</span>
              <p className="text-xs text-gray-500">Software Engineering Student @ ASTU & Full-Stack Developer</p>
            </div>
          </div>

          {/* Social Links & Quick Copy Email */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-gray-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send Email" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/40 text-xs font-mono text-gray-300 hover:text-white transition-all active:scale-95"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-brand-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-brand-500/20 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Eyuel Ashenafi. Designed & Built with React, Vite, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
