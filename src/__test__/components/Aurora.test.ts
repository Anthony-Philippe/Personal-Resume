import { AuroraHero } from "../../components/Aurora";

describe("AuroraHero", () => {
  test("should render", () => {
    const wrapper = AuroraHero();
    expect(wrapper).toMatchSnapshot();
  });
});
