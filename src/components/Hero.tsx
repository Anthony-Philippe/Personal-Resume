import { Reveal } from "@components/Reveal";

export const Hero = () => {
  return (
    <section className="max-w-screen-sm z-1">
      <Reveal>
        <h1 className="text-7xl font-semibold mb-2">
          Hey, I'm Anthony<span>!</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-extralight mb-4">
          I'm a <span>Developer</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className=" text-sm font-extralight">
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
