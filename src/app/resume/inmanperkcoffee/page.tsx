import { Gainesville } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/Gainesville/Gainesville';
import { InmanPark } from '@/blocks/Resume/ResumeSections/InmanPerkCoffee/InmanPark/InmanPark';
import { ScrollArea } from '@/components/ui/scroll-area';

const Page = () => {
  return (
    <ScrollArea className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-8 flex flex-col prose prose-xs dark:prose-invert">
        <h1>Inman Perk Coffee</h1>
        <InmanPark />
        <Gainesville />
      </article>
    </ScrollArea>
  );
};

export default Page;
