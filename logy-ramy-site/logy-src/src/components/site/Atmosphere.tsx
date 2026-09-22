import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { useCalmMotion, useCoarsePointer, useHydrated } from "@/lib/motion-prefs";

/** Very subtle film grain over the whole page. */
export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

/** Minimal bowling-ball cursor. Desktop / fine-pointer only. */
export function BallCursor() {
  const hydrated = useHydrated();
  const coarse = useCoarsePointer();
  const calm = useCalmMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (coarse) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a,button,[role='button'],input,textarea,select"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [coarse]);

  if (!hydrated || coarse) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
      animate={{ x: pos.x - 13, y: pos.y - 13, scale: active ? 1.45 : 1 }}
      transition={
        calm ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 26, mass: 0.6 }
      }
    >
      <svg width="26" height="26" viewBox="0 0 26 26">
        <circle cx="13" cy="13" r="12" fill="var(--color-pink)" stroke="var(--color-champagne)" strokeWidth="1.5" />
        <circle cx="10" cy="10.5" r="1.15" fill="var(--color-bone)" />
        <circle cx="15.5" cy="10" r="1.15" fill="var(--color-bone)" />
        <circle cx="12.5" cy="15" r="1.15" fill="var(--color-bone)" />
      </svg>
    </motion.div>
  );
}

/** A small ball rolling down the right edge as you scroll. */
export function RollingProgress() {
  const hydrated = useHydrated();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.6 });
  const top = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(smooth, [0, 1], [0, 1440]);

  if (!hydrated) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-24 right-5 top-28 z-30 hidden w-4 md:block"
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-bone/10" />
      <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ top }}>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          style={{ rotate }}
          className="-mt-2"
        >
          <circle cx="8" cy="8" r="7" fill="var(--color-pink)" stroke="var(--color-champagne)" strokeWidth="0.9" />
          <circle cx="6" cy="6" r="0.9" fill="var(--color-bone)" opacity="0.75" />
          <circle cx="10" cy="6.4" r="0.9" fill="var(--color-bone)" opacity="0.75" />
          <circle cx="8" cy="10" r="0.9" fill="var(--color-bone)" opacity="0.75" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
