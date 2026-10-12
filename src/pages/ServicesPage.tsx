import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Server,
  Smartphone,
  ShoppingBag,
  Network,
  Cloud,
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SERVICES, FAQS } from '../data/agencyData';
import { SectionTitle } from '../components/common/SectionTitle';

export const ServicesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Server': return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Cycle IT & Custom Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading"
          >
            Engineering Services Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Maximum Impact & Speed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Whether you need a custom multi-vendor marketplace, complex MLM logic, a high-converting Next.js web application, or a cross-platform Flutter app—our developers deliver end-to-end.
          </motion.p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              id={service.slug}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Overview & Features */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                        Service Domain 0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Architectural Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Technologies Utilized
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Deliverables, Timeline & CTA (Range show removed as requested) */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Estimated Timeline</span>
                        <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          {service.timeline}
                        </span>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Dedicated Sprint
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-300 block mb-2">
                        Guaranteed Package Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-400">
                        {service.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">✓</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Request Milestone Quote for {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Includes 60-day post-launch warranty support</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <SectionTitle
            badge="Common Questions"
            badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-cyan-400" />}
            title="Frequently Asked"
            highlightText="Questions"
            subtitle="Everything you need to know about our engagement model, source code ownership, and timelines."
            align="center"
          />

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
