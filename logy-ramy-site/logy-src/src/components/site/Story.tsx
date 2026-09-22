import { images, story } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function Story() {
  const { t } = useLang();

  return (
    <section id="story" className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-36">
      <Reveal>
        <p className="label-eyebrow">{t(story.eyebrow)}</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,5.2vw,4.5rem)] font-light leading-[1.04] tracking-[-0.015em]">
          {t(story.title)}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5" delay={0.1}>
          <img
            src={images.portraitStory}
            alt="Logy Ramy seated with her ball before a block of games"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <p className="text-bone-dim">{t(story.paragraphs[0]!)}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="my-12 border-l border-champagne/50 pl-7">
              <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-[1.18] text-ink">
                “{t(story.pullQuote)}”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-bone-dim">{t(story.paragraphs[1]!)}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-bone-dim">{t(story.paragraphs[2]!)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
