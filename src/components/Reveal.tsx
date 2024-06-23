import { motion, useAnimation, useInView } from "framer-motion";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const RevealComponent = ({ children, width = "fit-content" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const startAnimation = useCallback(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const mainVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const slideVariants = useMemo(() => ({
    hidden: { left: 0 },
    visible: { left: "100%" },
  }), []);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="absolute inset-0 top-1 z-20 bg-primary-500"
      />
    </div>
  );
};

export const Reveal = memo(RevealComponent);