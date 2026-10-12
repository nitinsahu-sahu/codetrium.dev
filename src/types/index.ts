export type ProjectCategory = 'all' | 'web' | 'mobile' | 'product' | 'cloud';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'mobile' | 'product' | 'cloud';
  description: string;
  longDescription: string;
  client: string;
  country: string;
  countryCode: string;
  year: string;
  duration: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architecture?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  iconName: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  popular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'ecommerce' | 'mlm' | 'saas' | 'enterprise';
  description: string;
  highlightPoints: string[];
  image: string;
  demoUrl: string;
  adminDemoUrl?: string;
  vendorDemoUrl?: string;
  githubRepoUrl?: string;
  techStack: string[];
  keyModules: { title: string; desc: string; icon: string }[];
  pricing: {
    plan: string;
    price: string;
    period?: string;
    badge?: string;
    features: string[];
  }[];
  specifications: { [key: string]: string };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  avatar: string;
  experience: string;
  location: string;
  bio: string;
  specialties: string[];
  primaryTech: string[];
  stats: {
    projectsCompleted: number;
    githubCommits: string;
    codeReviews: number;
  };
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface ProcessStepItem {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  activities: string[];
  deliverable: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'Cloud' | 'Tools';
  icon: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
