'use client';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface ResumeSectionProps {
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  achievements?: string[];
  tags?: string[];
  children?: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: 'easeOut' } },
};

export const ResumeSection = ({
  role,
  startDate,
  endDate,
  location = 'Atlanta, GA',
  achievements = [],
  tags = [],
  children,
  className,
}: ResumeSectionProps) => (
  <motion.div
    className={cn('not-prose py-3', className)}
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    {/* Role + Dates */}
    <motion.div
      variants={fadeSlideUp}
      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1"
    >
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-primary">
        {role}
      </span>
      <span className="text-[11px] font-mono tabular-nums text-muted-foreground">
        {startDate}
        {startDate && endDate ? ' – ' : ''}
        {endDate}
      </span>
    </motion.div>

    {/* Location */}
    <motion.p variants={fadeSlideUp} className="text-[11px] text-muted-foreground/60 mb-3">
      {location}
    </motion.p>

    {/* Accent rule */}
    <motion.div
      variants={fadeSlideUp}
      className="h-px mb-4 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
    />

    {/* Achievements */}
    {achievements.length > 0 && (
      <motion.ul className="space-y-2.5 mb-4 p-0 m-0 list-none" variants={containerVariants}>
        {achievements.map((text, i) => (
          <motion.li
            key={i}
            variants={fadeSlideUp}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed"
          >
            <span className="text-primary shrink-0 mt-[3px] text-[10px] select-none">◆</span>
            <span className="text-foreground/85">{text}</span>
          </motion.li>
        ))}
      </motion.ul>
    )}

    {/* Tech tags */}
    {tags.length > 0 && (
      <motion.div variants={fadeSlideUp} className="flex flex-wrap gap-1.5 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-primary/70"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    )}

    {/* Children – media, extra content */}
    {children && (
      <motion.div variants={fadeSlideUp} className="mt-5 space-y-5">
        {children}
      </motion.div>
    )}
  </motion.div>
);