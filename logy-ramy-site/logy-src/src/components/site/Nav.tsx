import { useEffect, useState } from "react";
import { nav, athlete } from "@/data/content";
import { useLang } from "@/lib/lang";

export function Nav() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-[60] transition-all duration-700 " +
        (scrolled ? "border-b border-bone/30 bg-ink/90 backdrop-blur-xl" : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-5 lg:px-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg tracking-wide text-bone"
        >
          {t(athlete.firstName)} <span className="text-pink">{t(athlete.lastName)}</span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={
                "label-eyebrow text-bone transition-colors duration-500 hover:text-pink " +
                (active === item.id ? "text-pink" : "")
              }
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="label-eyebrow border border-bone/40 px-3 py-1.5 text-bone transition-colors duration-500 hover:border-pink hover:text-pink"
            aria-label="Toggle language"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="label-eyebrow text-bone lg:hidden"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="label-eyebrow text-left text-bone"
              >
                {t(item.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
