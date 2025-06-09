import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type SpaceYReverseType = 
  | SpaceYReverseValue
  | Partial<Record<ResponsiveBreakpoint, SpaceYReverseValue>>;

export type SpaceYReverseValue = keyof typeof SPACE_Y_REVERSE_CLASS_MAP;

export const SPACE_Y_REVERSE_CLASS_MAP = {
  "1": "space-y-reverse",
  "xs:1": "xs:space-y-reverse",
  "sm:1": "sm:space-y-reverse",
  "md:1": "md:space-y-reverse",
  "lg:1": "lg:space-y-reverse",
  "xl:1": "xl:space-y-reverse",
  "2xl:1": "2xl:space-y-reverse",
  "hover:1": "hover:space-y-reverse",
  "focus:1": "focus:space-y-reverse",
  "active:1": "active:space-y-reverse",
  "disabled:1": "disabled:space-y-reverse",
  "group-hover:1": "group-hover:space-y-reverse",
  "group:1": "group:space-y-reverse",
  "first:1": "first:space-y-reverse",
  "last:1": "last:space-y-reverse",
  "odd:1": "odd:space-y-reverse",
  "even:1": "even:space-y-reverse",
  "dark:1": "dark:space-y-reverse",
} as const;