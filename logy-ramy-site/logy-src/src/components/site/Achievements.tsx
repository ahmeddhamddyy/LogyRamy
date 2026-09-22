import { achievements, ui } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function Achievements() {
  const { t } = useLang();

  return (
    <section className="surface-dark relative overflow-hidden border-y border-hairline py-24 lg:py-32">
      <div aria-hidden="true" className="pyramid-sun" />
      <div className="mx-auto max-w-[92rem] px-6 lg:px-12">
        <Reveal>
          <p className="label-eyebrow">{t(ui.achievements)}</p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.7rem,6vw,5.5rem)] font-light uppercase leading-[0.9]">
            {t(ui.achievementsTitle)}
          </h2>
          <p className="mt-6 max-w-xl text-sm text-champagne-light/70">{t(ui.prototypeNote)}</p>
        </Reveal>
        <div className="pyramid-grid relative mx-auto mt-16 max-w-5xl">
          {achievements.map((a, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="pyramid-step group relative flex min-h-44 flex-col justify-end border border-champagne/30 bg-ink-raised/90 p-6 transition-colors duration-500 hover:bg-pink">
                <span className="absolute right-5 top-4 font-display text-5xl text-champagne/15">0{i + 1}</span>
                <p className="font-display text-2xl font-light leading-tight text-champagne lg:text-3xl">
                  {a.value}
                </p>
                <p className="label-eyebrow mt-3">{t(a.label)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
