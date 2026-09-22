import { press, ui } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function Press() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-[92rem] px-6 py-24 lg:px-12 lg:py-32">
      <Reveal>
        <p className="label-eyebrow">{t(ui.press)}</p>
      </Reveal>
      <ul className="mt-12">
        {press.map((p, i) => (
          <Reveal key={i} as="li" delay={i * 0.08}>
            <div className="group flex flex-col gap-2 border-t border-hairline py-7 transition-colors duration-700 hover:border-pink-strong sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-display text-xl font-light transition-colors duration-700 group-hover:text-pink-strong">
                {t(p.title)}
              </span>
              <span className="label-eyebrow">{p.outlet}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
