import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TechStackMarquee } from '../components/home/TechStackMarquee';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CTASection } from '../components/home/CTASection';
// import { ProjectCostCalculator } from '../components/common/ProjectCostCalculator';
// import { SectionTitle } from '../components/common/SectionTitle';
// import { Calculator } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Hero Section with Stats */}
      <HeroSection />

      {/* 2. Tech Stack Marquee (Single Slow Row) */}
      <TechStackMarquee />

      {/* 3. Services Preview */}
      <ServicesPreview />

      {/* 
        ===================================================================
        4. Interactive Scope & Cost Calculator Section (COMMENTED OUT AS REQUESTED)
        ===================================================================
        <section className="py-20 lg:py-28 bg-slate-950/80 border-t border-slate-850 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              badge="Instant Estimation Tool"
              badgeIcon={<Calculator className="w-3.5 h-3.5 text-cyan-400" />}
              title="Calculate Your Project"
              highlightText="Scope & Investment"
              subtitle="Configure your stack, features, and desired delivery speed. Receive a transparent ballpark estimate in real-time."
              align="center"
            />
            <ProjectCostCalculator />
          </div>
        </section>
      */}

      {/* 5. Flagship Products / Software Showcase */}
      <FeaturedProducts />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Process & Methodology */}
      <ProcessSection />

      {/* 8. Testimonials Carousel */}
      <TestimonialSlider />

      {/* 9. Final CTA Banner */}
      <CTASection />
    </div>
  );
};
