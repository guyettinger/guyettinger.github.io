import { About, Contact, Hero, LearningList, ProjectList, ResumeList, Skills } from '@/blocks';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <ScrollArea className="flex-1">
      <div className="px-[10vw] flex flex-col justify-center gap-12 py-8">
        <Hero />
        <About />
        <Skills />
        <ResumeList />
        <ProjectList />
        <LearningList />
        <Contact />
      </div>
    </ScrollArea>
  );
}
