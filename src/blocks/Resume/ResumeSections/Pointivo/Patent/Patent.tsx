import Image from 'next/image';

export const Patent = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Patents</h2>
      <section className="flex flex-col items-center">
        <h3>US11216663B1</h3>
        <Image
          src={'/images/portfolio/pointivo/Patent.png'}
          alt={'Patent'}
          width={600}
          height={374}
        />
        <br />
        <div style={{ width: '640px' }}>
          Systems and methods for generating of 3D information on a user display from processing of
          sensor data for objects, components or features of interest in a scene and user navigation
          thereon
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h3>Press</h3>
        <a
          href={
            'https://www.prnewswire.com/news-releases/pointivo-lands-10th-patent-increasing-coverage-of-the-drone-analytics-market-301457346.html'
          }
          target={'_blank'}
        >
          Pointivo Lands 10th Patent Increasing Coverage of the Drone Analytics Market
        </a>
      </section>
    </section>
  );
};
