import { SliderToggle } from "../../components/SliderToggle";

jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(),
  },
}));

jest.mock("../../components/SliderToggle", () => ({
  SliderToggle: jest.fn(),
}));

describe("SliderToggle", () => {
  test("should render", () => {
    const wrapper = SliderToggle();
    expect(wrapper).toMatchSnapshot();
  });
});
