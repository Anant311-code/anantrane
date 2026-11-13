
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../../data/portfolio";
import TiltCard from "../effects/TiltCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;

      if (!track || !section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 100);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.set(track, { clearProps: "transform" });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-0 md:min-h-screen overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-4 md:pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
              Selected creations / 2025–26
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold text-white">
              Things I've
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                brought to life.
              </span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-xs leading-relaxed text-sm">
            A selection of products and digital experiences I've designed
            and developed.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="project-gallery-track flex flex-col md:flex-row gap-6 px-5 md:px-[8vw] md:w-max"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="w-full md:w-[540px] shrink-0"
          >
            <TiltCard className="h-full">
              <Link
                to={`/projects/${project.slug}`}
                className="group block h-full rounded-3xl overflow-hidden border border-white/10 bg-[#11101a] hover:border-violet-400/40 transition-colors duration-500"
              >
                <div className="relative h-[250px] md:h-[340px] overflow-hidden bg-gradient-to-br from-violet-950/70 via-[#171326] to-[#0b0b12]">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#11101a] via-transparent to-transparent" />

                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-full text-xs text-violet-200 border border-violet-300/20 bg-black/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-violet-500 group-hover:border-violet-400 transition-all">
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="text-xs text-violet-300 tracking-widest uppercase">
                      Project 0{index + 1}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">
                    {project.tagline || project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {(project.tech || []).slice(0, 4).map((technology) => (
  <span
    key={technology}
    className="text-xs text-gray-300 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-full"
  >
    {technology}
  </span>
))}
                  </div>

                  <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/10">
                    <span className="text-sm text-violet-300 flex items-center gap-2">
                      <Layers3 size={15} />
                      Explore case study
                    </span>

                    <ExternalLink
                      size={17}
                      className="text-gray-500 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-10 mt-8 md:mt-12 flex items-center justify-between">
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll to explore
        </p>

        <div className="hidden md:flex items-center gap-3">
          <div className="w-32 h-px bg-white/10">
            <div className="w-1/3 h-px bg-violet-400" />
          </div>
          <span className="text-xs text-gray-500">01 — 05</span>
        </div>
      </div>
    </section>
  );
}
