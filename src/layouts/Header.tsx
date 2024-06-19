import rocket from "@assets/animations/rocket.json";
import { AuroraHero } from "@components/Aurora";
import { Hero } from "@layouts/Hero";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React, { useMemo } from "react";

const animationProps = {
  initial: { y: "-100vh", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1.2 },
};

const HeaderComponent  = () => {
  const memoizedAnimationProps = useMemo(() => animationProps, []);
  const memoizedRocketAnimationData = useMemo(() => rocket, []);

  return (
    <div className="relative mx-36 flex h-screen flex-row items-center justify-evenly">
      <Hero />
      <motion.div {...memoizedAnimationProps}>
        <Lottie animationData={memoizedRocketAnimationData} className="size-96" />
      </motion.div>
      <AuroraHero />
    </div>
  );
};

export const Header = React.memo(HeaderComponent);