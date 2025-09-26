import { Video } from '@/components/Video';

export const Inspection = () => {
  return (
    <section>
      <h2>Inspection</h2>
      <section>
        <h3>Screenshots</h3>
        <img src={'/images/portfolio/pointivo/Inspection.png'} alt={'Inspection'} width={640} />
      </section>
      <section>
        <h3>Videos</h3>
        <Video
          title={'Pointivo Launches New AI-Powered, Digital Twin Product for Asset Inspection'}
          id={'PcW-1UuqqPQ'}
          width={640}
          height={360}
        />
      </section>
    </section>
  );
};
