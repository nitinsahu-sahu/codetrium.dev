import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Code2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agencyData';
import { SectionTitle } from '../components/common/SectionTitle';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
          >
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Team Behind Codetrium.Dev</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading"
          >
            Our Dedicated Engineers.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Zero Junior Hand-offs.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            We built Codetrium.Dev on a simple premise: companies don't need layers of non-technical bureaucracy. They need elite software engineers who can take complex logic and ship flawless production software.
          </motion.p>
        </div>

        {/* 2. Our Story & Manifesto Section */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Our Genesis & Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Why We Chose Our Senior Studio Model
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Before founding Codetrium.Dev, our team members spent years leading engineering pods at fast-growth tech startups. We saw firsthand how traditional agencies operate: high markups, endless status meetings, junior contractors secretly writing code, and months of delay.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We decided to create a tight-knit powerhouse of specialized leads covering Frontend/Next.js, Backend & Cloud, Flutter Cross-Platform Mobile, and High-Load Matrix/MLM database logic. When you work with Codetrium.Dev, the person designing your architecture is the person coding it.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-2xl font-extrabold text-cyan-400 font-heading">50+</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Projects Delivered</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-2xl font-extrabold text-indigo-400 font-heading">15+</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Countries Served</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="text-sm font-bold text-white">Our Core Commitments</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Direct Slack/WhatsApp Access:</strong> Talk directly to developers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Code & IP Ownership:</strong> Clean Git repo with full rights.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Sub-200ms Latency:</strong> Performance baked into every route.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>60-Day Warranty:</strong> Free post-launch bug fixing on all projects.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Meet the Developers Grid */}
        <div>
          <SectionTitle
            badge="Our Senior Leads"
            badgeIcon={<Code2 className="w-3.5 h-3.5 text-cyan-400" />}
            title="Meet Our Senior Developers"
            highlightText="Behind Your Code"
            subtitle="Every project is architected, developed, and stress-tested directly by our specialized domain leads."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl backdrop-blur-xl group overflow-hidden"
              >
                <div>
                  {/* Portrait photo */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/5] bg-slate-950">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-950/90 text-cyan-300 font-mono text-[10px] border border-slate-750">
                        {member.experience}
                      </span>
                      <span className="text-[10px] text-slate-300 font-medium">
                        {member.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Primary Tech */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Primary Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.primaryTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Stats */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] mb-4">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Projects Done</span>
                      <span className="font-bold text-white font-mono">{member.stats.projectsCompleted}+</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Git Commits</span>
                      <span className="font-bold text-cyan-400 font-mono">{member.stats.githubCommits}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Button */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Email</span>
                  </a>

                  <Link
                    to={`/contact?dev=${encodeURIComponent(member.name)}`}
                    className="text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white transition-colors"
                  >
                    Book 1:1
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Want to Collaborate Directly With Our Developers?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a 20-minute video session to explore technical feasibility, sprint timelines, or custom platform architecture.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
            >
              <span>Schedule 1:1 Technical Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
