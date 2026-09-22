import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useCalmMotion, EASE_WEIGHT } from "@/lib/motion-prefs";

/** Staggered fade-and-rise. Short travel, long duration — felt more than seen. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section" | "figure";
}) {
  const calm = useCalmMotion();
  const M = motion[as];

  if (calm) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, delay, ease: EASE_WEIGHT }}
    >
      {children}
    </M>
  );
}

/** Masked line-by-line reveal for display type. */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.24,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const calm = useCalmMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          {calm ? (
            <span className={lineClassName}>{line}</span>
          ) : (
            <motion.span
              className={"block " + (lineClassName ?? "")}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.5,
                delay: delay + i * stagger,
                ease: EASE_WEIGHT,
              }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}
