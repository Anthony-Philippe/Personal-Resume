import { IconWave } from "@components/IconWave";
import { SliderToggle } from "@components/SliderToggle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { JackInTheBox } from "react-awesome-reveal";

const socialMediaIcons = [
  { icon: <GitHubIcon />, link: "https://github.com/Anthony-Philippe" },
  { icon: <LinkedInIcon />, link: "https://linkedin.com/in/anthony--philippe" },
];

export const TopBar = () => {
  return (
    <div className="mx-36 flex justify-between pt-4">
      <IconWave icons={socialMediaIcons} />
      <JackInTheBox delay={250} duration={750}>
        <SliderToggle />
      </JackInTheBox>
    </div>
  );
};
