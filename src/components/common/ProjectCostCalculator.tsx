import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../../data/agencyData';

interface ProjectTypeOption {
  id: string;
  name: string;
  baseCost: number;
  baseWeeks: number;
  desc: string;
  icon: string;
}

interface FeatureOption {
  id: string;
  name: string;
  cost: number;
  weeks: number;
  desc: string;
}

const USD_TO_INR = 83.5;

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'web-saas',
    name: 'Custom Web App / SaaS',
    baseCost: 2200,
    baseWeeks: 3,
    desc: 'Next.js 15, Node.js backend, auth, database & modern dashboard',
    icon: '💻'
  },
  {
    id: 'multivendor-ecom',
    name: 'Multi-Vendor Marketplace',
    baseCost: 2899,
    baseWeeks: 4,
    desc: 'Multi-merchant portals, Stripe/Razorpay Connect splits & inventory engine',
    icon: '🛍️'
  },
  {
    id: 'mlm-binary',
    name: 'MLM & Network Platform',
    baseCost: 3200,
    baseWeeks: 4,
    desc: 'Binary / Matrix logic, interactive genealogy tree & crypto/bank e-wallet',
    icon: '⚡'
  },
  {
    id: 'flutter-mobile',
    name: 'Flutter Mobile App (iOS + Android)',
    baseCost: 2400,
    baseWeeks: 3,
    desc: 'Native-grade 60fps app, push alerts, offline sync & store release',
    icon: '📱'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    baseCost: 1200,
    baseWeeks: 1,
    desc: 'AWS ECS / Docker containerization, CI/CD pipelines & monitoring',
    icon: '☁️'
  }
];

const ADDONS: FeatureOption[] = [
  {
    id: 'custom-figma',
    name: 'Bespoke UI/UX Figma Design',
    cost: 650,
    weeks: 1,
    desc: 'Tailored design system, interactive wireframes & components'
  },
  {
    id: 'mobile-flutter-addon',
    name: 'Flutter Companion App (iOS/Android)',
    cost: 1600,
    weeks: 2,
    desc: 'Synchronized cross-platform mobile app connected to your API'
  },
  {
    id: 'ai-integration',
    name: 'AI Agent & LLM Integration',
    cost: 800,
    weeks: 1,
    desc: 'OpenAI / Claude API functions, smart assistants & embeddings'
  },
  {
    id: 'advanced-payments',
    name: 'Multi-Gateway & Crypto Payouts',
    cost: 700,
    weeks: 0.5,
    desc: 'Razorpay, Stripe Connect, USDT / Crypto & automated tax rules'
  },
  {
    id: 'enterprise-security',
    name: 'Enterprise Security & Audit',
    cost: 500,
    weeks: 0.5,
    desc: 'Penetration testing, rate limiting, DDoS shield & compliance'
  }
];

