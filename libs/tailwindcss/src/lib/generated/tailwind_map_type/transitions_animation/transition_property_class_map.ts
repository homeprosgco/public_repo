import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type TransitionPropertyType = 
  | TransitionPropertyValue
  | Partial<Record<ResponsiveBreakpoint, TransitionPropertyValue>>;

export type TransitionPropertyValue = keyof typeof TRANSITION_PROPERTY_CLASS_MAP;

export const TRANSITION_PROPERTY_CLASS_MAP = {
  "none": "transition-none",
  "xs:none": "xs:transition-none",
  "sm:none": "sm:transition-none",
  "md:none": "md:transition-none",
  "lg:none": "lg:transition-none",
  "xl:none": "xl:transition-none",
  "2xl:none": "2xl:transition-none",
  "hover:none": "hover:transition-none",
  "focus:none": "focus:transition-none",
  "active:none": "active:transition-none",
  "disabled:none": "disabled:transition-none",
  "group-hover:none": "group-hover:transition-none",
  "group:none": "group:transition-none",
  "first:none": "first:transition-none",
  "last:none": "last:transition-none",
  "odd:none": "odd:transition-none",
  "even:none": "even:transition-none",
  "dark:none": "dark:transition-none",
  "all": "transition-all",
  "xs:all": "xs:transition-all",
  "sm:all": "sm:transition-all",
  "md:all": "md:transition-all",
  "lg:all": "lg:transition-all",
  "xl:all": "xl:transition-all",
  "2xl:all": "2xl:transition-all",
  "hover:all": "hover:transition-all",
  "focus:all": "focus:transition-all",
  "active:all": "active:transition-all",
  "disabled:all": "disabled:transition-all",
  "group-hover:all": "group-hover:transition-all",
  "group:all": "group:transition-all",
  "first:all": "first:transition-all",
  "last:all": "last:transition-all",
  "odd:all": "odd:transition-all",
  "even:all": "even:transition-all",
  "dark:all": "dark:transition-all",
  "transition": "transition",
  "xs:transition": "xs:transition",
  "sm:transition": "sm:transition",
  "md:transition": "md:transition",
  "lg:transition": "lg:transition",
  "xl:transition": "xl:transition",
  "2xl:transition": "2xl:transition",
  "hover:transition": "hover:transition",
  "focus:transition": "focus:transition",
  "active:transition": "active:transition",
  "disabled:transition": "disabled:transition",
  "group-hover:transition": "group-hover:transition",
  "group:transition": "group:transition",
  "first:transition": "first:transition",
  "last:transition": "last:transition",
  "odd:transition": "odd:transition",
  "even:transition": "even:transition",
  "dark:transition": "dark:transition",
  "transition-colors": "transition-colors",
  "xs:transition-colors": "xs:transition-colors",
  "sm:transition-colors": "sm:transition-colors",
  "md:transition-colors": "md:transition-colors",
  "lg:transition-colors": "lg:transition-colors",
  "xl:transition-colors": "xl:transition-colors",
  "2xl:transition-colors": "2xl:transition-colors",
  "hover:transition-colors": "hover:transition-colors",
  "focus:transition-colors": "focus:transition-colors",
  "active:transition-colors": "active:transition-colors",
  "disabled:transition-colors": "disabled:transition-colors",
  "group-hover:transition-colors": "group-hover:transition-colors",
  "group:transition-colors": "group:transition-colors",
  "first:transition-colors": "first:transition-colors",
  "last:transition-colors": "last:transition-colors",
  "odd:transition-colors": "odd:transition-colors",
  "even:transition-colors": "even:transition-colors",
  "dark:transition-colors": "dark:transition-colors",
  "opacity": "transition-opacity",
  "xs:opacity": "xs:transition-opacity",
  "sm:opacity": "sm:transition-opacity",
  "md:opacity": "md:transition-opacity",
  "lg:opacity": "lg:transition-opacity",
  "xl:opacity": "xl:transition-opacity",
  "2xl:opacity": "2xl:transition-opacity",
  "hover:opacity": "hover:transition-opacity",
  "focus:opacity": "focus:transition-opacity",
  "active:opacity": "active:transition-opacity",
  "disabled:opacity": "disabled:transition-opacity",
  "group-hover:opacity": "group-hover:transition-opacity",
  "group:opacity": "group:transition-opacity",
  "first:opacity": "first:transition-opacity",
  "last:opacity": "last:transition-opacity",
  "odd:opacity": "odd:transition-opacity",
  "even:opacity": "even:transition-opacity",
  "dark:opacity": "dark:transition-opacity",
  "shadow": "transition-shadow",
  "xs:shadow": "xs:transition-shadow",
  "sm:shadow": "sm:transition-shadow",
  "md:shadow": "md:transition-shadow",
  "lg:shadow": "lg:transition-shadow",
  "xl:shadow": "xl:transition-shadow",
  "2xl:shadow": "2xl:transition-shadow",
  "hover:shadow": "hover:transition-shadow",
  "focus:shadow": "focus:transition-shadow",
  "active:shadow": "active:transition-shadow",
  "disabled:shadow": "disabled:transition-shadow",
  "group-hover:shadow": "group-hover:transition-shadow",
  "group:shadow": "group:transition-shadow",
  "first:shadow": "first:transition-shadow",
  "last:shadow": "last:transition-shadow",
  "odd:shadow": "odd:transition-shadow",
  "even:shadow": "even:transition-shadow",
  "dark:shadow": "dark:transition-shadow",
  "transform": "transition-transform",
  "xs:transform": "xs:transition-transform",
  "sm:transform": "sm:transition-transform",
  "md:transform": "md:transition-transform",
  "lg:transform": "lg:transition-transform",
  "xl:transform": "xl:transition-transform",
  "2xl:transform": "2xl:transition-transform",
  "hover:transform": "hover:transition-transform",
  "focus:transform": "focus:transition-transform",
  "active:transform": "active:transition-transform",
  "disabled:transform": "disabled:transition-transform",
  "group-hover:transform": "group-hover:transition-transform",
  "group:transform": "group:transition-transform",
  "first:transform": "first:transition-transform",
  "last:transform": "last:transition-transform",
  "odd:transform": "odd:transition-transform",
  "even:transform": "even:transition-transform",
  "dark:transform": "dark:transition-transform",
} as const;