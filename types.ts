import type { LucideProps } from 'lucide-react';
import type React from 'react';

export interface Feature {
  icon: React.ComponentType<LucideProps>;
  text: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface ServiceCategory {
  platform: string;
  icon: React.ComponentType<LucideProps>;
  services: Service[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  avatarUrl: string;
}