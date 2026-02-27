'use client';
import { MediaGallery } from '@/components/MediaGallery';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

export const MediaCentralSearch = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Media Central
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.p variants={item} className="mb-4 text-center text-[12px] text-muted-foreground/60">
      Phonetic search and discovery platform for professional media asset management.
    </motion.p>

    <motion.div variants={item}>
      <MediaGallery
        items={[
          {
            type: 'image',
            src: '/images/portfolio/avid/AvidSearchApp.png',
            alt: 'Avid Media Central Search App',
            width: 852,
            height: 532,
          },
          {
            type: 'video',
            videoId: 'cKCPyCIRHVw',
            title: 'Search App Basics',
          },
        ]}
      />
    </motion.div>
  </motion.section>
);