import { ScrollArea } from "@/components/ui/scroll-area";
import { Hero, About, Skills, Contact, ProjectList, ResumeList, LearningList } from "@/blocks";

export default function Home() {
    return (
        <ScrollArea className="flex-1">
            <div className="px-[10vw] flex flex-col justify-center gap-12 py-8">
                <Hero/>
                <About/>
                <Skills/>
                <ResumeList/>
                <ProjectList/>
                <LearningList/>
                <Contact/>
            </div>
        </ScrollArea>
    )
}
