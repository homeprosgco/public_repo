import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ShadowEmeraldColorType = 
  | ShadowEmeraldColorValue
  | Partial<Record<ResponsiveBreakpoint, ShadowEmeraldColorValue>>;

export type ShadowEmeraldColorValue = keyof typeof SHADOW_EMERALD_COLOR_CLASS_MAP;

export const SHADOW_EMERALD_COLOR_CLASS_MAP = {
  "50": "shadow-emerald-50",
  "xs:50": "xs:shadow-emerald-50",
  "sm:50": "sm:shadow-emerald-50",
  "md:50": "md:shadow-emerald-50",
  "lg:50": "lg:shadow-emerald-50",
  "xl:50": "xl:shadow-emerald-50",
  "2xl:50": "2xl:shadow-emerald-50",
  "hover:50": "hover:shadow-emerald-50",
  "focus:50": "focus:shadow-emerald-50",
  "active:50": "active:shadow-emerald-50",
  "disabled:50": "disabled:shadow-emerald-50",
  "group-hover:50": "group-hover:shadow-emerald-50",
  "group:50": "group:shadow-emerald-50",
  "first:50": "first:shadow-emerald-50",
  "last:50": "last:shadow-emerald-50",
  "odd:50": "odd:shadow-emerald-50",
  "even:50": "even:shadow-emerald-50",
  "dark:50": "dark:shadow-emerald-50",
  "100": "shadow-emerald-100",
  "xs:100": "xs:shadow-emerald-100",
  "sm:100": "sm:shadow-emerald-100",
  "md:100": "md:shadow-emerald-100",
  "lg:100": "lg:shadow-emerald-100",
  "xl:100": "xl:shadow-emerald-100",
  "2xl:100": "2xl:shadow-emerald-100",
  "hover:100": "hover:shadow-emerald-100",
  "focus:100": "focus:shadow-emerald-100",
  "active:100": "active:shadow-emerald-100",
  "disabled:100": "disabled:shadow-emerald-100",
  "group-hover:100": "group-hover:shadow-emerald-100",
  "group:100": "group:shadow-emerald-100",
  "first:100": "first:shadow-emerald-100",
  "last:100": "last:shadow-emerald-100",
  "odd:100": "odd:shadow-emerald-100",
  "even:100": "even:shadow-emerald-100",
  "dark:100": "dark:shadow-emerald-100",
  "200": "shadow-emerald-200",
  "xs:200": "xs:shadow-emerald-200",
  "sm:200": "sm:shadow-emerald-200",
  "md:200": "md:shadow-emerald-200",
  "lg:200": "lg:shadow-emerald-200",
  "xl:200": "xl:shadow-emerald-200",
  "2xl:200": "2xl:shadow-emerald-200",
  "hover:200": "hover:shadow-emerald-200",
  "focus:200": "focus:shadow-emerald-200",
  "active:200": "active:shadow-emerald-200",
  "disabled:200": "disabled:shadow-emerald-200",
  "group-hover:200": "group-hover:shadow-emerald-200",
  "group:200": "group:shadow-emerald-200",
  "first:200": "first:shadow-emerald-200",
  "last:200": "last:shadow-emerald-200",
  "odd:200": "odd:shadow-emerald-200",
  "even:200": "even:shadow-emerald-200",
  "dark:200": "dark:shadow-emerald-200",
  "300": "shadow-emerald-300",
  "xs:300": "xs:shadow-emerald-300",
  "sm:300": "sm:shadow-emerald-300",
  "md:300": "md:shadow-emerald-300",
  "lg:300": "lg:shadow-emerald-300",
  "xl:300": "xl:shadow-emerald-300",
  "2xl:300": "2xl:shadow-emerald-300",
  "hover:300": "hover:shadow-emerald-300",
  "focus:300": "focus:shadow-emerald-300",
  "active:300": "active:shadow-emerald-300",
  "disabled:300": "disabled:shadow-emerald-300",
  "group-hover:300": "group-hover:shadow-emerald-300",
  "group:300": "group:shadow-emerald-300",
  "first:300": "first:shadow-emerald-300",
  "last:300": "last:shadow-emerald-300",
  "odd:300": "odd:shadow-emerald-300",
  "even:300": "even:shadow-emerald-300",
  "dark:300": "dark:shadow-emerald-300",
  "400": "shadow-emerald-400",
  "xs:400": "xs:shadow-emerald-400",
  "sm:400": "sm:shadow-emerald-400",
  "md:400": "md:shadow-emerald-400",
  "lg:400": "lg:shadow-emerald-400",
  "xl:400": "xl:shadow-emerald-400",
  "2xl:400": "2xl:shadow-emerald-400",
  "hover:400": "hover:shadow-emerald-400",
  "focus:400": "focus:shadow-emerald-400",
  "active:400": "active:shadow-emerald-400",
  "disabled:400": "disabled:shadow-emerald-400",
  "group-hover:400": "group-hover:shadow-emerald-400",
  "group:400": "group:shadow-emerald-400",
  "first:400": "first:shadow-emerald-400",
  "last:400": "last:shadow-emerald-400",
  "odd:400": "odd:shadow-emerald-400",
  "even:400": "even:shadow-emerald-400",
  "dark:400": "dark:shadow-emerald-400",
  "500": "shadow-emerald-500",
  "xs:500": "xs:shadow-emerald-500",
  "sm:500": "sm:shadow-emerald-500",
  "md:500": "md:shadow-emerald-500",
  "lg:500": "lg:shadow-emerald-500",
  "xl:500": "xl:shadow-emerald-500",
  "2xl:500": "2xl:shadow-emerald-500",
  "hover:500": "hover:shadow-emerald-500",
  "focus:500": "focus:shadow-emerald-500",
  "active:500": "active:shadow-emerald-500",
  "disabled:500": "disabled:shadow-emerald-500",
  "group-hover:500": "group-hover:shadow-emerald-500",
  "group:500": "group:shadow-emerald-500",
  "first:500": "first:shadow-emerald-500",
  "last:500": "last:shadow-emerald-500",
  "odd:500": "odd:shadow-emerald-500",
  "even:500": "even:shadow-emerald-500",
  "dark:500": "dark:shadow-emerald-500",
  "600": "shadow-emerald-600",
  "xs:600": "xs:shadow-emerald-600",
  "sm:600": "sm:shadow-emerald-600",
  "md:600": "md:shadow-emerald-600",
  "lg:600": "lg:shadow-emerald-600",
  "xl:600": "xl:shadow-emerald-600",
  "2xl:600": "2xl:shadow-emerald-600",
  "hover:600": "hover:shadow-emerald-600",
  "focus:600": "focus:shadow-emerald-600",
  "active:600": "active:shadow-emerald-600",
  "disabled:600": "disabled:shadow-emerald-600",
  "group-hover:600": "group-hover:shadow-emerald-600",
  "group:600": "group:shadow-emerald-600",
  "first:600": "first:shadow-emerald-600",
  "last:600": "last:shadow-emerald-600",
  "odd:600": "odd:shadow-emerald-600",
  "even:600": "even:shadow-emerald-600",
  "dark:600": "dark:shadow-emerald-600",
  "700": "shadow-emerald-700",
  "xs:700": "xs:shadow-emerald-700",
  "sm:700": "sm:shadow-emerald-700",
  "md:700": "md:shadow-emerald-700",
  "lg:700": "lg:shadow-emerald-700",
  "xl:700": "xl:shadow-emerald-700",
  "2xl:700": "2xl:shadow-emerald-700",
  "hover:700": "hover:shadow-emerald-700",
  "focus:700": "focus:shadow-emerald-700",
  "active:700": "active:shadow-emerald-700",
  "disabled:700": "disabled:shadow-emerald-700",
  "group-hover:700": "group-hover:shadow-emerald-700",
  "group:700": "group:shadow-emerald-700",
  "first:700": "first:shadow-emerald-700",
  "last:700": "last:shadow-emerald-700",
  "odd:700": "odd:shadow-emerald-700",
  "even:700": "even:shadow-emerald-700",
  "dark:700": "dark:shadow-emerald-700",
  "800": "shadow-emerald-800",
  "xs:800": "xs:shadow-emerald-800",
  "sm:800": "sm:shadow-emerald-800",
  "md:800": "md:shadow-emerald-800",
  "lg:800": "lg:shadow-emerald-800",
  "xl:800": "xl:shadow-emerald-800",
  "2xl:800": "2xl:shadow-emerald-800",
  "hover:800": "hover:shadow-emerald-800",
  "focus:800": "focus:shadow-emerald-800",
  "active:800": "active:shadow-emerald-800",
  "disabled:800": "disabled:shadow-emerald-800",
  "group-hover:800": "group-hover:shadow-emerald-800",
  "group:800": "group:shadow-emerald-800",
  "first:800": "first:shadow-emerald-800",
  "last:800": "last:shadow-emerald-800",
  "odd:800": "odd:shadow-emerald-800",
  "even:800": "even:shadow-emerald-800",
  "dark:800": "dark:shadow-emerald-800",
  "900": "shadow-emerald-900",
  "xs:900": "xs:shadow-emerald-900",
  "sm:900": "sm:shadow-emerald-900",
  "md:900": "md:shadow-emerald-900",
  "lg:900": "lg:shadow-emerald-900",
  "xl:900": "xl:shadow-emerald-900",
  "2xl:900": "2xl:shadow-emerald-900",
  "hover:900": "hover:shadow-emerald-900",
  "focus:900": "focus:shadow-emerald-900",
  "active:900": "active:shadow-emerald-900",
  "disabled:900": "disabled:shadow-emerald-900",
  "group-hover:900": "group-hover:shadow-emerald-900",
  "group:900": "group:shadow-emerald-900",
  "first:900": "first:shadow-emerald-900",
  "last:900": "last:shadow-emerald-900",
  "odd:900": "odd:shadow-emerald-900",
  "even:900": "even:shadow-emerald-900",
  "dark:900": "dark:shadow-emerald-900",
  "950": "shadow-emerald-950",
  "xs:950": "xs:shadow-emerald-950",
  "sm:950": "sm:shadow-emerald-950",
  "md:950": "md:shadow-emerald-950",
  "lg:950": "lg:shadow-emerald-950",
  "xl:950": "xl:shadow-emerald-950",
  "2xl:950": "2xl:shadow-emerald-950",
  "hover:950": "hover:shadow-emerald-950",
  "focus:950": "focus:shadow-emerald-950",
  "active:950": "active:shadow-emerald-950",
  "disabled:950": "disabled:shadow-emerald-950",
  "group-hover:950": "group-hover:shadow-emerald-950",
  "group:950": "group:shadow-emerald-950",
  "first:950": "first:shadow-emerald-950",
  "last:950": "last:shadow-emerald-950",
  "odd:950": "odd:shadow-emerald-950",
  "even:950": "even:shadow-emerald-950",
  "dark:950": "dark:shadow-emerald-950",
} as const;