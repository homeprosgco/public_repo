import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BoxDecorationBreakType = 
  | BoxDecorationBreakValue
  | Partial<Record<ResponsiveBreakpoint, BoxDecorationBreakValue>>;

export type BoxDecorationBreakValue = keyof typeof BOX_DECORATION_BREAK_CLASS_MAP;

export const BOX_DECORATION_BREAK_CLASS_MAP = {
  "clone": "box-decoration-clone",
  "xs:clone": "xs:box-decoration-clone",
  "sm:clone": "sm:box-decoration-clone",
  "md:clone": "md:box-decoration-clone",
  "lg:clone": "lg:box-decoration-clone",
  "xl:clone": "xl:box-decoration-clone",
  "2xl:clone": "2xl:box-decoration-clone",
  "hover:clone": "hover:box-decoration-clone",
  "focus:clone": "focus:box-decoration-clone",
  "active:clone": "active:box-decoration-clone",
  "disabled:clone": "disabled:box-decoration-clone",
  "group-hover:clone": "group-hover:box-decoration-clone",
  "group:clone": "group:box-decoration-clone",
  "first:clone": "first:box-decoration-clone",
  "last:clone": "last:box-decoration-clone",
  "odd:clone": "odd:box-decoration-clone",
  "even:clone": "even:box-decoration-clone",
  "dark:clone": "dark:box-decoration-clone",
  "slice": "box-decoration-slice",
  "xs:slice": "xs:box-decoration-slice",
  "sm:slice": "sm:box-decoration-slice",
  "md:slice": "md:box-decoration-slice",
  "lg:slice": "lg:box-decoration-slice",
  "xl:slice": "xl:box-decoration-slice",
  "2xl:slice": "2xl:box-decoration-slice",
  "hover:slice": "hover:box-decoration-slice",
  "focus:slice": "focus:box-decoration-slice",
  "active:slice": "active:box-decoration-slice",
  "disabled:slice": "disabled:box-decoration-slice",
  "group-hover:slice": "group-hover:box-decoration-slice",
  "group:slice": "group:box-decoration-slice",
  "first:slice": "first:box-decoration-slice",
  "last:slice": "last:box-decoration-slice",
  "odd:slice": "odd:box-decoration-slice",
  "even:slice": "even:box-decoration-slice",
  "dark:slice": "dark:box-decoration-slice",
} as const;