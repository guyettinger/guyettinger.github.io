import { UnityARPathway } from '@/blocks/Learning/LearningSections/Unity/UnityARPathway/UnityARPathway';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-8 flex flex-col prose prose-xs dark:prose-invert">
        <h1>Unity AR Pathway</h1>
        <UnityARPathway />
      </article>
    </ScrollArea>
  );
};

export default Page;
