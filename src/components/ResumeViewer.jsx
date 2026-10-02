import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeViewer() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#0c0d14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Interactive Resume Breakdown
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Action Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#12141d] border border-brand-500/30 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8 text-center sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-sm font-medium text-brand-400 mt-1">{personalInfo.title} | ASTU Software Engineering</p>
              <p className="text-xs text-gray-400 mt-1">{personalInfo.location} • {personalInfo.email}</p>
            </div>

            <a
              href={personalInfo.resumePdf}
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

          {/* Quick Resume Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            <div className="p-5 rounded-2xl bg-[#090a0f] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                <Briefcase className="w-4 h-4" />
                <span>Current Internship</span>
              </div>
              <h4 className="text-base font-bold text-white">Software Engineering Intern</h4>
              <p className="text-xs text-brand-300">Omishtu Software Company (2026 – Present)</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Developing Laravel backends, RESTful APIs, Vue.js/React.js frontends, API testing, and Git pull requests.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#090a0f] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-base font-bold text-white">BSc in Software Engineering</h4>
              <p className="text-xs text-purple-300">Adama Science and Technology University (ASTU)</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Studying algorithms, system design, databases, OOP, web development, and software architecture.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#090a0f] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                <span>Deployed Live Applications</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-300">
                <li className="flex items-center justify-between">
                  <span>RecallAI (AI Flashcards)</span>
                  <a href="https://flash-gen-ai-six.vercel.app" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300 flex items-center gap-1">
                    Live Vercel <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span>WeddingPass (RSVP & QR)</span>
                  <a href="https://wedding-invitation-digital-ticket-m-pi.vercel.app" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300 flex items-center gap-1">
                    Live Vercel <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#090a0f] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Skillsets</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                JavaScript, TypeScript, Python, PHP, Java, React, Vue, Node.js, Express, Laravel, MySQL, MongoDB, Supabase, Firebase, Gemini AI, Git.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
