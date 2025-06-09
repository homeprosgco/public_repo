import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type SepiaType = 
  | SepiaValue
  | Partial<Record<ResponsiveBreakpoint, SepiaValue>>;

export type SepiaValue = keyof typeof SEPIA_CLASS_MAP;

export const SEPIA_CLASS_MAP = {
  "0": "sepia-0",
  "xs:0": "xs:sepia-0",
  "sm:0": "sm:sepia-0",
  "md:0": "md:sepia-0",
  "lg:0": "lg:sepia-0",
  "xl:0": "xl:sepia-0",
  "2xl:0": "2xl:sepia-0",
  "hover:0": "hover:sepia-0",
  "focus:0": "focus:sepia-0",
  "active:0": "active:sepia-0",
  "disabled:0": "disabled:sepia-0",
  "group-hover:0": "group-hover:sepia-0",
  "group:0": "group:sepia-0",
  "first:0": "first:sepia-0",
  "last:0": "last:sepia-0",
  "odd:0": "odd:sepia-0",
  "even:0": "even:sepia-0",
  "dark:0": "dark:sepia-0",
  "sepia": "sepia",
  "xs:sepia": "xs:sepia",
  "sm:sepia": "sm:sepia",
  "md:sepia": "md:sepia",
  "lg:sepia": "lg:sepia",
  "xl:sepia": "xl:sepia",
  "2xl:sepia": "2xl:sepia",
  "hover:sepia": "hover:sepia",
  "focus:sepia": "focus:sepia",
  "active:sepia": "active:sepia",
  "disabled:sepia": "disabled:sepia",
  "group-hover:sepia": "group-hover:sepia",
  "group:sepia": "group:sepia",
  "first:sepia": "first:sepia",
  "last:sepia": "last:sepia",
  "odd:sepia": "odd:sepia",
  "even:sepia": "even:sepia",
  "dark:sepia": "dark:sepia",
} as const;