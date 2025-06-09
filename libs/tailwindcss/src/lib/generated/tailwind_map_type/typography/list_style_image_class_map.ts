import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ListStyleImageType = 
  | ListStyleImageValue
  | Partial<Record<ResponsiveBreakpoint, ListStyleImageValue>>;

export type ListStyleImageValue = keyof typeof LIST_STYLE_IMAGE_CLASS_MAP;

export const LIST_STYLE_IMAGE_CLASS_MAP = {
  "none": "list-image-none",
  "xs:none": "xs:list-image-none",
  "sm:none": "sm:list-image-none",
  "md:none": "md:list-image-none",
  "lg:none": "lg:list-image-none",
  "xl:none": "xl:list-image-none",
  "2xl:none": "2xl:list-image-none",
  "hover:none": "hover:list-image-none",
  "focus:none": "focus:list-image-none",
  "active:none": "active:list-image-none",
  "disabled:none": "disabled:list-image-none",
  "group-hover:none": "group-hover:list-image-none",
  "group:none": "group:list-image-none",
  "first:none": "first:list-image-none",
  "last:none": "last:list-image-none",
  "odd:none": "odd:list-image-none",
  "even:none": "even:list-image-none",
  "dark:none": "dark:list-image-none",
} as const;