import { IconWave } from "../../components/IconWave";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  createElement: jest.fn(),
}));

jest.mock("@mui/icons-material/GitHub", () => () => "GitHubIcon");
jest.mock("@mui/icons-material/LinkedIn", () => () => "LinkedInIcon");

describe("IconWave", () => {
  test("should render without icons", () => {
    const wrapper = IconWave({ icons: [] });
    expect(wrapper).toMatchSnapshot();
  });

  test("should render with icons", () => {
    const icons = [
      { icon: "GitHubIcon", link: "https://github.com" },
      { icon: "LinkedInIcon", link: "https://linkedin.com" },
    ];
    const wrapper = IconWave({ icons } as any);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render framer motion", () => {
    jest.mock("framer-motion", () => ({
      ...jest.requireActual("framer-motion"),
      motion: {
        div: ({ children }: { children: any }) => children,
      },
    }));
  });
});
