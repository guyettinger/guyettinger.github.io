import { PageLayout } from '@/blocks/PageLayout';
import { Gainesville } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville';
import { InmanPark } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark';

const Page = () => {
  return (
    <PageLayout>
      <h1>Inman Perk Coffee</h1>
      <InmanPark />
      <Gainesville />
    </PageLayout>
  );
};

export default Page;
