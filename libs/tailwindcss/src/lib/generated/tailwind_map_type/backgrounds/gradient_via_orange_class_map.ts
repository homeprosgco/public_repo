import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientViaOrangeType = 
  | GradientViaOrangeValue
  | Partial<Record<ResponsiveBreakpoint, GradientViaOrangeValue>>;

export type GradientViaOrangeValue = keyof typeof GRADIENT_VIA_ORANGE_CLASS_MAP;

export const GRADIENT_VIA_ORANGE_CLASS_MAP = {
  "50": "via-orange-50",
  "xs:50": "xs:via-orange-50",
  "sm:50": "sm:via-orange-50",
  "md:50": "md:via-orange-50",
  "lg:50": "lg:via-orange-50",
  "xl:50": "xl:via-orange-50",
  "2xl:50": "2xl:via-orange-50",
  "hover:50": "hover:via-orange-50",
  "focus:50": "focus:via-orange-50",
  "active:50": "active:via-orange-50",
  "disabled:50": "disabled:via-orange-50",
  "group-hover:50": "group-hover:via-orange-50",
  "group:50": "group:via-orange-50",
  "first:50": "first:via-orange-50",
  "last:50": "last:via-orange-50",
  "odd:50": "odd:via-orange-50",
  "even:50": "even:via-orange-50",
  "dark:50": "dark:via-orange-50",
  "100": "via-orange-100",
  "xs:100": "xs:via-orange-100",
  "sm:100": "sm:via-orange-100",
  "md:100": "md:via-orange-100",
  "lg:100": "lg:via-orange-100",
  "xl:100": "xl:via-orange-100",
  "2xl:100": "2xl:via-orange-100",
  "hover:100": "hover:via-orange-100",
  "focus:100": "focus:via-orange-100",
  "active:100": "active:via-orange-100",
  "disabled:100": "disabled:via-orange-100",
  "group-hover:100": "group-hover:via-orange-100",
  "group:100": "group:via-orange-100",
  "first:100": "first:via-orange-100",
  "last:100": "last:via-orange-100",
  "odd:100": "odd:via-orange-100",
  "even:100": "even:via-orange-100",
  "dark:100": "dark:via-orange-100",
  "200": "via-orange-200",
  "xs:200": "xs:via-orange-200",
  "sm:200": "sm:via-orange-200",
  "md:200": "md:via-orange-200",
  "lg:200": "lg:via-orange-200",
  "xl:200": "xl:via-orange-200",
  "2xl:200": "2xl:via-orange-200",
  "hover:200": "hover:via-orange-200",
  "focus:200": "focus:via-orange-200",
  "active:200": "active:via-orange-200",
  "disabled:200": "disabled:via-orange-200",
  "group-hover:200": "group-hover:via-orange-200",
  "group:200": "group:via-orange-200",
  "first:200": "first:via-orange-200",
  "last:200": "last:via-orange-200",
  "odd:200": "odd:via-orange-200",
  "even:200": "even:via-orange-200",
  "dark:200": "dark:via-orange-200",
  "300": "via-orange-300",
  "xs:300": "xs:via-orange-300",
  "sm:300": "sm:via-orange-300",
  "md:300": "md:via-orange-300",
  "lg:300": "lg:via-orange-300",
  "xl:300": "xl:via-orange-300",
  "2xl:300": "2xl:via-orange-300",
  "hover:300": "hover:via-orange-300",
  "focus:300": "focus:via-orange-300",
  "active:300": "active:via-orange-300",
  "disabled:300": "disabled:via-orange-300",
  "group-hover:300": "group-hover:via-orange-300",
  "group:300": "group:via-orange-300",
  "first:300": "first:via-orange-300",
  "last:300": "last:via-orange-300",
  "odd:300": "odd:via-orange-300",
  "even:300": "even:via-orange-300",
  "dark:300": "dark:via-orange-300",
  "400": "via-orange-400",
  "xs:400": "xs:via-orange-400",
  "sm:400": "sm:via-orange-400",
  "md:400": "md:via-orange-400",
  "lg:400": "lg:via-orange-400",
  "xl:400": "xl:via-orange-400",
  "2xl:400": "2xl:via-orange-400",
  "hover:400": "hover:via-orange-400",
  "focus:400": "focus:via-orange-400",
  "active:400": "active:via-orange-400",
  "disabled:400": "disabled:via-orange-400",
  "group-hover:400": "group-hover:via-orange-400",
  "group:400": "group:via-orange-400",
  "first:400": "first:via-orange-400",
  "last:400": "last:via-orange-400",
  "odd:400": "odd:via-orange-400",
  "even:400": "even:via-orange-400",
  "dark:400": "dark:via-orange-400",
  "500": "via-orange-500",
  "xs:500": "xs:via-orange-500",
  "sm:500": "sm:via-orange-500",
  "md:500": "md:via-orange-500",
  "lg:500": "lg:via-orange-500",
  "xl:500": "xl:via-orange-500",
  "2xl:500": "2xl:via-orange-500",
  "hover:500": "hover:via-orange-500",
  "focus:500": "focus:via-orange-500",
  "active:500": "active:via-orange-500",
  "disabled:500": "disabled:via-orange-500",
  "group-hover:500": "group-hover:via-orange-500",
  "group:500": "group:via-orange-500",
  "first:500": "first:via-orange-500",
  "last:500": "last:via-orange-500",
  "odd:500": "odd:via-orange-500",
  "even:500": "even:via-orange-500",
  "dark:500": "dark:via-orange-500",
  "600": "via-orange-600",
  "xs:600": "xs:via-orange-600",
  "sm:600": "sm:via-orange-600",
  "md:600": "md:via-orange-600",
  "lg:600": "lg:via-orange-600",
  "xl:600": "xl:via-orange-600",
  "2xl:600": "2xl:via-orange-600",
  "hover:600": "hover:via-orange-600",
  "focus:600": "focus:via-orange-600",
  "active:600": "active:via-orange-600",
  "disabled:600": "disabled:via-orange-600",
  "group-hover:600": "group-hover:via-orange-600",
  "group:600": "group:via-orange-600",
  "first:600": "first:via-orange-600",
  "last:600": "last:via-orange-600",
  "odd:600": "odd:via-orange-600",
  "even:600": "even:via-orange-600",
  "dark:600": "dark:via-orange-600",
  "700": "via-orange-700",
  "xs:700": "xs:via-orange-700",
  "sm:700": "sm:via-orange-700",
  "md:700": "md:via-orange-700",
  "lg:700": "lg:via-orange-700",
  "xl:700": "xl:via-orange-700",
  "2xl:700": "2xl:via-orange-700",
  "hover:700": "hover:via-orange-700",
  "focus:700": "focus:via-orange-700",
  "active:700": "active:via-orange-700",
  "disabled:700": "disabled:via-orange-700",
  "group-hover:700": "group-hover:via-orange-700",
  "group:700": "group:via-orange-700",
  "first:700": "first:via-orange-700",
  "last:700": "last:via-orange-700",
  "odd:700": "odd:via-orange-700",
  "even:700": "even:via-orange-700",
  "dark:700": "dark:via-orange-700",
  "800": "via-orange-800",
  "xs:800": "xs:via-orange-800",
  "sm:800": "sm:via-orange-800",
  "md:800": "md:via-orange-800",
  "lg:800": "lg:via-orange-800",
  "xl:800": "xl:via-orange-800",
  "2xl:800": "2xl:via-orange-800",
  "hover:800": "hover:via-orange-800",
  "focus:800": "focus:via-orange-800",
  "active:800": "active:via-orange-800",
  "disabled:800": "disabled:via-orange-800",
  "group-hover:800": "group-hover:via-orange-800",
  "group:800": "group:via-orange-800",
  "first:800": "first:via-orange-800",
  "last:800": "last:via-orange-800",
  "odd:800": "odd:via-orange-800",
  "even:800": "even:via-orange-800",
  "dark:800": "dark:via-orange-800",
  "900": "via-orange-900",
  "xs:900": "xs:via-orange-900",
  "sm:900": "sm:via-orange-900",
  "md:900": "md:via-orange-900",
  "lg:900": "lg:via-orange-900",
  "xl:900": "xl:via-orange-900",
  "2xl:900": "2xl:via-orange-900",
  "hover:900": "hover:via-orange-900",
  "focus:900": "focus:via-orange-900",
  "active:900": "active:via-orange-900",
  "disabled:900": "disabled:via-orange-900",
  "group-hover:900": "group-hover:via-orange-900",
  "group:900": "group:via-orange-900",
  "first:900": "first:via-orange-900",
  "last:900": "last:via-orange-900",
  "odd:900": "odd:via-orange-900",
  "even:900": "even:via-orange-900",
  "dark:900": "dark:via-orange-900",
  "950": "via-orange-950",
  "xs:950": "xs:via-orange-950",
  "sm:950": "sm:via-orange-950",
  "md:950": "md:via-orange-950",
  "lg:950": "lg:via-orange-950",
  "xl:950": "xl:via-orange-950",
  "2xl:950": "2xl:via-orange-950",
  "hover:950": "hover:via-orange-950",
  "focus:950": "focus:via-orange-950",
  "active:950": "active:via-orange-950",
  "disabled:950": "disabled:via-orange-950",
  "group-hover:950": "group-hover:via-orange-950",
  "group:950": "group:via-orange-950",
  "first:950": "first:via-orange-950",
  "last:950": "last:via-orange-950",
  "odd:950": "odd:via-orange-950",
  "even:950": "even:via-orange-950",
  "dark:950": "dark:via-orange-950",
} as const;