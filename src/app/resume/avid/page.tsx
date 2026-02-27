import { PageLayout } from '@/blocks/PageLayout';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate';
import { MediaCentralSearch } from '@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch';
import { ResumeSection } from '@/components/ResumeSection';

const Page = () => {
  return (
    <PageLayout>
      <h1>Avid</h1>
      <ResumeSection
        role="Principal Software Development Engineer"
        startDate="Oct 2016"
        endDate="Jul 2018"
        achievements={[
          'Designed and implemented phonetic indexing interfaces specifically for the media and entertainment industry.',
          'Successfully transitioned Nexidia products into the Avid ecosystem, including Dialogue Search and Cloud|UX platforms.',
          'Delivered desktop and web applications tailored for professional media workflows.',
        ]}
        tags={[
          'TypeScript',
          'JavaScript',
          'React',
          'REST API',
          'Phonetic Search',
          'Media & Entertainment',
          'Desktop Apps',
        ]}
      />
      <MediaCentralSearch />
      <Illuminate />
    </PageLayout>
  );
};

export default Page;