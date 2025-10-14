import { PageLayout } from '@/blocks/PageLayout';
import { FacilitiesManagement } from '@/blocks/Resume/ResumeSections/Pointivo/FacilitiesManagement/FacilitiesManagement';
import { Inspection } from '@/blocks/Resume/ResumeSections/Pointivo/Inspection/Inspection';
import { Patent } from '@/blocks/Resume/ResumeSections/Pointivo/Patent/Patent';
import { Telecom } from '@/blocks/Resume/ResumeSections/Pointivo/Telecom/Telecom';

const Page = () => {
  return (
    <PageLayout>
      <h1>Pointivo</h1>
      <Inspection />
      <Telecom />
      <FacilitiesManagement />
      <Patent />
    </PageLayout>
  );
};

export default Page;
