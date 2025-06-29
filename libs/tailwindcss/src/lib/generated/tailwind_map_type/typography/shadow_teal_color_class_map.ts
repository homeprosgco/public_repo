import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ShadowTealColorType = 
  | ShadowTealColorValue
  | Partial<Record<ResponsiveBreakpoint, ShadowTealColorValue>>;

export type ShadowTealColorValue = keyof typeof SHADOW_TEAL_COLOR_CLASS_MAP;

export const SHADOW_TEAL_COLOR_CLASS_MAP = {
  "50": "shadow-teal-50",
  "xs:50": "xs:shadow-teal-50",
  "sm:50": "sm:shadow-teal-50",
  "md:50": "md:shadow-teal-50",
  "lg:50": "lg:shadow-teal-50",
  "xl:50": "xl:shadow-teal-50",
  "2xl:50": "2xl:shadow-teal-50",
  "hover:50": "hover:shadow-teal-50",
  "focus:50": "focus:shadow-teal-50",
  "active:50": "active:shadow-teal-50",
  "disabled:50": "disabled:shadow-teal-50",
  "group-hover:50": "group-hover:shadow-teal-50",
  "group:50": "group:shadow-teal-50",
  "first:50": "first:shadow-teal-50",
  "last:50": "last:shadow-teal-50",
  "odd:50": "odd:shadow-teal-50",
  "even:50": "even:shadow-teal-50",
  "dark:50": "dark:shadow-teal-50",
  "100": "shadow-teal-100",
  "xs:100": "xs:shadow-teal-100",
  "sm:100": "sm:shadow-teal-100",
  "md:100": "md:shadow-teal-100",
  "lg:100": "lg:shadow-teal-100",
  "xl:100": "xl:shadow-teal-100",
  "2xl:100": "2xl:shadow-teal-100",
  "hover:100": "hover:shadow-teal-100",
  "focus:100": "focus:shadow-teal-100",
  "active:100": "active:shadow-teal-100",
  "disabled:100": "disabled:shadow-teal-100",
  "group-hover:100": "group-hover:shadow-teal-100",
  "group:100": "group:shadow-teal-100",
  "first:100": "first:shadow-teal-100",
  "last:100": "last:shadow-teal-100",
  "odd:100": "odd:shadow-teal-100",
  "even:100": "even:shadow-teal-100",
  "dark:100": "dark:shadow-teal-100",
  "200": "shadow-teal-200",
  "xs:200": "xs:shadow-teal-200",
  "sm:200": "sm:shadow-teal-200",
  "md:200": "md:shadow-teal-200",
  "lg:200": "lg:shadow-teal-200",
  "xl:200": "xl:shadow-teal-200",
  "2xl:200": "2xl:shadow-teal-200",
  "hover:200": "hover:shadow-teal-200",
  "focus:200": "focus:shadow-teal-200",
  "active:200": "active:shadow-teal-200",
  "disabled:200": "disabled:shadow-teal-200",
  "group-hover:200": "group-hover:shadow-teal-200",
  "group:200": "group:shadow-teal-200",
  "first:200": "first:shadow-teal-200",
  "last:200": "last:shadow-teal-200",
  "odd:200": "odd:shadow-teal-200",
  "even:200": "even:shadow-teal-200",
  "dark:200": "dark:shadow-teal-200",
  "300": "shadow-teal-300",
  "xs:300": "xs:shadow-teal-300",
  "sm:300": "sm:shadow-teal-300",
  "md:300": "md:shadow-teal-300",
  "lg:300": "lg:shadow-teal-300",
  "xl:300": "xl:shadow-teal-300",
  "2xl:300": "2xl:shadow-teal-300",
  "hover:300": "hover:shadow-teal-300",
  "focus:300": "focus:shadow-teal-300",
  "active:300": "active:shadow-teal-300",
  "disabled:300": "disabled:shadow-teal-300",
  "group-hover:300": "group-hover:shadow-teal-300",
  "group:300": "group:shadow-teal-300",
  "first:300": "first:shadow-teal-300",
  "last:300": "last:shadow-teal-300",
  "odd:300": "odd:shadow-teal-300",
  "even:300": "even:shadow-teal-300",
  "dark:300": "dark:shadow-teal-300",
  "400": "shadow-teal-400",
  "xs:400": "xs:shadow-teal-400",
  "sm:400": "sm:shadow-teal-400",
  "md:400": "md:shadow-teal-400",
  "lg:400": "lg:shadow-teal-400",
  "xl:400": "xl:shadow-teal-400",
  "2xl:400": "2xl:shadow-teal-400",
  "hover:400": "hover:shadow-teal-400",
  "focus:400": "focus:shadow-teal-400",
  "active:400": "active:shadow-teal-400",
  "disabled:400": "disabled:shadow-teal-400",
  "group-hover:400": "group-hover:shadow-teal-400",
  "group:400": "group:shadow-teal-400",
  "first:400": "first:shadow-teal-400",
  "last:400": "last:shadow-teal-400",
  "odd:400": "odd:shadow-teal-400",
  "even:400": "even:shadow-teal-400",
  "dark:400": "dark:shadow-teal-400",
  "500": "shadow-teal-500",
  "xs:500": "xs:shadow-teal-500",
  "sm:500": "sm:shadow-teal-500",
  "md:500": "md:shadow-teal-500",
  "lg:500": "lg:shadow-teal-500",
  "xl:500": "xl:shadow-teal-500",
  "2xl:500": "2xl:shadow-teal-500",
  "hover:500": "hover:shadow-teal-500",
  "focus:500": "focus:shadow-teal-500",
  "active:500": "active:shadow-teal-500",
  "disabled:500": "disabled:shadow-teal-500",
  "group-hover:500": "group-hover:shadow-teal-500",
  "group:500": "group:shadow-teal-500",
  "first:500": "first:shadow-teal-500",
  "last:500": "last:shadow-teal-500",
  "odd:500": "odd:shadow-teal-500",
  "even:500": "even:shadow-teal-500",
  "dark:500": "dark:shadow-teal-500",
  "600": "shadow-teal-600",
  "xs:600": "xs:shadow-teal-600",
  "sm:600": "sm:shadow-teal-600",
  "md:600": "md:shadow-teal-600",
  "lg:600": "lg:shadow-teal-600",
  "xl:600": "xl:shadow-teal-600",
  "2xl:600": "2xl:shadow-teal-600",
  "hover:600": "hover:shadow-teal-600",
  "focus:600": "focus:shadow-teal-600",
  "active:600": "active:shadow-teal-600",
  "disabled:600": "disabled:shadow-teal-600",
  "group-hover:600": "group-hover:shadow-teal-600",
  "group:600": "group:shadow-teal-600",
  "first:600": "first:shadow-teal-600",
  "last:600": "last:shadow-teal-600",
  "odd:600": "odd:shadow-teal-600",
  "even:600": "even:shadow-teal-600",
  "dark:600": "dark:shadow-teal-600",
  "700": "shadow-teal-700",
  "xs:700": "xs:shadow-teal-700",
  "sm:700": "sm:shadow-teal-700",
  "md:700": "md:shadow-teal-700",
  "lg:700": "lg:shadow-teal-700",
  "xl:700": "xl:shadow-teal-700",
  "2xl:700": "2xl:shadow-teal-700",
  "hover:700": "hover:shadow-teal-700",
  "focus:700": "focus:shadow-teal-700",
  "active:700": "active:shadow-teal-700",
  "disabled:700": "disabled:shadow-teal-700",
  "group-hover:700": "group-hover:shadow-teal-700",
  "group:700": "group:shadow-teal-700",
  "first:700": "first:shadow-teal-700",
  "last:700": "last:shadow-teal-700",
  "odd:700": "odd:shadow-teal-700",
  "even:700": "even:shadow-teal-700",
  "dark:700": "dark:shadow-teal-700",
  "800": "shadow-teal-800",
  "xs:800": "xs:shadow-teal-800",
  "sm:800": "sm:shadow-teal-800",
  "md:800": "md:shadow-teal-800",
  "lg:800": "lg:shadow-teal-800",
  "xl:800": "xl:shadow-teal-800",
  "2xl:800": "2xl:shadow-teal-800",
  "hover:800": "hover:shadow-teal-800",
  "focus:800": "focus:shadow-teal-800",
  "active:800": "active:shadow-teal-800",
  "disabled:800": "disabled:shadow-teal-800",
  "group-hover:800": "group-hover:shadow-teal-800",
  "group:800": "group:shadow-teal-800",
  "first:800": "first:shadow-teal-800",
  "last:800": "last:shadow-teal-800",
  "odd:800": "odd:shadow-teal-800",
  "even:800": "even:shadow-teal-800",
  "dark:800": "dark:shadow-teal-800",
  "900": "shadow-teal-900",
  "xs:900": "xs:shadow-teal-900",
  "sm:900": "sm:shadow-teal-900",
  "md:900": "md:shadow-teal-900",
  "lg:900": "lg:shadow-teal-900",
  "xl:900": "xl:shadow-teal-900",
  "2xl:900": "2xl:shadow-teal-900",
  "hover:900": "hover:shadow-teal-900",
  "focus:900": "focus:shadow-teal-900",
  "active:900": "active:shadow-teal-900",
  "disabled:900": "disabled:shadow-teal-900",
  "group-hover:900": "group-hover:shadow-teal-900",
  "group:900": "group:shadow-teal-900",
  "first:900": "first:shadow-teal-900",
  "last:900": "last:shadow-teal-900",
  "odd:900": "odd:shadow-teal-900",
  "even:900": "even:shadow-teal-900",
  "dark:900": "dark:shadow-teal-900",
  "950": "shadow-teal-950",
  "xs:950": "xs:shadow-teal-950",
  "sm:950": "sm:shadow-teal-950",
  "md:950": "md:shadow-teal-950",
  "lg:950": "lg:shadow-teal-950",
  "xl:950": "xl:shadow-teal-950",
  "2xl:950": "2xl:shadow-teal-950",
  "hover:950": "hover:shadow-teal-950",
  "focus:950": "focus:shadow-teal-950",
  "active:950": "active:shadow-teal-950",
  "disabled:950": "disabled:shadow-teal-950",
  "group-hover:950": "group-hover:shadow-teal-950",
  "group:950": "group:shadow-teal-950",
  "first:950": "first:shadow-teal-950",
  "last:950": "last:shadow-teal-950",
  "odd:950": "odd:shadow-teal-950",
  "even:950": "even:shadow-teal-950",
  "dark:950": "dark:shadow-teal-950",
} as const;