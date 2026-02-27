'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const AppliedGlobalTechnologies = () => (
  <ResumeSection
    role="Senior Research Scientist"
    startDate="Nov 2001"
    endDate="Dec 2003"
    achievements={[
      'Designed cutting-edge software systems enabling seamless data sharing across web, desktop, and video platforms using .NET Framework and ASP.NET.',
      'Invented a system and method for sharing, viewing, and controlling multiple information systems (Patent Application 20040103151).',
      'Co-invented a system for video conferencing endpoint interaction (Patent Application 200410973008).',
      'Developed solutions to integrate disparate information systems across various platforms.',
    ]}
    tags={['.NET', 'ASP.NET', 'Video Conferencing', 'Cross-platform', 'Patents', 'Research']}
  />
);