import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { athlete, hero, images } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { MaskedLines } from "./Reveal";
import { Crest } from "./Crest";

export function Hero() {
  const { t } = useLang();
  const calm = useCalmMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.09]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section ref={ref} className="surface-dark relative h-[100svh] min-h-[42rem] w-full overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={calm ? {} : { scale, y: imgY }}>
        <img
          src={images.heroAction}
          alt="Logy Ramy in the middle of her delivery on a bowling lane"
          width={1600}
          height={1920}
          className="h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/20" />
        <div className="absolute inset-0 lane-bleed" />
      </motion.div>

      <div aria-hidden="true" className="egypt-stripe absolute inset-x-0 top-0 z-20 h-1.5" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 top-[18%] z-10 h-44 w-44 rounded-full border-[24px] border-bone/80 sm:h-64 sm:w-64"
        initial={calm ? {} : { scale: 0, rotate: -35 }}
        animate={calm ? {} : { scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 1.1, ease: EASE_WEIGHT }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-[24%] z-10 rotate-[-8deg] border-2 border-bone bg-pink px-5 py-3 font-sans text-xs font-bold uppercase text-bone shadow-[6px_6px_0_var(--color-ink)] sm:text-sm"
        initial={calm ? {} : { opacity: 0, rotate: -18, scale: 0.6 }}
        animate={calm ? {} : { opacity: 1, rotate: -8, scale: 1 }}
        transition={{ duration: 0.65, delay: 1.3, ease: EASE_WEIGHT }}
      >
        Bowl loud. Smile louder.
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24"
        style={calm ? {} : { y: textY, opacity: fade }}
      >
        <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] uppercase leading-[0.8] text-bone">
          <MaskedLines
            lines={[t(athlete.firstName), t(athlete.lastName)]}
            lineClassName="odd:text-bone even:text-pink even:[text-shadow:8px_8px_0_var(--color-bone)]"
            delay={0.2}
          />
        </h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6"
          initial={calm ? {} : { opacity: 0, y: 18 }}
          animate={calm ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: EASE_WEIGHT }}
        >
          <Crest variant="national" className="h-12 w-auto" />
          <p className="label-eyebrow text-bone">{t(athlete.tagline)}</p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-4"
          initial={calm ? {} : { opacity: 0, y: 18 }}
          animate={calm ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: EASE_WEIGHT }}
        >
          <button
            onClick={() => go("gallery")}
            className="sheen label-eyebrow bg-pink px-8 py-4 text-bone pop-shadow transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="sheen-layer" />
            {t(hero.watch)}
          </button>
          <button
            onClick={() => go("contact")}
            className="sheen label-eyebrow border-2 border-bone px-8 py-4 text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
          >
            <span className="sheen-layer" />
            {t(hero.sponsor)}
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-y border-bone bg-pink py-2.5 text-bone">
        <div className="energy-ticker flex w-max gap-7 whitespace-nowrap font-sans text-sm font-bold uppercase tracking-[0.14em]">
          {[0, 1].map((set) => (
            <span key={set} className="flex gap-7">
              <span>Strike energy</span><span>✦</span><span>Egyptian power</span><span>✦</span><span>Funny under pressure</span><span>✦</span><span>Zero chill on the lane</span><span>✦</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={calm ? {} : { y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="label-eyebrow">{t(hero.scrollCue)}</span>
          <span className="h-12 w-px bg-gradient-to-b from-bone/70 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
