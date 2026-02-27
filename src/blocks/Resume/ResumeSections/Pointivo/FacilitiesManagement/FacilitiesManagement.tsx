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

export const FacilitiesManagement = () => (
  <motion.section
    className="not-prose py-3"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={item} className="flex items-center gap-3 mb-1">
      <div className="h-px flex-1 bg-primary/25" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        Facilities Management
      </span>
      <div className="h-px flex-1 bg-primary/25" />
    </motion.div>

    <motion.p variants={item} className="mb-4 text-center text-[12px] text-muted-foreground/60">
      Spatial asset management system for commercial real estate and building operations.
    </motion.p>

    <motion.div variants={item}>
      <MediaGallery
        items={[
          {
            type: 'image',
            src: '/images/portfolio/pointivo/FacilitiesManagement1.png',
            alt: 'Facilities Management dashboard',
            width: 856,
            height: 700,
          },
          {
            type: 'image',
            src: '/images/portfolio/pointivo/FacilitiesManagement2.png',
            alt: 'Facilities Management floor plan',
            width: 1024,
            height: 577,
          },
          {
            type: 'video',
            videoId: 'IRN8jhtYPcM',
            title: 'Pointivo Facility Management Promo Reel | IRE 2020',
          },
        ]}
      />
    </motion.div>
  </motion.section>
);