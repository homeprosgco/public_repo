import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ShadowOrangeColorType = 
  | ShadowOrangeColorValue
  | Partial<Record<ResponsiveBreakpoint, ShadowOrangeColorValue>>;

export type ShadowOrangeColorValue = keyof typeof SHADOW_ORANGE_COLOR_CLASS_MAP;

export const SHADOW_ORANGE_COLOR_CLASS_MAP = {
  "50": "shadow-orange-50",
  "xs:50": "xs:shadow-orange-50",
  "sm:50": "sm:shadow-orange-50",
  "md:50": "md:shadow-orange-50",
  "lg:50": "lg:shadow-orange-50",
  "xl:50": "xl:shadow-orange-50",
  "2xl:50": "2xl:shadow-orange-50",
  "hover:50": "hover:shadow-orange-50",
  "focus:50": "focus:shadow-orange-50",
  "active:50": "active:shadow-orange-50",
  "disabled:50": "disabled:shadow-orange-50",
  "group-hover:50": "group-hover:shadow-orange-50",
  "group:50": "group:shadow-orange-50",
  "first:50": "first:shadow-orange-50",
  "last:50": "last:shadow-orange-50",
  "odd:50": "odd:shadow-orange-50",
  "even:50": "even:shadow-orange-50",
  "dark:50": "dark:shadow-orange-50",
  "100": "shadow-orange-100",
  "xs:100": "xs:shadow-orange-100",
  "sm:100": "sm:shadow-orange-100",
  "md:100": "md:shadow-orange-100",
  "lg:100": "lg:shadow-orange-100",
  "xl:100": "xl:shadow-orange-100",
  "2xl:100": "2xl:shadow-orange-100",
  "hover:100": "hover:shadow-orange-100",
  "focus:100": "focus:shadow-orange-100",
  "active:100": "active:shadow-orange-100",
  "disabled:100": "disabled:shadow-orange-100",
  "group-hover:100": "group-hover:shadow-orange-100",
  "group:100": "group:shadow-orange-100",
  "first:100": "first:shadow-orange-100",
  "last:100": "last:shadow-orange-100",
  "odd:100": "odd:shadow-orange-100",
  "even:100": "even:shadow-orange-100",
  "dark:100": "dark:shadow-orange-100",
  "200": "shadow-orange-200",
  "xs:200": "xs:shadow-orange-200",
  "sm:200": "sm:shadow-orange-200",
  "md:200": "md:shadow-orange-200",
  "lg:200": "lg:shadow-orange-200",
  "xl:200": "xl:shadow-orange-200",
  "2xl:200": "2xl:shadow-orange-200",
  "hover:200": "hover:shadow-orange-200",
  "focus:200": "focus:shadow-orange-200",
  "active:200": "active:shadow-orange-200",
  "disabled:200": "disabled:shadow-orange-200",
  "group-hover:200": "group-hover:shadow-orange-200",
  "group:200": "group:shadow-orange-200",
  "first:200": "first:shadow-orange-200",
  "last:200": "last:shadow-orange-200",
  "odd:200": "odd:shadow-orange-200",
  "even:200": "even:shadow-orange-200",
  "dark:200": "dark:shadow-orange-200",
  "300": "shadow-orange-300",
  "xs:300": "xs:shadow-orange-300",
  "sm:300": "sm:shadow-orange-300",
  "md:300": "md:shadow-orange-300",
  "lg:300": "lg:shadow-orange-300",
  "xl:300": "xl:shadow-orange-300",
  "2xl:300": "2xl:shadow-orange-300",
  "hover:300": "hover:shadow-orange-300",
  "focus:300": "focus:shadow-orange-300",
  "active:300": "active:shadow-orange-300",
  "disabled:300": "disabled:shadow-orange-300",
  "group-hover:300": "group-hover:shadow-orange-300",
  "group:300": "group:shadow-orange-300",
  "first:300": "first:shadow-orange-300",
  "last:300": "last:shadow-orange-300",
  "odd:300": "odd:shadow-orange-300",
  "even:300": "even:shadow-orange-300",
  "dark:300": "dark:shadow-orange-300",
  "400": "shadow-orange-400",
  "xs:400": "xs:shadow-orange-400",
  "sm:400": "sm:shadow-orange-400",
  "md:400": "md:shadow-orange-400",
  "lg:400": "lg:shadow-orange-400",
  "xl:400": "xl:shadow-orange-400",
  "2xl:400": "2xl:shadow-orange-400",
  "hover:400": "hover:shadow-orange-400",
  "focus:400": "focus:shadow-orange-400",
  "active:400": "active:shadow-orange-400",
  "disabled:400": "disabled:shadow-orange-400",
  "group-hover:400": "group-hover:shadow-orange-400",
  "group:400": "group:shadow-orange-400",
  "first:400": "first:shadow-orange-400",
  "last:400": "last:shadow-orange-400",
  "odd:400": "odd:shadow-orange-400",
  "even:400": "even:shadow-orange-400",
  "dark:400": "dark:shadow-orange-400",
  "500": "shadow-orange-500",
  "xs:500": "xs:shadow-orange-500",
  "sm:500": "sm:shadow-orange-500",
  "md:500": "md:shadow-orange-500",
  "lg:500": "lg:shadow-orange-500",
  "xl:500": "xl:shadow-orange-500",
  "2xl:500": "2xl:shadow-orange-500",
  "hover:500": "hover:shadow-orange-500",
  "focus:500": "focus:shadow-orange-500",
  "active:500": "active:shadow-orange-500",
  "disabled:500": "disabled:shadow-orange-500",
  "group-hover:500": "group-hover:shadow-orange-500",
  "group:500": "group:shadow-orange-500",
  "first:500": "first:shadow-orange-500",
  "last:500": "last:shadow-orange-500",
  "odd:500": "odd:shadow-orange-500",
  "even:500": "even:shadow-orange-500",
  "dark:500": "dark:shadow-orange-500",
  "600": "shadow-orange-600",
  "xs:600": "xs:shadow-orange-600",
  "sm:600": "sm:shadow-orange-600",
  "md:600": "md:shadow-orange-600",
  "lg:600": "lg:shadow-orange-600",
  "xl:600": "xl:shadow-orange-600",
  "2xl:600": "2xl:shadow-orange-600",
  "hover:600": "hover:shadow-orange-600",
  "focus:600": "focus:shadow-orange-600",
  "active:600": "active:shadow-orange-600",
  "disabled:600": "disabled:shadow-orange-600",
  "group-hover:600": "group-hover:shadow-orange-600",
  "group:600": "group:shadow-orange-600",
  "first:600": "first:shadow-orange-600",
  "last:600": "last:shadow-orange-600",
  "odd:600": "odd:shadow-orange-600",
  "even:600": "even:shadow-orange-600",
  "dark:600": "dark:shadow-orange-600",
  "700": "shadow-orange-700",
  "xs:700": "xs:shadow-orange-700",
  "sm:700": "sm:shadow-orange-700",
  "md:700": "md:shadow-orange-700",
  "lg:700": "lg:shadow-orange-700",
  "xl:700": "xl:shadow-orange-700",
  "2xl:700": "2xl:shadow-orange-700",
  "hover:700": "hover:shadow-orange-700",
  "focus:700": "focus:shadow-orange-700",
  "active:700": "active:shadow-orange-700",
  "disabled:700": "disabled:shadow-orange-700",
  "group-hover:700": "group-hover:shadow-orange-700",
  "group:700": "group:shadow-orange-700",
  "first:700": "first:shadow-orange-700",
  "last:700": "last:shadow-orange-700",
  "odd:700": "odd:shadow-orange-700",
  "even:700": "even:shadow-orange-700",
  "dark:700": "dark:shadow-orange-700",
  "800": "shadow-orange-800",
  "xs:800": "xs:shadow-orange-800",
  "sm:800": "sm:shadow-orange-800",
  "md:800": "md:shadow-orange-800",
  "lg:800": "lg:shadow-orange-800",
  "xl:800": "xl:shadow-orange-800",
  "2xl:800": "2xl:shadow-orange-800",
  "hover:800": "hover:shadow-orange-800",
  "focus:800": "focus:shadow-orange-800",
  "active:800": "active:shadow-orange-800",
  "disabled:800": "disabled:shadow-orange-800",
  "group-hover:800": "group-hover:shadow-orange-800",
  "group:800": "group:shadow-orange-800",
  "first:800": "first:shadow-orange-800",
  "last:800": "last:shadow-orange-800",
  "odd:800": "odd:shadow-orange-800",
  "even:800": "even:shadow-orange-800",
  "dark:800": "dark:shadow-orange-800",
  "900": "shadow-orange-900",
  "xs:900": "xs:shadow-orange-900",
  "sm:900": "sm:shadow-orange-900",
  "md:900": "md:shadow-orange-900",
  "lg:900": "lg:shadow-orange-900",
  "xl:900": "xl:shadow-orange-900",
  "2xl:900": "2xl:shadow-orange-900",
  "hover:900": "hover:shadow-orange-900",
  "focus:900": "focus:shadow-orange-900",
  "active:900": "active:shadow-orange-900",
  "disabled:900": "disabled:shadow-orange-900",
  "group-hover:900": "group-hover:shadow-orange-900",
  "group:900": "group:shadow-orange-900",
  "first:900": "first:shadow-orange-900",
  "last:900": "last:shadow-orange-900",
  "odd:900": "odd:shadow-orange-900",
  "even:900": "even:shadow-orange-900",
  "dark:900": "dark:shadow-orange-900",
  "950": "shadow-orange-950",
  "xs:950": "xs:shadow-orange-950",
  "sm:950": "sm:shadow-orange-950",
  "md:950": "md:shadow-orange-950",
  "lg:950": "lg:shadow-orange-950",
  "xl:950": "xl:shadow-orange-950",
  "2xl:950": "2xl:shadow-orange-950",
  "hover:950": "hover:shadow-orange-950",
  "focus:950": "focus:shadow-orange-950",
  "active:950": "active:shadow-orange-950",
  "disabled:950": "disabled:shadow-orange-950",
  "group-hover:950": "group-hover:shadow-orange-950",
  "group:950": "group:shadow-orange-950",
  "first:950": "first:shadow-orange-950",
  "last:950": "last:shadow-orange-950",
  "odd:950": "odd:shadow-orange-950",
  "even:950": "even:shadow-orange-950",
  "dark:950": "dark:shadow-orange-950",
} as const;