import Image from 'next/image';

export const Illuminate = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Illuminate</h2>
      <section className="flex flex-col items-center">
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
