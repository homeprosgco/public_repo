import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GrayscaleType = 
  | GrayscaleValue
  | Partial<Record<ResponsiveBreakpoint, GrayscaleValue>>;

export type GrayscaleValue = keyof typeof GRAYSCALE_CLASS_MAP;

export const GRAYSCALE_CLASS_MAP = {
  "0": "grayscale-0",
  "xs:0": "xs:grayscale-0",
  "sm:0": "sm:grayscale-0",
  "md:0": "md:grayscale-0",
  "lg:0": "lg:grayscale-0",
  "xl:0": "xl:grayscale-0",
  "2xl:0": "2xl:grayscale-0",
  "hover:0": "hover:grayscale-0",
  "focus:0": "focus:grayscale-0",
  "active:0": "active:grayscale-0",
  "disabled:0": "disabled:grayscale-0",
  "group-hover:0": "group-hover:grayscale-0",
  "group:0": "group:grayscale-0",
  "first:0": "first:grayscale-0",
  "last:0": "last:grayscale-0",
  "odd:0": "odd:grayscale-0",
  "even:0": "even:grayscale-0",
  "dark:0": "dark:grayscale-0",
  "grayscale": "grayscale",
  "xs:grayscale": "xs:grayscale",
  "sm:grayscale": "sm:grayscale",
  "md:grayscale": "md:grayscale",
  "lg:grayscale": "lg:grayscale",
  "xl:grayscale": "xl:grayscale",
  "2xl:grayscale": "2xl:grayscale",
  "hover:grayscale": "hover:grayscale",
  "focus:grayscale": "focus:grayscale",
  "active:grayscale": "active:grayscale",
  "disabled:grayscale": "disabled:grayscale",
  "group-hover:grayscale": "group-hover:grayscale",
  "group:grayscale": "group:grayscale",
  "first:grayscale": "first:grayscale",
  "last:grayscale": "last:grayscale",
  "odd:grayscale": "odd:grayscale",
  "even:grayscale": "even:grayscale",
  "dark:grayscale": "dark:grayscale",
} as const;