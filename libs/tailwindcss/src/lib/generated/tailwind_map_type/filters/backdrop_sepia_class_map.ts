import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackdropSepiaType = 
  | BackdropSepiaValue
  | Partial<Record<ResponsiveBreakpoint, BackdropSepiaValue>>;

export type BackdropSepiaValue = keyof typeof BACKDROP_SEPIA_CLASS_MAP;

export const BACKDROP_SEPIA_CLASS_MAP = {
  "0": "backdrop-sepia-0",
  "xs:0": "xs:backdrop-sepia-0",
  "sm:0": "sm:backdrop-sepia-0",
  "md:0": "md:backdrop-sepia-0",
  "lg:0": "lg:backdrop-sepia-0",
  "xl:0": "xl:backdrop-sepia-0",
  "2xl:0": "2xl:backdrop-sepia-0",
  "hover:0": "hover:backdrop-sepia-0",
  "focus:0": "focus:backdrop-sepia-0",
  "active:0": "active:backdrop-sepia-0",
  "disabled:0": "disabled:backdrop-sepia-0",
  "group-hover:0": "group-hover:backdrop-sepia-0",
  "group:0": "group:backdrop-sepia-0",
  "first:0": "first:backdrop-sepia-0",
  "last:0": "last:backdrop-sepia-0",
  "odd:0": "odd:backdrop-sepia-0",
  "even:0": "even:backdrop-sepia-0",
  "dark:0": "dark:backdrop-sepia-0",
  "sepia": "backdrop-sepia",
  "xs:sepia": "xs:backdrop-sepia",
  "sm:sepia": "sm:backdrop-sepia",
  "md:sepia": "md:backdrop-sepia",
  "lg:sepia": "lg:backdrop-sepia",
  "xl:sepia": "xl:backdrop-sepia",
  "2xl:sepia": "2xl:backdrop-sepia",
  "hover:sepia": "hover:backdrop-sepia",
  "focus:sepia": "focus:backdrop-sepia",
  "active:sepia": "active:backdrop-sepia",
  "disabled:sepia": "disabled:backdrop-sepia",
  "group-hover:sepia": "group-hover:backdrop-sepia",
  "group:sepia": "group:backdrop-sepia",
  "first:sepia": "first:backdrop-sepia",
  "last:sepia": "last:backdrop-sepia",
  "odd:sepia": "odd:backdrop-sepia",
  "even:sepia": "even:backdrop-sepia",
  "dark:sepia": "dark:backdrop-sepia",
} as const;