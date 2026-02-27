import { PageLayout } from '@/blocks/PageLayout';
import { GeorgiaTech } from '@/blocks/Resume/ResumeSections/GeorgiaTech/GeorgiaTech';

const Page = () => {
  return (
    <PageLayout>
      <h1>Georgia Institute of Technology</h1>
      <GeorgiaTech />
    </PageLayout>
  );
};

export default Page;