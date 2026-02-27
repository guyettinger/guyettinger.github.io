'use client';
import { MediaGallery } from '@/components/MediaGallery';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

export const DialogueSearch = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Dialogue Search
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.p variants={item} className="mb-4 text-center text-[12px] text-muted-foreground/60">
      Phonetic search engine for broadcast media archives — search by spoken word, not just
      metadata.
    </motion.p>

    <motion.div variants={item}>
      <MediaGallery
        items={[
          {
            type: 'image',
            src: '/images/portfolio/nexidia/DialogueSearch1.png',
            alt: 'Dialogue Search results view',
            width: 1366,
            height: 768,
          },
          {
            type: 'image',
            src: '/images/portfolio/nexidia/DialogueSearch2.png',
            alt: 'Dialogue Search timeline',
            width: 1366,
            height: 768,
          },
          {
            type: 'image',
            src: '/images/portfolio/nexidia/DialogueSearch3.png',
            alt: 'Dialogue Search clips panel',
            width: 1366,
            height: 768,
          },
          {
            type: 'image',
            src: '/images/portfolio/nexidia/DialogueSearchVideoPlayer.png',
            alt: 'Dialogue Search video player',
            width: 339,
            height: 671,
          },
          {
            type: 'video',
            videoId: 'Sj75JJRucsY',
            title: "Searching For The Right Word (Nexidia's Dialogue Search)",
          },
          {
            type: 'video',
            videoId: 'eLxP5MKKpk4',
            title: 'Beyond Metadata: Search Your MAM Assets Using Nexidia Dialogue Search',
          },
        ]}
      />
    </motion.div>
  </motion.section>
);