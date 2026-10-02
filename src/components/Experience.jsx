import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { workExperience, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0c0d14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-brand-500/30">
              {workExperience.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-6 rounded-2xl bg-[#12141d] border border-brand-500/20 backdrop-blur-md hover:border-brand-500/40 transition-all space-y-4"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-brand-500 border-4 border-[#090a0f]" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm font-semibold text-brand-400 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300">{exp.description}</p>

                  <ul className="space-y-2 text-xs text-gray-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Educational Background</span>
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-purple-500/30">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-6 rounded-2xl bg-[#12141d] border border-purple-500/20 backdrop-blur-md hover:border-purple-500/40 transition-all space-y-4"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#090a0f]" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-purple-400 flex items-center gap-1.5 mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{edu.institution}</span>
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
