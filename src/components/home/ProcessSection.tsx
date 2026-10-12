import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Palette, Code, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/agencyData';
import { SectionTitle } from '../common/SectionTitle';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Compass': return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'Code': return <Code className="w-5 h-5 text-purple-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950/70 border-t border-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Execution Methodology"
          badgeIcon={<Compass className="w-3.5 h-3.5 text-cyan-400" />}
          title="From Concept to Production in"
          highlightText="4 Agile Phases"
          subtitle="A battle-tested workflow designed for speed, transparent communication, and zero technical surprises."
          align="center"
        />

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    STEP {step.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-800">
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-1">
                  {step.title.split('&')[0]}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/90 border border-slate-750 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                    Phase {activeStep.number} of 04
                  </span>
                  <span className="text-xs text-slate-400">{activeStep.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {activeStep.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Activities checklist */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Sprint Activities
                  </span>
                  {activeStep.activities.map((act) => (
                    <div key={act} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Deliverable Box */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                    Phase Milestone Deliverable
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {activeStep.deliverable}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Each phase is signed off with direct code reviews, live demonstrations, and transparent milestone approvals.
                  </p>

                  <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-800/80">
                    <span className="text-slate-400">Direct Senior Oversight:</span>
                    <span className="text-emerald-400 font-bold">100% Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
