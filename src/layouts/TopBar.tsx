import { IconWave } from "@components/IconWave";
import { ThemeToggler } from "@components/SliderToggle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { memo, ReactElement, useMemo } from "react";
import { JackInTheBox } from "react-awesome-reveal";

interface IconLink {
  icon: ReactElement;
  link: string;
}

const socialMediaIcons: IconLink[] = [
  { icon: <GitHubIcon />, link: "https://github.com/Anthony-Philippe" },
  { icon: <LinkedInIcon />, link: "https://linkedin.com/in/anthony--philippe" },
];

const TopBarComponent = () => {
  const memoizedIcons = useMemo(() => socialMediaIcons, []);

  return (
    <div className="mx-36 flex justify-between pt-4">
      <IconWave icons={memoizedIcons} />
      <JackInTheBox delay={250} duration={750}>
        <ThemeToggler />
      </JackInTheBox>
    </div>
  );
};

export const TopBar = memo(TopBarComponent);