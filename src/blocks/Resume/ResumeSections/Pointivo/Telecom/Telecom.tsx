import { Video } from '@/components/Video';
import Image from 'next/image';

export const Telecom = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Telecom</h2>
      <section className="flex flex-col items-center">
        <h3>Screenshots</h3>
        <Image
          src={'/images/portfolio/pointivo/Telecom1.png'}
          alt={'Telecom'}
          width={1200}
          height={800}
        />
        <br />
        <Image
          src={'/images/portfolio/pointivo/Telecom2.png'}
          alt={'Telecom'}
          width={1024}
          height={720}
        />
      </section>
      <section className="flex flex-col items-center">
        <h3>Videos</h3>
        <Video
          title={'Pointivo Tower Inspection for Telecom'}
          id={'aOgKbV9iDgY'}
          width={640}
          height={360}
        />
        <br />
        <Video
          title={'Telecom Tower Mount Analysis & Mapping Accuracy'}
          id={'1Rg7AAfoyLE'}
          width={640}
          height={360}
        />
      </section>
    </section>
  );
};
