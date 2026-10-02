import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Full-Stack', 'Full-Stack', 'Mobile', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter) || (filter === 'AI & Full-Stack' && p.category.includes('AI')));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0c0d14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Projects & Live Deployments
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Showcasing real-world full-stack web applications, live Vercel deployments, mobile applications, and AI integrations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'bg-[#12141d] text-gray-400 border border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#12141d] border border-brand-500/20 overflow-hidden flex flex-col justify-between hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              {/* Card Header & Badge */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {project.category}
                  </span>
                  
                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live App
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-gray-500">{project.date}</span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-300 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-brand-500/10 text-brand-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#090a0f]/60 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1 group/btn"
                >
                  <span>Quick Specs & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-brand-500/10 hover:bg-brand-500 text-brand-400 hover:text-white transition-colors"
                      title="Visit Live Vercel Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                    title="View GitHub Source"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal viewer */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
