import { images, intro } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function IntroStatement() {
  const { t } = useLang();

  return (
    <section className="surface-light candy-grid relative overflow-hidden px-6 py-28 lg:px-12 lg:py-40">
      <span aria-hidden="true" className="absolute -right-8 top-2 font-display text-[10rem] leading-none text-pink/15 lg:text-[18rem]">10</span>
      <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-3 lg:pt-10" delay={0.1}>
          <figure className="relative rotate-[-2deg] border-2 border-ink bg-bone p-4 pop-shadow">
            <img
              src={images.portraitIntro}
              alt="Studio portrait of Logy Ramy"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="label-eyebrow mt-4 border-t border-ink pt-3 text-ink">Cairo · 2025</figcaption>
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-8 lg:col-start-5" delay={0.25}>
          <span className="mb-6 inline-block rotate-2 bg-pink px-4 py-2 text-sm font-bold uppercase text-bone pop-shadow">Big energy. Sharp aim.</span>
          <p className="font-display text-[clamp(1.9rem,4.4vw,3.9rem)] uppercase leading-[1.05] text-ink">
            {t(intro.statement)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
