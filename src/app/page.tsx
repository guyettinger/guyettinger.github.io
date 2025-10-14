import { About, Contact, Hero, LearningList, ProjectList, ResumeList, Skills } from '@/blocks';
import { PageLayout } from '@/blocks/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Skills />
      <ResumeList />
      <ProjectList />
      <LearningList />
      <Contact />
    </PageLayout>
  );
}
