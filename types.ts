
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}