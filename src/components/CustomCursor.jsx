import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e) => {
      setHovering(
        Boolean(e.target.closest("a, button, [data-cursor='hover']"))
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[150] hidden md:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: hovering ? 52 : 12,
          height: hovering ? 52 : 12,
          x: hovering ? -26 : -6,
          y: hovering ? -26 : -6,
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full border border-violet-400 bg-violet-400/20 backdrop-blur-sm"
      />
    </motion.div>
  );
}