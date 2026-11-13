
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Code2,
  Check,
  Sparkles,
  Send,
  Globe2,
} from "lucide-react";

import { personalInfo } from "../data/portfolio";

const socialLinks = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Code2,
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Code2,
    description: "Explore my code",
  },
].filter((item) => item.href);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative isolate overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[140px]" />

      <div className="container-main relative z-10 mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-violet-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
            05 / Let's Connect
          </span>
        </motion.div>

        {/* Main contact panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-300/15 bg-gradient-to-br from-[#171027] via-[#100c1c] to-[#090711] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-10 md:p-16 lg:p-20"
        >
          {/* Decorative orbital rings */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[400px] w-[400px] rounded-full border border-violet-300/[0.08]" />

          <div className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full border border-violet-300/[0.08]" />

          <div className="pointer-events-none absolute right-[-30px] top-[-35px] h-[220px] w-[220px] rounded-full bg-violet-500/[0.10] blur-[80px]" />

          {/* Decorative star */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.12, 1],
            }}
            transition={{
              rotate: {
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
              },
            }}
            className="pointer-events-none absolute right-10 top-10 text-violet-300/50 md:right-20 md:top-16"
          >
            <Sparkles size={42} strokeWidth={1} />
          </motion.div>

          <div className="relative z-10 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            {/* LEFT: Main message */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-500/[0.08] px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-300" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-violet-200">
                  Open to meaningful conversations
                </span>
              </div>

              <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
                Have an idea?

                <span className="mt-2 block text-gradient">
                  Let's make
                  <br />
                  it happen.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-8 text-white/50 md:text-base">
                Whether you have a project in mind, an exciting opportunity
                or simply want to talk about technology, I'd love to hear
                from you.
              </p>

              {/* Primary CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Let's Connect")}`}
                  className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-violet-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]"
                >
                  <Mail size={18} />

                  Start a Conversation

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT: Contact information */}
            <div className="relative">
              <div className="rounded-2xl border border-white/[0.09] bg-black/20 p-5 backdrop-blur-xl sm:p-7">

                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Send size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Get in touch
                    </p>

                    <p className="mt-1 text-[10px] text-white/35">
                      I'd be happy to hear from you.
                    </p>
                  </div>
                </div>

                {/* Email card */}
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Email Address
                </p>

                <div className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                  <span className="min-w-0 break-all text-xs text-white/75 sm:text-sm">
                    {personalInfo.email}
                  </span>

                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    title="Copy email"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/55 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Check size={17} className="text-emerald-400" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Copy size={16} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <AnimatePresence>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-2 text-[10px] text-emerald-400"
                    >
                      Email copied to clipboard!
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Social links */}
                <div className="mt-8 border-t border-white/[0.08] pt-7">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Find me online
                  </p>

                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between rounded-xl border border-transparent p-3 transition hover:border-violet-400/20 hover:bg-violet-500/[0.06]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-white/60 transition group-hover:bg-violet-500/15 group-hover:text-violet-300">
                              <Icon size={17} />
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-white/80">
                                {social.label}
                              </p>

                              <p className="mt-1 text-[10px] text-white/35">
                                {social.description}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight
                            size={16}
                            className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom signature */}
          <div className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-7">
            <div className="flex items-center gap-2 text-white/35">
              <Globe2 size={14} />

              <span className="text-[10px] uppercase tracking-[0.2em]">
                Anant Rane · Full Stack Developer
              </span>
            </div>

            <span className="text-[10px] tracking-[0.15em] text-violet-300/60">
              LET'S CREATE SOMETHING MEANINGFUL.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
