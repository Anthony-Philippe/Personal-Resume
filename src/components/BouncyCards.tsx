import classNames from "classnames";
import { motion } from "framer-motion";
import { memo } from "react";

import image1 from "@assets/images/CNN_project_Python.jpg";
import image3 from "@assets/images/MountainMinder_project_Kotlin.jpg";
import image4 from "@assets/images/Othello_project_C.jpg";
import image2 from "@assets/images/PersonalResume_project_React.jpg";

const BouncyCardsComponent = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-zinc-700 dark:text-slate-100">
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4" link="https://github.com/Anthony-Philippe/Neural-Network-Image-Classification">
          <CardTitle>Neural Network</CardTitle>
          <CardContent colorFrom="from-indigo-400" colorTo="to-violet-700" imageSrc={image1} />
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8" link="https://github.com/Anthony-Philippe/Personal-Resume">
          <CardTitle>Digital Personal Resume</CardTitle>
          <CardContent colorFrom="from-amber-400" colorTo="to-orange-700" imageSrc={image2} />
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8" link="https://github.com/Anthony-Philippe/MountainMinder/tree/master">
          <CardTitle>Moutain Minder</CardTitle>
          <CardContent colorFrom="from-green-400" colorTo="to-emerald-700" imageSrc={image3} />
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" link="https://github.com/Anthony-Philippe/Othello-Game">
          <CardTitle>Othello Game</CardTitle>
          <CardContent colorFrom="from-pink-400" colorTo="to-red-700" imageSrc={image4} />
        </BounceCard>
      </div>
    </section>
  );
};

export const BouncyCards = memo(BouncyCardsComponent);

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
  link?: string;
}

const BounceCard = memo(({ className, children, link }: BounceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={classNames(
        "group relative min-h-[200px] cursor-pointer overflow-hidden rounded-2xl border-2 border-zinc-700 dark:border-slate-50 p-8",
        className
      )}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
    </motion.div>
  );
});

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle = memo(({ children }: CardTitleProps) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
});

interface CardContentProps {
  colorFrom: string;
  colorTo: string;
  imageSrc: string;
}

const CardContent = memo(({ colorFrom, colorTo, imageSrc }: CardContentProps) => {
  return (
    <div
      className={classNames(
        "absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl p-1 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]",
        `bg-gradient-to-br ${colorFrom} ${colorTo}`
      )}
    >
      <img
        src={imageSrc}
        alt="Card content"
        className="w-full h-full object-cover rounded-t-xl"
        loading="lazy"
      />
    </div>
  );
});
