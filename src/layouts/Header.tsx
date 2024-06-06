import rocket from "@assets/animations/rocket.json";
import { AuroraHero } from "@components/Aurora";
import { Hero } from "@components/Hero";
import { IconWave } from "@components/IconWave";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const Header = () => {
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
    <div className="relative flex flex-row h-screen items-center justify-evenly mx-36">
      <Hero />
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Lottie animationData={rocket} className="size-96" />
      </motion.div>
      <AuroraHero />
      <IconWave icons={icons} />
    </div>
  );
};
