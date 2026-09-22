import { useEffect, useRef } from "react";
import { why } from "@/data/content";
import { useLang } from "@/lib/lang";
import { useCalmMotion } from "@/lib/motion-prefs";

const PINS = [
  { x: 50, y: 6 },
  { x: 45, y: 12 },
  { x: 55, y: 12 },
  { x: 40, y: 18 },
  { x: 50, y: 18 },
  { x: 60, y: 18 },
  { x: 36, y: 24 },
  { x: 45, y: 24 },
  { x: 55, y: 24 },
  { x: 64, y: 24 },
];

/**
 * "Why she loves bowling" — her voice, paired with a scroll-scrubbed shot:
 * the ball travels the lane and strikes the pins on her closing line.
 */
export function WhyBowling() {
  const { t } = useLang();
  const calm = useCalmMotion();
  const section = useRef<HTMLDivElement>(null);
  const ball = useRef<HTMLDivElement>(null);
  const pinsWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calm || !section.current) return;
    let cleanup = () => {};

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
            },
          });

          // The roll: long travel up the lane with a late hook toward the pocket.
          tl.fromTo(
            ball.current,
            { bottom: "4%", left: "58%", scale: 1 },
            {
              keyframes: [
                { bottom: "34%", left: "63%", scale: 0.78, duration: 0.4 },
                { bottom: "62%", left: "60%", scale: 0.56, duration: 0.3 },
                { bottom: "82%", left: "50%", scale: 0.42, duration: 0.25 },
              ],
              rotate: 900,
              ease: "none",
            },
            0,
          );

          // Pins settle only at the very end — on her closing line.
          const pins = pinsWrap.current?.querySelectorAll("[data-pin]") ?? [];
          pins.forEach((pin, i) => {
            tl.to(
              pin,
              {
                x: (i % 2 === 0 ? 1 : -1) * (14 + i * 2.5),
                y: -8 - i,
                rotate: (i % 2 === 0 ? 1 : -1) * (55 + i * 6),
                opacity: 0.25,
                duration: 0.12,
                ease: "power2.out",
              },
              0.9 + i * 0.008,
            );
          });
        }, section);

        cleanup = () => ctx.revert();
      },
    );

    return () => cleanup();
  }, [calm]);

  return (
    <section id="why" ref={section} className="surface-dark relative h-[300svh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* Lane, drawn in perspective in muted wood tones */}
        <div aria-hidden="true" className="absolute inset-0">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="wood" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="var(--color-champagne)" stopOpacity="0.16" />
                <stop offset="55%" stopColor="var(--color-champagne)" stopOpacity="0.06" />
                <stop offset="100%" stopColor="var(--color-champagne)" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <polygon points="18,100 82,100 58,6 42,6" fill="url(#wood)" />
            <polygon points="18,100 82,100 58,6 42,6" fill="none" stroke="var(--color-hairline)" strokeWidth="0.25" />
            {[0.25, 0.5, 0.75].map((f, i) => (
              <line
                key={i}
                x1={18 + f * 64}
                y1="100"
                x2={42 + f * 16}
                y2="6"
                stroke="var(--color-hairline)"
                strokeWidth="0.15"
              />
            ))}
            {/* targeting arrows */}
            {[
              [42, 74],
              [46.5, 78],
              [51, 74],
              [55.5, 78],
              [60, 74],
            ].map(([x, y], i) => (
              <polygon
                key={i}
                points={`${x},${y} ${x! - 1.1},${y! + 3} ${x! + 1.1},${y! + 3}`}
                fill="var(--color-champagne)"
                opacity="0.28"
              />
            ))}
          </svg>
        </div>

        {/* Pins at the end of the lane */}
        <div ref={pinsWrap} aria-hidden="true" className="absolute inset-0">
          {PINS.map((p, i) => (
            <span
              key={i}
              data-pin
              className="absolute h-6 w-[5px] rounded-t-full bg-bone/45 sm:h-8 sm:w-[7px]"
              style={{ left: `${p.x}%`, top: `${8 + p.y}%` }}
            />
          ))}
        </div>

        {/* The ball */}
        <div
          ref={ball}
          aria-hidden="true"
          className="absolute h-16 w-16 rounded-full border border-champagne/40 bg-ink-raised/70"
          style={{ bottom: "4%", left: "58%" }}
        >
          <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-champagne/50" />
          <span className="absolute left-8 top-3.5 h-2 w-2 rounded-full bg-champagne/50" />
          <span className="absolute left-6 top-8 h-2 w-2 rounded-full bg-champagne/50" />
        </div>

        {/* Her words */}
        <div className="relative mx-auto w-full max-w-5xl px-6 lg:px-12">
          <p className="label-eyebrow">{t(why.eyebrow)}</p>
          <div className="mt-10 space-y-10">
            {why.quotes.map((q, i) => (
              <p
                key={i}
                className={
                  "font-display font-light leading-[1.15] tracking-[-0.01em] " +
                  (i === why.quotes.length - 1
                    ? "text-[clamp(1.5rem,3vw,2.6rem)] text-pink"
                    : "text-[clamp(1.5rem,3.2vw,2.9rem)] text-bone")
                }
              >
                “{t(q)}”
              </p>
            ))}
          </div>

          {why.clip.src ? (
            <div className="mt-14 max-w-md">
              <p className="label-eyebrow mb-3">{t(why.clip.label)}</p>
              {why.clip.kind === "audio" ? (
                <audio controls preload="none" src={why.clip.src} className="w-full" />
              ) : (
                <video controls preload="none" src={why.clip.src} className="w-full" />
              )}
            </div>
          ) : (
            <p className="mt-14 label-eyebrow">
              {/* REPLACE — drop an audio or video clip into why.clip in content.ts */}
              Audio / video clip slot — add it in content.ts
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
