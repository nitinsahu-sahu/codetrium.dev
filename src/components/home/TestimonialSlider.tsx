import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/agencyData';
import { SectionTitle } from '../common/SectionTitle';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Client Endorsements & Reviews"
          badgeIcon={<Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
          title="What Founders & Leaders"
          highlightText="Say About Partnering With Us"
          subtitle="Discover how Codetrium.Dev engineers mission-critical web applications, custom platforms, and mobile apps that deliver real business impact."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-750 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            {/* Top quote icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-slate-800 text-cyan-400 border border-slate-700/80">
                <Quote className="w-6 h-6" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed italic">
                  "{currentReview.content}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/30"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">
                          {currentReview.name}
                        </h4>
                        <span className="text-base" title={currentReview.country}>
                          {currentReview.countryFlag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {currentReview.role} • <span className="text-cyan-400">{currentReview.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono text-[11px]">{currentReview.projectType}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800/80">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
