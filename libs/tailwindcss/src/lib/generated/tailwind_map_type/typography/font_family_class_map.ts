import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type FontFamilyType = 
  | FontFamilyValue
  | Partial<Record<ResponsiveBreakpoint, FontFamilyValue>>;

export type FontFamilyValue = keyof typeof FONT_FAMILY_CLASS_MAP;

export const FONT_FAMILY_CLASS_MAP = {
  "font-sans": "font-sans",
  "xs:font-sans": "xs:font-sans",
  "sm:font-sans": "sm:font-sans",
  "md:font-sans": "md:font-sans",
  "lg:font-sans": "lg:font-sans",
  "xl:font-sans": "xl:font-sans",
  "2xl:font-sans": "2xl:font-sans",
  "hover:font-sans": "hover:font-sans",
  "focus:font-sans": "focus:font-sans",
  "active:font-sans": "active:font-sans",
  "disabled:font-sans": "disabled:font-sans",
  "group-hover:font-sans": "group-hover:font-sans",
  "group:font-sans": "group:font-sans",
  "first:font-sans": "first:font-sans",
  "last:font-sans": "last:font-sans",
  "odd:font-sans": "odd:font-sans",
  "even:font-sans": "even:font-sans",
  "dark:font-sans": "dark:font-sans",
  "font-serif": "font-serif",
  "xs:font-serif": "xs:font-serif",
  "sm:font-serif": "sm:font-serif",
  "md:font-serif": "md:font-serif",
  "lg:font-serif": "lg:font-serif",
  "xl:font-serif": "xl:font-serif",
  "2xl:font-serif": "2xl:font-serif",
  "hover:font-serif": "hover:font-serif",
  "focus:font-serif": "focus:font-serif",
  "active:font-serif": "active:font-serif",
  "disabled:font-serif": "disabled:font-serif",
  "group-hover:font-serif": "group-hover:font-serif",
  "group:font-serif": "group:font-serif",
  "first:font-serif": "first:font-serif",
  "last:font-serif": "last:font-serif",
  "odd:font-serif": "odd:font-serif",
  "even:font-serif": "even:font-serif",
  "dark:font-serif": "dark:font-serif",
  "font-mono": "font-mono",
  "xs:font-mono": "xs:font-mono",
  "sm:font-mono": "sm:font-mono",
  "md:font-mono": "md:font-mono",
  "lg:font-mono": "lg:font-mono",
  "xl:font-mono": "xl:font-mono",
  "2xl:font-mono": "2xl:font-mono",
  "hover:font-mono": "hover:font-mono",
  "focus:font-mono": "focus:font-mono",
  "active:font-mono": "active:font-mono",
  "disabled:font-mono": "disabled:font-mono",
  "group-hover:font-mono": "group-hover:font-mono",
  "group:font-mono": "group:font-mono",
  "first:font-mono": "first:font-mono",
  "last:font-mono": "last:font-mono",
  "odd:font-mono": "odd:font-mono",
  "even:font-mono": "even:font-mono",
  "dark:font-mono": "dark:font-mono",
} as const;