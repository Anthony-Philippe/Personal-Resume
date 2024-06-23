import classNames from "classnames";
import { motion } from "framer-motion";
import { memo } from "react";

const BouncyCardsComponent = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-slate-100">
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Do a thing</CardTitle>
          <CardContent colorFrom="from-violet-400" colorTo="to-indigo-400" />
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Do another thing</CardTitle>
          <CardContent colorFrom="from-amber-400" colorTo="to-orange-400" />
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>And this too</CardTitle>
          <CardContent colorFrom="from-green-400" colorTo="to-emerald-400" />
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <CardContent colorFrom="from-pink-400" colorTo="to-red-400" />
        </BounceCard>
      </div>
    </section>
  );
};

export const BouncyCards = memo(BouncyCardsComponent);

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

const BounceCard = memo(({ className, children }: BounceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={classNames(
        "group relative min-h-[200px] cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-50 p-8",
        className
      )}
    >
      {children}
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
}

const CardContent = memo(({ colorFrom, colorTo }: CardContentProps) => {
  return (
    <div
      className={classNames(
        "absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]",
        `bg-gradient-to-br ${colorFrom} ${colorTo}`
      )}
    >
      <span className="block text-center font-semibold text-indigo-50">
        FEATURE DEMO HERE
      </span>
    </div>
  );
});
