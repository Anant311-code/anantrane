
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let frame;
    let particles = [];
    let mouse = { x: -100, y: -100 };
    let last = { x: -100, y: -100 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event) => {
      mouse = { x: event.clientX, y: event.clientY };

      const distance = Math.hypot(
        mouse.x - last.x,
        mouse.y - last.y
      );

      if (distance > 12) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          radius: Math.random() * 3 + 1,
          life: 1,
          velocity: Math.random() * 0.6 + 0.2,
        });

        last = { ...mouse };
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#C4B5FD";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#8B5CF6";
      ctx.fill();
      ctx.shadowBlur = 0;

      particles = particles.filter((particle) => particle.life > 0);

      particles.forEach((particle) => {
        particle.life -= 0.025 * particle.velocity;
        particle.radius *= 0.985;

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(167,139,250,${particle.life})`;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      particles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[160] hidden md:block"
      aria-hidden="true"
    />
  );
}
