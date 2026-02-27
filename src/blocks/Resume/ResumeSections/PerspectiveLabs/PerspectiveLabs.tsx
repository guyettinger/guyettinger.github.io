'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const PerspectiveLabs = () => (
  <ResumeSection
    role="Lead Software Engineer"
    startDate="Jan 2004"
    endDate="Apr 2005"
    achievements={[
      'Developed a many-to-many real-time data collaboration software system.',
      'Organized and led a software development team working under aggressive schedules.',
      'Successfully deployed complex software solutions across various organizations, including military training facilities.',
      'Delivered intricate software solutions within stringent deadlines.',
    ]}
    tags={['Real-time Collaboration', 'Team Lead', 'Full Stack', 'Enterprise Deployment']}
  />
);