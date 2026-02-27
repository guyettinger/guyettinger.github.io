'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const Filmhub = () => (
  <ResumeSection
    role="Product Engineer"
    startDate="Sep 2024"
    endDate="Sep 2025"
    achievements={[
      'Developed a universal streaming application for mobile, TV, and web platforms using React Native, Expo, and Next.js.',
      'Created a continuous delivery system for a React Native application including building for multiple platforms, testing, and automated delivery.',
      'Implemented a comprehensive rebrand of the company website using Next.js with shadcn and Tailwind.',
      'Developed a referral system to enhance user engagement and growth.',
    ]}
    tags={['React Native', 'Expo', 'Next.js', 'TypeScript', 'shadcn', 'Tailwind', 'CI/CD']}
  />
);