import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, LayoutTemplate, Server, Sparkles, ShieldAlert, CheckCircle2, ArrowRight, Send } from 'lucide-react';
import { clientServices, personalInfo } from '../data/portfolioData';

export default function HireMe() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-6 h-6 text-brand-400" />;
      case 'Server': return <Server className="w-6 h-6 text-brand-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-brand-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-brand-400" />;
      default: return <Briefcase className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="hire-me" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>For Clients & Engineering Teams</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Why Work With Eyuel Ashenafi?
          </h2>
          <p className="text-gray-400 text-xs sm:text-base mt-2 sm:mt-3">
            Whether you need a full web application built from scratch, a robust API architected for your workflow, or a dedicated developer for your engineering team.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {clientServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl hover:border-brand-500/40 transition-all space-y-3 sm:space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-600/20 via-brand-500/10 to-amber-500/20 border border-brand-500/30 p-6 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              Ready to bring your software project to life?
            </h3>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              Available for full-time software engineering roles, contract work, and freelance web app development.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-wrap items-center justify-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 active:scale-95 transition-all text-center"
            >
              <Send className="w-4 h-4 flex-shrink-0" />
              <span>Start A Project / Hire Me</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
