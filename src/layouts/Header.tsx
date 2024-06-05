import rocket from "@assets/animations/rocket.json";
import { AuroraHero } from "@components/Aurora";
import { Hero } from "@components/Hero";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const Header = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-evenly mx-36">
      <Hero />
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Lottie animationData={rocket} className="size-96" />
      </motion.div>
      <AuroraHero />
    </div>
  );
};
