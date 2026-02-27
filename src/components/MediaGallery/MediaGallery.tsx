'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useState } from 'react';

export interface MediaGalleryItem {
  type: 'image' | 'video';
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  videoId?: string;
  title?: string;
}

interface MediaGalleryProps {
  items: MediaGalleryItem[];
  className?: string;
}

export const MediaGallery = ({ items, className }: MediaGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const activeItem = selected !== null ? items[selected] : null;

  const cols =
    items.length === 1
      ? 'grid-cols-1'
      : items.length === 2
        ? 'grid-cols-2'
        : 'grid-cols-2 sm:grid-cols-3';

  return (
    <>
      <div className={cn('grid gap-2', cols, className)}>
        {items.map((media, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative overflow-hidden rounded-lg shadow-md ring-1 ring-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {media.type === 'image' ? (
              <Image
                src={media.src!}
                alt={media.alt ?? ''}
                width={media.width ?? 400}
                height={media.height ?? 300}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="relative aspect-video w-full">
                <Image
                  src={`https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`}
                  alt={media.title ?? 'Video'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {media.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                    <p className="truncate text-[10px] text-white/80">{media.title}</p>
                  </div>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && activeItem && (
          <motion.div
            className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={() => setSelected(null)}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            {selected > 0 && (
              <button
                className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected - 1);
                }}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Next */}
            {selected < items.length - 1 && (
              <button
                className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected + 1);
                }}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Content */}
            <motion.div
              className="mx-auto w-full max-w-4xl px-16"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === 'image' ? (
                <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
                  <Image
                    src={activeItem.src!}
                    alt={activeItem.alt ?? ''}
                    width={activeItem.width ?? 1200}
                    height={activeItem.height ?? 800}
                    className="w-full"
                  />
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg">
                  <LiteYouTubeEmbed id={activeItem.videoId!} title={activeItem.title ?? ''} />
                </div>
              )}
              {(activeItem.alt || activeItem.title) && (
                <p className="mt-2 text-center text-[11px] text-white/50">
                  {activeItem.type === 'image' ? activeItem.alt : activeItem.title}
                </p>
              )}

              {/* Counter */}
              {items.length > 1 && (
                <p className="mt-1 text-center text-[10px] text-white/30">
                  {selected + 1} / {items.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};