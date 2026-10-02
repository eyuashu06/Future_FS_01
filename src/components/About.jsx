import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, Building2, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering High-Performance Web & AI Solutions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-brand-500" />
                <span>Who I Am</span>
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am <strong className="text-white font-semibold">Eyuel Ashenafi</strong>, a passionate Software Engineering student at <strong className="text-brand-400 font-semibold">Adama Science and Technology University (ASTU)</strong> and Software Engineering Intern at <strong className="text-brand-400 font-semibold">Omishtu Software Company</strong>.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My engineering focus spans full-stack architecture—combining dynamic React 19 / Vue.js frontends with robust Node.js / Laravel backends, normalized SQL/NoSQL databases, security standards (JWT, Sanctum, RLS), and intelligent AI capabilities via the Google Gemini API.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>End-to-End Full-Stack Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Google Gemini AI Integration</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Secure Auth & RLS Policies</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Professional Git Workflows</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-2xl bg-[#12141d]/60 border border-brand-500/20 backdrop-blur-md hover:border-brand-500/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Omishtu Intern</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Developing full-stack features, Laravel REST APIs, and React/Vue interfaces in active team sprints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/60 border border-brand-500/20 backdrop-blur-md hover:border-brand-500/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">ASTU Engineering</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Adama Science and Technology University Software Engineering degree with strong CS foundations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/60 border border-brand-500/20 backdrop-blur-md hover:border-brand-500/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Live Vercel Apps</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                RecallAI (Flashcards) & WeddingPass live in production with real user authentication and cloud databases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/60 border border-brand-500/20 backdrop-blur-md hover:border-brand-500/40 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Client Focused</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Ready to transform business ideas into robust, secure, production-tested software systems.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
