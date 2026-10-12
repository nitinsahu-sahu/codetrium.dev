import { Project, Service, Product, TeamMember, Testimonial, ProcessStepItem, TechItem } from '../types';

export const AGENCY_INFO = {
  name: 'Codetrium.Dev',
  tagline: 'Elite Full-Stack Engineering & Custom Product Studio',
  description: 'We are a dedicated powerhouse of experienced software engineers delivering enterprise-grade web applications, Flutter mobile apps, multi-vendor marketplaces, and high-frequency custom software for startups and global enterprises.',
  email: 'contact@codetrium.dev',
  phone: '+91 91111 18326',
  whatsapp: '9111118326',
  whatsappDisplay: '+91 91111 18326',
  whatsappUrl: 'https://wa.me/919111118326',
  location: 'Global Remote & India (Offices overlapping US, UK, UAE & APAC timezones)',
  responseTime: 'Under 2 Hours SLA',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  stats: {
    projects: '50+',
    experts: 'Senior Leads',
    countries: '15+',
    experience: '5+ Years',
    satisfaction: '99.8%',
    codeQuality: '100% Clean Code',
  }
};

export const TECH_STACK: TechItem[] = [
  { name: 'React', category: 'Frontend', icon: 'Code2', color: '#00D4FF' },
  { name: 'Next.js', category: 'Frontend', icon: 'Zap', color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Palette', color: '#38BDF8' },
  { name: 'Node.js', category: 'Backend', icon: 'Server', color: '#68A063' },
  { name: 'Express', category: 'Backend', icon: 'Cpu', color: '#CBD5E1' },
  { name: 'Laravel', category: 'Backend', icon: 'Layers', color: '#FF2D20' },
  { name: 'WordPress', category: 'Backend', icon: 'Globe', color: '#21759B' },
  { name: 'MongoDB', category: 'Database', icon: 'Database', color: '#47A248' },
  { name: 'MySQL', category: 'Database', icon: 'HardDrive', color: '#00758F' },
  { name: 'PostgreSQL', category: 'Database', icon: 'Database', color: '#336791' },
  { name: 'Redis', category: 'Database', icon: 'Zap', color: '#DC382D' },
  { name: 'Flutter', category: 'Mobile', icon: 'Smartphone', color: '#02569B' },
  { name: 'React Native', category: 'Mobile', icon: 'TabletSmartphone', color: '#61DAFB' },
  { name: 'AWS Cloud', category: 'Cloud', icon: 'Cloud', color: '#FF9900' },
  { name: 'Docker', category: 'Cloud', icon: 'Box', color: '#2496ED' },
  { name: 'GitHub CI/CD', category: 'Tools', icon: 'GitBranch', color: '#F05032' },
  { name: 'GraphQL', category: 'Backend', icon: 'Network', color: '#E535AB' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'Lead Architect & Co-Founder',
    title: 'Full-Stack & React / Next.js Specialist',
    avatar: 'https://images.pexels.com/photos/5483147/pexels-photo-5483147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    experience: '7+ Years Experience',
    location: 'San Francisco, CA',
    bio: 'Former senior engineer at high-growth fintechs. Obsessed with sub-second page loads, micro-frontend architecture, and buttery smooth user interactions.',
    specialties: ['React & Next.js 15 SSR', 'State Management & Performance', 'Microservices Architecture', 'UI/UX System Design'],
    primaryTech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL'],
    stats: {
      projectsCompleted: 62,
      githubCommits: '3.4k+',
      codeReviews: 480,
    },
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'alex@codetrium.dev',
    }
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Principal Backend & Cloud Lead',
    title: 'Node.js, Distributed Systems & AWS Expert',
    avatar: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    experience: '8+ Years Experience',
    location: 'London, UK',
    bio: 'Specializes in bulletproof server architectures, real-time WebSockets, multi-tenant databases, zero-downtime CI/CD pipelines, and high-load payment gateways.',
    specialties: ['Node.js & Express REST/GraphQL', 'AWS ECS/Lambda Architecture', 'PostgreSQL & MongoDB Tuning', 'Stripe Connect & Payouts'],
    primaryTech: ['Node.js', 'Express', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    stats: {
      projectsCompleted: 54,
      githubCommits: '4.1k+',
      codeReviews: 530,
    },
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'marcus@codetrium.dev',
    }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Mobile Lead & Frontend Engineer',
    title: 'Flutter, Dart & Cross-Platform Specialist',
    avatar: 'https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    experience: '6+ Years Experience',
    location: 'Berlin, Germany',
    bio: 'Crafts 60fps native-feel iOS and Android mobile apps from a single clean Dart codebase. Expert in offline-first synchronization and complex animations.',
    specialties: ['Flutter & Dart Engine', 'iOS & Android Native Bridges', 'Real-time Push & Geolocation', 'Mobile Security & App Store Ops'],
    primaryTech: ['Flutter', 'Dart', 'React Native', 'Firebase', 'State Machines'],
    stats: {
      projectsCompleted: 48,
      githubCommits: '2.9k+',
      codeReviews: 390,
    },
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'elena@codetrium.dev',
    }
  },
  {
    id: 'david-kumar',
    name: 'David Kumar',
    role: 'Custom Systems & MLM Architect',
    title: 'Complex Business Logic & Database Specialist',
    avatar: 'https://images.pexels.com/photos/35140700/pexels-photo-35140700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    experience: '7+ Years Experience',
    location: 'Singapore / India',
    bio: 'Engineered high-concurrency binary/matrix network software handling millions in volume. Deep mastery over complex algorithms, Laravel, PHP, and MySQL clusters.',
    specialties: ['MLM Binary / Matrix / Unilevel Logic', 'Commission & Wallet Calculations', 'Laravel & Enterprise PHP', 'MySQL Sharding & Optimization'],
    primaryTech: ['Laravel', 'MySQL', 'Node.js', 'WordPress Core', 'Automation'],
    stats: {
      projectsCompleted: 58,
      githubCommits: '3.8k+',
      codeReviews: 460,
    },
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'david@codetrium.dev',
    }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'ecom-multivendor',
    name: 'Codetrium Cart Pro: Multi-Vendor Marketplace',
    tagline: 'Amazon-Style Hyper-Scale Multi-Vendor Marketplace Ecosystem',
    category: 'ecommerce',
    description: 'A turnkey, production-tested multi-vendor marketplace engine equipped with dedicated merchant portals, super-admin master control, instant escrow payouts, automated tax rules, order tracking, and high-conversion mobile app companion.',
    highlightPoints: [
      'Multi-vendor management with custom commission tier rates',
      'Real-time inventory sync & warehouse stock alerts',
      'Integrated Stripe Connect, Razorpay, PayPal & Crypto gateways',
      'Customer iOS/Android Flutter app with push notifications',
      'Blazing fast sub-200ms page load speeds on Next.js frontend'
    ],
    image: 'https://images.pexels.com/photos/29502370/pexels-photo-29502370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    demoUrl: 'https://demo.codetrium.dev/cart',
    adminDemoUrl: 'https://admin.codetrium.dev/cart',
    vendorDemoUrl: 'https://vendor.codetrium.dev/cart',
    techStack: ['Next.js 15', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Flutter', 'AWS S3'],
    keyModules: [
      {
        title: 'Vendor Portal & Analytics',
        desc: 'Merchants get a modern dashboard for product listings, bulk CSV imports, financial ledger, and shipping dispatch.',
        icon: 'Store'
      },
      {
        title: 'Automated Commission Engine',
        desc: 'Split payments at checkout automatically between vendor and platform owner via Stripe Connect & Razorpay Route.',
        icon: 'DollarSign'
      },
      {
        title: 'Flash Sale & Promo Hub',
        desc: 'Tiered coupons, lightning deals countdown timer, bundle discounts, and affiliate referral tracking.',
        icon: 'Flame'
      },
      {
        title: 'Omnichannel Mobile Suite',
        desc: 'Native Flutter apps for customers with biometric login, live order map, and 1-click reorder.',
        icon: 'Smartphone'
      }
    ],
    pricing: [
      {
        plan: 'Starter License',
        price: '$1,499 / ₹1,25,000',
        badge: 'Single Brand',
        features: [
          'Full Web Application Source Code',
          'Admin & Single Vendor Dashboard',
          'Razorpay + Stripe Gateway Integrations',
          'Standard Documentation & Setup Guide',
          '30 Days Free Bug Fix Support'
        ]
      },
      {
        plan: 'Enterprise Multi-Vendor',
        price: '$2,899 / ₹2,40,000',
        badge: 'Most Popular',
        features: [
          'Full Source Code (Web + Flutter Mobile Apps)',
          'Unlimited Vendors & Commission Splits',
          'Razorpay Route + Stripe Connect + Crypto',
          'Multi-Currency & Multi-Language Engine',
          '6 Months Priority Support & AWS Deploy Assistance'
        ]
      },
      {
        plan: 'Custom Whitelabel',
        price: '$4,500+ / ₹3,75,000+',
        badge: 'Tailored Solution',
        features: [
          'Full Custom UI/UX Redesign by Codetrium.Dev',
          'Custom Business Logic & ERP Integrations',
          'Dedicated CI/CD Pipeline Setup',
          '1 Year Direct Developer WhatsApp Support',
          'App Store & Play Store Publishing Guarantee'
        ]
      }
    ],
    specifications: {
      'Frontend': 'Next.js 15 + Tailwind CSS + Framer Motion',
      'Backend': 'Node.js Express Cluster + TypeScript',
      'Database': 'PostgreSQL with Prisma ORM & Redis Cache',
      'Mobile App': 'Flutter 3.x (iOS & Android)',
      'Security': 'JWT with HttpOnly Cookies, AES-256 data encryption, CSRF protection',
      'Deployment': 'AWS ECS Docker, Vercel Edge, S3 bucket storage'
    }
  },
  {
    id: 'mlm-enterprise-matrix',
    name: 'Codetrium Matrix: Enterprise MLM & Network Growth Platform',
    tagline: 'High-Concurrency Multi-Level Marketing & Binary Commission Engine',
    category: 'mlm',
    description: 'An enterprise-grade, algorithmically verified MLM software platform designed to handle complex compensation plans including Binary, Matrix (3x9, 4x7), Unilevel, Board, and Hybrid models without calculation errors or database deadlocks.',
    highlightPoints: [
      'Interactive visual genealogy downline tree explorer (D3.js)',
      'Instant automated wallet transfers & multi-level commission payouts',
      'Anti-fraud, anti-stacking and position balancing algorithms',
      'Rank advancement milestone badges & reward automation',
      'KYC verification workflow & multi-currency crypto deposit support'
    ],
    image: 'https://images.pexels.com/photos/10325707/pexels-photo-10325707.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    demoUrl: 'https://demo.codetrium.dev/matrix',
    adminDemoUrl: 'https://admin.codetrium.dev/matrix',
    techStack: ['React', 'Laravel / Node.js', 'MySQL Cluster', 'Redis Queue', 'Tailwind CSS', 'D3.js'],
    keyModules: [
      {
        title: 'Genealogy Tree Explorer',
        desc: 'Interactive visual node tree allowing users to inspect downline nodes, spillover placements, and active team volume.',
        icon: 'GitFork'
      },
      {
        title: 'Algorithmic Payout Scheduler',
        desc: 'High-throughput calculation engine that computes millions of transactions and matching bonuses in seconds.',
        icon: 'Coins'
      },
      {
        title: 'Multi-Currency E-Wallet',
        desc: 'Internal e-wallet for member-to-member transfers, withdrawal requests to UPI/Bank/USDT, and card payouts.',
        icon: 'Wallet'
      },
      {
        title: 'Compliance & KYC Hub',
        desc: 'Built-in document verification, tax report generation, TDS exports, and IP anomaly fraud shields.',
        icon: 'ShieldCheck'
      }
    ],
    pricing: [
      {
        plan: 'Standard MLM Plan',
        price: '$1,899 / ₹1,55,000',
        badge: 'Single Plan Type',
        features: [
          'Choose 1 Plan (Binary OR Matrix OR Unilevel)',
          'Visual Tree Downline Viewer',
          'Internal E-Wallet & Payout Requests',
          'Full PHP / Laravel + React Source Code',
          '60 Days Developer Support'
        ]
      },
      {
        plan: 'Hybrid Global Suite',
        price: '$3,499 / ₹2,90,000',
        badge: 'Top Seller',
        features: [
          'Hybrid Plan (Binary + Matching + Generation Bonus)',
          'Automated UPI + USDT Crypto + Stripe Gateway',
          'Mobile PWA & Member Portal',
          'Advanced Anti-Fraud & Spillover Logic',
          'Full Server Setup & Load Testing'
        ]
      },
      {
        plan: 'Custom MLM Enterprise',
        price: '$5,900+ / ₹4,90,000+',
        badge: 'Infinite Scale',
        features: [
          'Bespoke Compensation Rule Formulation',
          'Native iOS & Android Mobile Apps (Flutter)',
          'Automated Banking Micro-deposits Integration',
          'Dedicated Database Sharding for 500k+ Members',
          '1 Year Direct Developer Engineering Retainer'
        ]
      }
    ],
    specifications: {
      'Core Engine': 'Laravel 11 / Node.js Microservices',
      'Frontend': 'React 19 + TypeScript + Tailwind CSS',
      'Tree Visualizer': 'D3.js / SVG Canvas Optimized',
      'Queue / Worker': 'Redis Sentinel + RabbitMQ background jobs',
      'Database': 'MySQL InnoDB Cluster with read-replicas',
      'Compliance': 'Audit trails, GDPR & Indian compliance ready'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Custom Web Development',
    slug: 'web-development',
    shortDesc: 'Modern, ultra-fast web applications built with Next.js, React, Laravel, and WordPress.',
    description: 'We engineer high-performance, conversion-optimized web applications with sub-second load times, clean code, responsive design, and bulletproof security. From single-page web apps to complex SaaS portals, we build for scale.',
    iconName: 'Globe',
    technologies: ['React', 'Next.js', 'TypeScript', 'Laravel', 'WordPress Core', 'Tailwind CSS'],
    features: [
      'Server-Side Rendering (SSR) & Static Generation (SSG)',
      'Enterprise SEO Architecture & Core Web Vitals 95+ score',
      'Full TypeScript type-safety across client and server',
      'Custom animations with Framer Motion & CSS shaders',
      'REST & GraphQL API integrations'
    ],
    deliverables: [
      '100% responsive, pixel-perfect frontend',
      'Admin CMS management panel',
      'SEO metadata & sitemap configuration',
      'Speed optimization guarantee (< 1.5s LCP)',
      'Source code & deployment documentation'
    ],
    timeline: '2 - 4 Weeks',
    startingPrice: '$1,200 / ₹99,999',
    popular: true
  },
  {
    id: 'backend-architecture',
    title: 'Backend & API Engineering',
    slug: 'backend-architecture',
    shortDesc: 'Robust microservices, REST/GraphQL APIs, and database architecture using Node.js & Express.',
    description: 'We construct rock-solid backend infrastructure capable of handling millions of requests with low latency, robust data validation, automated backups, and bank-grade data security protocols.',
    iconName: 'Server',
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'WebSockets'],
    features: [
      'High-throughput RESTful & GraphQL API endpoints',
      'Complex database modeling, indexing & query tuning',
      'JWT, OAuth2 & Multi-Factor Authentication',
      'Real-time bi-directional WebSockets (chat, live notifications)',
      'Third-party webhooks (Stripe, Razorpay, Twilio, SendGrid)'
    ],
    deliverables: [
      'Interactive Swagger / Postman API documentation',
      'Database migration & seed scripts',
      'Automated rate-limiting & DDoS protection',
      'Unit & Integration test suites',
      'Docker containerized deployment setup'
    ],
    timeline: '2 - 5 Weeks',
    startingPrice: '$1,500 / ₹1,25,000'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDesc: 'Stunning cross-platform iOS & Android mobile applications built using Flutter & Dart.',
    description: 'Transform your vision into native-feeling mobile applications. With Flutter, we deliver 60fps animations, native hardware access (camera, GPS, biometrics), offline data persistence, and seamless App Store releases.',
    iconName: 'Smartphone',
    technologies: ['Flutter', 'Dart', 'React Native', 'Firebase', 'SQLite', 'Apple App Store', 'Google Play'],
    features: [
      'Single codebase delivering native iOS and Android builds',
      'Smooth 60fps UI animations and gestures',
      'Push notification workflows with Firebase Cloud Messaging',
      'Biometric authentication (FaceID / Fingerprint)',
      'Offline-first architecture with local SQLite cache'
    ],
    deliverables: [
      'Production-ready .ipa and .apk / .aab binaries',
      'Complete Flutter & Dart source code',
      'App Store & Google Play Store submission assistance',
      'Crashlytics error tracking integration',
      'Admin management backend for mobile app'
    ],
    timeline: '3 - 6 Weeks',
    startingPrice: '$1,800 / ₹1,50,000',
    popular: true
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Platforms & Marketplaces',
    slug: 'ecommerce-solutions',
    shortDesc: 'Custom online stores, multi-vendor marketplaces, Stripe/Razorpay Connect, and automated checkout funnels.',
    description: 'From bespoke custom e-commerce stores to Amazon-style multi-vendor marketplaces. We optimize every pixel for maximum average order value (AOV), low cart abandonment, and instant payout distribution.',
    iconName: 'ShoppingBag',
    technologies: ['Next.js', 'Node.js', 'Stripe Connect', 'Razorpay Route', 'Redis', 'PostgreSQL'],
    features: [
      'Custom vendor onboarding & payout ledger',
      'Instant search with Algolia / Elasticsearch filtering',
      'Abandoned cart recovery & automated coupon flows',
      'Multi-currency, dynamic tax and automated shipping calculators',
      'High-conversion 1-page checkout flows'
    ],
    deliverables: [
      'Full store frontend + vendor portal + admin console',
      'Payment gateway sandbox & production verification',
      'Inventory management & order tracking system',
      'Customer review & rating module',
      'Analytics dashboard for GMV, churn, and conversion rates'
    ],
    timeline: '3 - 6 Weeks',
    startingPrice: '$2,000 / ₹1,65,000'
  },
  {
    id: 'custom-mlm-software',
    title: 'Custom MLM & Binary Network Software',
    slug: 'custom-mlm-software',
    shortDesc: 'Mathematical compensation plans, interactive genealogy trees, crypto & fiat payouts, and member e-wallets.',
    description: 'Specialized enterprise development for network marketing companies. We design complex compensation calculations (Binary, Matrix, Board, Unilevel) with zero rounding errors, automated spillover, and bank-grade security.',
    iconName: 'Network',
    technologies: ['Laravel', 'React', 'MySQL Cluster', 'Redis Queue', 'D3.js Tree', 'WebSockets'],
    features: [
      'Interactive visual downline genealogy tree explorer',
      'Automated commission calculations without lock contention',
      'Member e-wallet with multi-level transfer & crypto/bank withdrawal',
      'Anti-stacking and position fraud detection mechanisms',
      'Rank advancement milestone awards & rank leaderboards'
    ],
    deliverables: [
      'Comprehensive Admin master control room',
      'Member backoffice dashboard with genealogy explorer',
      'Detailed financial ledger & commission log system',
      'KYC identity verification workflow module',
      'Full stress-tested source code & server deployment'
    ],
    timeline: '4 - 8 Weeks',
    startingPrice: '$2,500 / ₹2,10,000',
    popular: true
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    slug: 'cloud-devops',
    shortDesc: 'AWS cloud provisioning, Docker containerization, CI/CD automated deployment, and 99.99% uptime.',
    description: 'We build resilient, self-healing cloud infrastructure on AWS, Google Cloud, and Vercel. We set up automated testing, zero-downtime CI/CD workflows, automated database backups, and DDoS mitigation.',
    iconName: 'Cloud',
    technologies: ['AWS (ECS, S3, RDS, CloudFront)', 'Docker', 'GitHub Actions', 'Nginx', 'Terraform', 'Cloudflare'],
    features: [
      'Containerized microservices with Docker & Docker Compose',
      'Automated CI/CD deployment pipelines on GitHub Actions',
      'Load balancing, auto-scaling & Cloudflare CDN integration',
      'Automated daily database snapshots & disaster recovery',
      'Server health monitoring & Telegram / Slack alert bots'
    ],
    deliverables: [
      'Configured cloud environment ready for enterprise load',
      'Infrastructure as Code (IaC) templates',
      'GitHub Actions workflow automation scripts',
      'SSL certificates & DNS hardening configuration',
      'Comprehensive DevOps runbook & architecture diagrams'
    ],
    timeline: '1 - 3 Weeks',
    startingPrice: '$900 / ₹75,000'
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'shopnexus-multivendor',
    title: 'ShopNexus: Global Multi-Vendor Marketplace',
    slug: 'shopnexus-multivendor',
    category: 'product',
    client: 'Nexus Commerce Group',
    country: 'United States',
    countryCode: 'US',
    year: '2024',
    duration: '6 Weeks',
    featured: true,
    description: 'A full-scale multi-vendor marketplace platform hosting 350+ independent merchants with automated Stripe Connect payouts and sub-second catalog search.',
    longDescription: 'Codetrium.Dev was hired to engineer a high-throughput multi-vendor platform capable of handling flash sale traffic spikes. We developed a modern Next.js 15 SSR storefront paired with an event-driven Node.js backend and a dedicated vendor backoffice.',
    image: 'https://images.pexels.com/photos/29502370/pexels-photo-29502370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://demo.codetrium.dev',
    githubUrl: 'https://github.com',
    tags: ['Next.js', 'Node.js', 'Stripe Connect', 'PostgreSQL', 'Redis', 'Tailwind'],
    metrics: [
      { label: 'Monthly GMV', value: '$1.4M+' },
      { label: 'Avg Page Load', value: '180ms' },
      { label: 'Active Vendors', value: '350+' },
      { label: 'Checkout Conversion', value: '+34%' }
    ],
    features: [
      'Real-time vendor onboarding & KYC approval flow',
      'Multi-currency automatic exchange rate updates',
      'Instant payment splitting via Stripe Connect & Razorpay',
      'Automated label generation with Shippo & EasyPost APIs',
      'Comprehensive order return & refund mediation module'
    ],
    architecture: ['Next.js 15 Frontend on Vercel Edge', 'Node.js Express API on AWS ECS', 'PostgreSQL with Read Replicas', 'Redis Caching Layer']
  },
  {
    id: 'vortex-mlm-platform',
    title: 'VortexMatrix: High-Load Binary MLM System',
    slug: 'vortex-mlm-platform',
    category: 'product',
    client: 'Vortex Global Holdings',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    year: '2024',
    duration: '8 Weeks',
    featured: true,
    description: 'Bespoke binary compensation MLM platform handling 120,000+ members with real-time SVG genealogy tree and crypto payout rails.',
    longDescription: 'The client needed an airtight system that could process weekly payout calculations without server timeouts. Codetrium.Dev re-architected the compensation pipeline using asynchronous Redis workers, sub-tree indexing, and an intuitive D3.js powered genealogy viewer.',
    image: 'https://images.pexels.com/photos/10325707/pexels-photo-10325707.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://demo.codetrium.dev',
    tags: ['React', 'Laravel', 'MySQL', 'Redis', 'D3.js', 'USDT API'],
    metrics: [
      { label: 'Active Members', value: '120k+' },
      { label: 'Payout Processing', value: '< 4.2s' },
      { label: 'Daily Transactions', value: '$280k+' },
      { label: 'Calculation Accuracy', value: '100.00%' }
    ],
    features: [
      'Binary matching bonus & power leg spillover logic',
      'Interactive SVG downline tree with live search',
      'Automated USDT (TRC-20 / ERC-20) wallet integration',
      'Dual-factor authentication & withdrawal pin security',
      'Super-admin payout rollback & transaction audit trail'
    ]
  },
  {
    id: 'healthsync-mobile',
    title: 'HealthSync: Telemedicine & Vitals Flutter App',
    slug: 'healthsync-mobile',
    category: 'mobile',
    client: 'HealthSync Innovations',
    country: 'United Kingdom',
    countryCode: 'GB',
    year: '2024',
    duration: '5 Weeks',
    featured: true,
    description: 'Cross-platform mobile application for real-time doctor video consultations, prescription refills, and IoT smartwatch vitals sync.',
    longDescription: 'We built a high-performance Flutter mobile application for both iOS and Android with WebRTC video calling, Bluetooth Low Energy (BLE) integration for blood pressure monitors, and HIPAA/GDPR compliant encrypted local storage.',
    image: 'https://images.pexels.com/photos/3850263/pexels-photo-3850263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://apps.apple.com',
    tags: ['Flutter', 'Dart', 'WebRTC', 'Firebase', 'Node.js', 'BLE'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Total Downloads', value: '85k+' },
      { label: 'Consultations Run', value: '25,000+' },
      { label: 'Video Call Uptime', value: '99.98%' }
    ],
    features: [
      'Low-latency 1-on-1 encrypted video calling via WebRTC',
      'Electronic medical record (EMR) document vault',
      'Push notification pill reminders & appointment calendar',
      'In-app prescription payments via Apple Pay & Google Pay'
    ]
  },
  {
    id: 'novacrm-enterprise',
    title: 'NovaCRM: AI-Powered Sales Intelligence Hub',
    slug: 'novacrm-enterprise',
    category: 'web',
    client: 'NovaTech Corp',
    country: 'Germany',
    countryCode: 'DE',
    year: '2024',
    duration: '4 Weeks',
    featured: false,
    description: 'Custom enterprise CRM with real-time deal Kanban boards, automated lead scoring, and automated AI email generation.',
    longDescription: 'A custom web application built to streamline B2B enterprise sales pipelines. Featuring instant search, dynamic custom fields, drag-and-drop opportunity boards, and seamless sync with Google Workspace and Microsoft 365.',
    image: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://demo.codetrium.dev',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Sales Velocity', value: '+42%' },
      { label: 'Time Saved / Rep', value: '8 hrs/wk' },
      { label: 'Lead Response Time', value: '-65%' },
      { label: 'Active Users', value: '1,200+' }
    ],
    features: [
      'Drag-and-drop multi-stage pipeline manager',
      'Smart lead scoring based on interaction history',
      'Two-way email synchronization & open rate tracking',
      'Role-based granular data access policies'
    ]
  },
  {
    id: 'paystream-fintech',
    title: 'PayStream: Cross-Border Remittance Portal',
    slug: 'paystream-fintech',
    category: 'web',
    client: 'PayStream Global',
    country: 'Singapore',
    countryCode: 'SG',
    year: '2023',
    duration: '6 Weeks',
    featured: false,
    description: 'Fintech web portal facilitating multi-currency remittances with bank-level encryption, KYC identity verification, and webhook notifications.',
    longDescription: 'Engineered a resilient financial web application that connects with banking APIs across Southeast Asia. Designed with rigorous security audits, ISO 27001 standards, and zero-error transaction ledgers.',
    image: 'https://images.pexels.com/photos/29502368/pexels-photo-29502368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://demo.codetrium.dev',
    tags: ['Next.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: [
      { label: 'Transferred Volume', value: '$8.5M+' },
      { label: 'Zero Fraud Rate', value: '100%' },
      { label: 'Avg Transfer Time', value: '< 2 mins' },
      { label: 'Compliance Score', value: '100%' }
    ],
    features: [
      'Automated FX rate hedging calculator',
      'Jumio / Onfido KYC identity scanning',
      'Instant bank account verification via Plaid',
      'Automated transaction PDF receipts and statement generator'
    ]
  },
  {
    id: 'fitpulse-fitness-app',
    title: 'FitPulse: Interactive Workout & Nutrition Coach',
    slug: 'fitpulse-fitness-app',
    category: 'mobile',
    client: 'FitPulse Studio',
    country: 'Australia',
    countryCode: 'AU',
    year: '2023',
    duration: '4 Weeks',
    featured: false,
    description: 'Flutter mobile app for personalized fitness tracking, audio-guided HIIT workouts, and macro meal plan calculations.',
    longDescription: 'Built with Flutter for smooth performance on both high-end and budget devices. Includes offline video caching, interactive workout rep counter, Apple HealthKit / Google Fit integration, and in-app subscriptions.',
    image: 'https://images.pexels.com/photos/13570156/pexels-photo-13570156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    liveUrl: 'https://play.google.com',
    tags: ['Flutter', 'Dart', 'RevenueCat', 'Firebase', 'HealthKit'],
    metrics: [
      { label: 'Active Subscribers', value: '14,000+' },
      { label: 'Workouts Logged', value: '450k+' },
      { label: 'Crash-Free Users', value: '99.9%' },
      { label: 'Monthly ARR', value: '$95k+' }
    ],
    features: [
      'Personalized workout generator algorithm',
      'Barcode scanner for nutrition food database',
      'Social leaderboard & community challenge feed',
      'In-App Purchase subscriptions with RevenueCat'
    ]
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    number: '01',
    title: 'Discovery & Architecture Blueprint',
    subtitle: 'Scope Deep-Dive & Tech Stack Selection',
    description: 'We meet directly with you (no middleman project managers) to dissect your business logic, technical requirements, user stories, and target scalability.',
    icon: 'Compass',
    activities: [
      'Requirement gathering & feature matrix',
      'Database schema & API contract design',
      'Technical feasibility & performance planning',
      'Fixed-price milestone agreement & timeline'
    ],
    deliverable: 'Complete Architecture Blueprint & Project Specification Document'
  },
  {
    step: '02',
    number: '02',
    title: 'UI/UX Design & Interactive Prototypes',
    subtitle: 'Figma System & Modern Aesthetic',
    description: 'We craft intuitive, high-conversion interfaces in Figma tailored for desktop and mobile, ensuring pixel-perfect ergonomics before writing code.',
    icon: 'Palette',
    activities: [
      'Design token system (typography, colors, components)',
      'Clickable interactive Figma prototype',
      'Mobile responsive layouts & edge states',
      'Client feedback rounds until 100% approved'
    ],
    deliverable: 'Figma Design System & Approved High-Fidelity Mockups'
  },
  {
    step: '03',
    number: '03',
    title: 'Agile Full-Stack Sprint Development',
    subtitle: 'Clean Code, Live Staging & Fast Sprints',
    description: 'Our developers sprint in parallel—frontend, backend, mobile, and database—delivering working increments with live staging previews every 3-5 days.',
    icon: 'Code',
    activities: [
      'Clean TypeScript & component architecture',
      'Secure REST/GraphQL API construction',
      'Continuous integration (CI) & automated unit testing',
      'Private live staging URL updated with each commit'
    ],
    deliverable: 'Weekly Sprint Demos & Working Staging URL Access'
  },
  {
    step: '04',
    number: '04',
    title: 'QA, Cloud Deployment & Launch',
    subtitle: 'Security Audit, Load Testing & Handoff',
    description: 'We perform end-to-end testing, security hardening, database optimization, and deploy your application to production cloud infrastructure with zero downtime.',
    icon: 'Rocket',
    activities: [
      'Cross-browser & cross-device compatibility QA',
      'Security audit, penetration check & SSL hardening',
      'AWS / Vercel cloud deployment & DNS config',
      '100% full source code handoff & 30-60 days support'
    ],
    deliverable: 'Live Production App, Clean Git Repo Handoff & Free Warranty Period'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Harrison Vance',
    role: 'Founder & CEO',
    company: 'Nexus Commerce Inc.',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatar: 'https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5,
    content: 'Codetrium.Dev built our multi-vendor marketplace from scratch in just 6 weeks. Their developers communicate like seasoned Silicon Valley tech leads. Our platform processed $1.4M in GMV last month without a single crash. Outstanding engineering caliber!',
    projectType: 'Multi-Vendor Marketplace & Mobile App'
  },
  {
    id: 'test-2',
    name: 'Tariq Al-Mansoor',
    role: 'Chief Technology Officer',
    company: 'Vortex Global Network',
    country: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    avatar: 'https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5,
    content: 'Finding engineers who truly understand complex MLM binary compensation math is nearly impossible. Codetrium.Dev built our entire genealogy matrix and crypto payout automation flawlessly. Their code is clean, well-documented, and blazingly fast.',
    projectType: 'Enterprise MLM Software'
  },
  {
    id: 'test-3',
    name: 'Dr. Charlotte Davies',
    role: 'Co-Founder & COO',
    company: 'HealthSync Innovations',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    avatar: 'https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5,
    content: 'The Flutter mobile app Codetrium.Dev built for our telehealth platform achieved a 4.9 rating on the App Store with 85,000+ downloads. Their attention to smooth 60fps animations, WebRTC stability, and data security is world-class.',
    projectType: 'Flutter iOS & Android Telehealth App'
  },
  {
    id: 'test-4',
    name: 'Maximilian Bauer',
    role: 'Head of Digital Products',
    company: 'NovaTech Group',
    country: 'Germany',
    countryFlag: '🇩🇪',
    avatar: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5,
    content: 'Working with Codetrium.Dev feels like having our own in-house elite engineering team. They delivered our AI-powered SaaS portal ahead of schedule, with great architectural decisions that saved us thousands in monthly cloud costs.',
    projectType: 'Custom Enterprise Web App'
  },
  {
    id: 'test-5',
    name: 'Kavita Menon',
    role: 'Managing Director',
    company: 'PayStream Global',
    country: 'Singapore / India',
    countryFlag: '🇮🇳',
    avatar: 'https://images.pexels.com/photos/35140700/pexels-photo-35140700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    rating: 5,
    content: 'Their response times are unbelievable. Whenever we had a change request or technical inquiry, our developers responded within an hour with a clear implementation plan. You will not find a better agency team.',
    projectType: 'Fintech Portal & Cloud Architecture'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'direct-access',
    title: 'Direct Senior Developer Access',
    desc: 'No non-technical account managers or communication bottlenecks. You talk directly with the senior engineers writing your code on Slack, WhatsApp, or Google Meet.',
    icon: 'Users',
    badge: '100% Direct'
  },
  {
    id: 'rapid-delivery',
    title: 'Rapid High-Velocity Delivery',
    desc: 'Because we are a streamlined senior engineering unit with reusable battle-tested modules, we ship production-ready apps in weeks where traditional agencies take 6+ months.',
    icon: 'Zap',
    badge: '3x Faster'
  },
  {
    id: 'full-ownership',
    title: '100% Full Code Ownership',
    desc: 'You own every line of source code, database schema, and design asset. No recurring vendor lock-in fees, hidden royalties, or proprietary black boxes.',
    icon: 'Shield',
    badge: 'Full IP Rights'
  },
  {
    id: 'enterprise-quality',
    title: 'Enterprise Architecture & Scale',
    desc: 'We don’t cut corners. Clean TypeScript, modular architecture, Redis caching, robust automated testing, and comprehensive technical documentation included.',
    icon: 'Cpu',
    badge: 'Production Grade'
  }
];

