import { PageLayout } from '@/blocks/PageLayout';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate';
import { MediaCentralSearch } from '@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch';

const Page = () => {
  return (
    <PageLayout>
      <h1>Avid</h1>
      <MediaCentralSearch />
      <Illuminate />
    </PageLayout>
  );
};

export default Page;
