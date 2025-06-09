import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type CaptionSideType = 
  | CaptionSideValue
  | Partial<Record<ResponsiveBreakpoint, CaptionSideValue>>;

export type CaptionSideValue = keyof typeof CAPTION_SIDE_CLASS_MAP;

export const CAPTION_SIDE_CLASS_MAP = {
  "top": "caption-top",
  "xs:top": "xs:caption-top",
  "sm:top": "sm:caption-top",
  "md:top": "md:caption-top",
  "lg:top": "lg:caption-top",
  "xl:top": "xl:caption-top",
  "2xl:top": "2xl:caption-top",
  "hover:top": "hover:caption-top",
  "focus:top": "focus:caption-top",
  "active:top": "active:caption-top",
  "disabled:top": "disabled:caption-top",
  "group-hover:top": "group-hover:caption-top",
  "group:top": "group:caption-top",
  "first:top": "first:caption-top",
  "last:top": "last:caption-top",
  "odd:top": "odd:caption-top",
  "even:top": "even:caption-top",
  "dark:top": "dark:caption-top",
  "bottom": "caption-bottom",
  "xs:bottom": "xs:caption-bottom",
  "sm:bottom": "sm:caption-bottom",
  "md:bottom": "md:caption-bottom",
  "lg:bottom": "lg:caption-bottom",
  "xl:bottom": "xl:caption-bottom",
  "2xl:bottom": "2xl:caption-bottom",
  "hover:bottom": "hover:caption-bottom",
  "focus:bottom": "focus:caption-bottom",
  "active:bottom": "active:caption-bottom",
  "disabled:bottom": "disabled:caption-bottom",
  "group-hover:bottom": "group-hover:caption-bottom",
  "group:bottom": "group:caption-bottom",
  "first:bottom": "first:caption-bottom",
  "last:bottom": "last:caption-bottom",
  "odd:bottom": "odd:caption-bottom",
  "even:bottom": "even:caption-bottom",
  "dark:bottom": "dark:caption-bottom",
} as const;