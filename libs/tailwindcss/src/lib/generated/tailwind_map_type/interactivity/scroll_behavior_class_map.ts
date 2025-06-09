import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ScrollBehaviorType = 
  | ScrollBehaviorValue
  | Partial<Record<ResponsiveBreakpoint, ScrollBehaviorValue>>;

export type ScrollBehaviorValue = keyof typeof SCROLL_BEHAVIOR_CLASS_MAP;

export const SCROLL_BEHAVIOR_CLASS_MAP = {
  "auto": "scroll-auto",
  "xs:auto": "xs:scroll-auto",
  "sm:auto": "sm:scroll-auto",
  "md:auto": "md:scroll-auto",
  "lg:auto": "lg:scroll-auto",
  "xl:auto": "xl:scroll-auto",
  "2xl:auto": "2xl:scroll-auto",
  "hover:auto": "hover:scroll-auto",
  "focus:auto": "focus:scroll-auto",
  "active:auto": "active:scroll-auto",
  "disabled:auto": "disabled:scroll-auto",
  "group-hover:auto": "group-hover:scroll-auto",
  "group:auto": "group:scroll-auto",
  "first:auto": "first:scroll-auto",
  "last:auto": "last:scroll-auto",
  "odd:auto": "odd:scroll-auto",
  "even:auto": "even:scroll-auto",
  "dark:auto": "dark:scroll-auto",
  "smooth": "scroll-smooth",
  "xs:smooth": "xs:scroll-smooth",
  "sm:smooth": "sm:scroll-smooth",
  "md:smooth": "md:scroll-smooth",
  "lg:smooth": "lg:scroll-smooth",
  "xl:smooth": "xl:scroll-smooth",
  "2xl:smooth": "2xl:scroll-smooth",
  "hover:smooth": "hover:scroll-smooth",
  "focus:smooth": "focus:scroll-smooth",
  "active:smooth": "active:scroll-smooth",
  "disabled:smooth": "disabled:scroll-smooth",
  "group-hover:smooth": "group-hover:scroll-smooth",
  "group:smooth": "group:scroll-smooth",
  "first:smooth": "first:scroll-smooth",
  "last:smooth": "last:scroll-smooth",
  "odd:smooth": "odd:scroll-smooth",
  "even:smooth": "even:scroll-smooth",
  "dark:smooth": "dark:scroll-smooth",
} as const;