
import { useEffect } from "react";
import gsap from "gsap";

export default function useScrollProgress() {
  useEffect(() => {
    let frame = null;

    const update = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        const element = document.getElementById("scroll-progress");

        if (element) {
          const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

          const progress =
            total > 0 ? window.scrollY / total : 0;

          gsap.set(element, {
            scaleX: Math.min(1, Math.max(0, progress)),
          });
        }

        frame = null;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);

      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
