import { athlete } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Crest } from "./Crest";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="surface-dark relative overflow-hidden border-t border-hairline">
      {/* subtle repeating pin motif */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="flex h-full items-end gap-6 px-6">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="h-16 w-2 shrink-0 rounded-t-full bg-bone" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[92rem] flex-col gap-10 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <p className="font-display text-3xl font-light">
            {t(athlete.firstName)} <span className="text-champagne">{t(athlete.lastName)}</span>
          </p>
          <p className="label-eyebrow mt-4">{t(athlete.tagline)}</p>
        </div>
        <Crest variant="national" className="h-12 w-auto" />
        <p className="label-eyebrow">© {new Date().getFullYear()} {t(athlete.lastName)}</p>
      </div>
    </footer>
  );
}
