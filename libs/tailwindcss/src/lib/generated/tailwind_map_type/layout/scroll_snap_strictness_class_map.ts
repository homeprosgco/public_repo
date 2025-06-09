import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ScrollSnapStrictnessType = 
  | ScrollSnapStrictnessValue
  | Partial<Record<ResponsiveBreakpoint, ScrollSnapStrictnessValue>>;

export type ScrollSnapStrictnessValue = keyof typeof SCROLL_SNAP_STRICTNESS_CLASS_MAP;

export const SCROLL_SNAP_STRICTNESS_CLASS_MAP = {
  "mandatory": "snap-mandatory",
  "xs:mandatory": "xs:snap-mandatory",
  "sm:mandatory": "sm:snap-mandatory",
  "md:mandatory": "md:snap-mandatory",
  "lg:mandatory": "lg:snap-mandatory",
  "xl:mandatory": "xl:snap-mandatory",
  "2xl:mandatory": "2xl:snap-mandatory",
  "hover:mandatory": "hover:snap-mandatory",
  "focus:mandatory": "focus:snap-mandatory",
  "active:mandatory": "active:snap-mandatory",
  "disabled:mandatory": "disabled:snap-mandatory",
  "group-hover:mandatory": "group-hover:snap-mandatory",
  "group:mandatory": "group:snap-mandatory",
  "first:mandatory": "first:snap-mandatory",
  "last:mandatory": "last:snap-mandatory",
  "odd:mandatory": "odd:snap-mandatory",
  "even:mandatory": "even:snap-mandatory",
  "dark:mandatory": "dark:snap-mandatory",
  "proximity": "snap-proximity",
  "xs:proximity": "xs:snap-proximity",
  "sm:proximity": "sm:snap-proximity",
  "md:proximity": "md:snap-proximity",
  "lg:proximity": "lg:snap-proximity",
  "xl:proximity": "xl:snap-proximity",
  "2xl:proximity": "2xl:snap-proximity",
  "hover:proximity": "hover:snap-proximity",
  "focus:proximity": "focus:snap-proximity",
  "active:proximity": "active:snap-proximity",
  "disabled:proximity": "disabled:snap-proximity",
  "group-hover:proximity": "group-hover:snap-proximity",
  "group:proximity": "group:snap-proximity",
  "first:proximity": "first:snap-proximity",
  "last:proximity": "last:snap-proximity",
  "odd:proximity": "odd:snap-proximity",
  "even:proximity": "even:snap-proximity",
  "dark:proximity": "dark:snap-proximity",
} as const;