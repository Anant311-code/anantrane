import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-16">
      <div className="container-main flex flex-col items-center justify-between gap-5 md:flex-row">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tighter"
        >
          AR<span className="text-violet-400">.</span>
        </a>

        <p className="text-center text-xs text-white/30">
          © {new Date().getFullYear()} Anant Rane. Designed & built with purpose.
        </p>

        <a
          href="#home"
          className="group flex items-center gap-2 text-xs font-semibold text-white/50 transition hover:text-violet-300"
        >
          BACK TO TOP
          <ArrowUp
            size={15}
            className="transition-transform group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  );
}