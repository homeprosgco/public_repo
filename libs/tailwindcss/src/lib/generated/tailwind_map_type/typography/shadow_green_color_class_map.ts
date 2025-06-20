import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ShadowGreenColorType = 
  | ShadowGreenColorValue
  | Partial<Record<ResponsiveBreakpoint, ShadowGreenColorValue>>;

export type ShadowGreenColorValue = keyof typeof SHADOW_GREEN_COLOR_CLASS_MAP;

export const SHADOW_GREEN_COLOR_CLASS_MAP = {
  "50": "shadow-green-50",
  "xs:50": "xs:shadow-green-50",
  "sm:50": "sm:shadow-green-50",
  "md:50": "md:shadow-green-50",
  "lg:50": "lg:shadow-green-50",
  "xl:50": "xl:shadow-green-50",
  "2xl:50": "2xl:shadow-green-50",
  "hover:50": "hover:shadow-green-50",
  "focus:50": "focus:shadow-green-50",
  "active:50": "active:shadow-green-50",
  "disabled:50": "disabled:shadow-green-50",
  "group-hover:50": "group-hover:shadow-green-50",
  "group:50": "group:shadow-green-50",
  "first:50": "first:shadow-green-50",
  "last:50": "last:shadow-green-50",
  "odd:50": "odd:shadow-green-50",
  "even:50": "even:shadow-green-50",
  "dark:50": "dark:shadow-green-50",
  "100": "shadow-green-100",
  "xs:100": "xs:shadow-green-100",
  "sm:100": "sm:shadow-green-100",
  "md:100": "md:shadow-green-100",
  "lg:100": "lg:shadow-green-100",
  "xl:100": "xl:shadow-green-100",
  "2xl:100": "2xl:shadow-green-100",
  "hover:100": "hover:shadow-green-100",
  "focus:100": "focus:shadow-green-100",
  "active:100": "active:shadow-green-100",
  "disabled:100": "disabled:shadow-green-100",
  "group-hover:100": "group-hover:shadow-green-100",
  "group:100": "group:shadow-green-100",
  "first:100": "first:shadow-green-100",
  "last:100": "last:shadow-green-100",
  "odd:100": "odd:shadow-green-100",
  "even:100": "even:shadow-green-100",
  "dark:100": "dark:shadow-green-100",
  "200": "shadow-green-200",
  "xs:200": "xs:shadow-green-200",
  "sm:200": "sm:shadow-green-200",
  "md:200": "md:shadow-green-200",
  "lg:200": "lg:shadow-green-200",
  "xl:200": "xl:shadow-green-200",
  "2xl:200": "2xl:shadow-green-200",
  "hover:200": "hover:shadow-green-200",
  "focus:200": "focus:shadow-green-200",
  "active:200": "active:shadow-green-200",
  "disabled:200": "disabled:shadow-green-200",
  "group-hover:200": "group-hover:shadow-green-200",
  "group:200": "group:shadow-green-200",
  "first:200": "first:shadow-green-200",
  "last:200": "last:shadow-green-200",
  "odd:200": "odd:shadow-green-200",
  "even:200": "even:shadow-green-200",
  "dark:200": "dark:shadow-green-200",
  "300": "shadow-green-300",
  "xs:300": "xs:shadow-green-300",
  "sm:300": "sm:shadow-green-300",
  "md:300": "md:shadow-green-300",
  "lg:300": "lg:shadow-green-300",
  "xl:300": "xl:shadow-green-300",
  "2xl:300": "2xl:shadow-green-300",
  "hover:300": "hover:shadow-green-300",
  "focus:300": "focus:shadow-green-300",
  "active:300": "active:shadow-green-300",
  "disabled:300": "disabled:shadow-green-300",
  "group-hover:300": "group-hover:shadow-green-300",
  "group:300": "group:shadow-green-300",
  "first:300": "first:shadow-green-300",
  "last:300": "last:shadow-green-300",
  "odd:300": "odd:shadow-green-300",
  "even:300": "even:shadow-green-300",
  "dark:300": "dark:shadow-green-300",
  "400": "shadow-green-400",
  "xs:400": "xs:shadow-green-400",
  "sm:400": "sm:shadow-green-400",
  "md:400": "md:shadow-green-400",
  "lg:400": "lg:shadow-green-400",
  "xl:400": "xl:shadow-green-400",
  "2xl:400": "2xl:shadow-green-400",
  "hover:400": "hover:shadow-green-400",
  "focus:400": "focus:shadow-green-400",
  "active:400": "active:shadow-green-400",
  "disabled:400": "disabled:shadow-green-400",
  "group-hover:400": "group-hover:shadow-green-400",
  "group:400": "group:shadow-green-400",
  "first:400": "first:shadow-green-400",
  "last:400": "last:shadow-green-400",
  "odd:400": "odd:shadow-green-400",
  "even:400": "even:shadow-green-400",
  "dark:400": "dark:shadow-green-400",
  "500": "shadow-green-500",
  "xs:500": "xs:shadow-green-500",
  "sm:500": "sm:shadow-green-500",
  "md:500": "md:shadow-green-500",
  "lg:500": "lg:shadow-green-500",
  "xl:500": "xl:shadow-green-500",
  "2xl:500": "2xl:shadow-green-500",
  "hover:500": "hover:shadow-green-500",
  "focus:500": "focus:shadow-green-500",
  "active:500": "active:shadow-green-500",
  "disabled:500": "disabled:shadow-green-500",
  "group-hover:500": "group-hover:shadow-green-500",
  "group:500": "group:shadow-green-500",
  "first:500": "first:shadow-green-500",
  "last:500": "last:shadow-green-500",
  "odd:500": "odd:shadow-green-500",
  "even:500": "even:shadow-green-500",
  "dark:500": "dark:shadow-green-500",
  "600": "shadow-green-600",
  "xs:600": "xs:shadow-green-600",
  "sm:600": "sm:shadow-green-600",
  "md:600": "md:shadow-green-600",
  "lg:600": "lg:shadow-green-600",
  "xl:600": "xl:shadow-green-600",
  "2xl:600": "2xl:shadow-green-600",
  "hover:600": "hover:shadow-green-600",
  "focus:600": "focus:shadow-green-600",
  "active:600": "active:shadow-green-600",
  "disabled:600": "disabled:shadow-green-600",
  "group-hover:600": "group-hover:shadow-green-600",
  "group:600": "group:shadow-green-600",
  "first:600": "first:shadow-green-600",
  "last:600": "last:shadow-green-600",
  "odd:600": "odd:shadow-green-600",
  "even:600": "even:shadow-green-600",
  "dark:600": "dark:shadow-green-600",
  "700": "shadow-green-700",
  "xs:700": "xs:shadow-green-700",
  "sm:700": "sm:shadow-green-700",
  "md:700": "md:shadow-green-700",
  "lg:700": "lg:shadow-green-700",
  "xl:700": "xl:shadow-green-700",
  "2xl:700": "2xl:shadow-green-700",
  "hover:700": "hover:shadow-green-700",
  "focus:700": "focus:shadow-green-700",
  "active:700": "active:shadow-green-700",
  "disabled:700": "disabled:shadow-green-700",
  "group-hover:700": "group-hover:shadow-green-700",
  "group:700": "group:shadow-green-700",
  "first:700": "first:shadow-green-700",
  "last:700": "last:shadow-green-700",
  "odd:700": "odd:shadow-green-700",
  "even:700": "even:shadow-green-700",
  "dark:700": "dark:shadow-green-700",
  "800": "shadow-green-800",
  "xs:800": "xs:shadow-green-800",
  "sm:800": "sm:shadow-green-800",
  "md:800": "md:shadow-green-800",
  "lg:800": "lg:shadow-green-800",
  "xl:800": "xl:shadow-green-800",
  "2xl:800": "2xl:shadow-green-800",
  "hover:800": "hover:shadow-green-800",
  "focus:800": "focus:shadow-green-800",
  "active:800": "active:shadow-green-800",
  "disabled:800": "disabled:shadow-green-800",
  "group-hover:800": "group-hover:shadow-green-800",
  "group:800": "group:shadow-green-800",
  "first:800": "first:shadow-green-800",
  "last:800": "last:shadow-green-800",
  "odd:800": "odd:shadow-green-800",
  "even:800": "even:shadow-green-800",
  "dark:800": "dark:shadow-green-800",
  "900": "shadow-green-900",
  "xs:900": "xs:shadow-green-900",
  "sm:900": "sm:shadow-green-900",
  "md:900": "md:shadow-green-900",
  "lg:900": "lg:shadow-green-900",
  "xl:900": "xl:shadow-green-900",
  "2xl:900": "2xl:shadow-green-900",
  "hover:900": "hover:shadow-green-900",
  "focus:900": "focus:shadow-green-900",
  "active:900": "active:shadow-green-900",
  "disabled:900": "disabled:shadow-green-900",
  "group-hover:900": "group-hover:shadow-green-900",
  "group:900": "group:shadow-green-900",
  "first:900": "first:shadow-green-900",
  "last:900": "last:shadow-green-900",
  "odd:900": "odd:shadow-green-900",
  "even:900": "even:shadow-green-900",
  "dark:900": "dark:shadow-green-900",
  "950": "shadow-green-950",
  "xs:950": "xs:shadow-green-950",
  "sm:950": "sm:shadow-green-950",
  "md:950": "md:shadow-green-950",
  "lg:950": "lg:shadow-green-950",
  "xl:950": "xl:shadow-green-950",
  "2xl:950": "2xl:shadow-green-950",
  "hover:950": "hover:shadow-green-950",
  "focus:950": "focus:shadow-green-950",
  "active:950": "active:shadow-green-950",
  "disabled:950": "disabled:shadow-green-950",
  "group-hover:950": "group-hover:shadow-green-950",
  "group:950": "group:shadow-green-950",
  "first:950": "first:shadow-green-950",
  "last:950": "last:shadow-green-950",
  "odd:950": "odd:shadow-green-950",
  "even:950": "even:shadow-green-950",
  "dark:950": "dark:shadow-green-950",
} as const;