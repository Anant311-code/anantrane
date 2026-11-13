
import { useEffect, useRef } from "react";

export default function useSecretShortcut(onActivate) {
  const sequence = useRef("");

  useEffect(() => {
    const handleKey = (event) => {
      if (
        event.target instanceof HTMLElement &&
        ["INPUT", "TEXTAREA"].includes(event.target.tagName)
      ) return;

      if (event.ctrlKey || event.metaKey || event.altKey) return;

      sequence.current += event.key.toLowerCase();
      sequence.current = sequence.current.slice(-2);

      if (sequence.current === "ar") {
        sequence.current = "";
        onActivate();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onActivate]);
}
