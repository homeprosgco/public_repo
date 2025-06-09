import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackdropInvertType = 
  | BackdropInvertValue
  | Partial<Record<ResponsiveBreakpoint, BackdropInvertValue>>;

export type BackdropInvertValue = keyof typeof BACKDROP_INVERT_CLASS_MAP;

export const BACKDROP_INVERT_CLASS_MAP = {
  "0": "backdrop-invert-0",
  "xs:0": "xs:backdrop-invert-0",
  "sm:0": "sm:backdrop-invert-0",
  "md:0": "md:backdrop-invert-0",
  "lg:0": "lg:backdrop-invert-0",
  "xl:0": "xl:backdrop-invert-0",
  "2xl:0": "2xl:backdrop-invert-0",
  "hover:0": "hover:backdrop-invert-0",
  "focus:0": "focus:backdrop-invert-0",
  "active:0": "active:backdrop-invert-0",
  "disabled:0": "disabled:backdrop-invert-0",
  "group-hover:0": "group-hover:backdrop-invert-0",
  "group:0": "group:backdrop-invert-0",
  "first:0": "first:backdrop-invert-0",
  "last:0": "last:backdrop-invert-0",
  "odd:0": "odd:backdrop-invert-0",
  "even:0": "even:backdrop-invert-0",
  "dark:0": "dark:backdrop-invert-0",
  "invert": "backdrop-invert",
  "xs:invert": "xs:backdrop-invert",
  "sm:invert": "sm:backdrop-invert",
  "md:invert": "md:backdrop-invert",
  "lg:invert": "lg:backdrop-invert",
  "xl:invert": "xl:backdrop-invert",
  "2xl:invert": "2xl:backdrop-invert",
  "hover:invert": "hover:backdrop-invert",
  "focus:invert": "focus:backdrop-invert",
  "active:invert": "active:backdrop-invert",
  "disabled:invert": "disabled:backdrop-invert",
  "group-hover:invert": "group-hover:backdrop-invert",
  "group:invert": "group:backdrop-invert",
  "first:invert": "first:backdrop-invert",
  "last:invert": "last:backdrop-invert",
  "odd:invert": "odd:backdrop-invert",
  "even:invert": "even:backdrop-invert",
  "dark:invert": "dark:backdrop-invert",
} as const;