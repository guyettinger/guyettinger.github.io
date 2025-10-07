import { Video } from '@/components/Video';
import Image from 'next/image';

export const Illuminate = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Illuminate</h2>
      <section className="flex flex-col items-center">
        <h3>Screenshots</h3>
        <Image
          src={'/images/portfolio/nexidia/Illuminate.png'}
          alt={'Illuminate Report'}
          width={1045}
          height={1999}
        />
      </section>
      <section className="flex flex-col items-center">
        <h3>Videos</h3>
        <Video title={'Nexidia QC Overview'} id={'QUGVJQITdyw'} width={640} height={360} />
      </section>
    </section>
  );
};
