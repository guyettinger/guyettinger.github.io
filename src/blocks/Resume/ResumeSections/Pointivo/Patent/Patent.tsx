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

export const Patent = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Patent
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.p variants={item} className="mb-4 text-center text-[12px] text-muted-foreground/60">
      3D visualization and interaction with point cloud data from sensor capture.
    </motion.p>

    <motion.div
      variants={item}
      className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white/5"
    >
      <Image
        src={'/images/portfolio/pointivo/Patent.png'}
        alt={'Patent diagram'}
        width={600}
        height={374}
        className="w-full"
      />
    </motion.div>

    <motion.div
      variants={item}
      className="mt-4 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3"
    >
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-primary/50">
        US11216663B1
      </p>
      <p className="text-[12px] leading-relaxed text-foreground/75">
        Systems and methods for generating 3D information on a user display from processing of
        sensor data for objects, components or features of interest in a scene and user navigation
        thereon.
      </p>
    </motion.div>

    <motion.div variants={item} className="mt-4">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-primary/45">
        Press
      </p>
      <a
        href="https://www.prnewswire.com/news-releases/pointivo-lands-10th-patent-increasing-coverage-of-the-drone-analytics-market-301457346.html"
        target="_blank"
        rel="noreferrer"
        className="text-[12px] text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
      >
        Pointivo Lands 10th Patent Increasing Coverage of the Drone Analytics Market →
      </a>
    </motion.div>
  </motion.section>
);