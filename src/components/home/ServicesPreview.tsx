import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Server,
  Smartphone,
  ShoppingBag,
  Network,
  Cloud,
  ArrowRight,
  Check,
  Sparkles,
  Zap
} from 'lucide-react';
import { SERVICES } from '../../data/agencyData';
import { SectionTitle } from '../common/SectionTitle';

export const ServicesPreview: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="What We Build"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
          title="Full-Stack Engineering &"
          highlightText="Specialized Solutions"
          subtitle="From custom web portals and Flutter mobile apps to multi-vendor marketplaces and complex MLM compensation engines."
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 backdrop-blur-xl overflow-hidden"
            >
              {/* Subtle accent hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header with Icon and Popular Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 group-hover:border-cyan-500/30 group-hover:bg-slate-800 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-mono">
                      High Demand
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Timeline</span>
                  <span className="text-xs font-semibold text-slate-200">{service.timeline}</span>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group/link transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-850 text-cyan-300 border border-slate-750 hover:border-cyan-500/40 transition-all shadow-md"
          >
            <span>View All Engineering Deliverables & Workflows</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
