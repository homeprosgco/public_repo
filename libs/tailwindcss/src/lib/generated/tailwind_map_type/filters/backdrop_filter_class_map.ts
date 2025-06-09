import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BackdropFilterType = 
  | BackdropFilterValue
  | Partial<Record<ResponsiveBreakpoint, BackdropFilterValue>>;

export type BackdropFilterValue = keyof typeof BACKDROP_FILTER_CLASS_MAP;

export const BACKDROP_FILTER_CLASS_MAP = {
  "none": "backdrop-blur-none",
  "xs:none": "xs:backdrop-blur-none",
  "sm:none": "sm:backdrop-blur-none",
  "md:none": "md:backdrop-blur-none",
  "lg:none": "lg:backdrop-blur-none",
  "xl:none": "xl:backdrop-blur-none",
  "2xl:none": "2xl:backdrop-blur-none",
  "hover:none": "hover:backdrop-blur-none",
  "focus:none": "focus:backdrop-blur-none",
  "active:none": "active:backdrop-blur-none",
  "disabled:none": "disabled:backdrop-blur-none",
  "group-hover:none": "group-hover:backdrop-blur-none",
  "group:none": "group:backdrop-blur-none",
  "first:none": "first:backdrop-blur-none",
  "last:none": "last:backdrop-blur-none",
  "odd:none": "odd:backdrop-blur-none",
  "even:none": "even:backdrop-blur-none",
  "dark:none": "dark:backdrop-blur-none",
} as const;