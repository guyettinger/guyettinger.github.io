import { UnityEssentialsPathway } from '@/blocks/Learning/LearningSections/Unity/UnityEssentialsPathway/UnityEssentialsPathway';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-8 flex flex-col prose prose-xs dark:prose-invert">
        <h1>Unity Essentials Pathway</h1>
        <UnityEssentialsPathway />
      </article>
    </ScrollArea>
  );
};

export default Page;
