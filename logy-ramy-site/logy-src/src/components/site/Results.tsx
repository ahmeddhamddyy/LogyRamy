import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { matches, ui } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { Crest } from "./Crest";
import { Reveal } from "./Reveal";

export function Results() {
  const { t } = useLang();
  const calm = useCalmMotion();
  const [year, setYear] = useState<number | "all">("all");

  const years = useMemo(
    () => Array.from(new Set(matches.map((m) => m.year))).sort((a, b) => b - a),
    [],
  );

  const shown = matches.filter((m) => year === "all" || m.year === year);

  const chip = (on: boolean) =>
    "label-eyebrow border px-4 py-2 transition-colors duration-500 " +
    (on ? "border-pink-strong bg-pink text-ink" : "border-hairline hover:border-pink-strong hover:text-pink-strong");

  return (
    <section id="results" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-36">
      <Reveal>
        <p className="label-eyebrow">{t(ui.results)}</p>
        <p className="mt-4 max-w-xl text-sm text-bone-dim">{t(ui.prototypeNote)}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className={chip(year === "all")} onClick={() => setYear("all")}>
            {t(ui.allYears)}
          </button>
          {years.map((y) => (
            <button key={y} className={chip(year === y)} onClick={() => setYear(y)}>
              {y}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-px bg-hairline lg:left-1/2" />
        <ul className="space-y-10">
          {shown.map((m, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={m.date + i}
                initial={calm ? {} : { opacity: 0, x: right ? 44 : -44 }}
                whileInView={calm ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 1.1, ease: EASE_WEIGHT }}
                className={
                  "relative pl-12 lg:w-1/2 lg:pl-0 " +
                  (right ? "lg:ml-auto lg:pl-14" : "lg:pr-14 lg:text-right")
                }
              >
                <span
                  className={
                    "absolute left-4 top-3 h-2 w-2 -translate-x-1/2 rounded-full lg:left-auto " +
                    (right ? "lg:-left-1" : "lg:-right-1 lg:translate-x-1/2") +
                    (m.highlight ? " bg-pink-strong" : " bg-ink/30")
                  }
                />
                <div
                  className={
                    "border-t pt-5 " + (m.highlight ? "border-champagne/50" : "border-hairline")
                  }
                >
                  <div
                    className={
                      "flex items-center gap-4 " +
                      (right ? "" : "lg:flex-row-reverse lg:justify-start")
                    }
                  >
                    <Crest variant="national" className="h-7 w-auto shrink-0" />
                    <span className="label-eyebrow">
                      {new Date(m.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    className={
                      "mt-3 font-display text-2xl font-light leading-snug " +
                      (m.highlight ? "text-pink-strong" : "text-ink")
                    }
                  >
                    {t(m.tournament)}
                  </h3>
                  <p className="mt-2 text-sm text-ink/75">{t(m.location)}</p>
                  <p className="mt-3 text-sm text-ink/75">
                    {t(m.placement)} · {m.score}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
