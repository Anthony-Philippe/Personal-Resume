import classNames from "classnames";
import { motion } from "framer-motion";
import { memo } from "react";
import { Link } from 'react-router-dom';
import { projects } from '../assets/projectsData';

const BouncyCardsComponent = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-zinc-700 dark:text-slate-100">
      <div className="mb-4 grid grid-cols-12 gap-4">
        {projects.slice(0, 2).map((project) => (
          <BounceCard key={project.id} className={`col-span-12 ? ${project.id === 2 ? "md:col-span-8" : "md:col-span-4"}`} link={`/project/${project.id}`}>
            <CardTitle>{project.name}</CardTitle>
            <CardContent colorFrom={project.colorFrom} colorTo={project.colorTo} imageSrc={project.imageSrc} />
          </BounceCard>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {projects.slice(2).map((project) => (
          <BounceCard key={project.id} className={`col-span-12 ? ${project.id === 3 ? "md:col-span-8" : "md:col-span-4"}`} link={`/project/${project.id}`}>
            <CardTitle>{project.name}</CardTitle>
            <CardContent colorFrom={project.colorFrom} colorTo={project.colorTo} imageSrc={project.imageSrc} />
          </BounceCard>
        ))}
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
      <Link to={link || ""}>{children}</Link>
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