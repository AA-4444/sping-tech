// src/components/GlobeScene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Globe from "./Globe";

interface Location {
  lat: number;
  lng: number;
}

interface GlobeSceneProps {
  locations: Location[];
}

const GlobeScene = ({ locations }: GlobeSceneProps) => {
  // очень простой чек: если ширина окна < 640px — считаем, что это телефон
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="relative w-full h-[460px] sm:h-[620px] lg:h-[680px]">
      <Canvas
        gl={{ alpha: true }} // прозрачный фон
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6.4]} />

        <ambientLight intensity={0.85} />
        <directionalLight position={[6, 7, 6]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-5, -3, -4]} intensity={0.6} color="#ffffff" />

        {/* на телефонах — чуть меньше и чуть выше, чтобы шар полностью влезал */}
        <group
          position={[0, isMobile ? -0.1 : -0.4, 0]}
          scale={isMobile ? 0.8 : 1}
        >
          <Globe locations={locations} />
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={6.4}
          maxDistance={6.4}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default GlobeScene;