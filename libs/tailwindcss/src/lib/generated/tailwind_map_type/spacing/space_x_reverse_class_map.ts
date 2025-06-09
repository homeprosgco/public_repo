import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type SpaceXReverseType = 
  | SpaceXReverseValue
  | Partial<Record<ResponsiveBreakpoint, SpaceXReverseValue>>;

export type SpaceXReverseValue = keyof typeof SPACE_X_REVERSE_CLASS_MAP;

export const SPACE_X_REVERSE_CLASS_MAP = {
  "1": "space-x-reverse",
  "xs:1": "xs:space-x-reverse",
  "sm:1": "sm:space-x-reverse",
  "md:1": "md:space-x-reverse",
  "lg:1": "lg:space-x-reverse",
  "xl:1": "xl:space-x-reverse",
  "2xl:1": "2xl:space-x-reverse",
  "hover:1": "hover:space-x-reverse",
  "focus:1": "focus:space-x-reverse",
  "active:1": "active:space-x-reverse",
  "disabled:1": "disabled:space-x-reverse",
  "group-hover:1": "group-hover:space-x-reverse",
  "group:1": "group:space-x-reverse",
  "first:1": "first:space-x-reverse",
  "last:1": "last:space-x-reverse",
  "odd:1": "odd:space-x-reverse",
  "even:1": "even:space-x-reverse",
  "dark:1": "dark:space-x-reverse",
} as const;