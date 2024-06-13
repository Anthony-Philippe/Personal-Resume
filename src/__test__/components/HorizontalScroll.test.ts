import { HorizontalScrollCarousel } from "../../components/HorizontalScroll";

jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(),
  },
  useScroll: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: () => ({ current: null }),
}));

jest.mock("../../components/HorizontalScroll", () => ({
  HorizontalScrollCarousel: jest.fn(),
}));

describe("HorizontalScrollCarousel", () => {
  test("should render", () => {
    const wrapper = HorizontalScrollCarousel();
    expect(wrapper).toMatchSnapshot();
  });
});
