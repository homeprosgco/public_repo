import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type AccentOrangeColorType = 
  | AccentOrangeColorValue
  | Partial<Record<ResponsiveBreakpoint, AccentOrangeColorValue>>;

export type AccentOrangeColorValue = keyof typeof ACCENT_ORANGE_COLOR_CLASS_MAP;

export const ACCENT_ORANGE_COLOR_CLASS_MAP = {
  "50": "accent-orange-50",
  "xs:50": "xs:accent-orange-50",
  "sm:50": "sm:accent-orange-50",
  "md:50": "md:accent-orange-50",
  "lg:50": "lg:accent-orange-50",
  "xl:50": "xl:accent-orange-50",
  "2xl:50": "2xl:accent-orange-50",
  "hover:50": "hover:accent-orange-50",
  "focus:50": "focus:accent-orange-50",
  "active:50": "active:accent-orange-50",
  "disabled:50": "disabled:accent-orange-50",
  "group-hover:50": "group-hover:accent-orange-50",
  "group:50": "group:accent-orange-50",
  "first:50": "first:accent-orange-50",
  "last:50": "last:accent-orange-50",
  "odd:50": "odd:accent-orange-50",
  "even:50": "even:accent-orange-50",
  "dark:50": "dark:accent-orange-50",
  "100": "accent-orange-100",
  "xs:100": "xs:accent-orange-100",
  "sm:100": "sm:accent-orange-100",
  "md:100": "md:accent-orange-100",
  "lg:100": "lg:accent-orange-100",
  "xl:100": "xl:accent-orange-100",
  "2xl:100": "2xl:accent-orange-100",
  "hover:100": "hover:accent-orange-100",
  "focus:100": "focus:accent-orange-100",
  "active:100": "active:accent-orange-100",
  "disabled:100": "disabled:accent-orange-100",
  "group-hover:100": "group-hover:accent-orange-100",
  "group:100": "group:accent-orange-100",
  "first:100": "first:accent-orange-100",
  "last:100": "last:accent-orange-100",
  "odd:100": "odd:accent-orange-100",
  "even:100": "even:accent-orange-100",
  "dark:100": "dark:accent-orange-100",
  "200": "accent-orange-200",
  "xs:200": "xs:accent-orange-200",
  "sm:200": "sm:accent-orange-200",
  "md:200": "md:accent-orange-200",
  "lg:200": "lg:accent-orange-200",
  "xl:200": "xl:accent-orange-200",
  "2xl:200": "2xl:accent-orange-200",
  "hover:200": "hover:accent-orange-200",
  "focus:200": "focus:accent-orange-200",
  "active:200": "active:accent-orange-200",
  "disabled:200": "disabled:accent-orange-200",
  "group-hover:200": "group-hover:accent-orange-200",
  "group:200": "group:accent-orange-200",
  "first:200": "first:accent-orange-200",
  "last:200": "last:accent-orange-200",
  "odd:200": "odd:accent-orange-200",
  "even:200": "even:accent-orange-200",
  "dark:200": "dark:accent-orange-200",
  "300": "accent-orange-300",
  "xs:300": "xs:accent-orange-300",
  "sm:300": "sm:accent-orange-300",
  "md:300": "md:accent-orange-300",
  "lg:300": "lg:accent-orange-300",
  "xl:300": "xl:accent-orange-300",
  "2xl:300": "2xl:accent-orange-300",
  "hover:300": "hover:accent-orange-300",
  "focus:300": "focus:accent-orange-300",
  "active:300": "active:accent-orange-300",
  "disabled:300": "disabled:accent-orange-300",
  "group-hover:300": "group-hover:accent-orange-300",
  "group:300": "group:accent-orange-300",
  "first:300": "first:accent-orange-300",
  "last:300": "last:accent-orange-300",
  "odd:300": "odd:accent-orange-300",
  "even:300": "even:accent-orange-300",
  "dark:300": "dark:accent-orange-300",
  "400": "accent-orange-400",
  "xs:400": "xs:accent-orange-400",
  "sm:400": "sm:accent-orange-400",
  "md:400": "md:accent-orange-400",
  "lg:400": "lg:accent-orange-400",
  "xl:400": "xl:accent-orange-400",
  "2xl:400": "2xl:accent-orange-400",
  "hover:400": "hover:accent-orange-400",
  "focus:400": "focus:accent-orange-400",
  "active:400": "active:accent-orange-400",
  "disabled:400": "disabled:accent-orange-400",
  "group-hover:400": "group-hover:accent-orange-400",
  "group:400": "group:accent-orange-400",
  "first:400": "first:accent-orange-400",
  "last:400": "last:accent-orange-400",
  "odd:400": "odd:accent-orange-400",
  "even:400": "even:accent-orange-400",
  "dark:400": "dark:accent-orange-400",
  "500": "accent-orange-500",
  "xs:500": "xs:accent-orange-500",
  "sm:500": "sm:accent-orange-500",
  "md:500": "md:accent-orange-500",
  "lg:500": "lg:accent-orange-500",
  "xl:500": "xl:accent-orange-500",
  "2xl:500": "2xl:accent-orange-500",
  "hover:500": "hover:accent-orange-500",
  "focus:500": "focus:accent-orange-500",
  "active:500": "active:accent-orange-500",
  "disabled:500": "disabled:accent-orange-500",
  "group-hover:500": "group-hover:accent-orange-500",
  "group:500": "group:accent-orange-500",
  "first:500": "first:accent-orange-500",
  "last:500": "last:accent-orange-500",
  "odd:500": "odd:accent-orange-500",
  "even:500": "even:accent-orange-500",
  "dark:500": "dark:accent-orange-500",
  "600": "accent-orange-600",
  "xs:600": "xs:accent-orange-600",
  "sm:600": "sm:accent-orange-600",
  "md:600": "md:accent-orange-600",
  "lg:600": "lg:accent-orange-600",
  "xl:600": "xl:accent-orange-600",
  "2xl:600": "2xl:accent-orange-600",
  "hover:600": "hover:accent-orange-600",
  "focus:600": "focus:accent-orange-600",
  "active:600": "active:accent-orange-600",
  "disabled:600": "disabled:accent-orange-600",
  "group-hover:600": "group-hover:accent-orange-600",
  "group:600": "group:accent-orange-600",
  "first:600": "first:accent-orange-600",
  "last:600": "last:accent-orange-600",
  "odd:600": "odd:accent-orange-600",
  "even:600": "even:accent-orange-600",
  "dark:600": "dark:accent-orange-600",
  "700": "accent-orange-700",
  "xs:700": "xs:accent-orange-700",
  "sm:700": "sm:accent-orange-700",
  "md:700": "md:accent-orange-700",
  "lg:700": "lg:accent-orange-700",
  "xl:700": "xl:accent-orange-700",
  "2xl:700": "2xl:accent-orange-700",
  "hover:700": "hover:accent-orange-700",
  "focus:700": "focus:accent-orange-700",
  "active:700": "active:accent-orange-700",
  "disabled:700": "disabled:accent-orange-700",
  "group-hover:700": "group-hover:accent-orange-700",
  "group:700": "group:accent-orange-700",
  "first:700": "first:accent-orange-700",
  "last:700": "last:accent-orange-700",
  "odd:700": "odd:accent-orange-700",
  "even:700": "even:accent-orange-700",
  "dark:700": "dark:accent-orange-700",
  "800": "accent-orange-800",
  "xs:800": "xs:accent-orange-800",
  "sm:800": "sm:accent-orange-800",
  "md:800": "md:accent-orange-800",
  "lg:800": "lg:accent-orange-800",
  "xl:800": "xl:accent-orange-800",
  "2xl:800": "2xl:accent-orange-800",
  "hover:800": "hover:accent-orange-800",
  "focus:800": "focus:accent-orange-800",
  "active:800": "active:accent-orange-800",
  "disabled:800": "disabled:accent-orange-800",
  "group-hover:800": "group-hover:accent-orange-800",
  "group:800": "group:accent-orange-800",
  "first:800": "first:accent-orange-800",
  "last:800": "last:accent-orange-800",
  "odd:800": "odd:accent-orange-800",
  "even:800": "even:accent-orange-800",
  "dark:800": "dark:accent-orange-800",
  "900": "accent-orange-900",
  "xs:900": "xs:accent-orange-900",
  "sm:900": "sm:accent-orange-900",
  "md:900": "md:accent-orange-900",
  "lg:900": "lg:accent-orange-900",
  "xl:900": "xl:accent-orange-900",
  "2xl:900": "2xl:accent-orange-900",
  "hover:900": "hover:accent-orange-900",
  "focus:900": "focus:accent-orange-900",
  "active:900": "active:accent-orange-900",
  "disabled:900": "disabled:accent-orange-900",
  "group-hover:900": "group-hover:accent-orange-900",
  "group:900": "group:accent-orange-900",
  "first:900": "first:accent-orange-900",
  "last:900": "last:accent-orange-900",
  "odd:900": "odd:accent-orange-900",
  "even:900": "even:accent-orange-900",
  "dark:900": "dark:accent-orange-900",
  "950": "accent-orange-950",
  "xs:950": "xs:accent-orange-950",
  "sm:950": "sm:accent-orange-950",
  "md:950": "md:accent-orange-950",
  "lg:950": "lg:accent-orange-950",
  "xl:950": "xl:accent-orange-950",
  "2xl:950": "2xl:accent-orange-950",
  "hover:950": "hover:accent-orange-950",
  "focus:950": "focus:accent-orange-950",
  "active:950": "active:accent-orange-950",
  "disabled:950": "disabled:accent-orange-950",
  "group-hover:950": "group-hover:accent-orange-950",
  "group:950": "group:accent-orange-950",
  "first:950": "first:accent-orange-950",
  "last:950": "last:accent-orange-950",
  "odd:950": "odd:accent-orange-950",
  "even:950": "even:accent-orange-950",
  "dark:950": "dark:accent-orange-950",
} as const;