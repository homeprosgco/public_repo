import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type WillChangeType = 
  | WillChangeValue
  | Partial<Record<ResponsiveBreakpoint, WillChangeValue>>;

export type WillChangeValue = keyof typeof WILL_CHANGE_CLASS_MAP;

export const WILL_CHANGE_CLASS_MAP = {
  "auto": "will-change-auto",
  "xs:auto": "xs:will-change-auto",
  "sm:auto": "sm:will-change-auto",
  "md:auto": "md:will-change-auto",
  "lg:auto": "lg:will-change-auto",
  "xl:auto": "xl:will-change-auto",
  "2xl:auto": "2xl:will-change-auto",
  "hover:auto": "hover:will-change-auto",
  "focus:auto": "focus:will-change-auto",
  "active:auto": "active:will-change-auto",
  "disabled:auto": "disabled:will-change-auto",
  "group-hover:auto": "group-hover:will-change-auto",
  "group:auto": "group:will-change-auto",
  "first:auto": "first:will-change-auto",
  "last:auto": "last:will-change-auto",
  "odd:auto": "odd:will-change-auto",
  "even:auto": "even:will-change-auto",
  "dark:auto": "dark:will-change-auto",
  "scroll": "will-change-scroll",
  "xs:scroll": "xs:will-change-scroll",
  "sm:scroll": "sm:will-change-scroll",
  "md:scroll": "md:will-change-scroll",
  "lg:scroll": "lg:will-change-scroll",
  "xl:scroll": "xl:will-change-scroll",
  "2xl:scroll": "2xl:will-change-scroll",
  "hover:scroll": "hover:will-change-scroll",
  "focus:scroll": "focus:will-change-scroll",
  "active:scroll": "active:will-change-scroll",
  "disabled:scroll": "disabled:will-change-scroll",
  "group-hover:scroll": "group-hover:will-change-scroll",
  "group:scroll": "group:will-change-scroll",
  "first:scroll": "first:will-change-scroll",
  "last:scroll": "last:will-change-scroll",
  "odd:scroll": "odd:will-change-scroll",
  "even:scroll": "even:will-change-scroll",
  "dark:scroll": "dark:will-change-scroll",
  "contents": "will-change-contents",
  "xs:contents": "xs:will-change-contents",
  "sm:contents": "sm:will-change-contents",
  "md:contents": "md:will-change-contents",
  "lg:contents": "lg:will-change-contents",
  "xl:contents": "xl:will-change-contents",
  "2xl:contents": "2xl:will-change-contents",
  "hover:contents": "hover:will-change-contents",
  "focus:contents": "focus:will-change-contents",
  "active:contents": "active:will-change-contents",
  "disabled:contents": "disabled:will-change-contents",
  "group-hover:contents": "group-hover:will-change-contents",
  "group:contents": "group:will-change-contents",
  "first:contents": "first:will-change-contents",
  "last:contents": "last:will-change-contents",
  "odd:contents": "odd:will-change-contents",
  "even:contents": "even:will-change-contents",
  "dark:contents": "dark:will-change-contents",
  "transform": "will-change-transform",
  "xs:transform": "xs:will-change-transform",
  "sm:transform": "sm:will-change-transform",
  "md:transform": "md:will-change-transform",
  "lg:transform": "lg:will-change-transform",
  "xl:transform": "xl:will-change-transform",
  "2xl:transform": "2xl:will-change-transform",
  "hover:transform": "hover:will-change-transform",
  "focus:transform": "focus:will-change-transform",
  "active:transform": "active:will-change-transform",
  "disabled:transform": "disabled:will-change-transform",
  "group-hover:transform": "group-hover:will-change-transform",
  "group:transform": "group:will-change-transform",
  "first:transform": "first:will-change-transform",
  "last:transform": "last:will-change-transform",
  "odd:transform": "odd:will-change-transform",
  "even:transform": "even:will-change-transform",
  "dark:transform": "dark:will-change-transform",
} as const;