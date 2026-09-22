import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { scorecard, ui } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { Reveal } from "./Reveal";

function CountUp({ value, active }: { value: number; active: boolean }) {
  const calm = useCalmMotion();
  const [n, setN] = useState(calm ? value : 0);

  useEffect(() => {
    if (!active || calm) {
      if (calm) setN(value);
      return;
    }
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, calm, value]);

  return <span className="tabular-nums">{n}</span>;
}

function Mark({ mark, active }: { mark: "X" | "/"; active: boolean }) {
  const calm = useCalmMotion();
  const path = mark === "X" ? "M4 4 L20 20 M20 4 L4 20" : "M5 20 L19 4";
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <motion.path
        d={path}
        fill="none"
        stroke="var(--color-champagne)"
        strokeWidth="1.4"
        initial={calm ? {} : { pathLength: 0 }}
        animate={calm ? {} : { pathLength: active ? 1 : 0 }}
        transition={{ duration: 1.1, ease: EASE_WEIGHT }}
      />
    </svg>
  );
}

export function Scorecard() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section id="scorecard" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-36">
      <Reveal>
        <p className="label-eyebrow">{t(ui.scorecardTitle)}</p>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.8rem)] font-light leading-[1.05]">
          Ten frames of a career
        </h2>
      </Reveal>

      <div
        ref={ref}
        className="mt-14 grid grid-cols-2 border-l border-t border-champagne/25 sm:grid-cols-4"
      >
        {scorecard.map((s, i) => (
          <div key={i} className="border-b border-r border-champagne/25 p-5 lg:p-7">
            <div className="flex items-start justify-between gap-2">
              <span className="label-eyebrow">{t(s.label)}</span>
              {s.mark ? <Mark mark={s.mark} active={active} /> : null}
            </div>
            <div className="mt-6 font-display text-4xl font-light text-ink lg:text-5xl">
              {s.value === null ? (
                <span className="block text-xs leading-relaxed tracking-wide text-bone-dim">
                  {s.note}
                </span>
              ) : (
                <CountUp value={s.value} active={active} />
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="label-eyebrow mt-6">{t(ui.prototypeNote)}</p>
    </section>
  );
}
