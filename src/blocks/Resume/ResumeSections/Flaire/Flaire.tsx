'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const Flaire = () => (
  <ResumeSection
    role="Lead Software Engineer / Head of Engineering"
    startDate="Dec 2023"
    endDate="Sep 2024"
    achievements={[
      'Led the transition from outsourced to internal engineering, recruiting and managing a high-performing engineering team.',
      'Collaborated with product, design, and growth teams to redesign the flaire.me web application using React, Next.js, Express.js, and PostgreSQL.',
      'Directed the development of the React Native mobile app utilizing Expo, AWS Amplify, and GraphQL.',
      'Constructed tracking and referral systems leveraging Sigma, GA4, FullStory, and Amplitude.',
      'Migrated the entire infrastructure from GCP to AWS, enhancing scalability and cost efficiency.',
      'Implemented fuzzy map searching by integrating Google Maps, Foursquare, and OpenAI APIs.',
      'Developed a React Native map component that displays OpenSearch geohashed results.',
    ]}
    tags={[
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'Express.js',
      'PostgreSQL',
      'AWS',
      'GraphQL',
      'OpenAI',
    ]}
  />
);