export const COUNTRIES_SERVED = [
  { name: 'India', code: 'IN', projects: 16, flag: '🇮🇳', clientTypes: 'E-Commerce, MLM, Fintech, Custom' },
  { name: 'United States', code: 'US', projects: 18, flag: '🇺🇸', clientTypes: 'SaaS, E-Commerce, Fintech' },
  { name: 'United Kingdom', code: 'GB', projects: 9, flag: '🇬🇧', clientTypes: 'Healthcare, Marketplace, Agency' },
  { name: 'Germany', code: 'DE', projects: 6, flag: '🇩🇪', clientTypes: 'Enterprise CRM, Logistics, Cloud' },
  { name: 'United Arab Emirates', code: 'AE', projects: 7, flag: '🇦🇪', clientTypes: 'MLM Networks, Real Estate' },
  { name: 'Singapore', code: 'SG', projects: 5, flag: '🇸🇬', clientTypes: 'Fintech, Payment Rails, Web3' },
  { name: 'Canada', code: 'CA', projects: 4, flag: '🇨🇦', clientTypes: 'Logistics, Mobile Apps, SaaS' },
  { name: 'Australia', code: 'AU', projects: 5, flag: '🇦🇺', clientTypes: 'Fitness Mobile Apps, E-Commerce' },
  { name: 'France', code: 'FR', projects: 3, flag: '🇫🇷', clientTypes: 'Luxury Real Estate, Booking Portals' }
];

