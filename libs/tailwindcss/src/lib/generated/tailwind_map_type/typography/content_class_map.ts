import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ContentType = 
  | ContentValue
  | Partial<Record<ResponsiveBreakpoint, ContentValue>>;

export type ContentValue = keyof typeof CONTENT_CLASS_MAP;

export const CONTENT_CLASS_MAP = {
  "none": "content-none",
  "xs:none": "xs:content-none",
  "sm:none": "sm:content-none",
  "md:none": "md:content-none",
  "lg:none": "lg:content-none",
  "xl:none": "xl:content-none",
  "2xl:none": "2xl:content-none",
  "hover:none": "hover:content-none",
  "focus:none": "focus:content-none",
  "active:none": "active:content-none",
  "disabled:none": "disabled:content-none",
  "group-hover:none": "group-hover:content-none",
  "group:none": "group:content-none",
  "first:none": "first:content-none",
  "last:none": "last:content-none",
  "odd:none": "odd:content-none",
  "even:none": "even:content-none",
  "dark:none": "dark:content-none",
} as const;