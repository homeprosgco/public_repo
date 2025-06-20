import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ShadowSkyColorType = 
  | ShadowSkyColorValue
  | Partial<Record<ResponsiveBreakpoint, ShadowSkyColorValue>>;

export type ShadowSkyColorValue = keyof typeof SHADOW_SKY_COLOR_CLASS_MAP;

export const SHADOW_SKY_COLOR_CLASS_MAP = {
  "50": "shadow-sky-50",
  "xs:50": "xs:shadow-sky-50",
  "sm:50": "sm:shadow-sky-50",
  "md:50": "md:shadow-sky-50",
  "lg:50": "lg:shadow-sky-50",
  "xl:50": "xl:shadow-sky-50",
  "2xl:50": "2xl:shadow-sky-50",
  "hover:50": "hover:shadow-sky-50",
  "focus:50": "focus:shadow-sky-50",
  "active:50": "active:shadow-sky-50",
  "disabled:50": "disabled:shadow-sky-50",
  "group-hover:50": "group-hover:shadow-sky-50",
  "group:50": "group:shadow-sky-50",
  "first:50": "first:shadow-sky-50",
  "last:50": "last:shadow-sky-50",
  "odd:50": "odd:shadow-sky-50",
  "even:50": "even:shadow-sky-50",
  "dark:50": "dark:shadow-sky-50",
  "100": "shadow-sky-100",
  "xs:100": "xs:shadow-sky-100",
  "sm:100": "sm:shadow-sky-100",
  "md:100": "md:shadow-sky-100",
  "lg:100": "lg:shadow-sky-100",
  "xl:100": "xl:shadow-sky-100",
  "2xl:100": "2xl:shadow-sky-100",
  "hover:100": "hover:shadow-sky-100",
  "focus:100": "focus:shadow-sky-100",
  "active:100": "active:shadow-sky-100",
  "disabled:100": "disabled:shadow-sky-100",
  "group-hover:100": "group-hover:shadow-sky-100",
  "group:100": "group:shadow-sky-100",
  "first:100": "first:shadow-sky-100",
  "last:100": "last:shadow-sky-100",
  "odd:100": "odd:shadow-sky-100",
  "even:100": "even:shadow-sky-100",
  "dark:100": "dark:shadow-sky-100",
  "200": "shadow-sky-200",
  "xs:200": "xs:shadow-sky-200",
  "sm:200": "sm:shadow-sky-200",
  "md:200": "md:shadow-sky-200",
  "lg:200": "lg:shadow-sky-200",
  "xl:200": "xl:shadow-sky-200",
  "2xl:200": "2xl:shadow-sky-200",
  "hover:200": "hover:shadow-sky-200",
  "focus:200": "focus:shadow-sky-200",
  "active:200": "active:shadow-sky-200",
  "disabled:200": "disabled:shadow-sky-200",
  "group-hover:200": "group-hover:shadow-sky-200",
  "group:200": "group:shadow-sky-200",
  "first:200": "first:shadow-sky-200",
  "last:200": "last:shadow-sky-200",
  "odd:200": "odd:shadow-sky-200",
  "even:200": "even:shadow-sky-200",
  "dark:200": "dark:shadow-sky-200",
  "300": "shadow-sky-300",
  "xs:300": "xs:shadow-sky-300",
  "sm:300": "sm:shadow-sky-300",
  "md:300": "md:shadow-sky-300",
  "lg:300": "lg:shadow-sky-300",
  "xl:300": "xl:shadow-sky-300",
  "2xl:300": "2xl:shadow-sky-300",
  "hover:300": "hover:shadow-sky-300",
  "focus:300": "focus:shadow-sky-300",
  "active:300": "active:shadow-sky-300",
  "disabled:300": "disabled:shadow-sky-300",
  "group-hover:300": "group-hover:shadow-sky-300",
  "group:300": "group:shadow-sky-300",
  "first:300": "first:shadow-sky-300",
  "last:300": "last:shadow-sky-300",
  "odd:300": "odd:shadow-sky-300",
  "even:300": "even:shadow-sky-300",
  "dark:300": "dark:shadow-sky-300",
  "400": "shadow-sky-400",
  "xs:400": "xs:shadow-sky-400",
  "sm:400": "sm:shadow-sky-400",
  "md:400": "md:shadow-sky-400",
  "lg:400": "lg:shadow-sky-400",
  "xl:400": "xl:shadow-sky-400",
  "2xl:400": "2xl:shadow-sky-400",
  "hover:400": "hover:shadow-sky-400",
  "focus:400": "focus:shadow-sky-400",
  "active:400": "active:shadow-sky-400",
  "disabled:400": "disabled:shadow-sky-400",
  "group-hover:400": "group-hover:shadow-sky-400",
  "group:400": "group:shadow-sky-400",
  "first:400": "first:shadow-sky-400",
  "last:400": "last:shadow-sky-400",
  "odd:400": "odd:shadow-sky-400",
  "even:400": "even:shadow-sky-400",
  "dark:400": "dark:shadow-sky-400",
  "500": "shadow-sky-500",
  "xs:500": "xs:shadow-sky-500",
  "sm:500": "sm:shadow-sky-500",
  "md:500": "md:shadow-sky-500",
  "lg:500": "lg:shadow-sky-500",
  "xl:500": "xl:shadow-sky-500",
  "2xl:500": "2xl:shadow-sky-500",
  "hover:500": "hover:shadow-sky-500",
  "focus:500": "focus:shadow-sky-500",
  "active:500": "active:shadow-sky-500",
  "disabled:500": "disabled:shadow-sky-500",
  "group-hover:500": "group-hover:shadow-sky-500",
  "group:500": "group:shadow-sky-500",
  "first:500": "first:shadow-sky-500",
  "last:500": "last:shadow-sky-500",
  "odd:500": "odd:shadow-sky-500",
  "even:500": "even:shadow-sky-500",
  "dark:500": "dark:shadow-sky-500",
  "600": "shadow-sky-600",
  "xs:600": "xs:shadow-sky-600",
  "sm:600": "sm:shadow-sky-600",
  "md:600": "md:shadow-sky-600",
  "lg:600": "lg:shadow-sky-600",
  "xl:600": "xl:shadow-sky-600",
  "2xl:600": "2xl:shadow-sky-600",
  "hover:600": "hover:shadow-sky-600",
  "focus:600": "focus:shadow-sky-600",
  "active:600": "active:shadow-sky-600",
  "disabled:600": "disabled:shadow-sky-600",
  "group-hover:600": "group-hover:shadow-sky-600",
  "group:600": "group:shadow-sky-600",
  "first:600": "first:shadow-sky-600",
  "last:600": "last:shadow-sky-600",
  "odd:600": "odd:shadow-sky-600",
  "even:600": "even:shadow-sky-600",
  "dark:600": "dark:shadow-sky-600",
  "700": "shadow-sky-700",
  "xs:700": "xs:shadow-sky-700",
  "sm:700": "sm:shadow-sky-700",
  "md:700": "md:shadow-sky-700",
  "lg:700": "lg:shadow-sky-700",
  "xl:700": "xl:shadow-sky-700",
  "2xl:700": "2xl:shadow-sky-700",
  "hover:700": "hover:shadow-sky-700",
  "focus:700": "focus:shadow-sky-700",
  "active:700": "active:shadow-sky-700",
  "disabled:700": "disabled:shadow-sky-700",
  "group-hover:700": "group-hover:shadow-sky-700",
  "group:700": "group:shadow-sky-700",
  "first:700": "first:shadow-sky-700",
  "last:700": "last:shadow-sky-700",
  "odd:700": "odd:shadow-sky-700",
  "even:700": "even:shadow-sky-700",
  "dark:700": "dark:shadow-sky-700",
  "800": "shadow-sky-800",
  "xs:800": "xs:shadow-sky-800",
  "sm:800": "sm:shadow-sky-800",
  "md:800": "md:shadow-sky-800",
  "lg:800": "lg:shadow-sky-800",
  "xl:800": "xl:shadow-sky-800",
  "2xl:800": "2xl:shadow-sky-800",
  "hover:800": "hover:shadow-sky-800",
  "focus:800": "focus:shadow-sky-800",
  "active:800": "active:shadow-sky-800",
  "disabled:800": "disabled:shadow-sky-800",
  "group-hover:800": "group-hover:shadow-sky-800",
  "group:800": "group:shadow-sky-800",
  "first:800": "first:shadow-sky-800",
  "last:800": "last:shadow-sky-800",
  "odd:800": "odd:shadow-sky-800",
  "even:800": "even:shadow-sky-800",
  "dark:800": "dark:shadow-sky-800",
  "900": "shadow-sky-900",
  "xs:900": "xs:shadow-sky-900",
  "sm:900": "sm:shadow-sky-900",
  "md:900": "md:shadow-sky-900",
  "lg:900": "lg:shadow-sky-900",
  "xl:900": "xl:shadow-sky-900",
  "2xl:900": "2xl:shadow-sky-900",
  "hover:900": "hover:shadow-sky-900",
  "focus:900": "focus:shadow-sky-900",
  "active:900": "active:shadow-sky-900",
  "disabled:900": "disabled:shadow-sky-900",
  "group-hover:900": "group-hover:shadow-sky-900",
  "group:900": "group:shadow-sky-900",
  "first:900": "first:shadow-sky-900",
  "last:900": "last:shadow-sky-900",
  "odd:900": "odd:shadow-sky-900",
  "even:900": "even:shadow-sky-900",
  "dark:900": "dark:shadow-sky-900",
  "950": "shadow-sky-950",
  "xs:950": "xs:shadow-sky-950",
  "sm:950": "sm:shadow-sky-950",
  "md:950": "md:shadow-sky-950",
  "lg:950": "lg:shadow-sky-950",
  "xl:950": "xl:shadow-sky-950",
  "2xl:950": "2xl:shadow-sky-950",
  "hover:950": "hover:shadow-sky-950",
  "focus:950": "focus:shadow-sky-950",
  "active:950": "active:shadow-sky-950",
  "disabled:950": "disabled:shadow-sky-950",
  "group-hover:950": "group-hover:shadow-sky-950",
  "group:950": "group:shadow-sky-950",
  "first:950": "first:shadow-sky-950",
  "last:950": "last:shadow-sky-950",
  "odd:950": "odd:shadow-sky-950",
  "even:950": "even:shadow-sky-950",
  "dark:950": "dark:shadow-sky-950",
} as const;