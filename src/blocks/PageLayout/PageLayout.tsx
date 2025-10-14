import { ScrollArea } from '@/components/ui/scroll-area';
import { ReactNode } from 'react';

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollArea className="flex-1">
      <article className="max-w-full mx-[10vw] py-8 flex flex-col prose prose-sm dark:prose-invert prose-a:text-primary">
        {children}
      </article>
    </ScrollArea>
  );
};
