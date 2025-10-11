import { DialogueSearch } from '@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch';
import { Emmy } from '@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-8 flex flex-col prose prose-xs dark:prose-invert">
        <h1>Nexidia</h1>
        <DialogueSearch />
        <Illuminate />
        <Emmy />
      </article>
    </ScrollArea>
  );
};

export default Page;