export const FAQS = [
  {
    q: 'Why should we hire Codetrium.Dev instead of a huge agency or random solo freelancers?',
    a: 'Huge agencies charge $20,000+ (₹16,00,000+) in overhead for non-technical account managers, account directors, and slow bureaucracy. Solo freelancers often lack full-stack coverage. Codetrium.Dev is the sweet spot: a tight-knit core of senior engineers covering frontend, backend, Flutter mobile, and custom systems. You get agency firepower with freelancer agility and direct communication.'
  },
  {
    q: 'How do you handle project communication and updates?',
    a: 'We set up a private Slack or WhatsApp channel directly with our engineers. We provide interactive staging links with every commit, hold weekly video check-ins on Google Meet, and maintain transparent task tracking on Notion or Jira.'
  },
  {
    q: 'Do I get full ownership of the source code and designs?',
    a: 'Yes, 100%. Upon final milestone delivery, all intellectual property, GitHub repositories, Figma source files, database schemas, and cloud deployment keys are completely transferred to your organization with no ongoing licensing fees.'
  },
  {
    q: 'Can I purchase your pre-built software (Multi-Vendor Marketplace or MLM)?',
    a: 'Absolutely! Our pre-built products are fully tested, production-ready engines that save you 3-6 months of dev time. You can purchase the commercial source code as-is, or hire our team to customize the features, branding, and business logic to your exact specifications.'
  },
  {
    q: 'What is your typical project timeline and pricing structure?',
    a: 'Typical MVPs and custom web applications take 2 to 5 weeks. Complex enterprise platforms and multi-vendor suites take 4 to 8 weeks. We offer fixed-price milestone contracts in USD ($) and INR (₹) so you know your exact investment upfront without surprise billable hours.'
  },
  {
    q: 'What happens after the project is launched?',
    a: 'We include 30 to 60 days of free post-launch warranty and bug-fixing support with every project. After that, we offer optional monthly engineering retainer packages for continuous feature development, cloud monitoring, and priority SLA support.'
  }
];
