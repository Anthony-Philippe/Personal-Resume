import { IconWave } from "@components/IconWave";
import { SliderToggle } from "@components/SliderToggle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { JackInTheBox } from "react-awesome-reveal";

export const TopBar = () => {
  const icons = [
    {
      icon: <GitHubIcon />,
      link: "https://github.com",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://linkedin.com",
    },
  ];
  return (
    <div className="mx-36 flex justify-between pt-4">
      <IconWave icons={icons} />
      <JackInTheBox delay={250} duration={750}>
        <SliderToggle />
      </JackInTheBox>
    </div>
  );
};
