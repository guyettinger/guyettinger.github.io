'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const GeorgiaTech = () => (
  <ResumeSection
    role="CS Teaching Assistant – Systems and Networks"
    startDate="Jan 1999"
    endDate="Oct 2001"
    achievements={[
      'Assisted in teaching Systems and Networks courses, focusing on key technical competencies.',
      'Supported grading of ANSI C system and networking projects.',
      'Facilitated student understanding of core CS concepts: system architecture design, device controllers, threads, and reliable transfer control protocols.',
      'Produced graphics and teaching aids for demonstrating essential computer science fundamentals.',
    ]}
    tags={['ANSI C', 'Systems', 'Networks', 'Teaching', 'Computer Science']}
  />
);