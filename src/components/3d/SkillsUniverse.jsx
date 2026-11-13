
import { useRef } from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Html,
  Line,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";

const skills = [
  {
    name: "React.js",
    symbol: "⚛",
    color: "#61DAFB",
    position: [-2.1, 1.25, 0],
  },
  {
    name: "JavaScript",
    symbol: "JS",
    color: "#F7DF1E",
    position: [0, 2.15, 0],
  },
  {
    name: "Python",
    symbol: "Py",
    color: "#FFD43B",
    position: [2.1, 1.25, 0],
  },
  {
    name: "Node.js",
    symbol: "JS",
    color: "#86EFAC",
    position: [-2.15, -1.15, 0],
  },
  {
    name: "PostgreSQL",
    symbol: "DB",
    color: "#7DD3FC",
    position: [0, -2.05, 0],
  },
  {
    name: "Tailwind",
    symbol: "TW",
    color: "#38BDF8",
    position: [2.15, -1.15, 0],
  },
  {
    name: "MongoDB",
    symbol: "DB",
    color: "#86EFAC",
    position: [-0.95, 0, 0.2],
  },
  {
    name: "Express.js",
    symbol: "EX",
    color: "#C4B5FD",
    position: [0.95, 0, 0.2],
  },
];

const connections = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [0, 6],
  [6, 7],
  [7, 2],
];

function TechnologyNode({ skill, index }) {
  const node = useRef(null);

  useFrame((state) => {
    if (!node.current) return;

    const targetX = skill.position[0] + state.pointer.x * 0.08;
    const targetY = skill.position[1] + state.pointer.y * 0.08;

    node.current.position.x +=
      (targetX - node.current.position.x) * 0.025;

    node.current.position.y +=
      (targetY - node.current.position.y) * 0.025;
  });

  return (
    <Float
      speed={1.2 + index * 0.1}
      floatIntensity={0.22}
      rotationIntensity={0.1}
    >
      <group
        ref={node}
        position={skill.position}
      >
        <mesh>
          <sphereGeometry args={[0.11, 20, 20]} />

          <meshBasicMaterial color={skill.color} />
        </mesh>

        <mesh scale={2.3}>
          <sphereGeometry args={[0.11, 16, 16]} />

          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={0.12}
          />
        </mesh>

        <Html
          position={[0.25, 0.06, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            className="flex min-w-[76px] flex-col items-center rounded-xl border bg-[#110c20]/90 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            style={{
              borderColor: `${skill.color}55`,
            }}
          >
            <span
              className="text-base font-bold"
              style={{ color: skill.color }}
            >
              {skill.symbol}
            </span>

            <span className="mt-1 whitespace-nowrap text-[9px] font-medium text-white/65">
              {skill.name}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function DeveloperCore() {
  const core = useRef(null);

  useFrame((state, delta) => {
    if (!core.current) return;

    core.current.rotation.y += delta * 0.16;
    core.current.rotation.x =
      state.pointer.y * 0.12;
  });

  return (
    <group ref={core}>
      <mesh>
        <icosahedronGeometry args={[0.68, 5]} />

        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#4C1D95"
          emissiveIntensity={0.7}
          metalness={0.65}
          roughness={0.22}
          distort={0.23}
          speed={1.6}
        />
      </mesh>

      <mesh>
        <torusGeometry args={[0.95, 0.008, 8, 100]} />

        <meshBasicMaterial
          color="#C4B5FD"
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh rotation={[0.8, 0.4, 0.2]}>
        <torusGeometry args={[1.12, 0.006, 8, 100]} />

        <meshBasicMaterial
          color="#A78BFA"
          transparent
          opacity={0.35}
        />
      </mesh>

      <pointLight
        color="#8B5CF6"
        intensity={4}
        distance={4}
      />

      <Html
        center
        position={[0, 0, 0.9]}
        distanceFactor={7}
        style={{ pointerEvents: "none" }}
      >
        <div className="flex flex-col items-center whitespace-nowrap text-center">
          <span className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(167,139,250,0.8)]">
            AR<span className="text-violet-300">.</span>
          </span>

          <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-violet-200/75">
            Developer Core
          </span>
        </div>
      </Html>
    </group>
  );
}

function ConnectionLines() {
  return (
    <group>
      {connections.map(([start, end], index) => (
        <Line
          key={index}
          points={[
            skills[start].position,
            skills[end].position,
          ]}
          color="#8B5CF6"
          transparent
          opacity={0.24}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function Universe() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.018;
    group.current.rotation.z =
      state.pointer.x * 0.018;
  });

  return (
    <>
      <ambientLight intensity={1.4} />

      <pointLight
        position={[3, 3, 4]}
        color="#A78BFA"
        intensity={9}
      />

      <pointLight
        position={[-3, -2, 2]}
        color="#6D28D9"
        intensity={6}
      />

      <Stars
        radius={50}
        depth={30}
        count={450}
        factor={2}
        fade
        speed={0.25}
      />

      <Sparkles
        count={55}
        scale={7}
        size={2}
        speed={0.25}
        color="#C4B5FD"
      />

      <group ref={group}>
        <ConnectionLines />

        <DeveloperCore />

        {skills.map((skill, index) => (
          <TechnologyNode
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </group>
    </>
  );
}

export default function SkillsUniverse() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-5 sm:px-8 md:px-12 md:pb-32">
      <div className="container-main relative mx-auto max-w-6xl">

        {/* Section intro */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-300">
              Connected Technologies
            </p>

            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Inside My{" "}
              <span className="text-gradient">
                Developer Core.
              </span>
            </h3>
          </div>

          <span className="rounded-full border border-violet-300/15 bg-violet-500/[0.06] px-4 py-2 text-[9px] tracking-[0.18em] text-violet-200/70">
            TECHNOLOGY ECOSYSTEM
          </span>
        </div>

        {/* 3D universe */}
        <div className="relative h-[390px] overflow-hidden rounded-3xl border border-violet-300/15 bg-[#0b0717]/80 shadow-[0_25px_100px_rgba(0,0,0,0.25)] sm:h-[490px] md:h-[580px]">

          {/* Background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse at center, black, transparent 85%)",
            }}
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[90px]" />

          <Canvas
            camera={{
              position: [0, 0, 8],
              fov: 43,
            }}
            dpr={[1, 1.4]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
          >
            <Universe />
          </Canvas>

          {/* Overlay labels */}
          <div className="pointer-events-none absolute left-5 top-5">
            <span className="font-mono text-[9px] tracking-[0.2em] text-violet-300/50">
              SYSTEM MAP / 001
            </span>
          </div>

          <div className="pointer-events-none absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 text-center text-[9px] tracking-[0.2em] text-violet-200/45">
            <span className="h-px w-6 bg-violet-400/30" />
            CONNECTED DEVELOPMENT ECOSYSTEM
            <span className="h-px w-6 bg-violet-400/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
