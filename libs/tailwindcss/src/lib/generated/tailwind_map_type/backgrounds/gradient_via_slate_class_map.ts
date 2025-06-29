import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientViaSlateType = 
  | GradientViaSlateValue
  | Partial<Record<ResponsiveBreakpoint, GradientViaSlateValue>>;

export type GradientViaSlateValue = keyof typeof GRADIENT_VIA_SLATE_CLASS_MAP;

export const GRADIENT_VIA_SLATE_CLASS_MAP = {
  "50": "via-slate-50",
  "xs:50": "xs:via-slate-50",
  "sm:50": "sm:via-slate-50",
  "md:50": "md:via-slate-50",
  "lg:50": "lg:via-slate-50",
  "xl:50": "xl:via-slate-50",
  "2xl:50": "2xl:via-slate-50",
  "hover:50": "hover:via-slate-50",
  "focus:50": "focus:via-slate-50",
  "active:50": "active:via-slate-50",
  "disabled:50": "disabled:via-slate-50",
  "group-hover:50": "group-hover:via-slate-50",
  "group:50": "group:via-slate-50",
  "first:50": "first:via-slate-50",
  "last:50": "last:via-slate-50",
  "odd:50": "odd:via-slate-50",
  "even:50": "even:via-slate-50",
  "dark:50": "dark:via-slate-50",
  "100": "via-slate-100",
  "xs:100": "xs:via-slate-100",
  "sm:100": "sm:via-slate-100",
  "md:100": "md:via-slate-100",
  "lg:100": "lg:via-slate-100",
  "xl:100": "xl:via-slate-100",
  "2xl:100": "2xl:via-slate-100",
  "hover:100": "hover:via-slate-100",
  "focus:100": "focus:via-slate-100",
  "active:100": "active:via-slate-100",
  "disabled:100": "disabled:via-slate-100",
  "group-hover:100": "group-hover:via-slate-100",
  "group:100": "group:via-slate-100",
  "first:100": "first:via-slate-100",
  "last:100": "last:via-slate-100",
  "odd:100": "odd:via-slate-100",
  "even:100": "even:via-slate-100",
  "dark:100": "dark:via-slate-100",
  "200": "via-slate-200",
  "xs:200": "xs:via-slate-200",
  "sm:200": "sm:via-slate-200",
  "md:200": "md:via-slate-200",
  "lg:200": "lg:via-slate-200",
  "xl:200": "xl:via-slate-200",
  "2xl:200": "2xl:via-slate-200",
  "hover:200": "hover:via-slate-200",
  "focus:200": "focus:via-slate-200",
  "active:200": "active:via-slate-200",
  "disabled:200": "disabled:via-slate-200",
  "group-hover:200": "group-hover:via-slate-200",
  "group:200": "group:via-slate-200",
  "first:200": "first:via-slate-200",
  "last:200": "last:via-slate-200",
  "odd:200": "odd:via-slate-200",
  "even:200": "even:via-slate-200",
  "dark:200": "dark:via-slate-200",
  "300": "via-slate-300",
  "xs:300": "xs:via-slate-300",
  "sm:300": "sm:via-slate-300",
  "md:300": "md:via-slate-300",
  "lg:300": "lg:via-slate-300",
  "xl:300": "xl:via-slate-300",
  "2xl:300": "2xl:via-slate-300",
  "hover:300": "hover:via-slate-300",
  "focus:300": "focus:via-slate-300",
  "active:300": "active:via-slate-300",
  "disabled:300": "disabled:via-slate-300",
  "group-hover:300": "group-hover:via-slate-300",
  "group:300": "group:via-slate-300",
  "first:300": "first:via-slate-300",
  "last:300": "last:via-slate-300",
  "odd:300": "odd:via-slate-300",
  "even:300": "even:via-slate-300",
  "dark:300": "dark:via-slate-300",
  "400": "via-slate-400",
  "xs:400": "xs:via-slate-400",
  "sm:400": "sm:via-slate-400",
  "md:400": "md:via-slate-400",
  "lg:400": "lg:via-slate-400",
  "xl:400": "xl:via-slate-400",
  "2xl:400": "2xl:via-slate-400",
  "hover:400": "hover:via-slate-400",
  "focus:400": "focus:via-slate-400",
  "active:400": "active:via-slate-400",
  "disabled:400": "disabled:via-slate-400",
  "group-hover:400": "group-hover:via-slate-400",
  "group:400": "group:via-slate-400",
  "first:400": "first:via-slate-400",
  "last:400": "last:via-slate-400",
  "odd:400": "odd:via-slate-400",
  "even:400": "even:via-slate-400",
  "dark:400": "dark:via-slate-400",
  "500": "via-slate-500",
  "xs:500": "xs:via-slate-500",
  "sm:500": "sm:via-slate-500",
  "md:500": "md:via-slate-500",
  "lg:500": "lg:via-slate-500",
  "xl:500": "xl:via-slate-500",
  "2xl:500": "2xl:via-slate-500",
  "hover:500": "hover:via-slate-500",
  "focus:500": "focus:via-slate-500",
  "active:500": "active:via-slate-500",
  "disabled:500": "disabled:via-slate-500",
  "group-hover:500": "group-hover:via-slate-500",
  "group:500": "group:via-slate-500",
  "first:500": "first:via-slate-500",
  "last:500": "last:via-slate-500",
  "odd:500": "odd:via-slate-500",
  "even:500": "even:via-slate-500",
  "dark:500": "dark:via-slate-500",
  "600": "via-slate-600",
  "xs:600": "xs:via-slate-600",
  "sm:600": "sm:via-slate-600",
  "md:600": "md:via-slate-600",
  "lg:600": "lg:via-slate-600",
  "xl:600": "xl:via-slate-600",
  "2xl:600": "2xl:via-slate-600",
  "hover:600": "hover:via-slate-600",
  "focus:600": "focus:via-slate-600",
  "active:600": "active:via-slate-600",
  "disabled:600": "disabled:via-slate-600",
  "group-hover:600": "group-hover:via-slate-600",
  "group:600": "group:via-slate-600",
  "first:600": "first:via-slate-600",
  "last:600": "last:via-slate-600",
  "odd:600": "odd:via-slate-600",
  "even:600": "even:via-slate-600",
  "dark:600": "dark:via-slate-600",
  "700": "via-slate-700",
  "xs:700": "xs:via-slate-700",
  "sm:700": "sm:via-slate-700",
  "md:700": "md:via-slate-700",
  "lg:700": "lg:via-slate-700",
  "xl:700": "xl:via-slate-700",
  "2xl:700": "2xl:via-slate-700",
  "hover:700": "hover:via-slate-700",
  "focus:700": "focus:via-slate-700",
  "active:700": "active:via-slate-700",
  "disabled:700": "disabled:via-slate-700",
  "group-hover:700": "group-hover:via-slate-700",
  "group:700": "group:via-slate-700",
  "first:700": "first:via-slate-700",
  "last:700": "last:via-slate-700",
  "odd:700": "odd:via-slate-700",
  "even:700": "even:via-slate-700",
  "dark:700": "dark:via-slate-700",
  "800": "via-slate-800",
  "xs:800": "xs:via-slate-800",
  "sm:800": "sm:via-slate-800",
  "md:800": "md:via-slate-800",
  "lg:800": "lg:via-slate-800",
  "xl:800": "xl:via-slate-800",
  "2xl:800": "2xl:via-slate-800",
  "hover:800": "hover:via-slate-800",
  "focus:800": "focus:via-slate-800",
  "active:800": "active:via-slate-800",
  "disabled:800": "disabled:via-slate-800",
  "group-hover:800": "group-hover:via-slate-800",
  "group:800": "group:via-slate-800",
  "first:800": "first:via-slate-800",
  "last:800": "last:via-slate-800",
  "odd:800": "odd:via-slate-800",
  "even:800": "even:via-slate-800",
  "dark:800": "dark:via-slate-800",
  "900": "via-slate-900",
  "xs:900": "xs:via-slate-900",
  "sm:900": "sm:via-slate-900",
  "md:900": "md:via-slate-900",
  "lg:900": "lg:via-slate-900",
  "xl:900": "xl:via-slate-900",
  "2xl:900": "2xl:via-slate-900",
  "hover:900": "hover:via-slate-900",
  "focus:900": "focus:via-slate-900",
  "active:900": "active:via-slate-900",
  "disabled:900": "disabled:via-slate-900",
  "group-hover:900": "group-hover:via-slate-900",
  "group:900": "group:via-slate-900",
  "first:900": "first:via-slate-900",
  "last:900": "last:via-slate-900",
  "odd:900": "odd:via-slate-900",
  "even:900": "even:via-slate-900",
  "dark:900": "dark:via-slate-900",
  "950": "via-slate-950",
  "xs:950": "xs:via-slate-950",
  "sm:950": "sm:via-slate-950",
  "md:950": "md:via-slate-950",
  "lg:950": "lg:via-slate-950",
  "xl:950": "xl:via-slate-950",
  "2xl:950": "2xl:via-slate-950",
  "hover:950": "hover:via-slate-950",
  "focus:950": "focus:via-slate-950",
  "active:950": "active:via-slate-950",
  "disabled:950": "disabled:via-slate-950",
  "group-hover:950": "group-hover:via-slate-950",
  "group:950": "group:via-slate-950",
  "first:950": "first:via-slate-950",
  "last:950": "last:via-slate-950",
  "odd:950": "odd:via-slate-950",
  "even:950": "even:via-slate-950",
  "dark:950": "dark:via-slate-950",
} as const;