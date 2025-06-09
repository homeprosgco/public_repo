import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type AnimationType = 
  | AnimationValue
  | Partial<Record<ResponsiveBreakpoint, AnimationValue>>;

export type AnimationValue = keyof typeof ANIMATION_CLASS_MAP;

export const ANIMATION_CLASS_MAP = {
  "none": "animate-none",
  "xs:none": "xs:animate-none",
  "sm:none": "sm:animate-none",
  "md:none": "md:animate-none",
  "lg:none": "lg:animate-none",
  "xl:none": "xl:animate-none",
  "2xl:none": "2xl:animate-none",
  "hover:none": "hover:animate-none",
  "focus:none": "focus:animate-none",
  "active:none": "active:animate-none",
  "disabled:none": "disabled:animate-none",
  "group-hover:none": "group-hover:animate-none",
  "group:none": "group:animate-none",
  "first:none": "first:animate-none",
  "last:none": "last:animate-none",
  "odd:none": "odd:animate-none",
  "even:none": "even:animate-none",
  "dark:none": "dark:animate-none",
} as const;