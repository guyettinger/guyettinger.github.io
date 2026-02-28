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
import { resumeData } from '@/data/resumeData';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Beam = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
};

type LaserStage = 'powerup' | 'fire' | 'burn';

function makeSparks(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    angle: (i / n) * 360 + Math.random() * 28 - 14,
    dist: 14 + Math.random() * 26,
  }));
}

// ── LaserLine lives outside Header to prevent remount on every render ──
const LaserLine = memo(function LaserLine({
  beam,
  onDone,
}: {
  beam: Beam;
  onDone: (id: number) => void;
}) {
  const [stage, setStage] = useState<LaserStage>('powerup');
  const sparks = useMemo(() => makeSparks(14), []);
  const beamPath = `M ${beam.x1} ${beam.y1} L ${beam.x2} ${beam.y2}`;
  const primePath = `M ${beam.x1} ${beam.y1} L ${beam.x1 + (beam.x2 - beam.x1) * 0.28} ${
    beam.y1 + (beam.y2 - beam.y1) * 0.28
  }`;
  const glowId = `lg-${beam.id}`;

  useEffect(() => {
    const t1 = setTimeout(() => setStage('fire'), 450);
    const t2 = setTimeout(() => setStage('burn'), 600);
    const t3 = setTimeout(() => onDone(beam.id), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [beam.id, onDone]);

  return (
    <g>
      <defs>
        <filter id={glowId} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ──────────────── POWER UP ──────────────── */}
      <AnimatePresence>
        {stage === 'powerup' && (
          <g key={`pu-${beam.id}`}>
            {/* Outer charging halo */}
            <motion.circle
              cx={beam.x1}
              cy={beam.y1}
              fill={beam.color}
              filter={`url(#${glowId})`}
              initial={{ r: 0, opacity: 0 }}
              animate={{
                r: [0, 23, 15, 31, 20, 34, 23],
                opacity: [0, 0.4, 0.25, 0.55, 0.35, 0.6, 0.45],
              }}
              exit={{ r: 90, opacity: 0, transition: { duration: 0.13, ease: 'easeOut' } }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
            {/* Inner white core */}
            <motion.circle
              cx={beam.x1}
              cy={beam.y1}
              fill="white"
              filter={`url(#${glowId})`}
              initial={{ r: 0, opacity: 0 }}
              animate={{
                r: [0, 6, 4, 7.5, 4.75, 8, 5.5],
                opacity: [0, 1, 0.7, 1, 0.8, 1, 0.9],
              }}
              exit={{ r: 30, opacity: 0, transition: { duration: 0.12, ease: 'easeOut' } }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
            {/* Energy ring pulse */}
            <motion.circle
              cx={beam.x1}
              cy={beam.y1}
              fill="none"
              stroke={beam.color}
              strokeWidth={2}
              filter={`url(#${glowId})`}
              initial={{ r: 5, opacity: 0 }}
              animate={{
                r: [5, 25, 8, 28, 10],
                opacity: [0, 0.6, 0.1, 0.7, 0.15],
              }}
              exit={{ r: 40, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.45 }}
            />
            {/* Priming arc toward target */}
            <motion.path
              d={primePath}
              stroke={beam.color}
              strokeWidth={1.5}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0.9, 0.5, 1, 0.7, 1],
                opacity: [0, 0.45, 0.2, 0.55, 0.25, 0.5],
              }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              transition={{ duration: 0.45 }}
            />
          </g>
        )}
      </AnimatePresence>

      {/* ──────────────── BEAM (fire → burn) ──────────────── */}
      {(stage === 'fire' || stage === 'burn') && (
        <>
          {/* Wide outer glow */}
          <motion.path
            d={beamPath}
            stroke={beam.color}
            strokeWidth={20}
            strokeLinecap="round"
            fill="none"
            filter={`url(#${glowId})`}
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={stage === 'fire' ? { pathLength: 1, opacity: 0.5 } : { opacity: 0 }}
            transition={
              stage === 'fire'
                ? { pathLength: { duration: 0.12, ease: [0.05, 0, 0.8, 1] } }
                : { opacity: { duration: 1.0, ease: 'easeOut' } }
            }
          />
          {/* Mid colored beam */}
          <motion.path
            d={beamPath}
            stroke={beam.color}
            strokeWidth={6}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={stage === 'fire' ? { pathLength: 1, opacity: 1 } : { opacity: 0 }}
            transition={
              stage === 'fire'
                ? { pathLength: { duration: 0.11, ease: [0.05, 0, 0.8, 1] } }
                : { opacity: { duration: 0.75, ease: 'easeOut' } }
            }
          />
          {/* Bright white core */}
          <motion.path
            d={beamPath}
            stroke="white"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={stage === 'fire' ? { pathLength: 1, opacity: 1 } : { opacity: 0 }}
            transition={
              stage === 'fire'
                ? { pathLength: { duration: 0.1, ease: [0.05, 0, 0.8, 1] } }
                : { opacity: { duration: 0.55, ease: 'easeOut' } }
            }
          />
        </>
      )}

      {/* ──────────────── FIRE: impact flash ──────────────── */}
      {stage === 'fire' && (
        <motion.circle
          cx={beam.x2}
          cy={beam.y2}
          fill="white"
          filter={`url(#${glowId})`}
          initial={{ r: 0, opacity: 0 }}
          animate={{ r: [0, 48, 32], opacity: [0, 1, 0.7] }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
        />
      )}

      {/* ──────────────── BURN: impact effects ──────────────── */}
      {stage === 'burn' && (
        <>
          {/* Primary shockwave ring */}
          <motion.circle
            cx={beam.x2}
            cy={beam.y2}
            fill="none"
            stroke={beam.color}
            strokeWidth={3}
            filter={`url(#${glowId})`}
            initial={{ r: 0, opacity: 1 }}
            animate={{ r: 72, opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          />
          {/* Secondary shockwave (delayed) */}
          <motion.circle
            cx={beam.x2}
            cy={beam.y2}
            fill="none"
            stroke="white"
            strokeWidth={1.5}
            initial={{ r: 0, opacity: 0.85 }}
            animate={{ r: 36, opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          />
          {/* Tertiary ring */}
          <motion.circle
            cx={beam.x2}
            cy={beam.y2}
            fill="none"
            stroke={beam.color}
            strokeWidth={1}
            initial={{ r: 0, opacity: 0.6 }}
            animate={{ r: 18, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
          />
          {/* Ember core burn */}
          <motion.circle
            cx={beam.x2}
            cy={beam.y2}
            fill={beam.color}
            filter={`url(#${glowId})`}
            initial={{ r: 20, opacity: 1 }}
            animate={{ r: [20, 14, 8, 3, 0], opacity: [1, 0.8, 0.5, 0.2, 0] }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
          {/* White hot center */}
          <motion.circle
            cx={beam.x2}
            cy={beam.y2}
            fill="white"
            initial={{ r: 9, opacity: 1 }}
            animate={{ r: [9, 5, 0], opacity: [1, 0.6, 0] }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          {/* Sparks flying outward */}
          {sparks.map((s, i) => {
            const tx = beam.x2 + Math.cos((s.angle * Math.PI) / 180) * s.dist;
            const ty = beam.y2 + Math.sin((s.angle * Math.PI) / 180) * s.dist;
            return (
              <motion.path
                key={i}
                d={`M ${beam.x2} ${beam.y2} L ${tx} ${ty}`}
                stroke={i % 3 === 0 ? 'white' : beam.color}
                strokeWidth={i % 4 === 0 ? 2 : 1.5}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: [0, 1, 1], opacity: [1, 0.9, 0] }}
                transition={{ duration: 0.5 + i * 0.015, delay: i * 0.018, ease: 'easeOut' }}
              />
            );
          })}
        </>
      )}
    </g>
  );
});

export const Header = ({ className, ...rest }: HeaderProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [rotationDeg, setRotationDeg] = useState<number>(0);
  const [laserMode, setLaserMode] = useState<boolean>(false);
  const [beams, setBeams] = useState<Beam[]>([]);
  const beamIdRef = useRef(0);
  const laserModeRef = useRef(laserMode);

  useEffect(() => {
    laserModeRef.current = laserMode;
  }, [laserMode]);

  const removeBeam = useCallback((id: number) => {
    setBeams((prev) => prev.filter((b) => b.id !== id));
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const img = imgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (-45 + angleRad * 180) / Math.PI;
      setRotationDeg(angleDeg);
    };

    const handleClick = (e: MouseEvent) => {
      if (!laserModeRef.current) return;
      const img = imgRef.current;
      if (!img) return;
      const rect = img.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const tx = e.clientX;
      const ty = e.clientY;
      const vx = tx - cx;
      const vy = ty - cy;
      const len = Math.hypot(vx, vy) || 1;
      const ux = vx / len;
      const uy = vy / len;
      const px = -uy;
      const py = ux;
      const offset = 6;
      const id1 = ++beamIdRef.current;
      const id2 = ++beamIdRef.current;
      setBeams((prev) => [
        ...prev,
        { id: id1, x1: cx + px * offset, y1: cy + py * offset, x2: tx, y2: ty, color: '#8cc81f' },
        { id: id2, x1: cx - px * offset, y1: cy - py * offset, x2: tx, y2: ty, color: '#6dabda' },
      ]);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className={cn('w-full bg-background', className)} {...rest}>
      <div className="mx-auto flex h-[60px] items-center justify-start px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex items-center gap-2 z-[2000]">
          <div className="mx-2">
            <Link href="/" className="text-lg font-medium no-underline hover:underline">
              <Image
                ref={imgRef}
                src="/images/logo.svg"
                className="rounded-full bg-white"
                style={{
                  margin: 0,
                  verticalAlign: 'middle',
                  transform: `rotate(${rotationDeg}deg)`,
                  transformOrigin: '50% 50%',
                }}
                width={48}
                height={48}
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
              <NavigationMenuTrigger>Resume</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr] list-none">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/pdfs/Resume-Guy-Ettinger-2026.pdf"
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
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[560px] lg:grid-cols-2 list-none">
                  {resumeData.map((entry) => (
                    <li key={entry.id}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={entry.link}
                          className="flex flex-col rounded-md px-3 py-2 hover:bg-accent no-underline"
                        >
                          <span className="text-sm text-secondary-foreground">{entry.company}</span>
                          <span className="text-[11px] text-muted-foreground">{entry.title}</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Github Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr] list-none">
                  {projectData?.map((project) => (
                    <li key={project.id}>
                      <div className="flex items-center gap-2 text-sm text-secondary-foreground font-medium">
                        <span>{project.title}</span>
                      </div>
                      {project.description && (
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <span className="text-xs text-muted-foreground">{project.description}</span>
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
              <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
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
          <label htmlFor="laser-mode" className="text-sm text-foreground font-extralight">
            {laserMode ? 'with lasers' : 'without lasers'}
          </label>
          <Switch
            id="laser-mode"
            title="laser mode"
            checked={laserMode}
            onCheckedChange={(checked) => setLaserMode(checked)}
          />
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
      {beams.length > 0 && (
        <svg className="pointer-events-none fixed inset-0 z-[1000]" width="100%" height="100%">
          <AnimatePresence>
            {beams.map((b) => (
              <LaserLine key={b.id} beam={b} onDone={removeBeam} />
            ))}
          </AnimatePresence>
        </svg>
      )}
    </header>
  );
};