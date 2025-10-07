import Image from 'next/image';

export const InmanPark = () => {
  return (
    <section className="flex flex-col items-center">
      <h2>Inman Park</h2>
      <section className="flex flex-col items-center">
        <h3>Rosetta</h3>
        <Image
          src={'/images/portfolio/inmanperkcoffee/inmanpark/Rosetta.png'}
          alt={'Chalkboard'}
          width={402}
          height={604}
        />
      </section>
      <section className="flex flex-col items-center">
        <h3>Counter</h3>
        <Image
          src={'/images/portfolio/inmanperkcoffee/inmanpark/Seating1.png'}
          alt={'Seating'}
          width={960}
          height={1280}
        />
        <h3>Gallery</h3>
        <Image
          src={'/images/portfolio/inmanperkcoffee/inmanpark/Seating2.png'}
          alt={'Seating'}
          width={800}
          height={599}
        />
      </section>
    </section>
  );
};
