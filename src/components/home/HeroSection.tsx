import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Terminal,
  CheckCircle2,
  Briefcase,
  Copy,
  Check
} from 'lucide-react';
import { StatsCounter } from '../common/StatsCounter';

export const HeroSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'deployment' | 'features'>('architecture');

  const codeSnippets = {
    architecture: `// Codetrium.Dev High-Throughput Cluster Architecture
import { CodetriumEngine, StripeConnect, RazorpayRoute } from '@codetrium/core';

export async function bootstrapPlatform() {
  const engine = new CodetriumEngine({
    team: ['AlexChen', 'MarcusVance', 'ElenaRostova', 'DavidKumar'],
    concurrency: '100,000+ req/sec',
    database: 'PostgreSQL + Redis Cache Layer',
    mobile: 'Flutter 60fps Native Bridge',
    codeOwnership: '100% Client Full IP'
  });

  await engine.deployWithZeroDowntime();
  return { status: 'ONLINE_200_OK', responseSLA: '< 2 hours' };
}`,
    deployment: `# Deploy to AWS ECS with Zero-Downtime Rollout
$ git push origin main
✓ Running 148 automated unit & integration tests... PASSED
✓ Building optimized Next.js 15 SSR Docker image... (12.4s)
✓ Migrating PostgreSQL database schemas... SUCCESS
✓ Syncing Redis cache cluster & Edge CDN... COMPLETED
🚀 Deployed to AWS us-east-1 | Health: 100% (Response: 24ms)`,
    features: `// Flagship Multi-Vendor & MLM Compensation Rules
const platform = {
  solutions: ['Multi-Vendor E-Commerce', 'Enterprise MLM & Binary'],
  features: {
    paymentSplits: 'Instant Escrow Routing (Stripe / Razorpay)',
    genealogyTree: 'Interactive D3.js SVG Visualizer',
    cryptoRails: 'USDT TRC-20 & ERC-20 Auto-Withdrawals',
    mobileSync: 'iOS + Android Flutter Companion'
  }
};`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900/90 border border-cyan-500/30 text-cyan-300 shadow-md backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-cyan-400 font-bold">CODETRIUM.DEV STUDIO</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Elite Full-Stack Developers</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-heading"
            >
              We Build World-Class{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                Custom Platforms & Web Apps
              </span>{' '}
              That Scale Globally.
            </motion.h1>

            {/* Subheadline without '4' */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Codetrium.Dev is a dedicated engineering team that turns complex business requirements into high-performing Multi-Vendor E-Commerce, MLM Software, Flutter Mobile Apps, and Enterprise SaaS platforms.
            </motion.p>

            {/* Core Value Micro-Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-300"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Direct Senior Dev Access
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                100% Full Code Ownership
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Under 2-Hour Response SLA
              </span>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
              >
                <span>Hire Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-750 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Explore Shipped Work</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Terminal & Live Engine Preview (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-750 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    codetrium-cluster.ts
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/60 px-2 pt-1 gap-1">
                {(['architecture', 'deployment', 'features'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono font-medium rounded-t-lg transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'bg-slate-900 text-cyan-300 border-t border-x border-slate-750'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab === 'architecture' ? 'Architecture' : tab === 'deployment' ? 'Deploy (AWS)' : 'Logic Modules'}
                  </button>
                ))}
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto text-slate-300 min-h-[260px] bg-slate-950/95 leading-relaxed selection:bg-cyan-500/30">
                <pre className="whitespace-pre">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Active Developer Pod Status Footer without "4" */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-[10px] font-bold flex items-center justify-center text-white ring-2 ring-slate-900" title="Alex Chen (Frontend Lead)">AC</span>
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-[10px] font-bold flex items-center justify-center text-white ring-2 ring-slate-900" title="Marcus Vance (Backend Lead)">MV</span>
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-[10px] font-bold flex items-center justify-center text-white ring-2 ring-slate-900" title="Elena Rostova (Mobile Lead)">ER</span>
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-[10px] font-bold flex items-center justify-center text-white ring-2 ring-slate-900" title="David Kumar (Systems Lead)">DK</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Core Engineering Pod Active</span>
                </div>
                
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  Sprint Velocity: 98%
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Counter Section below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <StatsCounter />
        </div>
      </div>
    </section>
  );
};
