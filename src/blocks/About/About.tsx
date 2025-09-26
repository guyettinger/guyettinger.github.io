export const About = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <div className="flex flex-row flex-nowrap items-start gap-6 max-md:flex-col">
        <div className="flex flex-col gap-4 text-lg">
          <p>
            I specialize in designing and implementing exceptional user experiences (and drinking
            massive amounts of coffee).
          </p>
          <p>
            As an engineer, I have always been passionate about creating elegant and effective
            solutions to complex problems. I have a strong foundation in software development, with
            a focus on emerging technologies. I enjoy working on both the front-end and back-end of
            applications, and I am always looking for ways to improve everyone experience (user and
            engineer alike).
          </p>
        </div>
        <div className="min-w-[30vw] max-w-[30vw] max-md:min-w-0 max-md:max-w-full">
          <img
            src="/images/coffeepowered.jpeg"
            alt="Powered by Coffee"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
