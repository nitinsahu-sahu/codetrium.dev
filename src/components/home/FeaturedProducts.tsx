import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Network,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react';
import { PRODUCTS } from '../../data/agencyData';
import { Product } from '../../types';
import { SectionTitle } from '../common/SectionTitle';
import { LiveDemoModal } from '../common/LiveDemoModal';

export const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openDemo = (prod: Product) => {
    setSelectedProduct(prod);
    setDemoModalOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950/60 border-t border-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Turnkey Custom Platforms"
          badgeIcon={<Zap className="w-3.5 h-3.5 text-cyan-400" />}
          title="Battle-Tested Platforms Ready to"
          highlightText="Deploy & Custom Brand"
          subtitle="Save 4-6 months of development. Fully customizable source code with zero ongoing royalties or vendor lock-in."
          align="center"
        />

        <div className="space-y-16">
          {PRODUCTS.slice(0, 2).map((product, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
              >
                {/* Background decorative glow */}
                <div
                  className={`absolute -top-24 ${
                    isReversed ? '-left-24' : '-right-24'
                  } w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none`}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {product.category === 'ecommerce' ? (
                          <ShoppingBag className="w-4 h-4" />
                        ) : (
                          <Network className="w-4 h-4" />
                        )}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                        {product.category === 'ecommerce' ? 'Multi-Vendor Marketplace Engine' : 'High-Concurrency Network Engine'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-cyan-400 mt-1">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2.5">
                      {product.highlightPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        to="/services"
                        className="px-4 py-3 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Custom Development Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Screenshot / Mockup Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-750 shadow-2xl bg-slate-950">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                              Source Code License
                            </span>
                            <span className="text-sm font-bold text-white">
                              Includes 100% Full Repo & Mobile App
                            </span>
                          </div>

                          <button
                            onClick={() => openDemo(product)}
                            className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:scale-110 transition-transform shadow-md cursor-pointer"
                            title="Open Sandbox"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore all solutions banner */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-slate-900 to-slate-850 hover:bg-slate-800 text-cyan-300 border border-slate-750 hover:border-cyan-500/40 transition-all shadow-lg"
          >
            <span>Explore All Engineering Solutions & Modules</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Demo Modal */}
      <LiveDemoModal
        product={selectedProduct}
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </section>
  );
};
