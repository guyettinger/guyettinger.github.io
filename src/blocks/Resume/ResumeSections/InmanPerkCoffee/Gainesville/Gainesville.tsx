import Image from 'next/image';

export const Gainesville = () => {
  return (
    <section>
      <h2>Gainesville</h2>
      <section>
        <h3>Chalkboard</h3>
        <Image
          src={'/images/portfolio/inmanperkcoffee/gainesville/Chalkboard.png'}
          alt={'Chalkboard'}
          width={800}
          height={533}
        />
      </section>
      <section>
        <h3>Gallery</h3>
        <Image
          src={'/images/portfolio/inmanperkcoffee/gainesville/Seating1.png'}
          alt={'Seating'}
          width={800}
          height={533}
        />
      </section>
    </section>
  );
};
