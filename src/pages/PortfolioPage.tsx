import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Search,
  Globe2,
  ArrowRight,
  Check
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { Project, ProjectCategory } from '../types';
import { Modal } from '../components/common/Modal';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Flutter Mobile' },
    { id: 'product', label: 'Custom Products & MLM' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openCaseStudy = (proj: Project) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>50+ Successful Deployments</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading"
          >
            Featured Case Studies &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Shipped Systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Explore how we engineered high-frequency web marketplaces, telemedicine mobile apps, and binary compensation engines for international clients.
          </motion.p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech, country..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-xl group overflow-hidden"
            >
              <div>
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10] bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Country Flag & Year Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-medium border border-slate-800 flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.country}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/80 text-cyan-300 font-mono text-[11px] border border-slate-750">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Title and Short description */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 text-xs">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <span className="text-slate-400 text-[10px] block">{m.label}</span>
                      <span className="font-bold text-cyan-400 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  Client: {project.client}
                </span>

                <button
                  onClick={() => openCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <p className="text-sm text-slate-400">No case studies found matching your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedProject.title}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden  max-h-72 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Client Organization</span>
                <span className="font-bold text-white">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Country</span>
                <span className="font-bold text-cyan-400">{selectedProject.country}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Sprint Timeline</span>
                <span className="font-bold text-white">{selectedProject.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Year Delivered</span>
                <span className="font-bold text-white">{selectedProject.year}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-2">Challenge & Solution Architecture</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">Key Results & Performance Metrics</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{metric.label}</span>
                    <span className="text-lg font-bold text-cyan-400 font-mono">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-2">Core Features Engineered</h4>
              <div className="space-y-1.5">
                {selectedProject.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 text-[11px] font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to={`/contact?subject=Inquiry%20regarding%20${encodeURIComponent(selectedProject.title)}`}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  Build Similar Project
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
