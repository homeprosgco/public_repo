import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type OutlineEmeraldColorType = 
  | OutlineEmeraldColorValue
  | Partial<Record<ResponsiveBreakpoint, OutlineEmeraldColorValue>>;

export type OutlineEmeraldColorValue = keyof typeof OUTLINE_EMERALD_COLOR_CLASS_MAP;

export const OUTLINE_EMERALD_COLOR_CLASS_MAP = {
  "50": "outline-emerald-50",
  "xs:50": "xs:outline-emerald-50",
  "sm:50": "sm:outline-emerald-50",
  "md:50": "md:outline-emerald-50",
  "lg:50": "lg:outline-emerald-50",
  "xl:50": "xl:outline-emerald-50",
  "2xl:50": "2xl:outline-emerald-50",
  "hover:50": "hover:outline-emerald-50",
  "focus:50": "focus:outline-emerald-50",
  "active:50": "active:outline-emerald-50",
  "disabled:50": "disabled:outline-emerald-50",
  "group-hover:50": "group-hover:outline-emerald-50",
  "group:50": "group:outline-emerald-50",
  "first:50": "first:outline-emerald-50",
  "last:50": "last:outline-emerald-50",
  "odd:50": "odd:outline-emerald-50",
  "even:50": "even:outline-emerald-50",
  "dark:50": "dark:outline-emerald-50",
  "100": "outline-emerald-100",
  "xs:100": "xs:outline-emerald-100",
  "sm:100": "sm:outline-emerald-100",
  "md:100": "md:outline-emerald-100",
  "lg:100": "lg:outline-emerald-100",
  "xl:100": "xl:outline-emerald-100",
  "2xl:100": "2xl:outline-emerald-100",
  "hover:100": "hover:outline-emerald-100",
  "focus:100": "focus:outline-emerald-100",
  "active:100": "active:outline-emerald-100",
  "disabled:100": "disabled:outline-emerald-100",
  "group-hover:100": "group-hover:outline-emerald-100",
  "group:100": "group:outline-emerald-100",
  "first:100": "first:outline-emerald-100",
  "last:100": "last:outline-emerald-100",
  "odd:100": "odd:outline-emerald-100",
  "even:100": "even:outline-emerald-100",
  "dark:100": "dark:outline-emerald-100",
  "200": "outline-emerald-200",
  "xs:200": "xs:outline-emerald-200",
  "sm:200": "sm:outline-emerald-200",
  "md:200": "md:outline-emerald-200",
  "lg:200": "lg:outline-emerald-200",
  "xl:200": "xl:outline-emerald-200",
  "2xl:200": "2xl:outline-emerald-200",
  "hover:200": "hover:outline-emerald-200",
  "focus:200": "focus:outline-emerald-200",
  "active:200": "active:outline-emerald-200",
  "disabled:200": "disabled:outline-emerald-200",
  "group-hover:200": "group-hover:outline-emerald-200",
  "group:200": "group:outline-emerald-200",
  "first:200": "first:outline-emerald-200",
  "last:200": "last:outline-emerald-200",
  "odd:200": "odd:outline-emerald-200",
  "even:200": "even:outline-emerald-200",
  "dark:200": "dark:outline-emerald-200",
  "300": "outline-emerald-300",
  "xs:300": "xs:outline-emerald-300",
  "sm:300": "sm:outline-emerald-300",
  "md:300": "md:outline-emerald-300",
  "lg:300": "lg:outline-emerald-300",
  "xl:300": "xl:outline-emerald-300",
  "2xl:300": "2xl:outline-emerald-300",
  "hover:300": "hover:outline-emerald-300",
  "focus:300": "focus:outline-emerald-300",
  "active:300": "active:outline-emerald-300",
  "disabled:300": "disabled:outline-emerald-300",
  "group-hover:300": "group-hover:outline-emerald-300",
  "group:300": "group:outline-emerald-300",
  "first:300": "first:outline-emerald-300",
  "last:300": "last:outline-emerald-300",
  "odd:300": "odd:outline-emerald-300",
  "even:300": "even:outline-emerald-300",
  "dark:300": "dark:outline-emerald-300",
  "400": "outline-emerald-400",
  "xs:400": "xs:outline-emerald-400",
  "sm:400": "sm:outline-emerald-400",
  "md:400": "md:outline-emerald-400",
  "lg:400": "lg:outline-emerald-400",
  "xl:400": "xl:outline-emerald-400",
  "2xl:400": "2xl:outline-emerald-400",
  "hover:400": "hover:outline-emerald-400",
  "focus:400": "focus:outline-emerald-400",
  "active:400": "active:outline-emerald-400",
  "disabled:400": "disabled:outline-emerald-400",
  "group-hover:400": "group-hover:outline-emerald-400",
  "group:400": "group:outline-emerald-400",
  "first:400": "first:outline-emerald-400",
  "last:400": "last:outline-emerald-400",
  "odd:400": "odd:outline-emerald-400",
  "even:400": "even:outline-emerald-400",
  "dark:400": "dark:outline-emerald-400",
  "500": "outline-emerald-500",
  "xs:500": "xs:outline-emerald-500",
  "sm:500": "sm:outline-emerald-500",
  "md:500": "md:outline-emerald-500",
  "lg:500": "lg:outline-emerald-500",
  "xl:500": "xl:outline-emerald-500",
  "2xl:500": "2xl:outline-emerald-500",
  "hover:500": "hover:outline-emerald-500",
  "focus:500": "focus:outline-emerald-500",
  "active:500": "active:outline-emerald-500",
  "disabled:500": "disabled:outline-emerald-500",
  "group-hover:500": "group-hover:outline-emerald-500",
  "group:500": "group:outline-emerald-500",
  "first:500": "first:outline-emerald-500",
  "last:500": "last:outline-emerald-500",
  "odd:500": "odd:outline-emerald-500",
  "even:500": "even:outline-emerald-500",
  "dark:500": "dark:outline-emerald-500",
  "600": "outline-emerald-600",
  "xs:600": "xs:outline-emerald-600",
  "sm:600": "sm:outline-emerald-600",
  "md:600": "md:outline-emerald-600",
  "lg:600": "lg:outline-emerald-600",
  "xl:600": "xl:outline-emerald-600",
  "2xl:600": "2xl:outline-emerald-600",
  "hover:600": "hover:outline-emerald-600",
  "focus:600": "focus:outline-emerald-600",
  "active:600": "active:outline-emerald-600",
  "disabled:600": "disabled:outline-emerald-600",
  "group-hover:600": "group-hover:outline-emerald-600",
  "group:600": "group:outline-emerald-600",
  "first:600": "first:outline-emerald-600",
  "last:600": "last:outline-emerald-600",
  "odd:600": "odd:outline-emerald-600",
  "even:600": "even:outline-emerald-600",
  "dark:600": "dark:outline-emerald-600",
  "700": "outline-emerald-700",
  "xs:700": "xs:outline-emerald-700",
  "sm:700": "sm:outline-emerald-700",
  "md:700": "md:outline-emerald-700",
  "lg:700": "lg:outline-emerald-700",
  "xl:700": "xl:outline-emerald-700",
  "2xl:700": "2xl:outline-emerald-700",
  "hover:700": "hover:outline-emerald-700",
  "focus:700": "focus:outline-emerald-700",
  "active:700": "active:outline-emerald-700",
  "disabled:700": "disabled:outline-emerald-700",
  "group-hover:700": "group-hover:outline-emerald-700",
  "group:700": "group:outline-emerald-700",
  "first:700": "first:outline-emerald-700",
  "last:700": "last:outline-emerald-700",
  "odd:700": "odd:outline-emerald-700",
  "even:700": "even:outline-emerald-700",
  "dark:700": "dark:outline-emerald-700",
  "800": "outline-emerald-800",
  "xs:800": "xs:outline-emerald-800",
  "sm:800": "sm:outline-emerald-800",
  "md:800": "md:outline-emerald-800",
  "lg:800": "lg:outline-emerald-800",
  "xl:800": "xl:outline-emerald-800",
  "2xl:800": "2xl:outline-emerald-800",
  "hover:800": "hover:outline-emerald-800",
  "focus:800": "focus:outline-emerald-800",
  "active:800": "active:outline-emerald-800",
  "disabled:800": "disabled:outline-emerald-800",
  "group-hover:800": "group-hover:outline-emerald-800",
  "group:800": "group:outline-emerald-800",
  "first:800": "first:outline-emerald-800",
  "last:800": "last:outline-emerald-800",
  "odd:800": "odd:outline-emerald-800",
  "even:800": "even:outline-emerald-800",
  "dark:800": "dark:outline-emerald-800",
  "900": "outline-emerald-900",
  "xs:900": "xs:outline-emerald-900",
  "sm:900": "sm:outline-emerald-900",
  "md:900": "md:outline-emerald-900",
  "lg:900": "lg:outline-emerald-900",
  "xl:900": "xl:outline-emerald-900",
  "2xl:900": "2xl:outline-emerald-900",
  "hover:900": "hover:outline-emerald-900",
  "focus:900": "focus:outline-emerald-900",
  "active:900": "active:outline-emerald-900",
  "disabled:900": "disabled:outline-emerald-900",
  "group-hover:900": "group-hover:outline-emerald-900",
  "group:900": "group:outline-emerald-900",
  "first:900": "first:outline-emerald-900",
  "last:900": "last:outline-emerald-900",
  "odd:900": "odd:outline-emerald-900",
  "even:900": "even:outline-emerald-900",
  "dark:900": "dark:outline-emerald-900",
  "950": "outline-emerald-950",
  "xs:950": "xs:outline-emerald-950",
  "sm:950": "sm:outline-emerald-950",
  "md:950": "md:outline-emerald-950",
  "lg:950": "lg:outline-emerald-950",
  "xl:950": "xl:outline-emerald-950",
  "2xl:950": "2xl:outline-emerald-950",
  "hover:950": "hover:outline-emerald-950",
  "focus:950": "focus:outline-emerald-950",
  "active:950": "active:outline-emerald-950",
  "disabled:950": "disabled:outline-emerald-950",
  "group-hover:950": "group-hover:outline-emerald-950",
  "group:950": "group:outline-emerald-950",
  "first:950": "first:outline-emerald-950",
  "last:950": "last:outline-emerald-950",
  "odd:950": "odd:outline-emerald-950",
  "even:950": "even:outline-emerald-950",
  "dark:950": "dark:outline-emerald-950",
} as const;