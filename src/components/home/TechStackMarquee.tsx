import React from 'react';
import { TECH_STACK } from '../../data/agencyData';
import { Layers } from 'lucide-react';

export const TechStackMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950/80 border-y border-slate-850 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
          <Layers className="w-3.5 h-3.5" />
          <span>Full-Spectrum Technology Stack</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Engineered with Modern, Battle-Tested Technologies
        </h3>
      </div>

      {/* Single Slow Marquee Row */}
      <div className="flex overflow-hidden select-none py-2">
        <div className="animate-marquee-slow flex items-center gap-4 py-2">
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <TechBadge key={`${tech.name}-marquee-${idx}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechBadge: React.FC<{ tech: (typeof TECH_STACK)[0] }> = ({ tech }) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all duration-200 shadow-md group cursor-default">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs"
        style={{
          backgroundColor: `${tech.color}15`,
          color: tech.color,
          border: `1px solid ${tech.color}40`,
        }}
      >
        {tech.name.substring(0, 2).toUpperCase()}
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
          {tech.category}
        </span>
      </div>
    </div>
  );
};
