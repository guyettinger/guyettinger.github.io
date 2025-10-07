import { Video } from '@/components/Video';
import Image from 'next/image';

export const Emmy = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>2015 Technical Emmy Award for Phonetic Indexing and Timing</h2>
      <section className="flex flex-col items-center">
        <h3>Award</h3>
        <Image
          src={'/images/portfolio/nexidia/Emmy.png'}
          alt={'Emmy Award'}
          width={720}
          height={960}
        />
      </section>
      <section className="flex flex-col items-center">
        <h3>Presentation</h3>
        <Video title={'Emmy Award Presentation'} id={'6Z9UNWp7vTQ'} width={640} height={360} />
      </section>
    </section>
  );
};
