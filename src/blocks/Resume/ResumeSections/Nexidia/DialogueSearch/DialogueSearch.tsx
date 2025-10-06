import { Video } from '@/components/Video';
import Image from 'next/image';

export const DialogueSearch = () => {
  return (
    <section>
      <h2>Dialogue Search</h2>
      <section>
        <h3>Screenshots</h3>
        <Image
          src={'/images/portfolio/nexidia/DialogueSearch1.png'}
          alt={'Dialogue Search'}
          width={1366}
          height={768}
        />
        <br />
        <Image
          src={'/images/portfolio/nexidia/DialogueSearch2.png'}
          alt={'Dialogue Search'}
          width={1366}
          height={768}
        />
        <br />
        <Image
          src={'/images/portfolio/nexidia/DialogueSearch3.png'}
          alt={'Dialogue Search'}
          width={1366}
          height={768}
        />
        <br />
        <Image
          src={'/images/portfolio/nexidia/DialogueSearchVideoPlayer.png'}
          alt={'Dialogue Search Video Player'}
          width={339}
          height={671}
        />
      </section>
      <section>
        <h3>Videos</h3>
        <Video
          title={"Searching For The Right Word (Nexidia's Dialogue Search)"}
          id={'Sj75JJRucsY'}
          width={640}
          height={360}
        />
        <br />
        <Video
          title={'Beyond Metadata: Search Your MAM Assets Using Nexidia Dialogue Search'}
          id={'eLxP5MKKpk4'}
          width={640}
          height={360}
        />
      </section>
    </section>
  );
};
