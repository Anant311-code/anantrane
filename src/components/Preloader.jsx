
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const messages = [
  "Initializing digital universe",
  "Loading creative components",
  "Connecting technologies",
  "Preparing experiences",
  "Almost ready",
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let messageTimer;
    let finishTimer;

    const interval = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + Math.random() * 3 + 1, 100);

        if (next >= 100) {
          clearInterval(interval);
          finishTimer = setTimeout(onComplete, 450);
        }

        return next;
      });
    }, 45);

    messageTimer = setInterval(() => {
      setMessageIndex((previous) => (previous + 1) % messages.length);
    }, 650);

    return () => {
      clearInterval(interval);
      clearInterval(messageTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080610] text-white"
    >
      {/* Background effects */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6">

        {/* Orbital monogram */}
        <div className="relative mb-12 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-violet-400/30"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-dashed border-fuchsia-400/30"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] rounded-full border-t-2 border-transparent border-t-violet-400"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 25px rgba(139,92,246,0.15)",
                "0 0 65px rgba(139,92,246,0.4)",
                "0 0 25px rgba(139,92,246,0.15)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/30 bg-[#151025] sm:h-28 sm:w-28"
          >
            <span className="font-display text-4xl font-bold tracking-tighter sm:text-5xl">
              AR<span className="text-violet-400">.</span>
            </span>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-15px]"
          >
            <Sparkles className="absolute right-3 top-5 text-violet-300" size={17} />
          </motion.div>
        </div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-violet-300">
            Personal Portfolio
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            ANANT RANE
          </h1>

          <p className="mt-3 text-xs tracking-[0.25em] text-white/40">
            DESIGNING · DEVELOPING · CREATING
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mt-14 w-full max-w-sm">

          <div className="mb-3 flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.span
                key={messageIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[10px] uppercase tracking-[0.2em] text-white/40"
              >
                {messages[messageIndex]}
              </motion.span>
            </AnimatePresence>

            <span className="font-mono text-xs text-violet-300">
              {Math.floor(progress)}%
            </span>
          </div>

          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-400 to-violet-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="mt-12 text-[9px] tracking-[0.35em] text-white/20">
          WELCOME TO MY DIGITAL UNIVERSE
        </p>
      </div>
    </motion.div>
  );
}
