
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  School,
  Award,
  CalendarDays,
  Sparkles,
  Orbit,
  ArrowUpRight,
} from "lucide-react";

import { education } from "../data/portfolio";

const icons = [School, Award, GraduationCap];

const planetStyles = [
  {
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.45)",
    size: "h-[66px] w-[66px] sm:h-[82px] sm:w-[82px]",
    position: "left-[9%] top-[49%]",
  },
  {
    color: "#67E8F9",
    glow: "rgba(103,232,249,0.4)",
    size: "h-[76px] w-[76px] sm:h-[96px] sm:w-[96px]",
    position: "left-1/2 top-[12%] -translate-x-1/2",
  },
  {
    color: "#C084FC",
    glow: "rgba(192,132,252,0.55)",
    size: "h-[90px] w-[90px] sm:h-[112px] sm:w-[112px]",
    position: "right-[9%] top-[49%]",
  },
];

export default function About() {
  const [selectedIndex, setSelectedIndex] = useState(
    Math.max(0, education.length - 1)
  );

  const selectedEducation = education[selectedIndex];

  const selectedIcon =
    icons[selectedIndex] || GraduationCap;

  const SelectedIcon = selectedIcon;

  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-700/[0.07] blur-[130px]" />

      <div className="container-main relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              My Background
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            My Academic{" "}
            <span className="text-gradient">
              Universe.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Every milestone has been a new orbit in my
            journey of learning, exploring and building
            the future through technology.
          </p>
        </motion.div>

        {/* Orbital experience */}
        <div className="relative">

          {/* Orbital stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto h-[310px] w-full max-w-[850px] sm:h-[390px] md:h-[440px]"
          >
            {/* Central ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[75px] sm:h-[300px] sm:w-[300px]" />

            {/* Orbit ellipse */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[94%] -translate-x-1/2 -translate-y-1/2 rotate-[-13deg] rounded-[50%] border border-violet-400/25 shadow-[0_0_30px_rgba(139,92,246,0.06)] sm:h-[220px] md:h-[250px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[115px] w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[17deg] rounded-[50%] border border-purple-300/15 sm:h-[175px]" />

            {/* Central star */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/10 shadow-[0_0_45px_rgba(139,92,246,0.25)] sm:h-20 sm:w-20"
            >
              <Orbit
                size={34}
                className="text-violet-300 sm:h-10 sm:w-10"
              />
            </motion.div>

            {/* Orbiting planets */}
            {education.map((item, index) => {
              const style =
                planetStyles[index] || planetStyles[2];

              const Icon =
                icons[index] || GraduationCap;

              const isSelected =
                selectedIndex === index;

              return (
                <div
                  key={item.degree}
                  className={`absolute z-10 ${style.position}`}
                >
                  <motion.button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.94 }}
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    aria-label={`View ${item.level} education details`}
                    aria-pressed={isSelected}
                    className={`group relative flex items-center justify-center rounded-full border bg-[#100b20]/90 backdrop-blur-xl transition-all duration-500 ${style.size} ${
                      isSelected
                        ? "border-violet-300/80"
                        : "border-white/15 hover:border-violet-300/60"
                    }`}
                    style={{
                      boxShadow: isSelected
                        ? `0 0 15px ${style.glow}, 0 0 45px ${style.glow}, inset 0 0 25px ${style.glow}`
                        : `0 0 22px ${style.glow}`,
                    }}
                  >
                    {/* Planet rings */}
                    <span
                      className={`pointer-events-none absolute inset-[-9px] rounded-full border transition-all duration-500 ${
                        isSelected
                          ? "scale-100 border-violet-300/50 opacity-100"
                          : "scale-90 border-white/10 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />

                    <span
                      className="absolute inset-[7px] rounded-full opacity-40 blur-xl"
                      style={{
                        background: style.color,
                      }}
                    />

                    <Icon
                      size={29}
                      strokeWidth={1.5}
                      className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        color: style.color,
                      }}
                    />

                    {/* Selection indicator */}
                    {isSelected && (
                      <motion.span
                        layoutId="education-active-indicator"
                        className="absolute -bottom-3 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_4px_rgba(167,139,250,0.6)]"
                      />
                    )}
                  </motion.button>

                  {/* Planet label */}
                  <div
                    className={`pointer-events-none absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap text-center transition-opacity duration-300 ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-55"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                      {item.year}
                    </p>

                    <p className="mt-1 text-[9px] text-white/45 sm:text-[10px]">
                      {item.level}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Small orbiting particles */}
            {[0, 1, 2, 3, 4, 5].map((particle) => (
              <motion.span
                key={particle}
                className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-violet-200"
                animate={{
                  x: [
                    Math.cos(particle) * 115,
                    Math.cos(particle + 1) * 145,
                    Math.cos(particle) * 115,
                  ],
                  y: [
                    Math.sin(particle) * 65,
                    Math.sin(particle + 1) * 85,
                    Math.sin(particle) * 65,
                  ],
                  opacity: [0.15, 0.8, 0.15],
                }}
                transition={{
                  duration: 8 + particle,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Hint */}
          <div className="mb-8 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">
            <Sparkles
              size={13}
              className="text-violet-400"
            />
            Select a planet to explore my journey
          </div>

          {/* Selected education details */}
          <AnimatePresence mode="wait">
            {selectedEducation && (
              <motion.div
                key={selectedEducation.degree}
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-violet-300/15 bg-[#100b20]/75 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:p-9"
              >
                {/* Panel glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full blur-[90px]"
                  style={{
                    background:
                      planetStyles[selectedIndex]?.glow ||
                      "rgba(139,92,246,0.3)",
                  }}
                />

                <div className="relative z-10">
                  {/* Panel top row */}
                  <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/10">
                        <SelectedIcon
                          size={18}
                          className="text-violet-300"
                        />
                      </span>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">
                        Academic Milestone
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55">
                      <CalendarDays size={13} />
                      {selectedEducation.year}
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
                        {selectedEducation.level}
                      </p>

                      <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                        {selectedEducation.degree}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                        {selectedEducation.institution}
                      </p>

                      {selectedEducation.university && (
                        <p className="mt-2 text-xs text-white/35">
                          {selectedEducation.university}
                        </p>
                      )}
                    </div>

                    {/* Score */}
                    <div className="sm:text-right">
                      <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Academic Score
                      </p>

                      <p className="font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
                        {selectedEducation.score}
                      </p>
                    </div>
                  </div>

                  {/* Bottom label */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] tracking-[0.18em] text-white/30">
                      ANANT RANE · EDUCATION
                    </span>

                    <span className="flex items-center gap-1 text-xs text-violet-300">
                      Explore milestone
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
