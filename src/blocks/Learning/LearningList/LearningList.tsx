'use client';
import UnityARPathwayPage from '@/app/learning/unity/unityarpathway/page';
import UnityEssentialsPathwayPage from '@/app/learning/unity/unityessentialspathway/page';
import { CardGallery, CardView } from '@/components/Cards';
import { CardContext } from '@/components/Cards/cardContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { learningData } from '@/data/learningData';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LearningItemViewProps {
  learningItem: (typeof learningData)[1];
  children?: ReactNode;
}

const SmallLearningItemView = ({ learningItem, children }: LearningItemViewProps) => {
  return (
    <CardView
      key={learningItem.id}
      title={learningItem.title}
      iconArea={<i className="fa-solid fa-graduation-cap text-[20px]" />}
      actionArea={
        <>
          {!!learningItem.link && (
            <Link href={learningItem.link} target="_blank">
              <i className="fa-solid fa-link text-[20px]" />
            </Link>
          )}
        </>
      }
    >
      {children}
    </CardView>
  );
};

const LargeLearningItemView = ({ learningItem, children }: LearningItemViewProps) => {
  return (
    <CardView
      key={learningItem.id}
      title={learningItem.title}
      className="min-w-[60vw] max-w-[60vw] min-h-[50vh] max-h-[80vh]"
      iconArea={<i className="fa-solid fa-graduation-cap text-[20px]" />}
      actionArea={
        <>
          {!!learningItem.link && (
            <Link href={learningItem.link} target="_blank">
              <i className="fa-solid fa-link text-[20px]" />
            </Link>
          )}
        </>
      }
    >
      <ScrollArea className="max-h-[70vh]">
        <div>{children}</div>
      </ScrollArea>
    </CardView>
  );
};

const cardContexts: CardContext[] = [];
learningData.forEach((learningItem) => {
  let largeViewChildren: ReactNode | null = null;
  switch (learningItem.id) {
    case 'unity essentials pathway':
      largeViewChildren = <UnityEssentialsPathwayPage />;
      break;
    case 'unity ar pathway':
      largeViewChildren = <UnityARPathwayPage />;
      break;
  }

  cardContexts.push({
    id: learningItem.id,
    smallView: SmallLearningItemView({ learningItem }),
    largeView: LargeLearningItemView({ learningItem, children: largeViewChildren }),
  });
});

export const LearningList = () => {
  return (
    <section className="py-2">
      <h2 className="text-2xl font-semibold">Learning</h2>
      <div className="py-6">
        <CardGallery cardContexts={cardContexts} />
      </div>
    </section>
  );
};
