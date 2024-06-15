import { Reveal } from "@components/Reveal";

export const Hero = () => {
  return (
    <section className="z-1 max-w-screen-sm">
      <Reveal>
        <h1 className="mb-2 text-7xl font-semibold">
          Hey, I'm Anthony<span>!</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="mb-4 text-4xl font-extralight">
          I'm a <span>Developer</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm font-extralight">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo.
        </p>
      </Reveal>
    </section>
  );
};
