
import { useCallback, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import useSmoothScroll from "./hooks/useSmoothScroll";
import useScrollProgress from "./hooks/useScrollProgress";
import useSecretShortcut from "./hooks/useSecretShortcut";

import Preloader from "./components/Preloader";
import CustomCursor from "./components/effects/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import SkillsUniverse from "./components/3d/SkillsUniverse";
import HorizontalGallery from "./components/gallery/HorizontalGallery";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ARExperience from "./components/easter-egg/ARExperience";
import ProjectDetail from "./pages/ProjectDetail";


function HomePage({ onAR }) {
  return (
    <>
      <Hero onAR={onAR} />
      <About />
      <TechStack />

      <section className="section-padding bg-white/[0.015]">
        <div className="container-main">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400">
              02 / My Universe
            </span>

            <h2 className="mt-5 font-display text-4xl font-bold md:text-6xl">
              My technical <span className="text-gradient">universe.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              An interactive constellation of technologies I use to
              bring digital experiences to life.
            </p>
          </div>

          <SkillsUniverse />
        </div>
      </section>

      <HorizontalGallery />
      <Experience />
      <Contact />
    </>
  );
}


function RouteContent({ onAR }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
      >
        <Navbar />

        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage onAR={onAR} />} />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [arOpen, setArOpen] = useState(false);

  useSmoothScroll();

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const openAR = useCallback(() => {
    setArOpen(true);
  }, []);

  useSecretShortcut(openAR);
  useScrollProgress();

  return (
    <>
      {loading && (
        <Preloader onComplete={finishLoading} />
      )}

      {!loading && (
        <>
          <CustomCursor />

          <div className="noise-overlay" />

          <RouteContent onAR={openAR} />

          <div
            id="scroll-progress"
            className="pointer-events-none fixed left-0 top-0 z-[200] h-[2px] w-full origin-left scale-x-0 bg-violet-400"
          />

          <ARExperience
            open={arOpen}
            onClose={() => setArOpen(false)}
          />
        </>
      )}
    </>
  );
}
