import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackdropGrayscaleType = 
  | BackdropGrayscaleValue
  | Partial<Record<ResponsiveBreakpoint, BackdropGrayscaleValue>>;

export type BackdropGrayscaleValue = keyof typeof BACKDROP_GRAYSCALE_CLASS_MAP;

export const BACKDROP_GRAYSCALE_CLASS_MAP = {
  "0": "backdrop-grayscale-0",
  "xs:0": "xs:backdrop-grayscale-0",
  "sm:0": "sm:backdrop-grayscale-0",
  "md:0": "md:backdrop-grayscale-0",
  "lg:0": "lg:backdrop-grayscale-0",
  "xl:0": "xl:backdrop-grayscale-0",
  "2xl:0": "2xl:backdrop-grayscale-0",
  "hover:0": "hover:backdrop-grayscale-0",
  "focus:0": "focus:backdrop-grayscale-0",
  "active:0": "active:backdrop-grayscale-0",
  "disabled:0": "disabled:backdrop-grayscale-0",
  "group-hover:0": "group-hover:backdrop-grayscale-0",
  "group:0": "group:backdrop-grayscale-0",
  "first:0": "first:backdrop-grayscale-0",
  "last:0": "last:backdrop-grayscale-0",
  "odd:0": "odd:backdrop-grayscale-0",
  "even:0": "even:backdrop-grayscale-0",
  "dark:0": "dark:backdrop-grayscale-0",
  "grayscale": "backdrop-grayscale",
  "xs:grayscale": "xs:backdrop-grayscale",
  "sm:grayscale": "sm:backdrop-grayscale",
  "md:grayscale": "md:backdrop-grayscale",
  "lg:grayscale": "lg:backdrop-grayscale",
  "xl:grayscale": "xl:backdrop-grayscale",
  "2xl:grayscale": "2xl:backdrop-grayscale",
  "hover:grayscale": "hover:backdrop-grayscale",
  "focus:grayscale": "focus:backdrop-grayscale",
  "active:grayscale": "active:backdrop-grayscale",
  "disabled:grayscale": "disabled:backdrop-grayscale",
  "group-hover:grayscale": "group-hover:backdrop-grayscale",
  "group:grayscale": "group:backdrop-grayscale",
  "first:grayscale": "first:backdrop-grayscale",
  "last:grayscale": "last:backdrop-grayscale",
  "odd:grayscale": "odd:backdrop-grayscale",
  "even:grayscale": "even:backdrop-grayscale",
  "dark:grayscale": "dark:backdrop-grayscale",
} as const;