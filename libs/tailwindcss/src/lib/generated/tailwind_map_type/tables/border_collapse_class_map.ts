import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BorderCollapseType = 
  | BorderCollapseValue
  | Partial<Record<ResponsiveBreakpoint, BorderCollapseValue>>;

export type BorderCollapseValue = keyof typeof BORDER_COLLAPSE_CLASS_MAP;

export const BORDER_COLLAPSE_CLASS_MAP = {
  "collapse": "border-collapse",
  "xs:collapse": "xs:border-collapse",
  "sm:collapse": "sm:border-collapse",
  "md:collapse": "md:border-collapse",
  "lg:collapse": "lg:border-collapse",
  "xl:collapse": "xl:border-collapse",
  "2xl:collapse": "2xl:border-collapse",
  "hover:collapse": "hover:border-collapse",
  "focus:collapse": "focus:border-collapse",
  "active:collapse": "active:border-collapse",
  "disabled:collapse": "disabled:border-collapse",
  "group-hover:collapse": "group-hover:border-collapse",
  "group:collapse": "group:border-collapse",
  "first:collapse": "first:border-collapse",
  "last:collapse": "last:border-collapse",
  "odd:collapse": "odd:border-collapse",
  "even:collapse": "even:border-collapse",
  "dark:collapse": "dark:border-collapse",
  "separate": "border-separate",
  "xs:separate": "xs:border-separate",
  "sm:separate": "sm:border-separate",
  "md:separate": "md:border-separate",
  "lg:separate": "lg:border-separate",
  "xl:separate": "xl:border-separate",
  "2xl:separate": "2xl:border-separate",
  "hover:separate": "hover:border-separate",
  "focus:separate": "focus:border-separate",
  "active:separate": "active:border-separate",
  "disabled:separate": "disabled:border-separate",
  "group-hover:separate": "group-hover:border-separate",
  "group:separate": "group:border-separate",
  "first:separate": "first:border-separate",
  "last:separate": "last:border-separate",
  "odd:separate": "odd:border-separate",
  "even:separate": "even:border-separate",
  "dark:separate": "dark:border-separate",
} as const;