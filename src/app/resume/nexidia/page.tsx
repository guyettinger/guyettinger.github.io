import { DialogueSearch } from '@/blocks/Resume/ResumeSections/Nexidia/DialogueSearch/DialogueSearch';
import { Emmy } from '@/blocks/Resume/ResumeSections/Nexidia/Emmy/Emmy';
import { Illuminate } from '@/blocks/Resume/ResumeSections/Nexidia/Illuminate/Illuminate';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-semibold">Nexidia</h1>
        <DialogueSearch />
        <Illuminate />
        <Emmy />
      </div>
    </ScrollArea>
  );
};

export default Page;
