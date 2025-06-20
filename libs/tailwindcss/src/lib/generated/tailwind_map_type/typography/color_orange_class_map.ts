import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ColorOrangeType = 
  | ColorOrangeValue
  | Partial<Record<ResponsiveBreakpoint, ColorOrangeValue>>;

export type ColorOrangeValue = keyof typeof COLOR_ORANGE_CLASS_MAP;

export const COLOR_ORANGE_CLASS_MAP = {
  "50": "text-orange-50",
  "xs:50": "xs:text-orange-50",
  "sm:50": "sm:text-orange-50",
  "md:50": "md:text-orange-50",
  "lg:50": "lg:text-orange-50",
  "xl:50": "xl:text-orange-50",
  "2xl:50": "2xl:text-orange-50",
  "hover:50": "hover:text-orange-50",
  "focus:50": "focus:text-orange-50",
  "active:50": "active:text-orange-50",
  "disabled:50": "disabled:text-orange-50",
  "group-hover:50": "group-hover:text-orange-50",
  "group:50": "group:text-orange-50",
  "first:50": "first:text-orange-50",
  "last:50": "last:text-orange-50",
  "odd:50": "odd:text-orange-50",
  "even:50": "even:text-orange-50",
  "dark:50": "dark:text-orange-50",
  "100": "text-orange-100",
  "xs:100": "xs:text-orange-100",
  "sm:100": "sm:text-orange-100",
  "md:100": "md:text-orange-100",
  "lg:100": "lg:text-orange-100",
  "xl:100": "xl:text-orange-100",
  "2xl:100": "2xl:text-orange-100",
  "hover:100": "hover:text-orange-100",
  "focus:100": "focus:text-orange-100",
  "active:100": "active:text-orange-100",
  "disabled:100": "disabled:text-orange-100",
  "group-hover:100": "group-hover:text-orange-100",
  "group:100": "group:text-orange-100",
  "first:100": "first:text-orange-100",
  "last:100": "last:text-orange-100",
  "odd:100": "odd:text-orange-100",
  "even:100": "even:text-orange-100",
  "dark:100": "dark:text-orange-100",
  "200": "text-orange-200",
  "xs:200": "xs:text-orange-200",
  "sm:200": "sm:text-orange-200",
  "md:200": "md:text-orange-200",
  "lg:200": "lg:text-orange-200",
  "xl:200": "xl:text-orange-200",
  "2xl:200": "2xl:text-orange-200",
  "hover:200": "hover:text-orange-200",
  "focus:200": "focus:text-orange-200",
  "active:200": "active:text-orange-200",
  "disabled:200": "disabled:text-orange-200",
  "group-hover:200": "group-hover:text-orange-200",
  "group:200": "group:text-orange-200",
  "first:200": "first:text-orange-200",
  "last:200": "last:text-orange-200",
  "odd:200": "odd:text-orange-200",
  "even:200": "even:text-orange-200",
  "dark:200": "dark:text-orange-200",
  "300": "text-orange-300",
  "xs:300": "xs:text-orange-300",
  "sm:300": "sm:text-orange-300",
  "md:300": "md:text-orange-300",
  "lg:300": "lg:text-orange-300",
  "xl:300": "xl:text-orange-300",
  "2xl:300": "2xl:text-orange-300",
  "hover:300": "hover:text-orange-300",
  "focus:300": "focus:text-orange-300",
  "active:300": "active:text-orange-300",
  "disabled:300": "disabled:text-orange-300",
  "group-hover:300": "group-hover:text-orange-300",
  "group:300": "group:text-orange-300",
  "first:300": "first:text-orange-300",
  "last:300": "last:text-orange-300",
  "odd:300": "odd:text-orange-300",
  "even:300": "even:text-orange-300",
  "dark:300": "dark:text-orange-300",
  "400": "text-orange-400",
  "xs:400": "xs:text-orange-400",
  "sm:400": "sm:text-orange-400",
  "md:400": "md:text-orange-400",
  "lg:400": "lg:text-orange-400",
  "xl:400": "xl:text-orange-400",
  "2xl:400": "2xl:text-orange-400",
  "hover:400": "hover:text-orange-400",
  "focus:400": "focus:text-orange-400",
  "active:400": "active:text-orange-400",
  "disabled:400": "disabled:text-orange-400",
  "group-hover:400": "group-hover:text-orange-400",
  "group:400": "group:text-orange-400",
  "first:400": "first:text-orange-400",
  "last:400": "last:text-orange-400",
  "odd:400": "odd:text-orange-400",
  "even:400": "even:text-orange-400",
  "dark:400": "dark:text-orange-400",
  "500": "text-orange-500",
  "xs:500": "xs:text-orange-500",
  "sm:500": "sm:text-orange-500",
  "md:500": "md:text-orange-500",
  "lg:500": "lg:text-orange-500",
  "xl:500": "xl:text-orange-500",
  "2xl:500": "2xl:text-orange-500",
  "hover:500": "hover:text-orange-500",
  "focus:500": "focus:text-orange-500",
  "active:500": "active:text-orange-500",
  "disabled:500": "disabled:text-orange-500",
  "group-hover:500": "group-hover:text-orange-500",
  "group:500": "group:text-orange-500",
  "first:500": "first:text-orange-500",
  "last:500": "last:text-orange-500",
  "odd:500": "odd:text-orange-500",
  "even:500": "even:text-orange-500",
  "dark:500": "dark:text-orange-500",
  "600": "text-orange-600",
  "xs:600": "xs:text-orange-600",
  "sm:600": "sm:text-orange-600",
  "md:600": "md:text-orange-600",
  "lg:600": "lg:text-orange-600",
  "xl:600": "xl:text-orange-600",
  "2xl:600": "2xl:text-orange-600",
  "hover:600": "hover:text-orange-600",
  "focus:600": "focus:text-orange-600",
  "active:600": "active:text-orange-600",
  "disabled:600": "disabled:text-orange-600",
  "group-hover:600": "group-hover:text-orange-600",
  "group:600": "group:text-orange-600",
  "first:600": "first:text-orange-600",
  "last:600": "last:text-orange-600",
  "odd:600": "odd:text-orange-600",
  "even:600": "even:text-orange-600",
  "dark:600": "dark:text-orange-600",
  "700": "text-orange-700",
  "xs:700": "xs:text-orange-700",
  "sm:700": "sm:text-orange-700",
  "md:700": "md:text-orange-700",
  "lg:700": "lg:text-orange-700",
  "xl:700": "xl:text-orange-700",
  "2xl:700": "2xl:text-orange-700",
  "hover:700": "hover:text-orange-700",
  "focus:700": "focus:text-orange-700",
  "active:700": "active:text-orange-700",
  "disabled:700": "disabled:text-orange-700",
  "group-hover:700": "group-hover:text-orange-700",
  "group:700": "group:text-orange-700",
  "first:700": "first:text-orange-700",
  "last:700": "last:text-orange-700",
  "odd:700": "odd:text-orange-700",
  "even:700": "even:text-orange-700",
  "dark:700": "dark:text-orange-700",
  "800": "text-orange-800",
  "xs:800": "xs:text-orange-800",
  "sm:800": "sm:text-orange-800",
  "md:800": "md:text-orange-800",
  "lg:800": "lg:text-orange-800",
  "xl:800": "xl:text-orange-800",
  "2xl:800": "2xl:text-orange-800",
  "hover:800": "hover:text-orange-800",
  "focus:800": "focus:text-orange-800",
  "active:800": "active:text-orange-800",
  "disabled:800": "disabled:text-orange-800",
  "group-hover:800": "group-hover:text-orange-800",
  "group:800": "group:text-orange-800",
  "first:800": "first:text-orange-800",
  "last:800": "last:text-orange-800",
  "odd:800": "odd:text-orange-800",
  "even:800": "even:text-orange-800",
  "dark:800": "dark:text-orange-800",
  "900": "text-orange-900",
  "xs:900": "xs:text-orange-900",
  "sm:900": "sm:text-orange-900",
  "md:900": "md:text-orange-900",
  "lg:900": "lg:text-orange-900",
  "xl:900": "xl:text-orange-900",
  "2xl:900": "2xl:text-orange-900",
  "hover:900": "hover:text-orange-900",
  "focus:900": "focus:text-orange-900",
  "active:900": "active:text-orange-900",
  "disabled:900": "disabled:text-orange-900",
  "group-hover:900": "group-hover:text-orange-900",
  "group:900": "group:text-orange-900",
  "first:900": "first:text-orange-900",
  "last:900": "last:text-orange-900",
  "odd:900": "odd:text-orange-900",
  "even:900": "even:text-orange-900",
  "dark:900": "dark:text-orange-900",
  "950": "text-orange-950",
  "xs:950": "xs:text-orange-950",
  "sm:950": "sm:text-orange-950",
  "md:950": "md:text-orange-950",
  "lg:950": "lg:text-orange-950",
  "xl:950": "xl:text-orange-950",
  "2xl:950": "2xl:text-orange-950",
  "hover:950": "hover:text-orange-950",
  "focus:950": "focus:text-orange-950",
  "active:950": "active:text-orange-950",
  "disabled:950": "disabled:text-orange-950",
  "group-hover:950": "group-hover:text-orange-950",
  "group:950": "group:text-orange-950",
  "first:950": "first:text-orange-950",
  "last:950": "last:text-orange-950",
  "odd:950": "odd:text-orange-950",
  "even:950": "even:text-orange-950",
  "dark:950": "dark:text-orange-950",
} as const;