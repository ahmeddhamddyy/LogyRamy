import { useEffect, useState } from "react";

/** True once hydrated — safe gate for browser-only rendering. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

/** Respects prefers-reduced-motion; all motion is disabled when true. */
export function useCalmMotion() {
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCalm(mq.matches);
    const onChange = () => setCalm(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return calm;
}

/** True on touch/pointer-coarse devices — cursor and heavy motion opt out. */
export function useCoarsePointer() {
  const [coarse, setCoarse] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setCoarse(mq.matches);
    const onChange = () => setCoarse(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return coarse;
}

/** Weighted easing — a heavy ball settling, never a bounce. */
type Bezier = [number, number, number, number];
export const EASE_WEIGHT: Bezier = [0.16, 1, 0.3, 1];
export const EASE_ROLL: Bezier = [0.4, 0, 0.2, 1];
export const EASE_SETTLE: Bezier = [0.33, 0, 0.15, 1];