export const ProjectCostCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('multivendor-ecom');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['custom-figma', 'advanced-payments']);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'fast' | 'urgent'>('standard');

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const addonsCost = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.cost : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.weeks : 0);
  }, 0);

  let speedMultiplier = 1;
  let timelineLabel = 'Standard Pace';
  if (timelineSpeed === 'fast') {
    speedMultiplier = 1.15;
    timelineLabel = 'Fast-Track Sprint (+15%)';
  } else if (timelineSpeed === 'urgent') {
    speedMultiplier = 1.35;
    timelineLabel = 'Emergency Rush (+35%)';
  }

  const rawTotal = (currentType.baseCost + addonsCost) * speedMultiplier;
  const rawWeeks = Math.max(1, Math.ceil((currentType.baseWeeks + addonsWeeks) * (timelineSpeed === 'urgent' ? 0.6 : timelineSpeed === 'fast' ? 0.8 : 1)));

  const minEstimateUSD = Math.round((rawTotal * 0.95) / 50) * 50;
  const maxEstimateUSD = Math.round((rawTotal * 1.1) / 50) * 50;

  const minEstimateINR = Math.round((minEstimateUSD * USD_TO_INR) / 1000) * 1000;
  const maxEstimateINR = Math.round((maxEstimateUSD * USD_TO_INR) / 1000) * 1000;

  const handleProceedToContact = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00D4FF', '#6366F1', '#10B981']
    });

    const params = new URLSearchParams({
      type: currentType.name,
      budget: `$${minEstimateUSD.toLocaleString()} - $${maxEstimateUSD.toLocaleString()} / ₹${minEstimateINR.toLocaleString('en-IN')} - ₹${maxEstimateINR.toLocaleString('en-IN')}`,
      timeline: `${rawWeeks} Weeks (${timelineLabel})`,
      addons: selectedAddons.join(', ')
    });

    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="w-full bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Calculate Your Project Scope & Investment
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Get instant ballpark pricing ($ USD & ₹ INR) with 100% direct senior engineer delivery.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Fixed Milestone Pricing • No Hidden Fees</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Configuration Steps */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              1. Select Project Foundation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                const inrCost = Math.round((type.baseCost * USD_TO_INR) / 1000) * 1000;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-br from-cyan-950/40 to-slate-900 border-cyan-400 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-800/40 border-slate-750 hover:border-slate-600 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{type.icon}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono">
                        ${type.baseCost} / ₹{inrCost.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {type.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {type.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Addons */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              2. Optional Custom Modules & Features
            </label>
            <div className="space-y-2.5">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                const inrAddon = Math.round((addon.cost * USD_TO_INR) / 500) * 500;
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? 'bg-indigo-950/30 border-indigo-400/80 text-white'
                        : 'bg-slate-800/30 border-slate-750 text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'border-slate-600 bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="text-sm font-semibold block text-slate-100">
                          {addon.name}
                        </span>
                        <span className="text-xs text-slate-400 block">
                          {addon.desc}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-300 whitespace-nowrap pl-2">
                      +${addon.cost} (₹{inrAddon.toLocaleString('en-IN')})
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed / Timeline preference */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              3. Desired Speed & Priority
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'standard', label: 'Standard Pace', desc: 'Standard sprints' },
                { id: 'fast', label: 'Fast-Track', desc: 'Priority queue' },
                { id: 'urgent', label: 'Rush Sprint', desc: 'Dedicated focus' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setTimelineSpeed(tier.id as any)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    timelineSpeed === tier.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-xs sm:text-sm block">{tier.label}</span>
                  <span className="text-[11px] text-slate-400 font-normal block">{tier.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Instant Estimate Breakdown Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-750 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-750">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Estimated Investment
              </span>
              <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3 h-3" /> Ready in Q2/Q3
              </span>
            </div>

            <div className="my-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-white font-heading">
                ${minEstimateUSD.toLocaleString()} – ${maxEstimateUSD.toLocaleString()}
              </div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-1">
                ≈ ₹{minEstimateINR.toLocaleString('en-IN')} – ₹{maxEstimateINR.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Estimated investment (Milestone-based delivery in USD / INR)
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Estimated Timeline:
                </span>
                <span className="font-bold text-white">{rawWeeks} - {rawWeeks + 1} Weeks</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Engineers Assigned:</span>
                <span className="font-bold text-cyan-400">Dedicated Senior Leads</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Code Ownership:</span>
                <span className="font-bold text-emerald-400">100% Full IP Transfer</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Free Warranty Support:</span>
                <span className="font-bold text-white">60 Days Included</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleProceedToContact}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Custom Milestone Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <button
                type="button"
                onClick={() => {
                  window.open(
                    `https://wa.me/919111118326?text=${encodeURIComponent(
                      `Hi Codetrium.Dev! I am interested in building a ${currentType.name} with estimated scope ~$${minEstimateUSD} (₹${minEstimateINR}). Can we chat?`
                    )}`,
                    '_blank'
                  );
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss Directly via WhatsApp: {AGENCY_INFO.whatsapp}</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500 mt-4">
              🛡️ No spam. You will speak directly with our senior developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
