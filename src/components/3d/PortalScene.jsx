
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function PortalRing() {
  const ref = useRef(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.4;
      ref.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[1.25, 0.055, 24, 120]} />
        <meshBasicMaterial
          color="#A78BFA"
          toneMapped={false}
        />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.95, 0.018, 16, 100]} />
        <meshBasicMaterial
          color="#E9D5FF"
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh position={[0, 0, -0.15]}>
        <circleGeometry args={[0.8, 64]} />
        <meshBasicMaterial
          color="#581C87"
          transparent
          opacity={0.28}
        />
      </mesh>

      <Float speed={2} floatIntensity={0.7}>
        <mesh position={[0, 0, 0.2]}>
          <icosahedronGeometry args={[0.35, 2]} />
          <meshStandardMaterial
            color="#C4B5FD"
            emissive="#8B5CF6"
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function PortalScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={2} />

      <pointLight
        position={[2, 3, 3]}
        color="#A78BFA"
        intensity={30}
      />

      <PortalRing />

      <Sparkles
        count={80}
        scale={5}
        size={3}
        speed={0.6}
        color="#C4B5FD"
      />
    </Canvas>
  );
}
