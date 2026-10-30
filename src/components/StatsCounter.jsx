import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolioData';

export default function StatsCounter() {
  return (
    <section className="py-6 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#12141d]/60 border border-brand-500/20 backdrop-blur-md text-center hover:border-brand-500/40 transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                <span className="gradient-text">{stat.value}</span>
                <span className="text-brand-500">{stat.suffix}</span>
              </div>
              <div className="text-[11px] sm:text-sm font-medium text-gray-400 mt-1 sm:mt-2 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
