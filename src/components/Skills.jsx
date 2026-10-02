import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Globe, Sparkles, Terminal, Flame, ShieldCheck, Zap, Layers, Smartphone, Layout, Coffee, Table } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Languages': return <Code2 className="w-4 h-4" />;
      case 'Frontend Development': return <Layout className="w-4 h-4" />;
      case 'Backend & APIs': return <Cpu className="w-4 h-4" />;
      case 'Databases & Security': return <Database className="w-4 h-4" />;
      case 'AI & Tools': return <Sparkles className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

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
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl hover:border-brand-500/40 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white text-base group-hover:text-brand-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-brand-400">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-amber-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
