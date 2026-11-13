
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
  Lightbulb,
  Target,
  Wrench,
  CheckCircle2,
  Sparkles,
  Globe2,
} from "lucide-react";

import { projects } from "../data/portfolio";

function SectionHeading({ label, title }) {
  return (
    <div className="mb-7">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400">
        {label}
      </p>

      <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [slug]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090711] px-5 text-white">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Project not found
          </p>

          <h1 className="font-display text-7xl font-bold">
            404
          </h1>

          <p className="mt-4 text-sm text-white/45">
            This project doesn't exist or may have been moved.
          </p>

          <Link
            to="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-5 py-3 text-sm text-violet-300 transition hover:bg-violet-500/10"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  const hasLiveLink =
    project.live && project.live !== "#";

  const hasGithubLink =
    project.github && project.github !== "#";

  const hasChallenge = Boolean(project.challenge);
  const hasSolution = Boolean(project.solution);
  const hasFeatures = project.features?.length > 0;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090711] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-64 top-20 h-[550px] w-[550px] rounded-full bg-violet-600/[0.09] blur-[150px]" />

      <div className="pointer-events-none absolute -left-64 top-[850px] h-[450px] w-[450px] rounded-full bg-purple-600/[0.06] blur-[150px]" />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-10">
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-violet-300"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-violet-400/40 group-hover:bg-violet-500/10">
            <ArrowLeft size={16} />
          </span>

          Back to selected work
        </Link>

        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 sm:block">
          ANANT RANE · PORTFOLIO
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
        <Reveal>
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] text-white/60">
              {project.status}
            </span>
          </div>

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
            {project.type}
          </p>

          <h1 className="max-w-5xl break-words font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl">
            {project.name}
            <span className="text-gradient">.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/50 md:text-xl">
            {project.tagline || project.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            {hasLiveLink && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.2)] transition hover:-translate-y-1 hover:bg-violet-400"
              >
                Visit Live Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            )}

            {hasGithubLink && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-3.5 text-sm text-white/75 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              >
                <Code2 size={18} />
                Source Code
              </a>
            )}
          </div>
        </Reveal>
      </section>

      {/* Project visual */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-950 via-[#171326] to-[#0b0b12] shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:rounded-3xl">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} project screenshot`}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090711]/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-xl md:bottom-8 md:left-8">
              <Sparkles size={14} className="text-violet-300" />

              <span className="text-[10px] font-medium tracking-wider text-white/80">
                PROJECT SHOWCASE
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.5fr] md:gap-20">
          <Reveal>
            <SectionHeading
              label="01 / Overview"
              title="The project."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-base leading-8 text-white/60 md:text-lg">
              {project.overview || project.description}
            </p>

            <div className="mt-10 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Project
                </p>

                <p className="text-sm font-medium text-white/80">
                  {project.name}
                </p>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Category
                </p>

                <p className="text-sm font-medium text-white/80">
                  {project.category}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge and solution: only show supplied information */}
      {(hasChallenge || hasSolution) && (
        <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24">

            {hasChallenge && (
              <Reveal>
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Target size={22} />
                </div>

                <SectionHeading
                  label="02 / Challenge"
                  title="The problem."
                />

                <p className="leading-8 text-white/50">
                  {project.challenge}
                </p>
              </Reveal>
            )}

            {hasSolution && (
              <Reveal delay={0.12}>
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Lightbulb size={22} />
                </div>

                <SectionHeading
                  label="03 / Solution"
                  title="The approach."
                />

                <p className="leading-8 text-white/50">
                  {project.solution}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Features */}
      {hasFeatures && (
        <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              label="04 / Highlights"
              title="Key features."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.07}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04]">
                  <CheckCircle2
                    className="mb-5 text-violet-400"
                    size={22}
                  />

                  <p className="text-sm leading-7 text-white/70">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <Reveal>
            <div className="mb-7 flex items-center gap-3">
              <Wrench className="text-violet-400" size={20} />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                05 / Technologies
              </p>
            </div>

            <h2 className="max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
              Built with the right tools.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
              Technologies and tools used in this project.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.tech?.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white/65 transition hover:border-violet-400/35 hover:bg-violet-500/[0.07] hover:text-violet-200"
              >
                <Code2 size={14} className="text-violet-400" />
                {technology}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Project CTA */}
      {hasLiveLink && (
        <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-600/15 via-[#171126] to-[#0c0915] p-7 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />

              <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-xs text-violet-300">
                    <Globe2 size={15} />
                    Explore the project
                  </div>

                  <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                    See it in action.
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/45">
                    Visit the live version and explore the project yourself.
                  </p>
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-violet-500 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-violet-400"
                >
                  Open Live Project
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Next project */}
      {nextProject && (
        <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-5 md:px-10">
          <div className="border-t border-white/10 pt-12">
            <div className="mb-7 flex items-center gap-3">
              <Layers3 size={16} className="text-violet-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                Continue Exploring
              </p>
            </div>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between gap-5"
            >
              <div>
                <p className="mb-3 text-xs text-white/35">
                  Next project · {nextProject.category}
                </p>

                <h2 className="font-display text-3xl font-bold text-white transition group-hover:text-violet-300 sm:text-5xl md:text-6xl">
                  {nextProject.name}
                </h2>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                <ArrowUpRight size={25} />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Footer navigation */}
      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="font-display text-sm font-bold text-white"
          >
            Anant Rane<span className="text-violet-400">.</span>
          </Link>

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs text-white/40 transition hover:text-violet-300"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
        </div>
      </footer>
    </main>
  );
}
