import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { photos, ui, type PhotoCategory } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { Reveal } from "./Reveal";

const CATEGORIES: PhotoCategory[] = ["All", "Action", "Portrait", "Team Egypt"];

export function PhotoGallery() {
  const { t } = useLang();
  const calm = useCalmMotion();
  const [cat, setCat] = useState<PhotoCategory>("All");
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const shown = photos.filter((p) => cat === "All" || p.category === cat);

  const step = useCallback(
    (dir: number) => {
      setIndex((i) => (i === null ? i : (i + dir + shown.length) % shown.length));
    },
    [shown.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const chip = (on: boolean) =>
    "label-eyebrow border px-4 py-2 transition-colors duration-500 " +
    (on ? "border-pink-strong bg-pink text-ink" : "border-hairline hover:border-pink-strong hover:text-pink-strong");

  const current = index === null ? null : shown[index];

  return (
    <section className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-36">
      <Reveal>
        <p className="label-eyebrow">{t(ui.photosTitle)}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button key={c} className={chip(cat === c)} onClick={() => setCat(c)}>
              {c === "All" ? t(ui.filterAll) : c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {shown.map((p, i) => (
          <motion.button
            key={p.src + i}
            onClick={() => setIndex(i)}
            className="mb-6 block w-full break-inside-avoid overflow-hidden"
            initial={calm ? {} : { clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            whileInView={calm ? {} : { clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.3, delay: (i % 3) * 0.1, ease: EASE_WEIGHT }}
          >
            <img
              src={p.src}
              alt={t(p.alt)}
              width={p.w}
              height={p.h}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.02]"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="surface-dark fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink/96 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIndex(null)}
            onTouchStart={(e) => {
              touchX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchX.current;
              const end = e.changedTouches[0]?.clientX ?? null;
              if (start !== null && end !== null && Math.abs(end - start) > 48) {
                step(end < start ? 1 : -1);
              }
              touchX.current = null;
            }}
          >
            <motion.img
              key={current.src}
              src={current.src}
              alt={t(current.alt)}
              className="max-h-[76svh] w-auto max-w-full object-contain"
              initial={calm ? {} : { opacity: 0, scale: 0.98 }}
              animate={calm ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE_WEIGHT }}
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className="mt-6 flex w-full max-w-4xl items-center justify-between gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="label-eyebrow hover:text-champagne" onClick={() => step(-1)}>
                ← Prev
              </button>
              <p className="text-sm text-champagne-light/80">{t(current.alt)}</p>
              <div className="flex gap-6">
                <button className="label-eyebrow hover:text-champagne" onClick={() => step(1)}>
                  Next →
                </button>
                <button className="label-eyebrow hover:text-champagne" onClick={() => setIndex(null)}>
                  {t(ui.close)}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
