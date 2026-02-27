import { PageLayout } from '@/blocks/PageLayout';
import { DialogueSearch } from '@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch';
import { Emmy } from '@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate';
import { ResumeSection } from '@/components/ResumeSection';

const Page = () => {
  return (
    <PageLayout>
      <h1>NICE Nexidia</h1>
      <ResumeSection
        role="Senior Software Engineer"
        startDate="Aug 2012"
        endDate="Dec 2016"
        achievements={[
          'Co-developed a phonetic search engine for the media industry featuring a REST API and supporting services.',
          'Engineered a pluggable media ingest system that interfaces seamlessly with popular asset management systems.',
          'Co-designed a web application focused on caption quality control for broadcast media.',
          'Developed a modularized JavaScript framework that facilitates rapid web application development and testing.',
          'Extended a JavaScript video player framework to support modern formats and third-party players.',
          'Co-created a high-performance document processing system incorporating monitoring capabilities.',
          'Recognized with prestigious awards including a Technical Emmy Award for Phonetic Indexing and Timing, as well as several design and innovation accolades.',
        ]}
        tags={[
          'JavaScript',
          'REST API',
          'Phonetic Search',
          'Media & Broadcast',
          'QC',
          'Caption Processing',
          'Emmy Award',
        ]}
      />
      <DialogueSearch />
      <Illuminate />
      <Emmy />
    </PageLayout>
  );
};

export default Page;