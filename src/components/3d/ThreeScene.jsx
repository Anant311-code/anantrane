
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Stars,
  MeshDistortMaterial,
} from "@react-three/drei";

function Planet() {
  const planetRef = useRef(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.16;
      planetRef.current.rotation.x = Math.sin(
        state.clock.elapsedTime * 0.2
      ) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={planetRef} scale={1.45}>
        <icosahedronGeometry args={[1, 32]} />

        <MeshDistortMaterial
          color="#4610b5"
          emissive="#26006f"
          emissiveIntensity={0.65}
          roughness={0.25}
          metalness={0.35}
          distort={0.22}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

function Orbit({ radius, rotation, speed, color }) {
  const orbitRef = useRef(null);

  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * speed;
      orbitRef.current.rotation.x += delta * speed * 0.12;
    }
  });

  return (
    <mesh
      ref={orbitRef}
      rotation={rotation}
    >
      <torusGeometry args={[radius, 0.008, 8, 160]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}

function EnergyParticle({ position, color, size = 0.07 }) {
  const particleRef = useRef(null);

  useFrame((state) => {
    if (!particleRef.current) return;

    particleRef.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.08;
  });

  return (
    <mesh ref={particleRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />

      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight
        position={[3, 3, 4]}
        intensity={35}
        color="#a855f7"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={18}
        color="#4f46e5"
      />

      <Stars
        radius={45}
        depth={35}
        count={650}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />

      <Planet />

      <Orbit
        radius={2.05}
        rotation={[1.05, 0.4, 0.3]}
        speed={0.12}
        color="#c4b5fd"
      />

      <Orbit
        radius={2.25}
        rotation={[0.3, 1.1, -0.5]}
        speed={-0.08}
        color="#8b5cf6"
      />

      <Orbit
        radius={2.45}
        rotation={[1.5, 0.2, 0.8]}
        speed={0.06}
        color="#6d28d9"
      />

      <EnergyParticle
        position={[1.9, 0.9, 0.4]}
        color="#e9d5ff"
        size={0.075}
      />

      <EnergyParticle
        position={[-1.8, -0.7, 0.5]}
        color="#c084fc"
        size={0.06}
      />

      <EnergyParticle
        position={[0.5, -2, -0.2]}
        color="#818cf8"
        size={0.05}
      />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
