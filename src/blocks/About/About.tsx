import Image from 'next/image';

export const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <div className="flex flex-row flex-nowrap items-start gap-6 max-md:flex-col">
        <div className="flex flex-col gap-4 text-lg">
          <p>
            I specialize in designing and implementing exceptional user experiences ... and drinking
            massive amounts of coffee while doing it ...
          </p>
          <p>
            Emmy Award-winning full-stack software engineer with a caffeine addiction and 20+ years
            building scalable applications and leading engineering teams. Proven track record of
            architecting solutions from mobile apps to complex 3D visualization systems, with
            expertise in TypeScript, React/Angular ecosystems, and cloud platforms.
          </p>
          <p>... and I can make a decent cup of coffee.</p>
        </div>
        <div className="min-w-[30vw] max-w-[30vw] max-md:min-w-0 max-md:max-w-full">
          <Image
            width={3456}
            height={2304}
            src="/images/coffeepowered.jpeg"
            alt="Powered by Coffee"
            className="rounded-lg w-full h-auto"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
