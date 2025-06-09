import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type FlexGrowType = 
  | FlexGrowValue
  | Partial<Record<ResponsiveBreakpoint, FlexGrowValue>>;

export type FlexGrowValue = keyof typeof FLEX_GROW_CLASS_MAP;

export const FLEX_GROW_CLASS_MAP = {
  "1": "grow",
  "xs:1": "xs:grow",
  "sm:1": "sm:grow",
  "md:1": "md:grow",
  "lg:1": "lg:grow",
  "xl:1": "xl:grow",
  "2xl:1": "2xl:grow",
  "hover:1": "hover:grow",
  "focus:1": "focus:grow",
  "active:1": "active:grow",
  "disabled:1": "disabled:grow",
  "group-hover:1": "group-hover:grow",
  "group:1": "group:grow",
  "first:1": "first:grow",
  "last:1": "last:grow",
  "odd:1": "odd:grow",
  "even:1": "even:grow",
  "dark:1": "dark:grow",
  "0": "grow-0",
  "xs:0": "xs:grow-0",
  "sm:0": "sm:grow-0",
  "md:0": "md:grow-0",
  "lg:0": "lg:grow-0",
  "xl:0": "xl:grow-0",
  "2xl:0": "2xl:grow-0",
  "hover:0": "hover:grow-0",
  "focus:0": "focus:grow-0",
  "active:0": "active:grow-0",
  "disabled:0": "disabled:grow-0",
  "group-hover:0": "group-hover:grow-0",
  "group:0": "group:grow-0",
  "first:0": "first:grow-0",
  "last:0": "last:grow-0",
  "odd:0": "odd:grow-0",
  "even:0": "even:grow-0",
  "dark:0": "dark:grow-0",
} as const;