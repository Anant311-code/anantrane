
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Camera, CameraOff, Sparkles } from "lucide-react";
import PortalScene from "../3d/PortalScene";

export default function ARExperience({ open, onClose }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [cameraError, setCameraError] = useState(false);
  const [starting, setStarting] = useState(false);

  useEffect(() => {
    if (!open) return;

    let active = true;

    async function startCamera() {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraError(true);
        return;
      }

      setStarting(true);

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
          },
          audio: false,
        });

        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch {
        if (active) setCameraError(true);
      } finally {
        if (active) setStarting(false);
      }
    }

    startCamera();

    return () => {
      active = false;

      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const escape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escape);

    return () => window.removeEventListener("keydown", escape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Secret AR experience"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9 }}
            className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-[#090813]"
          >
            {!cameraError ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#32145f,#090813_70%)]" />
            )}

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0">
              <PortalScene />
            </div>

            <div className="absolute left-6 top-6 z-10">
              <span className="flex items-center gap-2 rounded-full border border-violet-300/30 bg-black/40 px-4 py-2 text-xs text-violet-200 backdrop-blur-xl">
                <Sparkles size={14} />
                SECRET DIMENSION
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close experience"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-xl"
            >
              <X />
            </button>

            <div className="absolute bottom-8 left-0 right-0 z-10 px-5 text-center">
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Welcome to another dimension.
              </h2>

              <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-white/60">
                {starting
                  ? "Connecting to camera..."
                  : cameraError
                    ? "Camera unavailable. Enjoy the interactive 3D portal."
                    : "Explore the portal through your camera."}
              </p>

              {cameraError && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-violet-300">
                  <CameraOff size={15} />
                  3D fallback mode
                </div>
              )}

              <button
                onClick={onClose}
                className="mt-6 rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold transition hover:bg-violet-500"
              >
                Return to reality
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
