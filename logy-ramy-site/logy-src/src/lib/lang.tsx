import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { L, Lang } from "@/data/content";

type LangCtx = {
  lang: Lang;
  toggle: () => void;
  t: (value: L) => string;
};

const Ctx = createContext<LangCtx>({ lang: "en", toggle: () => {}, t: (v) => v.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      toggle: () => setLang((l) => (l === "en" ? "ar" : "en")),
      t: (v: L) => v[lang] || v.en,
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
