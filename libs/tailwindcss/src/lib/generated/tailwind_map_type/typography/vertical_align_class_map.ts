import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type VerticalAlignType = 
  | VerticalAlignValue
  | Partial<Record<ResponsiveBreakpoint, VerticalAlignValue>>;

export type VerticalAlignValue = keyof typeof VERTICAL_ALIGN_CLASS_MAP;

export const VERTICAL_ALIGN_CLASS_MAP = {
  "baseline": "align-baseline",
  "xs:baseline": "xs:align-baseline",
  "sm:baseline": "sm:align-baseline",
  "md:baseline": "md:align-baseline",
  "lg:baseline": "lg:align-baseline",
  "xl:baseline": "xl:align-baseline",
  "2xl:baseline": "2xl:align-baseline",
  "hover:baseline": "hover:align-baseline",
  "focus:baseline": "focus:align-baseline",
  "active:baseline": "active:align-baseline",
  "disabled:baseline": "disabled:align-baseline",
  "group-hover:baseline": "group-hover:align-baseline",
  "group:baseline": "group:align-baseline",
  "first:baseline": "first:align-baseline",
  "last:baseline": "last:align-baseline",
  "odd:baseline": "odd:align-baseline",
  "even:baseline": "even:align-baseline",
  "dark:baseline": "dark:align-baseline",
  "top": "align-text-top",
  "xs:top": "xs:align-text-top",
  "sm:top": "sm:align-text-top",
  "md:top": "md:align-text-top",
  "lg:top": "lg:align-text-top",
  "xl:top": "xl:align-text-top",
  "2xl:top": "2xl:align-text-top",
  "hover:top": "hover:align-text-top",
  "focus:top": "focus:align-text-top",
  "active:top": "active:align-text-top",
  "disabled:top": "disabled:align-text-top",
  "group-hover:top": "group-hover:align-text-top",
  "group:top": "group:align-text-top",
  "first:top": "first:align-text-top",
  "last:top": "last:align-text-top",
  "odd:top": "odd:align-text-top",
  "even:top": "even:align-text-top",
  "dark:top": "dark:align-text-top",
  "middle": "align-middle",
  "xs:middle": "xs:align-middle",
  "sm:middle": "sm:align-middle",
  "md:middle": "md:align-middle",
  "lg:middle": "lg:align-middle",
  "xl:middle": "xl:align-middle",
  "2xl:middle": "2xl:align-middle",
  "hover:middle": "hover:align-middle",
  "focus:middle": "focus:align-middle",
  "active:middle": "active:align-middle",
  "disabled:middle": "disabled:align-middle",
  "group-hover:middle": "group-hover:align-middle",
  "group:middle": "group:align-middle",
  "first:middle": "first:align-middle",
  "last:middle": "last:align-middle",
  "odd:middle": "odd:align-middle",
  "even:middle": "even:align-middle",
  "dark:middle": "dark:align-middle",
  "bottom": "align-text-bottom",
  "xs:bottom": "xs:align-text-bottom",
  "sm:bottom": "sm:align-text-bottom",
  "md:bottom": "md:align-text-bottom",
  "lg:bottom": "lg:align-text-bottom",
  "xl:bottom": "xl:align-text-bottom",
  "2xl:bottom": "2xl:align-text-bottom",
  "hover:bottom": "hover:align-text-bottom",
  "focus:bottom": "focus:align-text-bottom",
  "active:bottom": "active:align-text-bottom",
  "disabled:bottom": "disabled:align-text-bottom",
  "group-hover:bottom": "group-hover:align-text-bottom",
  "group:bottom": "group:align-text-bottom",
  "first:bottom": "first:align-text-bottom",
  "last:bottom": "last:align-text-bottom",
  "odd:bottom": "odd:align-text-bottom",
  "even:bottom": "even:align-text-bottom",
  "dark:bottom": "dark:align-text-bottom",
  "sub": "align-sub",
  "xs:sub": "xs:align-sub",
  "sm:sub": "sm:align-sub",
  "md:sub": "md:align-sub",
  "lg:sub": "lg:align-sub",
  "xl:sub": "xl:align-sub",
  "2xl:sub": "2xl:align-sub",
  "hover:sub": "hover:align-sub",
  "focus:sub": "focus:align-sub",
  "active:sub": "active:align-sub",
  "disabled:sub": "disabled:align-sub",
  "group-hover:sub": "group-hover:align-sub",
  "group:sub": "group:align-sub",
  "first:sub": "first:align-sub",
  "last:sub": "last:align-sub",
  "odd:sub": "odd:align-sub",
  "even:sub": "even:align-sub",
  "dark:sub": "dark:align-sub",
  "super": "align-super",
  "xs:super": "xs:align-super",
  "sm:super": "sm:align-super",
  "md:super": "md:align-super",
  "lg:super": "lg:align-super",
  "xl:super": "xl:align-super",
  "2xl:super": "2xl:align-super",
  "hover:super": "hover:align-super",
  "focus:super": "focus:align-super",
  "active:super": "active:align-super",
  "disabled:super": "disabled:align-super",
  "group-hover:super": "group-hover:align-super",
  "group:super": "group:align-super",
  "first:super": "first:align-super",
  "last:super": "last:align-super",
  "odd:super": "odd:align-super",
  "even:super": "even:align-super",
  "dark:super": "dark:align-super",
} as const;