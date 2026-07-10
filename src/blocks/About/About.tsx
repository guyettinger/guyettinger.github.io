import Image from 'next/image';

export const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>About Me</h2>
      <div className="flex flex-row flex-nowrap items-start gap-6 max-md:flex-col">
        <div className="flex flex-col text-lg">
          <p>
            I'm an Emmy Award-winning full-stack engineer with 20+ years of experience — building
            everything from AI agents to complex 3D visualization systems to phonetic search engines
            (all fueled by an arguably unhealthy amount of coffee). I love crafting software that
            makes people's lives better, and the truth is, you can't do that alone — the best
            solutions come from great collaboration. Whether I'm shaping ideas, working as part of
            an engineering team, or listening closely to users, I'm all about finding elegant
            answers together — preferably over a good cup of coffee.
          </p>
          <p>Let's build something great.</p>
        </div>
        <div>
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
