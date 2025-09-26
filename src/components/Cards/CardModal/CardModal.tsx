import { CardModalProps } from '@/components/Cards/CardModal/CardModal.types';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export const CardModal = ({ cardContext, onClick }: CardModalProps) => {
  return (
    <div
      className="card-container fixed inset-0 z-[4000] pointer-events-none flex items-center justify-center"
      onClick={onClick}
    >
      <MotionDiv layoutId={cardContext.id} className="flex card pointer-events-auto">
        {cardContext.largeView}
      </MotionDiv>
    </div>
  );
};
