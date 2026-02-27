'use client';
import AvidPage from '@/app/resume/avid/page';
import AppliedGlobalTechnologiesPage from '@/app/resume/appliedglobaltechnologies/page';
import FilmhubPage from '@/app/resume/filmhub/page';
import FlairePageComponent from '@/app/resume/flaire/page';
import GeorgiaTechPage from '@/app/resume/georgiatech/page';
import InmanPerkCoffeePage from '@/app/resume/inmanperkcoffee/page';
import NexidiaPage from '@/app/resume/nexidia/page';
import PerspectiveLabsPage from '@/app/resume/perspectivelabs/page';
import PointivoPage from '@/app/resume/pointivo/page';
import RockstarPowerSuitePage from '@/app/resume/rockstarpowersuite/page';
import VerceptPage from '@/app/resume/vercept/page';
import { CardGallery, CardView } from '@/components/Cards';
import { CardContext } from '@/components/Cards/cardContext';
import { resumeData } from '@/data/resumeData';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ResumeItemViewProps {
  resumeItem: (typeof resumeData)[1];
  children?: ReactNode;
}

const SmallResumeItemView = ({ resumeItem, children }: ResumeItemViewProps) => {
  return (
    <CardView
      key={resumeItem.id}
      title={resumeItem.company}
      description={resumeItem.title}
      iconArea={<i className="fa-solid fa-file-lines text-[20px]" />}
      actionArea={
        <>
          {!!resumeItem.link && (
            <Link href={resumeItem.link} target="_blank">
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

const LargeResumeItemView = ({ resumeItem, children }: ResumeItemViewProps) => {
  return (
    <CardView
      key={resumeItem.id}
      title={resumeItem.company}
      description={resumeItem.title}
      className="min-w-[95vw] max-w-[95vw] min-h-[50vh] max-h-[80vh] md:min-w-[60vw] md:max-w-[60vw] md:min-h-[50vh] md:max-h-[80vh]"
      iconArea={<i className="fa-solid fa-file-lines text-[20px]" />}
      actionArea={
        <>
          {!!resumeItem.link && (
            <Link href={resumeItem.link} target="_blank">
              <i className="fa-solid fa-link text-[20px]" />
            </Link>
          )}
        </>
      }
    >
      <article className="max-w-full prose prose-sm dark:prose-invert prose-a:text-primary">
        {children}
      </article>
    </CardView>
  );
};

const cardContexts: CardContext[] = [];
resumeData.forEach((resumeItem) => {
  let largeViewChildren: ReactNode | null = null;
  switch (resumeItem.id) {
    case 'vercept':
      largeViewChildren = <VerceptPage />;
      break;
    case 'filmhub':
      largeViewChildren = <FilmhubPage />;
      break;
    case 'flaire':
      largeViewChildren = <FlairePageComponent />;
      break;
    case 'pointivo':
      largeViewChildren = <PointivoPage />;
      break;
    case 'avid':
      largeViewChildren = <AvidPage />;
      break;
    case 'nexidia':
      largeViewChildren = <NexidiaPage />;
      break;
    case 'inmanperkcoffee':
      largeViewChildren = <InmanPerkCoffeePage />;
      break;
    case 'rockstarpowersuite':
      largeViewChildren = <RockstarPowerSuitePage />;
      break;
    case 'perspectivelabs':
      largeViewChildren = <PerspectiveLabsPage />;
      break;
    case 'appliedglobaltechnologies':
      largeViewChildren = <AppliedGlobalTechnologiesPage />;
      break;
    case 'georgiatech':
      largeViewChildren = <GeorgiaTechPage />;
      break;
  }

  cardContexts.push({
    id: resumeItem.id,
    smallView: SmallResumeItemView({ resumeItem }),
    largeView: LargeResumeItemView({ resumeItem, children: largeViewChildren }),
  });
});

export const ResumeList = () => {
  return (
    <section className="py-2">
      <h2>Portfolio</h2>
      <div className="py-6">
        <CardGallery cardContexts={cardContexts} />
      </div>
    </section>
  );
};