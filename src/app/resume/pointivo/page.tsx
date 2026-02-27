import { PageLayout } from '@/blocks/PageLayout';
import { FacilitiesManagement } from '@/blocks/Resume/ResumeSections/Pointivo/FacilitiesManagement/FacilitiesManagement';
import { Inspection } from '@/blocks/Resume/ResumeSections/Pointivo/Inspection/Inspection';
import { Patent } from '@/blocks/Resume/ResumeSections/Pointivo/Patent/Patent';
import { Telecom } from '@/blocks/Resume/ResumeSections/Pointivo/Telecom/Telecom';
import { ResumeSection } from '@/components/ResumeSection';

const Page = () => {
  return (
    <PageLayout>
      <h1>Pointivo</h1>
      <ResumeSection
        role="Lead Software Engineer / Director of UX"
        startDate="Jul 2018"
        endDate="May 2023"
        achievements={[
          'Engineered a comprehensive application suite for the largest tower owner in the United States, effectively managing millions in contract compliance.',
          'Established a modular product framework to accelerate application development with a component system and white-label theming capabilities.',
          'Co-invented Patent US11216663B1 for 3D visualization and interaction with point cloud data.',
          'Delivered specialized solutions for tower audits, telecom mapping, roofing, solar, and facilities management.',
          'Conducted extensive user research and prototyping to ensure customer satisfaction across complex B2B workflows.',
        ]}
        tags={[
          'TypeScript',
          'React',
          '3D Visualization',
          'Point Cloud',
          'WebGL',
          'AWS',
          'B2B',
          'UX Design',
        ]}
      />
      <Inspection />
      <Telecom />
      <FacilitiesManagement />
      <Patent />
    </PageLayout>
  );
};

export default Page;