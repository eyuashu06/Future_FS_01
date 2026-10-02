import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Send, Sparkles, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "React & Node.js Engineer",
    "Laravel & Vue.js Specialist",
    "Google Gemini AI Integrator",
    "Software Engineering Student @ ASTU"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow background spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-semibold tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <div className="h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200">
                <span className="text-brand-500 mr-2">&gt;</span>
                <span className="font-mono text-brand-400">{displayText}</span>
                <span className="animate-pulse text-brand-500 font-normal">|</span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Software Engineering Student at <strong className="text-white">ASTU</strong> & Intern at <strong className="text-white">Omishtu Software Company</strong>. I build scalable, high-performance web applications with React, Vue, Node.js, Express, Laravel, SQL/NoSQL databases, and Gemini AI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:from-brand-500 hover:to-brand-400 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#12141d] text-white border border-brand-500/30 hover:border-brand-500 hover:bg-brand-500/10 transition-all"
              >
                <Send className="w-4 h-4 text-brand-400" />
                <span>Hire Me</span>
              </a>

              <a
                href={personalInfo.resumePdf}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-gray-400">
              <span className="text-xs font-mono tracking-wider uppercase text-gray-500">Connect:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/30 via-transparent to-amber-500/20 blur-xl animate-pulse-slow" />
              
              {/* Card Window */}
              <div className="relative rounded-3xl bg-[#12141d]/90 border border-brand-500/30 p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">developer-profile.ts</span>
                </div>

                {/* Profile snippet */}
                <div className="space-y-4 font-mono text-xs text-gray-300">
                  <div className="p-4 rounded-xl bg-[#090a0f] border border-white/5 space-y-2">
                    <p className="text-purple-400">const <span className="text-yellow-300">developer</span> = &#123;</p>
                    <p className="pl-4 text-gray-300">name: <span className="text-green-400">"{personalInfo.name}"</span>,</p>
                    <p className="pl-4 text-gray-300">university: <span className="text-green-400">"ASTU Software Eng"</span>,</p>
                    <p className="pl-4 text-gray-300">internship: <span className="text-green-400">"Omishtu Software"</span>,</p>
                    <p className="pl-4 text-gray-300">stack: [<span className="text-orange-400">"React"</span>, <span className="text-orange-400">"Vue"</span>, <span className="text-orange-400">"Node"</span>, <span className="text-orange-400">"Laravel"</span>],</p>
                    <p className="pl-4 text-gray-300">aiIntegration: <span className="text-blue-400">"Google Gemini API"</span>,</p>
                    <p className="pl-4 text-gray-300">availableForHire: <span className="text-brand-400">true</span></p>
                    <p className="text-purple-400">&#125;;</p>
                  </div>
                </div>

                {/* Highlights pill grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    <span>Full-Stack Ready</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>2 Live Vercel Apps</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Gemini AI Dev</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    <Terminal className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>REST & Auth APIs</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
