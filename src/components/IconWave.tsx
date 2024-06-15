import { motion } from "framer-motion";
import React from "react";

type IconLink = {
  icon: React.ReactElement;
  link: string;
};

type IconWaveProps = {
  icons: IconLink[];
};

export const IconWave = ({ icons }: IconWaveProps) => {
  return (
    <div className="flex space-x-8">
      {icons.map((iconLink, index) => (
        <motion.a
          key={index}
          href={iconLink.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: index * 0.2 }}
          className="relative cursor-pointer text-3xl text-white"
          whileHover={{ scale: 1.3, transition: { duration: 0.4 } }}
        >
          {iconLink.icon}
        </motion.a>
      ))}
    </div>
  );
};
