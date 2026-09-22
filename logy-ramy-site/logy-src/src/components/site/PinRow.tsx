import { motion } from "motion/react";
import { useCalmMotion, EASE_SETTLE } from "@/lib/motion-prefs";

function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 46" className={className} aria-hidden="true">
      <path
        d="M7 1c2.1 0 3.4 2.1 3.4 4.4 0 1.9-1 3-1.6 4.1-.5 1 -.2 2 .5 2.9 1.6 2.1 3 5 3 9.4 0 6.8-2.4 10.9-2.4 16.6 0 3.6.6 4.9 1.3 6.6H2.8c.7-1.7 1.3-3 1.3-6.6 0-5.7-2.4-9.8-2.4-16.6 0-4.4 1.4-7.3 3-9.4.7-.9 1-1.9.5-2.9C4.6 8.4 3.6 7.3 3.6 5.4 3.6 3.1 4.9 1 7 1Z"
        fill="currentColor"
      />
      <rect x="2.6" y="17" width="8.8" height="2" fill="var(--color-pink)" opacity="0.95" />
      <rect x="2.6" y="21" width="8.8" height="2" fill="var(--color-pink)" opacity="0.95" />
    </svg>
  );
}

/**
 * Section transition: slim pin silhouettes descend and settle with one
 * soft damped bounce.
 */
export function PinRow({ count = 5 }: { count?: number }) {
  const calm = useCalmMotion();
  const pins = Array.from({ length: count });

  return (
    <div className="relative flex justify-center gap-5 overflow-hidden border-y border-bone/30 bg-ink py-10 sm:gap-8" aria-hidden="true">
      {pins.map((_, i) =>
        calm ? (
          <Pin key={i} className="h-8 w-auto text-bone/70" />
        ) : (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: -58, opacity: 0 }}
            whileInView={{ y: [-58, 6, 0], opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 1.25,
              delay: i * 0.09,
              times: [0, 0.72, 1],
              ease: EASE_SETTLE,
            }}
          >
            <Pin className="h-8 w-auto text-bone/70" />
          </motion.span>
        ),
      )}
    </div>
  );
}
