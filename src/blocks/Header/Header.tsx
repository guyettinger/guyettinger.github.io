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
import { Switch } from '@/components/ui/switch';
import { projectData } from '@/data/projectData';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const Header = ({ className, ...rest }: HeaderProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [rotationDeg, setRotationDeg] = useState<number>(0);
  const [laserMode, setLaserMode] = useState<boolean>(false);

  type Beam = { id: number; x1: number; y1: number; x2: number; y2: number; color: string };
  const [beams, setBeams] = useState<Beam[]>([]);
  const beamIdRef = useRef(0);

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

    const handleClick = (e: MouseEvent) => {
      const img = imgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const tx = e.clientX;
      const ty = e.clientY;
      // Direction from center to target
      const vx = tx - cx;
      const vy = ty - cy;
      const len = Math.hypot(vx, vy) || 1;
      const ux = vx / len;
      const uy = vy / len;
      // Perpendicular for two-eye offset
      const px = -uy;
      const py = ux;
      const offset = 6; // px separation between beams
      const start1x = cx + px * offset;
      const start1y = cy + py * offset;
      const start2x = cx - px * offset;
      const start2y = cy - py * offset;

      setBeams((prev) => [
        ...prev,
        { id: ++beamIdRef.current, x1: start1x, y1: start1y, x2: tx, y2: ty, color: '#8cc81f' },
        { id: ++beamIdRef.current, x1: start2x, y1: start2y, x2: tx, y2: ty, color: '#6dabda' },
      ]);

      // Clean up beams after short animation
      window.setTimeout(() => {
        setBeams((prev) => prev.slice(2));
      }, 100);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Small component to animate a single laser line
  const LaserLine = ({ beam }: { beam: Beam }) => {
    const length = Math.hypot(beam.x2 - beam.x1, beam.y2 - beam.y1);
    const [dashOffset, setDashOffset] = useState<number>(length);
    useEffect(() => {
      // Animate from full offset to 0 on mount
      const raf = requestAnimationFrame(() => setDashOffset(0));
      return () => cancelAnimationFrame(raf);
    }, [length]);

    return (
      <line
        x1={beam.x1}
        y1={beam.y1}
        x2={beam.x2}
        y2={beam.y2}
        stroke={beam.color}
        strokeWidth={2.5}
        strokeLinecap="round"
        style={{
          transition: 'stroke-dashoffset 50ms linear',
          strokeDasharray: length,
          strokeDashoffset: dashOffset,
        }}
      />
    );
  };

  return (
    <header className={cn('w-full bg-background', className)} {...rest}>
      <div className="mx-auto flex h-[60px] items-center justify-start px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex items-center gap-2 z-[2000]">
          <div className="mx-2">
            <Link href="/" className="text-lg font-medium no-underline hover:underline">
              <Image
                ref={imgRef}
                src="/images/avatar.png"
                className="rounded-full"
                style={{
                  margin: 0,
                  verticalAlign: 'middle',
                  transform: `rotate(${rotationDeg}deg)`,
                  transformOrigin: '50% 50%',
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
                Resume
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
                Portfolio
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
                Github Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr] list-none">
                  {projectData?.map((project) => (
                    <li key={project.id}>
                      <div className="flex items-center gap-2 text-sm text-foreground font-medium">
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
                Learning
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
          <label htmlFor="laser-mode" className="text-sm text-foreground font-extralight">{laserMode ? 'with lasers' : 'without lasers'}</label>
          <Switch
            id="laser-mode"
            title="laser mode"
            checked={laserMode}
            onCheckedChange={(checked) => setLaserMode(checked)}
          />
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

      {/* Laser overlay */}
      {laserMode && beams.length > 0 && (
        <svg className="pointer-events-none fixed inset-0 z-[1000]" width="100%" height="100%">
          {beams.map((b) => (
            <LaserLine key={b.id} beam={b} />
          ))}
        </svg>
      )}
    </header>
  );
};
