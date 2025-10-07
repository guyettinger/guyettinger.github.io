import Image from 'next/image';

export const UnityEssentialsPathway = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Unity Essentials Pathway</h2>
      <section className="flex flex-col items-center">
        <h3>Lego Game</h3>
        <Image
          src={'/images/portfolio/unity/LegoGame.png'}
          alt={'Lego Game'}
          width={1999}
          height={1134}
        />
        <br />
        <a href={'https://play.unity.com/mg/lego/webgl-builds-352816'} target={'_blank'}>
          Play
        </a>
      </section>
    </section>
  );
};
