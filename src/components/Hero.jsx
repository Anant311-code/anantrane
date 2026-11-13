
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import ThreeScene from "./ThreeScene";

export default function Hero({ onAR }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-5 pb-8 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pt-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -right-40 top-20 h-96 w-96 opacity-20" />

        <div className="absolute left-1/2 top-[-260px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[100px]" />

        <div className="absolute left-1/2 top-[-220px] h-[340px] w-[340px] -translate-x-1/2 rounded-full border-[3px] border-violet-300/30 shadow-[0_0_35px_12px_rgba(139,92,246,0.4),inset_0_0_35px_rgba(139,92,246,0.3)] sm:h-[430px] sm:w-[430px]" />

        <div className="absolute left-1/2 top-[-240px] h-[300px] w-[300px] -translate-x-1/2 rounded-full border-[5px] border-purple-200/40 shadow-[0_0_50px_15px_rgba(192,132,252,0.45)] sm:h-[390px] sm:w-[390px]" />

        <div className="absolute inset-x-0 top-[70px] h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05030d]/70" />
      </div>

      {/* Main content */}
      <div className="container-main relative z-10 mx-auto grid w-full min-w-0 grid-cols-1 items-center gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0">

        {/* LEFT: Hero copy */}
        <div className="hero-copy relative z-20 min-w-0 w-full">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/[0.08] px-4 py-2 shadow-[0_0_25px_rgba(139,92,246,0.08)] backdrop-blur-xl sm:mb-9"
          >
            <Sparkles
              size={15}
              className="text-violet-300"
            />

            <span className="text-[10px] font-medium tracking-wide text-violet-200 sm:text-xs">
              Full Stack Developer Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[850px] break-words font-display text-[clamp(2.65rem,6.3vw,6rem)] font-bold leading-[1.04] tracking-[-0.065em] text-white"
          >
            Building{" "}
            <span className="text-gradient">
              the best
            </span>

            <br />

            digital project

            <br />

            experiences<span className="text-violet-400">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="mt-6 max-w-[600px] break-words text-sm leading-7 text-[#aaa3bd] sm:mt-8 sm:text-base sm:leading-8"
          >
            I'm Anant Rane, a Full Stack Developer who
            transforms ideas into meaningful digital
            products. I build modern web experiences
            through creative engineering, thoughtful
            design and powerful technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-cosmic inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </motion.a>

            {onAR && (
              <motion.button
                type="button"
                onClick={onAR}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-outline-cosmic inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium"
              >
                <Sparkles size={16} />
                Secret Portal
              </motion.button>
            )}
          </motion.div>

          {/* Small availability line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-9 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
            </span>

            <span className="text-[10px] tracking-[0.15em] text-white/45 sm:text-xs">
              CREATING DIGITAL EXPERIENCES
            </span>
          </motion.div>
        </div>

        {/* RIGHT: Technology constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hero-scene relative mx-auto mt-1 h-[330px] w-full min-w-0 max-w-[540px] sm:h-[430px] lg:mt-0 lg:h-[590px] lg:max-w-none"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-600/[0.04] blur-3xl" />

          <ThreeScene />

          <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.2em] text-violet-300/55 sm:bottom-5 sm:text-[10px] sm:tracking-[0.3em]">
            MY TECHNOLOGY UNIVERSE
          </div>
        </motion.div>

        {/* Bottom strip */}
        <div className="col-span-1 mt-1 flex w-full min-w-0 items-center justify-between gap-3 border-t border-violet-300/10 pt-5 lg:col-span-full lg:mt-4 lg:pt-6">
          <span className="text-[9px] tracking-[0.18em] text-white/35 sm:text-[10px] sm:tracking-[0.25em]">
            DESIGN · DEVELOP · DELIVER
          </span>

          <a
            href="#about"
            className="flex shrink-0 items-center gap-2 text-[9px] tracking-[0.12em] text-white/50 transition hover:text-violet-300 sm:text-[10px] sm:tracking-[0.2em]"
          >
            SCROLL TO DISCOVER
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
