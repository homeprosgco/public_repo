import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type RingInsetType = 
  | RingInsetValue
  | Partial<Record<ResponsiveBreakpoint, RingInsetValue>>;

export type RingInsetValue = keyof typeof RING_INSET_CLASS_MAP;

export const RING_INSET_CLASS_MAP = {
  "inset": "ring-inset",
  "xs:inset": "xs:ring-inset",
  "sm:inset": "sm:ring-inset",
  "md:inset": "md:ring-inset",
  "lg:inset": "lg:ring-inset",
  "xl:inset": "xl:ring-inset",
  "2xl:inset": "2xl:ring-inset",
  "hover:inset": "hover:ring-inset",
  "focus:inset": "focus:ring-inset",
  "active:inset": "active:ring-inset",
  "disabled:inset": "disabled:ring-inset",
  "group-hover:inset": "group-hover:ring-inset",
  "group:inset": "group:ring-inset",
  "first:inset": "first:ring-inset",
  "last:inset": "last:ring-inset",
  "odd:inset": "odd:ring-inset",
  "even:inset": "even:ring-inset",
  "dark:inset": "dark:ring-inset",
} as const;