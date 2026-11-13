
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Database,
  Rocket,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Building2,
  Code2,
} from "lucide-react";

const timeline = [
  {
    id: "accenture-joining",
    year: "11 DECEMBER 2026",
    title: "Upcoming Professional Joining",
    company: "Accenture",
    role: "Incoming Professional",
    status: "Upcoming",
    description:
      "Looking forward to beginning my professional journey with Accenture and applying my technical knowledge in a real-world environment.",
    details: [
      "Joining date: 11 December 2026",
      "Organization: Accenture",
    ],
    icon: Rocket,
    upcoming: true,
  },
  {
    id: "accenture-training",
    year: "MAY 2026 – SEPTEMBER 2026",
    title: "Data Engineering Stream Training",
    company: "Accenture",
    role: "Stream Training",
    status: "Completed",
    description:
      "Completed Data Engineering stream training, strengthening my foundation in data engineering concepts and professional technology workflows.",
    details: [
      "Training period: May – September 2026",
      "Stream: Data Engineering",
    ],
    icon: Database,
  },
  {
    id: "soltech-internship",
    year: "2025 – 2026",
    title: "Full Stack Developer Intern",
    company: "Soltech Techservices Pvt. Ltd.",
    role: "Paid Internship · Stipend-based",
    status: "Completed",
    description:
      "Gained practical experience working on web development, WordPress, Shopify, email marketing platforms, analytics integrations and business technology workflows.",
    details: [
      "Duration: 6 months",
      "Type: Paid internship with stipend",
    ],
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-white/[0.015]"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[130px]" />

      <div className="container-main relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              04 / My Journey
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            From Learning to{" "}
            <span className="text-gradient">Building.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            Every opportunity has shaped my professional growth.
            Here's my journey so far, and where it takes me next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 md:mt-20">
          <div className="absolute bottom-10 left-5 top-10 w-px bg-gradient-to-b from-violet-400 via-violet-500/40 to-transparent md:left-8" />

          <div className="space-y-7 md:space-y-9">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-5 md:gap-8"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border md:h-16 md:w-16 ${
                        item.upcoming
                          ? "border-violet-300/60 bg-violet-500/15 text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                          : "border-violet-400/30 bg-[#171126] text-violet-300"
                      }`}
                    >
                      {item.upcoming && (
                        <motion.span
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                          }}
                          className="absolute inset-[-6px] rounded-full border border-violet-400"
                        />
                      )}

                      <Icon size={21} />
                    </div>
                  </div>

                  {/* Timeline card */}
                  <div
                    className={`glass mb-2 min-w-0 flex-1 rounded-2xl border p-5 transition-all duration-300 sm:p-7 md:p-8 ${
                      item.upcoming
                        ? "border-violet-300/25 shadow-[0_0_40px_rgba(139,92,246,0.07)] hover:border-violet-300/45"
                        : "border-white/[0.08] hover:border-violet-400/30"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] text-violet-300 sm:text-xs">
                        <CalendarDays size={14} />
                        {item.year}
                      </span>

                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider ${
                          item.upcoming
                            ? "border-violet-300/25 bg-violet-500/10 text-violet-200"
                            : "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                        }`}
                      >
                        {item.upcoming ? (
                          <Clock3 size={12} />
                        ) : (
                          <CheckCircle2 size={12} />
                        )}
                        {item.status}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/60">
                      <Building2
                        size={15}
                        className="shrink-0 text-violet-400"
                      />
                      <span>{item.company}</span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-violet-300/75">
                      {item.role}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-2">
                      {item.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2 text-xs leading-6 text-white/45"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    {item.upcoming && (
                      <div className="mt-6 flex items-center gap-2 border-t border-violet-300/10 pt-5 text-xs text-violet-300/70">
                        <Rocket size={14} />
                        <span>
                          The next chapter of my professional journey.
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-7"
        >
          <div className="flex items-center gap-3">
            <BriefcaseBusiness size={17} className="text-violet-400" />
            <span className="text-xs text-white/45">
              Growing through experience and continuous learning.
            </span>
          </div>

          <span className="text-[9px] tracking-[0.2em] text-white/25">
            MY PROFESSIONAL JOURNEY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
