import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type LetterSpacingType = 
  | LetterSpacingValue
  | Partial<Record<ResponsiveBreakpoint, LetterSpacingValue>>;

export type LetterSpacingValue = keyof typeof LETTER_SPACING_CLASS_MAP;

export const LETTER_SPACING_CLASS_MAP = {
  "0": "tracking-widest",
  "xs:0": "xs:tracking-widest",
  "sm:0": "sm:tracking-widest",
  "md:0": "md:tracking-widest",
  "lg:0": "lg:tracking-widest",
  "xl:0": "xl:tracking-widest",
  "2xl:0": "2xl:tracking-widest",
  "hover:0": "hover:tracking-widest",
  "focus:0": "focus:tracking-widest",
  "active:0": "active:tracking-widest",
  "disabled:0": "disabled:tracking-widest",
  "group-hover:0": "group-hover:tracking-widest",
  "group:0": "group:tracking-widest",
  "first:0": "first:tracking-widest",
  "last:0": "last:tracking-widest",
  "odd:0": "odd:tracking-widest",
  "even:0": "even:tracking-widest",
  "dark:0": "dark:tracking-widest",
} as const;