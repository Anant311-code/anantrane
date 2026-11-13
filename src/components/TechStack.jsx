
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
  Terminal,
  Layers3,
  Sparkles,
} from "lucide-react";

import SectionHeading from "./ui/SectionHeading";

const skillGroups = [
  {
    title: "Languages",
    subtitle: "The foundations of development",
    description:
      "The programming languages and web fundamentals I use to bring ideas to life.",
    icon: Code2,
    code: "CORE_01",
    skills: ["JavaScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    subtitle: "Crafting digital experiences",
    description:
      "Modern frontend technologies for building responsive, interactive and polished interfaces.",
    icon: Monitor,
    code: "UI_02",
    skills: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    subtitle: "Engineering the logic",
    description:
      "Server-side development, application logic and API integration.",
    icon: Server,
    code: "API_03",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    subtitle: "Structuring information",
    description:
      "Working with relational and document databases to manage application data.",
    icon: Database,
    code: "DATA_04",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Workflow",
    subtitle: "My development toolkit",
    description:
      "Tools I use throughout the development, testing and deployment workflow.",
    icon: Wrench,
    code: "TOOLS_05",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
];

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = skillGroups[activeIndex];
  const ActiveIcon = activeGroup.icon;

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/[0.09] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[130px]" />

      <div className="container-main relative z-10 mx-auto max-w-6xl">

        <SectionHeading
          number="03"
          eyebrow="Developer Command Center"
          title="My Technical"
          highlight="Toolkit."
          description="A collection of technologies, frameworks and tools I use to turn concepts into working digital products."
        />

        {/* Main command center */}
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT: CATEGORY SELECTOR */}
          <div className="relative overflow-hidden rounded-3xl border border-violet-300/10 bg-[#0e0a1b]/85 p-4 backdrop-blur-2xl sm:p-5">

            <div className="mb-5 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Terminal
                  size={16}
                  className="text-violet-300"
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  System Modules
                </span>
              </div>

              <span className="font-mono text-[10px] text-violet-400">
                05 MODULES
              </span>
            </div>

            <div className="space-y-2">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={group.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileTap={{ scale: 0.98 }}
                    aria-pressed={isActive}
                    className={`group relative flex min-h-[76px] w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-violet-400/35 bg-violet-500/[0.13] shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-violet-400/20 hover:bg-white/[0.045]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-skill-module"
                        className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(139,92,246,0.45)]"
                      />
                    )}

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-violet-300/30 bg-violet-500/20 text-violet-200"
                          : "border-white/[0.07] bg-white/[0.04] text-white/45 group-hover:text-violet-300"
                      }`}
                    >
                      <Icon size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-semibold ${
                          isActive
                            ? "text-white"
                            : "text-white/65"
                        }`}
                      >
                        {group.title}
                      </span>

                      <span className="mt-1 block text-xs text-white/35">
                        {group.subtitle}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className={`shrink-0 transition-all ${
                        isActive
                          ? "translate-x-0 text-violet-300"
                          : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-violet-300"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Module footer */}
            <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] px-2 pt-5">
              <span className="text-[9px] tracking-[0.17em] text-white/30">
                DEVELOPER WORKSPACE
              </span>

              <span className="flex items-center gap-2 text-[10px] text-violet-300/70">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]" />
                Active
              </span>
            </div>
          </div>

          {/* RIGHT: ACTIVE MODULE */}
          <div className="relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-violet-300/15 bg-[#100b20]/80 p-6 backdrop-blur-2xl sm:p-8 md:p-10">

            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(167,139,250,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.16) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
                maskImage:
                  "linear-gradient(to bottom, black, transparent 90%)",
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/[0.12] blur-[90px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.code}
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  filter: "blur(4px)",
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-1 flex-col"
              >
                {/* Module header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-violet-400">
                      MODULE / {activeGroup.code}
                    </span>

                    <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {activeGroup.title}
                    </h3>

                    <p className="mt-2 text-sm text-violet-200/65">
                      {activeGroup.subtitle}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10 text-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.1)] sm:h-16 sm:w-16">
                    <ActiveIcon size={29} />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-7 max-w-lg text-sm leading-7 text-white/45">
                  {activeGroup.description}
                </p>

                {/* Skills */}
                <div className="mt-9">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Technologies
                    </span>

                    <span className="font-mono text-[10px] text-violet-400/70">
                      {String(activeGroup.skills.length).padStart(2, "0")} ITEMS
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeGroup.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                        }}
                        className="rounded-xl border border-violet-300/15 bg-violet-500/[0.07] px-4 py-3 text-xs font-medium text-violet-100 transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-500/15 sm:text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom status */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-7">
                  <div className="flex items-center gap-2">
                    <Layers3
                      size={15}
                      className="text-violet-400"
                    />

                    <span className="text-[10px] tracking-[0.15em] text-white/35">
                      PART OF MY TECH STACK
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-white/25">
                    0{activeIndex + 1} / 05
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Sparkles
              size={16}
              className="text-violet-400"
            />

            <p className="text-xs text-white/40">
              Always learning. Always building.
            </p>
          </div>

          <span className="text-[9px] tracking-[0.2em] text-white/25">
            BUILT THROUGH CURIOSITY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
