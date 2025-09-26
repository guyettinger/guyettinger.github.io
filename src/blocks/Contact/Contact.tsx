import Link from 'next/link';

export const Contact = () => {
  return (
    <section className="m-6 flex flex-col items-center text-center gap-4">
      <h2 className="text-2xl font-semibold">Get In Touch</h2>
      <p className="max-w-2xl">
        If you want to work together or have any questions, my inbox is always open. I'll try my
        best to get back to you! Cheers!
      </p>
      <Link
        href="mailto:guy.ettinger@gmail.com"
        className="inline-flex items-center justify-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Say Hello
      </Link>
    </section>
  );
};
