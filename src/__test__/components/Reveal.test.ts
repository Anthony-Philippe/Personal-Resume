import { Reveal } from "../../components/Reveal";

jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(),
  },
  useInView: jest.fn(),
  useAnimation: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: () => ({ current: null }),
  useEffect: (f: any) => f(),
}));

jest.mock("../../components/Reveal", () => ({
  Reveal: jest.fn(),
}));

describe("Reveal", () => {
  test("should render without children", () => {
    const wrapper = Reveal({ children: null } as any);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render with children", () => {
    const wrapper = Reveal({ children: "Hello World" } as any);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render with children and props", () => {
    const wrapper = Reveal({ children: "Hello World", delay: 0.5 } as any);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render with framer motion", () => {
    const wrapper = Reveal({ children: "Hello World" } as any);
    expect(wrapper).toMatchSnapshot();
  });
});
