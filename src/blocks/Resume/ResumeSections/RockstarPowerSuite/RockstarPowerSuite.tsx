'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const RockstarPowerSuite = () => (
  <ResumeSection
    role="Lead Software Engineer / Full Stack Designer / Animator"
    startDate="Sep 2008"
    endDate="Jul 2012"
    achievements={[
      'Developed an extensive software toolkit for internet marketing and display advertising.',
      'Implemented a cloud-based file storage system featuring scalable architecture.',
      'Constructed a 2D rendering engine capable of supporting animated outputs for marketing campaigns.',
      'Integrated market research data-mining capabilities into advertising analytics.',
      'Designed an MVC3 customer management system to optimize client operations.',
      'Provided creative direction and animation for over 4,000 business graphic templates.',
    ]}
    tags={['JavaScript', '.NET', 'MVC', 'Cloud', '2D Animation', 'Data Mining', 'Marketing Tech']}
  />
);