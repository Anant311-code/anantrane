
import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  number,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`relative mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        {number && (
          <span className="font-mono text-xs text-violet-400">
            {number}
          </span>
        )}

        <span className="h-px w-8 bg-violet-500/70" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
          {eyebrow}
        </span>
      </div>

      <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}{" "}
        {highlight && (
          <span className="text-gradient">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
