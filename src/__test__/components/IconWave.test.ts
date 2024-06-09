import { IconWave } from "../../components/IconWave";

describe("IconWave", () => {
  test("should render", () => {
    const wrapper = IconWave({ icons: [] });
    expect(wrapper).toMatchSnapshot();
  });
});
