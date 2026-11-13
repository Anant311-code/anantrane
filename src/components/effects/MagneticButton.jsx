
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  href = "#",
  className = "",
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 150, damping: 15 };

  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const move = (event) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
