import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useCalmMotion, EASE_ROLL, EASE_WEIGHT } from "@/lib/motion-prefs";

const PIN_X = [0, 22, 44, 11, 33, 22];
const PIN_Y = [0, 0, 0, -26, -26, -52];

/** Ball rolls in, strikes the rack, pins scatter with weight, page reveals. */
export function Preloader() {
  const calm = useCalmMotion();
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (calm) {
      setDone(true);
      return;
    }
    const start = performance.now();
    const total = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / total);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [calm]);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = done ? "" : "hidden";
    return () => {
      html.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-bone"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE_WEIGHT }}
        >
          <div className="relative w-full max-w-2xl px-8">
            <div className="relative h-28">
              {/* pin rack */}
              <div className="absolute bottom-6 right-8 h-20 w-24">
                {PIN_X.map((x, i) => (
                  <motion.span
                    key={i}
                    className="absolute bottom-0 h-9 w-2 rounded-t-full bg-bone"
                    style={{ left: x, bottom: -(PIN_Y[i] ?? 0) }}
                    animate={{
                      x: [0, 0, (i % 2 === 0 ? 1 : -1) * (26 + i * 7)],
                      y: [0, 0, -14 - i * 3],
                      rotate: [0, 0, (i % 2 === 0 ? 1 : -1) * (70 + i * 12)],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      times: [0, 0.62, 1],
                      ease: EASE_WEIGHT,
                    }}
                  />
                ))}
              </div>

              {/* ball */}
              <motion.div
                className="absolute bottom-4 left-0 h-12 w-12 rounded-full border-2 border-champagne bg-pink"
                initial={{ x: -80 }}
                animate={{ x: ["-80px", "calc(100% - 3rem)"], rotate: [0, 720] }}
                transition={{ duration: 1.7, ease: EASE_ROLL }}
              >
                <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-champagne/60" />
                <span className="absolute left-6 top-2.5 h-1.5 w-1.5 rounded-full bg-champagne/60" />
                <span className="absolute left-4 top-6 h-1.5 w-1.5 rounded-full bg-champagne/60" />
              </motion.div>

              <div className="absolute bottom-3 left-0 right-0 h-px bg-champagne/60" />
            </div>

            <div className="mt-10 flex items-baseline justify-between">
              <span className="label-eyebrow">Logy Ramy</span>
              <span className="font-display text-3xl tabular-nums text-champagne">{pct}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
