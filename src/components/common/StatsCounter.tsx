import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Globe2, Clock } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: React.ReactNode;
}

export const StatsCounter: React.FC = () => {
  const stats: StatItem[] = [
    {
      label: 'Projects Delivered',
      value: '10+',
      numericTarget: 10,
      suffix: '+',
      description: 'Web, mobile & enterprise systems',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />
    },
    {
      label: 'Senior Engineering Leads',
      value: '100%',
      numericTarget: 100,
      suffix: '% Senior',
      description: 'Zero junior handover or middlemen',
      icon: <Users className="w-5 h-5 text-indigo-400" />
    },
    {
      label: 'Countries Served',
      value: '3+',
      numericTarget: 3,
      suffix: '+',
      description: 'US, UK, India & Global',
      icon: <Globe2 className="w-5 h-5 text-purple-400" />
    },
    {
      label: 'Years of Experience',
      value: '5+',
      numericTarget: 5,
      suffix: '+ Years',
      description: 'Proven track record of high delivery',
      icon: <Clock className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <CounterCard key={stat.label} stat={stat} index={idx} />
        ))}
      </div>
    </div>
  );
};

const CounterCard: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.numericTarget;
      const duration = 1500;
      const stepTime = Math.abs(Math.floor(duration / (end || 1)));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, Math.max(stepTime, 20));

      return () => clearInterval(timer);
    }
  }, [isInView, stat.numericTarget]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative group p-5 sm:p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 overflow-hidden backdrop-blur-xl"
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-indigo-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-cyan-500/30 group-hover:bg-slate-800 transition-colors">
          {stat.icon}
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/50">
          Verified
        </span>
      </div>

      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          {stat.prefix}
          {isInView ? count : 0}
          {stat.suffix}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-slate-200 mt-1">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
        {stat.description}
      </p>
    </motion.div>
  );
};
