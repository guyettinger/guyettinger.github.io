import { PageLayout } from '@/blocks/PageLayout';
import { DialogueSearch } from '@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch';
import { Emmy } from '@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate';

const Page = () => {
  return (
    <PageLayout>
      <h1>Nexidia</h1>
      <DialogueSearch />
      <Illuminate />
      <Emmy />
    </PageLayout>
  );
};

export default Page;
