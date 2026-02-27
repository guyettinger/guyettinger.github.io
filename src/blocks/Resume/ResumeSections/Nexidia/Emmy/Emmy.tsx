'use client';
import { MediaGallery } from '@/components/MediaGallery';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const Emmy = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Emmy Award
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.div
      variants={item}
      className="mb-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-center"
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70">
        2015 Technical Emmy Award
      </p>
      <p className="mt-0.5 text-[12px] text-muted-foreground/70">
        Phonetic Indexing and Timing · National Academy of Television Arts &amp; Sciences
      </p>
    </motion.div>

    <motion.div variants={item}>
      <MediaGallery
        items={[
          {
            type: 'image',
            src: '/images/portfolio/nexidia/Emmy.png',
            alt: 'Technical Emmy Award',
            width: 720,
            height: 960,
          },
          {
            type: 'video',
            videoId: '6Z9UNWp7vTQ',
            title: 'Emmy Award Presentation',
          },
        ]}
      />
    </motion.div>
  </motion.section>
);