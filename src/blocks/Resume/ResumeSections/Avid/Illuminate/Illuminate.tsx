'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

export const Illuminate = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Illuminate
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.p variants={item} className="mb-4 text-center text-[12px] text-muted-foreground/60">
      Analytics and insights dashboard for media operations and business intelligence.
    </motion.p>

    <motion.div
      variants={item}
      className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white/5"
    >
      <Image
        src={'/images/portfolio/avid/AvidIlluminate.png'}
        alt={'Avid Illuminate analytics dashboard'}
        width={800}
        height={415}
        className="w-full"
      />
    </motion.div>
  </motion.section>
);