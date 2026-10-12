import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../data/agencyData';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: 'Standard (3 - 5 Weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Pre-fill from URL params
  useEffect(() => {
    const typeParam = searchParams.get('type') || searchParams.get('product') || searchParams.get('service');
    const budgetParam = searchParams.get('budget') || searchParams.get('tier');
    const timelineParam = searchParams.get('timeline');
    const devParam = searchParams.get('dev');
    const subjectParam = searchParams.get('subject');

    setFormData((prev) => ({
      ...prev,
      projectType: typeParam || prev.projectType,
      budget: budgetParam || prev.budget,
      timeline: timelineParam || prev.timeline,
      message: devParam
        ? `Hi Codetrium.Dev! I would like to schedule a 1:1 technical discovery session with ${devParam}.`
        : subjectParam
        ? `Regarding ${subjectParam}: `
        : prev.message,
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00D4FF', '#6366F1', '#10B981']
      });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(AGENCY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Direct Developer Consultation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading"
          >
            Let's Talk Architecture, Scope &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Timelines
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            No sales gatekeepers or aggressive account reps. You will connect directly with our senior engineers within 2 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Guarantee Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Options */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-6 backdrop-blur-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Instant Contact Channels
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Choose the fastest method to reach our engineering pod.
                </p>
              </div>

              <div className="space-y-3">
                {/* WhatsApp with 9111118326 */}
                <a
                  href={`https://wa.me/919111118326?text=${encodeURIComponent(
                    `Hi Codetrium.Dev! I want to discuss a ${formData.projectType} project.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">WhatsApp Direct Chat</span>
                      <span className="text-[11px] text-slate-400 font-mono">{AGENCY_INFO.whatsapp}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Chat Now →
                  </span>
                </a>

                {/* Email */}
                <div
                  onClick={copyEmail}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Official Email</span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {copiedEmail ? 'Copied to Clipboard! ✓' : AGENCY_INFO.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Copy →
                  </span>
                </div>
              </div>

              {/* Service Level Agreement */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    2-Hour SLA Response Guarantee
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  During business hours (across India, US, UK, and Singapore timezones), our engineers review technical scopes and respond with architectural suggestions within 120 minutes.
                </p>
              </div>

              {/* NDA & Security info */}
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard mutual NDA provided prior to technical specification handoff.</span>
              </div>
            </div>

            {/* Timezone and Office Presence */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-xs space-y-3">
              <span className="font-bold text-white uppercase font-mono tracking-wider text-[11px] block">
                Timezone Availability Coverage
              </span>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>India Standard Time (IST):</span>
                  <span className="font-mono text-emerald-400">09:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>London / Berlin (GMT/CET):</span>
                  <span className="font-mono text-indigo-400">08:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>San Francisco (PST):</span>
                  <span className="font-mono text-cyan-400">08:00 - 18:00</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-750 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Request Technical Scope & Proposal
                    </h3>
                    <span className="text-xs text-cyan-400 font-mono">Fixed Milestone ($ & ₹)</span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nexus Ventures"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        WhatsApp / Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 91111 18326"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget (Now as text inputs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Project Foundation / Requirement
                      </label>
                      <input
                        type="text"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="e.g., Multi-Vendor Marketplace"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Target Budget Range ($ USD / ₹ INR)
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $3,000 - $6,000 / ₹2,50,000 - ₹5,00,000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Project Goals & Technical Requirements <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target users, key integrations (Stripe, Razorpay, Crypto, Webhooks), timeline constraints, and any existing repos or mockups..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Directly to Engineers...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Request (Under 2-Hour Response SLA)</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    🔒 We respect your privacy. All details are kept strictly confidential under mutual NDA.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Request Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your project specifications have been sent directly to our lead engineers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                    <span className="font-bold text-cyan-400 uppercase font-mono block text-[11px]">
                      Next Steps Summary
                    </span>
                    <p className="text-slate-300">
                      1. We are analyzing your requirements for <strong>{formData.projectType}</strong>.
                    </p>
                    <p className="text-slate-300">
                      2. We will reply to <strong>{formData.email}</strong> within 2 hours with our preliminary architecture blueprint & milestone breakdown.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          projectType: 'Multi-Vendor Marketplace',
                          budget: '$3,000 - $6,000 / ₹2,50,000 - ₹5,00,000',
                          timeline: 'Standard (3 - 5 Weeks)',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};