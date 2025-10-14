import Image from 'next/image';

export const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>About Me</h2>
      <div className="flex flex-row flex-nowrap items-start gap-6 max-md:flex-col">
        <div className="flex flex-col text-lg">
          <p>
            I love crafting user experiences that make people's lives easier (all while drinking an
            arguably unhealthy amount of coffee).
          </p>
          <p>
            I'm an Emmy Award-winning full-stack engineer who's spent 20+ years building everything
            from mobile apps to complex 3D visualization systems. But here's what I've learned: the
            best code comes from great collaboration. Whether I'm architecting solutions in
            TypeScript and React, leading engineering teams, or diving into cloud platforms, I'm all
            about finding elegant solutions together—preferably over a good cup of coffee.
          </p>
          <p>Let's build something great.</p>
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
