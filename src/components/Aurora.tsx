import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const AuroraHero = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={750} factor={4} fade speed={2} />
      </Canvas>
    </div>
  );
};