import { motion } from "motion/react";
import { teamEgypt } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";
import { Crest } from "./Crest";
import { Reveal } from "./Reveal";

function Facts({
  facts,
  accent,
}: {
  facts: { label: { en: string; ar: string }; value: string }[];
  accent: string;
}) {
  const { t } = useLang();
  return (
    <dl className="mt-12 space-y-7">
      {facts.map((f, i) => (
        <Reveal key={i} delay={0.12 * i}>
          <div className="border-t border-hairline pt-4">
            <dt className="label-eyebrow">{t(f.label)}</dt>
            <dd className="mt-2 font-display text-xl leading-snug" style={{ color: accent }}>
              {f.value}
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}

export function ClubNational() {
  const { t } = useLang();
  const calm = useCalmMotion();

  return (
    <section id="egypt" className="surface-dark relative overflow-hidden py-24 lg:py-36">
      <div className="egypt-stripe absolute inset-x-0 top-0 h-1.5" />
      <div className="relative mx-auto grid max-w-[92rem] gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12">
        <div>
          <Reveal>
            <p className="label-eyebrow">{t(teamEgypt.eyebrow)}</p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.7rem,6vw,5.5rem)] font-light uppercase leading-[0.9]">
              {t(teamEgypt.title)}
            </h2>
          </Reveal>
        </div>
        <div className="relative border-l border-hairline pl-8 lg:pl-16">
            <motion.div
              initial={calm ? {} : { opacity: 0, scale: 0.86 }}
              whileInView={calm ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.4, delay: 0.15, ease: EASE_WEIGHT }}
            >
              <Crest variant="national" className="h-28 w-auto" />
            </motion.div>
            <Reveal delay={0.15}>
              <h3 className="mt-10 font-display text-[clamp(2rem,3.6vw,3.2rem)] font-light leading-[1.05]">
                {t(teamEgypt.egypt.name)}
              </h3>
              <p className="mt-6 max-w-2xl text-champagne-light/80">{t(teamEgypt.egypt.body)}</p>
            </Reveal>
            <Facts facts={teamEgypt.egypt.facts} accent="var(--color-champagne)" />
        </div>
      </div>
    </section>
  );
}
