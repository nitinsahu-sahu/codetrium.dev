import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Network,
  Sparkles,
  Monitor,
  Check,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../data/agencyData';
import { Product } from '../types';
import { LiveDemoModal } from '../components/common/LiveDemoModal';

export const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = (prod: Product) => {
    setSelectedProduct(prod);
    setDemoModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Turnkey Pre-Built Software Engines</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading"
          >
            Commercial Products &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Ready-to-Deploy Platforms
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Accelerate time-to-market by 4 to 6 months. Acquire 100% full source code ownership for Multi-Vendor E-Commerce, MLM Matrix Systems, and AI SaaS applications.
          </motion.p>
        </div>

        {/* Product In-Depth Sections */}
        <div className="space-y-20">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id={product.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
            >
              {/* Product Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {product.category === 'ecommerce' ? (
                        <ShoppingBag className="w-5 h-5" />
                      ) : (
                        <Network className="w-5 h-5" />
                      )}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Product Suite 0{idx + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {product.name}
                  </h2>
                  <p className="text-sm font-semibold text-cyan-400 mt-1">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleOpenDemo(product)}
                    className="px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Launch Sandbox Demo</span>
                  </button>
                </div>
              </div>

              {/* Main Content & Modules */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left 7 cols: Description, Key Modules & Highlights */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Included Capabilities & Features
                    </span>
                    {product.highlightPoints.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Core Modules Bento */}
                  <div className="space-y-3 pt-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Turnkey Modules Architecture
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.keyModules.map((mod) => (
                        <div
                          key={mod.title}
                          className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800"
                        >
                          <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                            {mod.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {mod.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
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

                {/* Right 5 cols: Image preview + Pricing licenses */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Production Tested & Security Audited
                      </span>
                    </div>
                  </div>

                  {/* Pricing Tiers Preview */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Commercial License Tiers
                    </span>
                    <div className="space-y-3">
                      {product.pricing.map((tier) => (
                        <div
                          key={tier.plan}
                          className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-white">{tier.plan}</h5>
                              {tier.badge && (
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                                  {tier.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              {tier.features.length} Key Deliverables Included
                            </span>
                          </div>

                          <div className="text-right">
                            <span className="text-base font-extrabold text-cyan-400 font-mono block">
                              {tier.price}
                            </span>
                            <Link
                              to={`/contact?product=${encodeURIComponent(product.name)}&tier=${encodeURIComponent(tier.plan)}`}
                              className="text-[11px] font-bold text-slate-300 hover:text-white underline mt-0.5 block"
                            >
                              Inquire →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Whitelabel Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Need Custom Business Logic or Complete Whitelabel Branding?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our 4 engineers can customize any product to your exact compensation rules, UI design theme, or corporate ERP integrations.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?subject=Custom%20Whitelabel%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg transition-all"
            >
              <span>Discuss Custom Whitelabel Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Demo Modal */}
      <LiveDemoModal
        product={selectedProduct}
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
};
