import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section className="max-w-screen-sm mx-auto p-4">
      <Reveal>
        <h1 className="text-5xl font-semibold mb-2">Hey, I'm John Doe<span>!</span></h1>
      </Reveal>
      <Reveal>
        <h2 className="text-xl font-light mb-4">
          I'm a <span>Web Developer</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm font-extralight">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
      </Reveal>
    </section>
  );
};
