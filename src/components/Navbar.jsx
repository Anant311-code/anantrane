
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Atom,
  Menu,
  X,
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { personalInfo } from "../data/portfolio";

const links = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation between home and project detail pages
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const timer = setTimeout(() => {
        const target = document.querySelector(location.hash);

        target?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const scrollTo = (href) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
    }
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/");
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Code2,
    },
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: Code2,
    },
    {
      name: "Email",
      href: personalInfo.email
        ? `mailto:${personalInfo.email}`
        : "",
      icon: Mail,
    },
  ].filter((item) => item.href);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-[100] px-4 sm:px-7 lg:px-10"
      >
        {/* Cosmic top glow */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_25px_3px_rgba(139,92,246,0.8)]" />

        <nav className="relative mx-auto flex h-[76px] max-w-[1600px] items-center justify-between">

          {/* LEFT: BRAND */}
          <button
            onClick={goHome}
            aria-label="Go to homepage"
            className="group flex min-w-0 items-center gap-3"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl transition duration-500 group-hover:bg-violet-400/40" />

              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex items-center justify-center"
              >
                <Atom
                  size={33}
                  strokeWidth={1.5}
                  className="text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]"
                />
              </motion.span>
            </span>

            <span className="truncate font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              Anant Rane
              <span className="text-violet-400">.</span>
            </span>
          </button>

          {/* CENTER: DESKTOP GLASS NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="nav-pill flex items-center gap-1 rounded-full p-1.5 shadow-[0_0_35px_rgba(139,92,246,0.08)]">

              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="group relative rounded-full px-6 py-2.5 text-sm font-medium text-white/65 transition-colors duration-300 hover:text-white xl:px-8"
                >
                  <span className="absolute inset-0 rounded-full bg-violet-500/0 transition duration-300 group-hover:bg-violet-500/10" />

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full text-white/75 transition duration-300 hover:scale-110 hover:text-violet-300"
                >
                  <span className="absolute inset-0 rounded-full bg-violet-500/0 blur-lg transition group-hover:bg-violet-500/20" />

                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="relative"
                  />
                </a>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/10 text-white transition hover:bg-violet-500/20 lg:hidden"
            aria-label={
              open ? "Close navigation" : "Open navigation"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{ duration: 0.22 }}
              className="nav-glass mx-auto max-w-lg overflow-hidden rounded-2xl border border-violet-300/15 bg-[#090613]/95 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/10 px-2 pb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                  Explore Portfolio
                </span>

                <Atom
                  size={19}
                  className="text-violet-400"
                />
              </div>

              <div className="space-y-1">
                {links.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    onClick={() => scrollTo(link.href)}
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-white/75 transition hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="text-violet-400"
                    />
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-5 border-t border-white/10 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.name === "Email"
                          ? undefined
                          : "noreferrer"
                      }
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:border-violet-400/40 hover:text-violet-300"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>

              <p className="mt-4 text-center text-[10px] tracking-[0.25em] text-white/30">
                ANANT RANE · DEVELOPER
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
