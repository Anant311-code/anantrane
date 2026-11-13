
import { useRef } from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Float,
  Html,
  Stars,
} from "@react-three/drei";

const technologies = [
  {
    name: "React",
    label: "⚛",
    position: [-1.65, 1.65, 0],
    color: "#61DAFB",
    size: "text-4xl",
  },
  {
    name: "JavaScript",
    label: "JS",
    position: [0.2, 2.0, 0],
    color: "#F7DF1E",
    size: "text-3xl",
  },
  {
    name: "Firebase",
    label: "◢",
    position: [-1.55, 0.55, 0.2],
    color: "#FFCA28",
    size: "text-4xl",
  },
  {
    name: "Next.js",
    label: "N",
    position: [1.35, 0.75, 0],
    color: "#FFFFFF",
    size: "text-4xl",
  },
  {
    name: "TypeScript",
    label: "TS",
    position: [-0.35, -0.15, 0.4],
    color: "#7DD3FC",
    size: "text-3xl",
  },
  {
    name: "AWS",
    label: "aws",
    position: [1.8, -0.9, 0],
    color: "#FBBF24",
    size: "text-2xl",
  },
  {
    name: "Vite",
    label: "ϟ",
    position: [-1.7, -1.7, 0],
    color: "#A78BFA",
    size: "text-5xl",
  },
  {
    name: "GitHub",
    label: "◉",
    position: [0.25, -1.95, 0],
    color: "#E5E7EB",
    size: "text-4xl",
  },
  {
    name: "Node.js",
    label: "JS",
    position: [1.65, -1.8, -0.2],
    color: "#86EFAC",
    size: "text-2xl",
  },
];

function OrbitalRing({
  radius,
  rotation,
  speed,
  opacity = 0.35,
}) {
  const ring = useRef(null);

  useFrame((_, delta) => {
    if (!ring.current) return;

    ring.current.rotation.z += delta * speed;
  });

  return (
    <mesh
      ref={ring}
      rotation={rotation}
    >
      <torusGeometry args={[radius, 0.006, 8, 160]} />

      <meshBasicMaterial
        color="#A78BFA"
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function OrbitalGrid() {
  return (
    <group position={[0, 0, -1.2]}>
      <gridHelper
        args={[7, 7, "#5B3A8A", "#34244D"]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <gridHelper
        args={[7, 7, "#5B3A8A", "#34244D"]}
      />
    </group>
  );
}

function CenterCore() {
  const core = useRef(null);

  useFrame((state, delta) => {
    if (!core.current) return;

    core.current.rotation.z += delta * 0.12;
    core.current.rotation.y += delta * 0.08;

    core.current.rotation.x =
      state.pointer.y * 0.08;
  });

  return (
    <group ref={core}>
      {/* Outer energy ring */}
      <mesh>
        <torusGeometry args={[1.15, 0.012, 12, 120]} />

        <meshBasicMaterial
          color="#A78BFA"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Inner energy ring */}
      <mesh rotation={[0.7, 0.5, 0.4]}>
        <torusGeometry args={[0.8, 0.009, 12, 100]} />

        <meshBasicMaterial
          color="#C4B5FD"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[0.13, 24, 24]} />

        <meshBasicMaterial
          color="#C4B5FD"
          transparent
          opacity={0.8}
        />
      </mesh>

      <pointLight
        color="#8B5CF6"
        intensity={4}
        distance={3}
      />
    </group>
  );
}

function TechCard({ tech, index }) {
  return (
    <Float
      speed={1.3 + index * 0.08}
      rotationIntensity={0.12}
      floatIntensity={0.3}
    >
      <group position={tech.position}>
        <Html
          center
          distanceFactor={7}
          zIndexRange={[20, 0]}
          transform={false}
        >
          <div
            className="group flex h-[66px] w-[66px] cursor-default flex-col items-center justify-center rounded-[17px] border border-white/[0.13] bg-[#171326]/85 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-violet-300/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] sm:h-[76px] sm:w-[76px]"
            style={{
              boxShadow: `inset 0 0 18px ${tech.color}12`,
            }}
          >
            <span
              className={`${tech.size} font-bold leading-none drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]`}
              style={{ color: tech.color }}
            >
              {tech.label}
            </span>

            <span className="mt-1 text-[8px] font-medium tracking-wide text-white/45 sm:text-[9px]">
              {tech.name}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function Constellation() {
  const { viewport } = useThree();

  // Keep the constellation compact on narrow screens
  const scale = Math.min(
    1,
    Math.max(0.68, viewport.width / 8.5)
  );

  return (
    <group scale={scale}>
      <OrbitalGrid />

      <OrbitalRing
        radius={1.55}
        rotation={[0, 0, 0]}
        speed={0.025}
        opacity={0.4}
      />

      <OrbitalRing
        radius={2.05}
        rotation={[0.15, 0.3, 0]}
        speed={-0.018}
        opacity={0.27}
      />

      <OrbitalRing
        radius={2.5}
        rotation={[0.35, 0.7, 0]}
        speed={0.012}
        opacity={0.18}
      />

      <CenterCore />

      {technologies.map((tech, index) => (
        <TechCard
          key={tech.name}
          tech={tech}
          index={index}
        />
      ))}
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[0, 2, 4]}
        color="#A78BFA"
        intensity={12}
      />

      <pointLight
        position={[-3, -2, 2]}
        color="#7C3AED"
        intensity={8}
      />

      <Stars
        radius={55}
        depth={35}
        count={650}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />

      <Constellation />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
