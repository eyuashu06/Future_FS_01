import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Database, Globe, Sparkles, Terminal, Flame, ShieldCheck, Zap, Layers, Smartphone, Layout, Coffee, Table, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(-1); // -1 for All

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Languages': return <Code2 className="w-4 h-4" />;
      case 'Frontend Development': return <Layout className="w-4 h-4" />;
      case 'Backend & APIs': return <Cpu className="w-4 h-4" />;
      case 'Databases & Security': return <Database className="w-4 h-4" />;
      case 'AI & Tools': return <Sparkles className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Table': return <Table className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const displayedSkills = activeCategory === -1
    ? skillCategories.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
    : skillCategories[activeCategory].skills.map((s) => ({ ...s, category: skillCategories[activeCategory].category }));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Tech Stack Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            A comprehensive overview of programming languages, frameworks, and engineering tools applied across production projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(-1)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === -1
                ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                : 'bg-[#12141d] text-gray-400 border border-white/10 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>All Technologies</span>
          </button>

          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-[#12141d] text-gray-400 border border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Modern Tech Cloud / Pill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {displayedSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-4 rounded-xl bg-[#12141d]/80 border border-brand-500/20 hover:border-brand-500/50 hover:bg-brand-500/5 backdrop-blur-xl transition-all duration-200 group flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-500/10 border border-brand-500/25 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:text-brand-300 transition-all">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-sm sm:text-base tracking-tight truncate group-hover:text-brand-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate mt-0.5">
                      {skill.tag}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300 group-hover:border-brand-500/30 group-hover:text-brand-300 group-hover:bg-brand-500/10 transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Verified</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
