import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ui, videoCategories, videos, type Video, type VideoCategory } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { Reveal } from "./Reveal";

export function VideoGallery() {
  const { t } = useLang();
  const calm = useCalmMotion();
  const [cat, setCat] = useState<VideoCategory | "All">("All");
  const [open, setOpen] = useState<Video | null>(null);

  const shown = videos.filter((v) => cat === "All" || v.category === cat);

  const chip = (on: boolean) =>
    "label-eyebrow border px-4 py-2 transition-colors duration-500 " +
    (on ? "border-pink-strong bg-pink text-ink" : "border-hairline hover:border-pink-strong hover:text-pink-strong");

  return (
    <section id="gallery" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-36">
      <Reveal>
        <p className="label-eyebrow">{t(ui.videos)}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className={chip(cat === "All")} onClick={() => setCat("All")}>
            {t(ui.filterAll)}
          </button>
          {videoCategories.map((c) => (
            <button key={c} className={chip(cat === c)} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.08}>
            <motion.button
              onClick={() => setOpen(v)}
              className="group block w-full text-left"
              whileHover={calm ? {} : { rotateX: -2.5, rotateY: 2.5 }}
              transition={{ duration: 0.9, ease: EASE_WEIGHT }}
              style={{ transformPerspective: 900 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={v.poster}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-ink/25 transition-colors duration-700 group-hover:bg-ink/10" />
                <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/60">
                  <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-champagne" />
                </span>
              </div>
              <p className="label-eyebrow mt-4">{v.category}</p>
              <h3 className="mt-2 font-display text-xl font-light leading-snug">{t(v.title)}</h3>
              <p className="mt-2 text-sm text-ink/75">{t(v.description)}</p>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="surface-dark fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="w-full max-w-4xl"
              initial={calm ? {} : { opacity: 0, y: 26 }}
              animate={calm ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_WEIGHT }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-ink-raised">
                {open.youtubeId ? (
                  <iframe
                    title={t(open.title)}
                    src={`https://www.youtube.com/embed/${open.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video src={open.src} controls autoPlay className="h-full w-full" />
                )}
              </div>
              <div className="mt-6 flex items-start justify-between gap-8">
                <div>
                  <h3 className="font-display text-2xl font-light">{t(open.title)}</h3>
                  <p className="mt-2 text-sm text-champagne-light/80">{t(open.description)}</p>
                </div>
                <button className="label-eyebrow hover:text-champagne" onClick={() => setOpen(null)}>
                  {t(ui.close)}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
