import { Illuminate } from '@/blocks/Resume/ResumeSections/Avid/Illuminate/Illuminate';
import { MediaCentralSearch } from '@/blocks/Resume/ResumeSections/Avid/MediaCentralSearch/MediaCentralSearch';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-8 flex flex-col prose prose-xs dark:prose-invert">
        <h1>Avid</h1>
        <MediaCentralSearch />
        <Illuminate />
      </article>
    </ScrollArea>
  );
};

export default Page;
