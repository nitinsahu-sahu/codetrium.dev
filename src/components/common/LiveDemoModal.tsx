import React, { useState } from 'react';
import { Modal } from './Modal';
import { Product } from '../../types';
import { Check, ExternalLink, ShieldCheck, Zap, Monitor, Lock, RefreshCw, BarChart2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveDemoModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'specs' | 'pricing'>('preview');
  const [activeRoleView, setActiveRoleView] = useState<'customer' | 'vendor' | 'admin'>('admin');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationSuccess, setSimulationSuccess] = useState(false);

  if (!product) return null;

  const handleSimulateAction = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationSuccess(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => setSimulationSuccess(false), 4000);
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${product.name} — Interactive Product Suite`}
      maxWidth="max-w-5xl"
    >
      <div className="space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-3">
          <div className="flex gap-2">
            {[
              { id: 'preview', label: 'Interactive Sandbox', icon: <Monitor className="w-4 h-4" /> },
              { id: 'specs', label: 'Tech Stack & Specs', icon: <Zap className="w-4 h-4" /> },
              { id: 'pricing', label: 'License Tiers & Source Code', icon: <Lock className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Tested Sandbox
            </span>
          </div>
        </div>

        {/* Tab 1: Interactive Sandbox */}
        {activeTab === 'preview' && (
          <div className="space-y-6">
            {/* View Selector */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Switch Role Perspective:</span>
                <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveRoleView('admin')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeRoleView === 'admin'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Super-Admin Portal
                  </button>
                  <button
                    onClick={() => setActiveRoleView('vendor')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeRoleView === 'vendor'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Merchant / Member Portal
                  </button>
                  <button
                    onClick={() => setActiveRoleView('customer')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeRoleView === 'customer'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Storefront / App View
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSimulateAction}
                  disabled={isSimulating}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white transition-all flex items-center gap-1.5 shadow cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Calculating Real-time Split...' : 'Simulate Live Transaction'}</span>
                </button>
              </div>
            </div>

            {simulationSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Transaction Simulated:</strong> $450.00 (₹37,500) processed. Instant 15% platform fee credited to Super-Admin escrow wallet, 85% auto-routed to Merchant Connect account!
                </span>
              </div>
            )}

            {/* Simulated Live UI Mock */}
            <div className="rounded-2xl border border-slate-750 bg-slate-950 overflow-hidden shadow-2xl">
              {/* Browser Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-slate-400 text-[11px] bg-slate-950 px-3 py-1 rounded border border-slate-800">
                    https://demo.{product.id}.codetrium.dev/{activeRoleView}/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Cluster: AWS Edge</span>
                </div>
              </div>

              {/* Dynamic View Mockup */}
              <div className="p-6 bg-slate-950 text-slate-100">
                {activeRoleView === 'admin' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Total Platform GMV</span>
                        <span className="text-xl font-bold text-white font-mono">$1,429,840</span>
                        <span className="text-[10px] text-emerald-400 font-semibold block mt-1">+24.8% this month</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Active Merchants / Nodes</span>
                        <span className="text-xl font-bold text-cyan-400 font-mono">1,492</span>
                        <span className="text-[10px] text-slate-400 block mt-1">99.8% uptime</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Commission Revenue</span>
                        <span className="text-xl font-bold text-indigo-400 font-mono">$214,476</span>
                        <span className="text-[10px] text-slate-400 block mt-1">Auto-split enabled</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Payout Queue</span>
                        <span className="text-xl font-bold text-emerald-400 font-mono">Instant (0s delay)</span>
                        <span className="text-[10px] text-slate-400 block mt-1">UPI + Razorpay + Stripe</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                          <BarChart2 className="w-4 h-4 text-cyan-400" />
                          Live Microservices & Transaction Feed
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">Latency: 18ms</span>
                      </div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between p-2 rounded bg-slate-950/80 border border-slate-800/80">
                          <span className="text-slate-300">ORD-94821 • Nike Air Pegasus 41</span>
                          <span className="text-slate-400">Vendor: SoleHaven</span>
                          <span className="text-emerald-400 font-bold">$160.00 (₹13,300)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-slate-950/80 border border-slate-800/80">
                          <span className="text-slate-300">ORD-94820 • Sony WH-1000XM5</span>
                          <span className="text-slate-400">Vendor: TechPulse</span>
                          <span className="text-emerald-400 font-bold">$399.00 (₹33,200)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeRoleView === 'vendor' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Merchant Storefront: SoleHaven Official</h4>
                        <p className="text-xs text-slate-400">Verified Connected Account • Instant Payouts Active</p>
                      </div>
                      <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                        Available Balance: $14,892.40 (₹12,43,000)
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[11px]">Today's Orders</span>
                        <span className="text-lg font-bold text-white font-mono">38 Orders</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[11px]">Live Products</span>
                        <span className="text-lg font-bold text-cyan-400 font-mono">142 SKUs</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-400 block text-[11px]">Seller Rating</span>
                        <span className="text-lg font-bold text-amber-400 font-mono">4.95 ★ (520 reviews)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeRoleView === 'customer' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Minimalist Leather Backpack', 'Wireless ANC Studio Headphones', 'Mechanical Ergonomic Keyboard'].map((item, i) => (
                        <div key={item} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="h-28 rounded-lg bg-slate-800 mb-2.5 flex items-center justify-center text-3xl">
                            {i === 0 ? '🎒' : i === 1 ? '🎧' : '⌨️'}
                          </div>
                          <h5 className="text-xs font-bold text-white line-clamp-1">{item}</h5>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-bold text-cyan-400 font-mono">${(i + 1) * 79}.00 (₹{((i + 1) * 79 * 83.5).toLocaleString('en-IN')})</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-600/40 text-indigo-200">In Stock</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modules Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.keyModules.map((mod) => (
                <div key={mod.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Specs */}
        {activeTab === 'specs' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Architecture & Technology Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-1">
                    {key}
                  </span>
                  <span className="text-xs text-slate-300 font-normal leading-relaxed block">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Pricing */}
        {activeTab === 'pricing' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Commercial License Options ($ USD & ₹ INR)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.pricing.map((tier) => (
                <div
                  key={tier.plan}
                  className={`p-5 rounded-2xl border flex flex-col justify-between ${
                    tier.badge === 'Most Popular' || tier.badge === 'Top Seller'
                      ? 'bg-gradient-to-b from-cyan-950/40 to-slate-900 border-cyan-400'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div>
                    {tier.badge && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
                        {tier.badge}
                      </span>
                    )}
                    <h5 className="text-base font-bold text-white">{tier.plan}</h5>
                    <div className="text-xl sm:text-2xl font-extrabold text-white my-3 font-heading font-mono">
                      {tier.price}
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 mb-6">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      window.location.href = `/contact?product=${encodeURIComponent(product.name)}&tier=${encodeURIComponent(tier.plan)}`;
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Acquire License</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs flex-wrap gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Includes 100% full source code ownership + deployment guide</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                window.location.href = `/contact?subject=Custom Demo Inquiry for ${encodeURIComponent(product.name)}`;
              }}
              className="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer"
            >
              Schedule Live Walkthrough
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
