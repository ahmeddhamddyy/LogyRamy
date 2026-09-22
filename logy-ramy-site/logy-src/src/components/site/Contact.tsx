import { useState } from "react";
import { athlete, contact } from "@/data/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const { t } = useLang();
  const [values, setValues] = useState({ name: "", email: "", org: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const field =
    "w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none transition-colors duration-500 placeholder:text-champagne-light/60 focus:border-pink";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Please enter a valid email.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="surface-dark lane-bleed border-t border-hairline">
      <div className="mx-auto grid max-w-[92rem] gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-36">
        <div>
          <Reveal>
            <p className="label-eyebrow">{t(contact.eyebrow)}</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.05]">
              {t(contact.title)}
            </h2>
            <p className="mt-8 max-w-lg text-champagne-light/80">{t(contact.pitch)}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-14 space-y-6">
              <div className="border-t border-hairline pt-4">
                <dt className="label-eyebrow">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${athlete.email}`} className="hover:text-champagne">
                    {athlete.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-hairline pt-4">
                <dt className="label-eyebrow">Social</dt>
                <dd className="mt-2 flex flex-wrap gap-6">
                  {athlete.socials.map((s) => (
                    <a key={s.label} href={s.href} className="text-sm hover:text-champagne">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full min-h-72 flex-col justify-center border border-champagne/30 p-10">
              <p className="font-display text-2xl font-light text-champagne">
                {t(contact.form.success)}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8" noValidate>
              <div>
                <label className="label-eyebrow" htmlFor="c-name">
                  {t(contact.form.name)}
                </label>
                <input
                  id="c-name"
                  className={field}
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="label-eyebrow" htmlFor="c-email">
                  {t(contact.form.email)}
                </label>
                <input
                  id="c-email"
                  type="email"
                  className={field}
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="label-eyebrow" htmlFor="c-org">
                  {t(contact.form.org)}
                </label>
                <input
                  id="c-org"
                  className={field}
                  value={values.org}
                  onChange={(e) => setValues({ ...values, org: e.target.value })}
                />
              </div>
              <div>
                <label className="label-eyebrow" htmlFor="c-message">
                  {t(contact.form.message)}
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  className={field + " resize-none"}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="sheen label-eyebrow w-full bg-champagne px-8 py-4 text-primary-foreground transition-colors duration-700 hover:bg-champagne-light"
              >
                <span className="sheen-layer" />
                {t(contact.form.submit)}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
