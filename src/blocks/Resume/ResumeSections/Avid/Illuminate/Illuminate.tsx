import Image from 'next/image';

export const Illuminate = () => {
  return (
    <section>
      <h2>Illuminate</h2>
      <section>
        <Image
          src={'/images/portfolio/avid/AvidIlluminate.png'}
          alt={'Avid Illuminate'}
          width={800}
          height={415}
        />
      </section>
    </section>
  );
};
