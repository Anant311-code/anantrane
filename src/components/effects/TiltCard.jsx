
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [10, -10]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const handleMove = (event) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
