import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/blocks/Header/Header.types";
import { projectData } from "@/data/projectData";
import { resumeData } from "@/data/resumeData";
import { learningData } from "@/data/learningData";

export const Header = ({ className, ...rest }: HeaderProps) => {
    return (
        <header className={`w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className ?? ''}`} {...rest}>
            <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
                <div className="flex items-center gap-2">
                    <div className="mx-2">
                        <Image src='/images/avatar.png'
                               className="rounded-full"
                               style={{ margin: 0, verticalAlign: "middle" }}
                               width={48}
                               height={48}
                               alt="Guy's Avatar"
                               priority={true}/>
                    </div>
                    <Link href="/" className="text-lg font-medium">
                        Guy Ettinger
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-3">
                    <details className="group relative">
                        <summary className="cursor-pointer select-none rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                            <i className="fa-solid fa-scroll mr-2"/> Resume
                        </summary>
                        <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                            <Link href="/pdfs/Resume-Guy-Ettinger-08-11-2024.pdf" className="block rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
                                Resume 2024
                            </Link>
                            <Link href="/pdfs/Leadership-Guy-Ettinger-08-02-2024.pdf" className="block rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
                                Leadership Summary 2024
                            </Link>
                        </div>
                    </details>

                    <details className="group relative">
                        <summary className="cursor-pointer select-none rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                            <i className="fa-solid fa-photo-film mr-2"/> Portfolio
                        </summary>
                        <div className="absolute right-0 mt-2 w-64 rounded-md border bg-popover p-1 text-popover-foreground shadow-md max-h-[70vh] overflow-auto">
                            {resumeData?.map((resumeItem) => (
                                <Link key={resumeItem.id} href={resumeItem.link} className="block rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
                                    {resumeItem.company}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <details className="group relative">
                        <summary className="cursor-pointer select-none rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                            <i className="fa-brands fa-github mr-2"/> Github Projects
                        </summary>
                        <div className="absolute right-0 mt-2 w-80 rounded-md border bg-popover p-2 text-popover-foreground shadow-md max-h-[70vh] overflow-auto space-y-1">
                            {projectData?.map((project) => (
                                <div key={project.id} className="rounded-md border p-2">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <i className="fa-regular fa-folder-open"/>
                                        <span>{project.title}</span>
                                    </div>
                                    <div className="mt-1 flex gap-2 pl-5">
                                        {project.gitHubLink && (
                                            <Link href={project.gitHubLink} target="_blank" className="inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs hover:bg-accent">
                                                <i className="fa-brands fa-github"/> Github
                                            </Link>
                                        )}
                                        {project.demoLink && (
                                            <Link href={project.demoLink} target="_blank" className="inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs hover:bg-accent">
                                                <i className="fa-solid fa-link"/> Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </details>

                    <details className="group relative">
                        <summary className="cursor-pointer select-none rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                            <i className="fa-solid fa-graduation-cap mr-2"/> Learning
                        </summary>
                        <div className="absolute right-0 mt-2 w-64 rounded-md border bg-popover p-1 text-popover-foreground shadow-md max-h-[70vh] overflow-auto">
                            {learningData?.map((learning) => (
                                <Link key={learning.id} href={learning.link} className="block rounded-sm px-2 py-1.5 text-sm hover:bg-accent">
                                    {learning.title}
                                </Link>
                            ))}
                        </div>
                    </details>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/guyettinger" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-xl">
                        <i className="fa-brands fa-github"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/guyettinger/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-xl">
                        <i className="fa-brands fa-linkedin"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}