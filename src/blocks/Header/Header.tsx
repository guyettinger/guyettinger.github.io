'use client';
import { HeaderProps } from '@/blocks/Header/Header.types';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { projectData } from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const Header = ({ className, ...rest }: HeaderProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [rotationDeg, setRotationDeg] = useState<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const img = imgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angleRad = Math.atan2(dy, dx); // 0 deg points to the right
      const angleDeg = (-45 + angleRad * 180) / Math.PI;
      setRotationDeg(angleDeg);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <header className={`w-full bg-background ${className ?? ''}`} {...rest}>
      <div className="mx-auto flex h-[60px] items-center justify-start px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex items-center gap-2">
          <div className="mx-2">
            <Link href="/" className="text-lg font-medium no-underline hover:underline">
              <Image
                ref={imgRef}
                src="/images/avatar.png"
                className="rounded-full"
                style={{
                  margin: 0,
                  verticalAlign: 'middle',
                  transform: `rotate(${rotationDeg}deg)` ,
                  transformOrigin: '50% 50%'
                }}
                width={80}
                height={80}
                alt="Guy Ettinger"
                priority={true}
              />
            </Link>
          </div>
        </div>

        {/* Navigation with submenus */}
        <NavigationMenu className="hidden md:flex flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <i className="fa-solid fa-scroll mr-2" /> Resume
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr] list-none">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pdfs/Resume-Guy-Ettinger-2025.pdf"
                        target="_blank"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Resume PDF
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pdfs/Leadership-Guy-Ettinger-08-02-2024.pdf"
                        target="_blank"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Leadership Summary PDF
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <i className="fa-solid fa-photo-film mr-2" /> Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] list-none">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resume/pointivo"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Pointivo
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resume/avid"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Avid
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resume/nexidia"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Nexidia
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resume/inmanperkcoffee"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Inman Perk Coffee
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <i className="fa-brands fa-github mr-2" /> Github Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr] list-none">
                  {projectData?.map((project) => (
                    <li key={project.id}>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <i className="fa-regular fa-folder-open" />
                        <span>{project.title}</span>
                      </div>
                      {project.description && (
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <span className="text-xs text-muted-foreground">
                            {project.description}
                          </span>
                        </div>
                      )}
                      <div className="mt-1 flex gap-2">
                        {project.gitHubLink && (
                          <NavigationMenuLink asChild>
                            <Link
                              href={project.gitHubLink}
                              target="_blank"
                              className="block rounded-md px-3 py-1.5 text-xs hover:bg-accent no-underline text-secondary-foreground"
                            >
                              <i className="fa-brands fa-github" /> Github
                            </Link>
                          </NavigationMenuLink>
                        )}
                        {project.demoLink && (
                          <NavigationMenuLink asChild>
                            <Link
                              href={project.demoLink}
                              target="_blank"
                              className="block rounded-md px-3 py-1.5 text-xs hover:bg-accent no-underline text-secondary-foreground"
                            >
                              <i className="fa-solid fa-link" /> Demo
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <i className="fa-solid fa-graduation-cap mr-2" /> Learning
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] list-none">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/learning/unity/unityessentialspathway"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Unity Essentials Pathway
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/learning/unity/unityarpathway"
                        className="block rounded-md px-3 py-1.5 text-sm hover:bg-accent no-underline text-secondary-foreground"
                      >
                        Unity AR Pathway
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="https://github.com/guyettinger"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="fa-brands fa-github" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/guyettinger/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="fa-brands fa-linkedin" />
          </Link>
        </div>
      </div>
    </header>
  );
};
