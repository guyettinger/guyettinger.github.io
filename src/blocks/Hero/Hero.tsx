'use client';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export const Hero = () => {
  return (
    <section className="m-6 flex flex-col items-center justify-center gap-4">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src="/images/heroshot.png"
          width={200}
          height={200}
          alt="Guy"
          className="rounded-full"
        />
      </MotionDiv>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-semibold">Hi, I'm Guy</h1>
        <MotionDiv
          animate={{ rotate: [0, 0, 0, 90, 90, 0] }}
          whileHover={{ rotate: [0, 0, 0, 90, 90, 0] }}
        >
          <h1 className="text-3xl">👋</h1>
        </MotionDiv>
      </div>
    </section>
  );
};
