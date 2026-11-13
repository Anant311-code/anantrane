
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";

const artwork = {
  CricVerse:
    "from-orange-500/30 via-red-500/10 to-violet-500/20",
  PaceOrbit:
    "from-cyan-400/30 via-blue-500/10 to-violet-500/20",
  "NVA Food International":
    "from-amber-400/30 via-rose-500/10 to-orange-500/20",
  Matchwise:
    "from-indigo-500/30 via-sky-500/10 to-violet-500/20",
};

function ProjectImage({ project, featured = false }) {
  return (
    <div
      className={`project-visual relative isolate overflow-hidden bg-gradient-to-br ${
        artwork[project.name] ||
        "from-violet-500/20 to-blue-500/20"
      }`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} website preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#080611]/90 via-[#080611]/10 to-transparent" />

      <div className="absolute inset-0 bg-violet-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 md:left-7 md:top-7">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-medium text-white/85 backdrop-blur-xl">
          {project.category}
        </span>

        <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] text-emerald-200 backdrop-blur-xl">
          {project.status}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
        <span
          className={`font-display font-bold leading-none text-white/[0.13] ${
            featured ? "text-8xl md:text-[150px]" : "text-7xl md:text-8xl"
          }`}
        >
          {project.id}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 group-hover:rotate-45 group-hover:border-violet-300/60 group-hover:bg-violet-500">
          <ArrowUpRight size={21} />
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-5 border-t border-white/[0.08] pt-5">
      <Link
        to={`/projects/${project.slug}`}
        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-violet-300"
      >
        Explore Case Study
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        />
      </Link>

      {project.live && project.live !== "#" && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-violet-300"
        >
          Live Preview
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75 }}
      className="group relative grid overflow-hidden rounded-3xl border border-violet-300/15 bg-[#100c1c]/80 shadow-[0_20px_80px_rgba(0,0,0,0.2)] transition-colors duration-500 hover:border-violet-300/35 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`Explore ${project.name} case study`}
        className="relative block min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[490px]"
      >
        <ProjectImage project={project} featured />
      </Link>

      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
        <div className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-300">
          <Sparkles size={14} />
          Featured Project
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
          {project.type}
        </p>

        <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {project.name}
          <span className="text-violet-400">.</span>
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/50">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      className="project-card group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0a18]/80 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.name} case study`}
        className="block"
      >
        <div className="aspect-[16/10]">
          <ProjectImage project={project} />
        </div>
      </Link>

      <div className="p-6 md:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          {project.type}
        </p>

        <h3 className="mt-3 font-display text-2xl font-bold text-white">
          {project.name}
        </h3>

        <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/45">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/45"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="rounded-full border border-violet-400/20 px-2.5 py-1 text-[10px] text-violet-300">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-7">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[450px] w-[450px] rounded-full bg-violet-600/[0.07] blur-[140px]" />

      <div className="container-main relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                03 / Selected Work
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              Things I've{" "}
              <span className="text-gradient">built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45">
            A collection of digital products, experiments and real-world
            web experiences built through curiosity and code.
          </p>
        </motion.div>

        {/* Featured project */}
        {featuredProject && (
          <div className="mb-8">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Supporting projects */}
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers3 size={16} className="text-violet-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              More Selected Work
            </span>
          </div>

          <span className="text-[10px] tracking-widest text-white/30">
            {String(supportingProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
