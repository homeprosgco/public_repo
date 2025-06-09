import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type FlexShrinkType = 
  | FlexShrinkValue
  | Partial<Record<ResponsiveBreakpoint, FlexShrinkValue>>;

export type FlexShrinkValue = keyof typeof FLEX_SHRINK_CLASS_MAP;

export const FLEX_SHRINK_CLASS_MAP = {
  "1": "shrink",
  "xs:1": "xs:shrink",
  "sm:1": "sm:shrink",
  "md:1": "md:shrink",
  "lg:1": "lg:shrink",
  "xl:1": "xl:shrink",
  "2xl:1": "2xl:shrink",
  "hover:1": "hover:shrink",
  "focus:1": "focus:shrink",
  "active:1": "active:shrink",
  "disabled:1": "disabled:shrink",
  "group-hover:1": "group-hover:shrink",
  "group:1": "group:shrink",
  "first:1": "first:shrink",
  "last:1": "last:shrink",
  "odd:1": "odd:shrink",
  "even:1": "even:shrink",
  "dark:1": "dark:shrink",
  "0": "shrink-0",
  "xs:0": "xs:shrink-0",
  "sm:0": "sm:shrink-0",
  "md:0": "md:shrink-0",
  "lg:0": "lg:shrink-0",
  "xl:0": "xl:shrink-0",
  "2xl:0": "2xl:shrink-0",
  "hover:0": "hover:shrink-0",
  "focus:0": "focus:shrink-0",
  "active:0": "active:shrink-0",
  "disabled:0": "disabled:shrink-0",
  "group-hover:0": "group-hover:shrink-0",
  "group:0": "group:shrink-0",
  "first:0": "first:shrink-0",
  "last:0": "last:shrink-0",
  "odd:0": "odd:shrink-0",
  "even:0": "even:shrink-0",
  "dark:0": "dark:shrink-0",
} as const;