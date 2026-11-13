
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CinematicReveal({
  children,
  className = "",
  delay = 0,
}) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          y: 65,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    { scope: container, dependencies: [delay] }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
