// src/components/Globe.tsx
import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import earthTexture from "@/assets/earth-base2.png";

interface GlobeProps {
  locations: Array<{ lat: number; lng: number }>;
}

// Капля-пин без свечения и без внутреннего декора
const createMarkerTexture = (size = 256) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();

  ctx.clearRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.34;

  const pinR = outerR * 0.65;
  const headY = cy - pinR * 0.2;
  const tipY = cy + pinR * 1.4;

  ctx.fillStyle = "#fbbf24"; // твой тёплый жёлтый

  // 1) круг-голова
  ctx.beginPath();
  ctx.arc(cx, headY, pinR, 0, Math.PI * 2);
  ctx.fill();

  // 2) отдельно хвост-треугольник
  ctx.beginPath();
  ctx.moveTo(cx - pinR * 0.7, headY + pinR * 0.4);
  ctx.lineTo(cx, tipY);
  ctx.lineTo(cx + pinR * 0.7, headY + pinR * 0.4);
  ctx.closePath();
  ctx.fill();

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  texture.anisotropy = 8;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  return texture;
};

const Globe = ({ locations }: GlobeProps) => {
  const globeGroupRef = useRef<THREE.Group>(null);

  const alphaTexture = useLoader(THREE.TextureLoader, earthTexture);
  const markerTexture = useMemo(() => createMarkerTexture(256), []);

  if (alphaTexture) {
    alphaTexture.anisotropy = 8;
    alphaTexture.wrapS = THREE.ClampToEdgeWrapping;
    alphaTexture.wrapT = THREE.ClampToEdgeWrapping;
  }

  useFrame(() => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.002;
    }
  });

  const latLngToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  if (!alphaTexture) return null;

  const R = 2.6;
  const markerRadius = R + 0.12;

  const markerMaterial = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: markerTexture,
        transparent: true,
        depthTest: true,
        depthWrite: false,
      }),
    [markerTexture]
  );

  return (
    <group ref={globeGroupRef}>
      {/* океан */}
      <Sphere args={[R, 96, 96]}>
        <meshStandardMaterial
          color="#020617"
          metalness={0}
          roughness={0.9}
          emissive="#020617"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* контуры материков */}
      <Sphere args={[R + 0.04, 128, 128]}>
        {/* @ts-ignore */}
        <meshBasicMaterial
          color="#facc15"
          alphaMap={alphaTexture}
          transparent
          alphaTest={0.55}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </Sphere>

      {/* маркеры-капли */}
      {locations.map((location, index) => {
        const pos = latLngToVector3(location.lat, location.lng, markerRadius);
        const sprite = new THREE.Sprite(markerMaterial);
        sprite.scale.set(0.55, 0.55, 0.55);
        sprite.position.copy(pos);
        return <primitive key={index} object={sprite} />;
      })}
    </group>
  );
};

export default Globe;