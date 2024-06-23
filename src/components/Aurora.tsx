import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo } from "react";

const AuroraHeroComponent = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={750} factor={4} fade speed={2} />
      </Canvas>
    </div>
  );
};

export const AuroraHero = memo(AuroraHeroComponent);