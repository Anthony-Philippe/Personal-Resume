import { BounceCard } from "../../components/BouncyCards";

jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(),
  },
}));

describe("BounceCard", () => {
  test("should render", () => {
    const wrapper = BounceCard({ children: "Hello World" } as any);
    expect(wrapper).toMatchSnapshot();
  });
});
