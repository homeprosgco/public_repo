import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientFromSlateType = 
  | GradientFromSlateValue
  | Partial<Record<ResponsiveBreakpoint, GradientFromSlateValue>>;

export type GradientFromSlateValue = keyof typeof GRADIENT_FROM_SLATE_CLASS_MAP;

export const GRADIENT_FROM_SLATE_CLASS_MAP = {
  "50": "from-slate-50",
  "xs:50": "xs:from-slate-50",
  "sm:50": "sm:from-slate-50",
  "md:50": "md:from-slate-50",
  "lg:50": "lg:from-slate-50",
  "xl:50": "xl:from-slate-50",
  "2xl:50": "2xl:from-slate-50",
  "hover:50": "hover:from-slate-50",
  "focus:50": "focus:from-slate-50",
  "active:50": "active:from-slate-50",
  "disabled:50": "disabled:from-slate-50",
  "group-hover:50": "group-hover:from-slate-50",
  "group:50": "group:from-slate-50",
  "first:50": "first:from-slate-50",
  "last:50": "last:from-slate-50",
  "odd:50": "odd:from-slate-50",
  "even:50": "even:from-slate-50",
  "dark:50": "dark:from-slate-50",
  "100": "from-slate-100",
  "xs:100": "xs:from-slate-100",
  "sm:100": "sm:from-slate-100",
  "md:100": "md:from-slate-100",
  "lg:100": "lg:from-slate-100",
  "xl:100": "xl:from-slate-100",
  "2xl:100": "2xl:from-slate-100",
  "hover:100": "hover:from-slate-100",
  "focus:100": "focus:from-slate-100",
  "active:100": "active:from-slate-100",
  "disabled:100": "disabled:from-slate-100",
  "group-hover:100": "group-hover:from-slate-100",
  "group:100": "group:from-slate-100",
  "first:100": "first:from-slate-100",
  "last:100": "last:from-slate-100",
  "odd:100": "odd:from-slate-100",
  "even:100": "even:from-slate-100",
  "dark:100": "dark:from-slate-100",
  "200": "from-slate-200",
  "xs:200": "xs:from-slate-200",
  "sm:200": "sm:from-slate-200",
  "md:200": "md:from-slate-200",
  "lg:200": "lg:from-slate-200",
  "xl:200": "xl:from-slate-200",
  "2xl:200": "2xl:from-slate-200",
  "hover:200": "hover:from-slate-200",
  "focus:200": "focus:from-slate-200",
  "active:200": "active:from-slate-200",
  "disabled:200": "disabled:from-slate-200",
  "group-hover:200": "group-hover:from-slate-200",
  "group:200": "group:from-slate-200",
  "first:200": "first:from-slate-200",
  "last:200": "last:from-slate-200",
  "odd:200": "odd:from-slate-200",
  "even:200": "even:from-slate-200",
  "dark:200": "dark:from-slate-200",
  "300": "from-slate-300",
  "xs:300": "xs:from-slate-300",
  "sm:300": "sm:from-slate-300",
  "md:300": "md:from-slate-300",
  "lg:300": "lg:from-slate-300",
  "xl:300": "xl:from-slate-300",
  "2xl:300": "2xl:from-slate-300",
  "hover:300": "hover:from-slate-300",
  "focus:300": "focus:from-slate-300",
  "active:300": "active:from-slate-300",
  "disabled:300": "disabled:from-slate-300",
  "group-hover:300": "group-hover:from-slate-300",
  "group:300": "group:from-slate-300",
  "first:300": "first:from-slate-300",
  "last:300": "last:from-slate-300",
  "odd:300": "odd:from-slate-300",
  "even:300": "even:from-slate-300",
  "dark:300": "dark:from-slate-300",
  "400": "from-slate-400",
  "xs:400": "xs:from-slate-400",
  "sm:400": "sm:from-slate-400",
  "md:400": "md:from-slate-400",
  "lg:400": "lg:from-slate-400",
  "xl:400": "xl:from-slate-400",
  "2xl:400": "2xl:from-slate-400",
  "hover:400": "hover:from-slate-400",
  "focus:400": "focus:from-slate-400",
  "active:400": "active:from-slate-400",
  "disabled:400": "disabled:from-slate-400",
  "group-hover:400": "group-hover:from-slate-400",
  "group:400": "group:from-slate-400",
  "first:400": "first:from-slate-400",
  "last:400": "last:from-slate-400",
  "odd:400": "odd:from-slate-400",
  "even:400": "even:from-slate-400",
  "dark:400": "dark:from-slate-400",
  "500": "from-slate-500",
  "xs:500": "xs:from-slate-500",
  "sm:500": "sm:from-slate-500",
  "md:500": "md:from-slate-500",
  "lg:500": "lg:from-slate-500",
  "xl:500": "xl:from-slate-500",
  "2xl:500": "2xl:from-slate-500",
  "hover:500": "hover:from-slate-500",
  "focus:500": "focus:from-slate-500",
  "active:500": "active:from-slate-500",
  "disabled:500": "disabled:from-slate-500",
  "group-hover:500": "group-hover:from-slate-500",
  "group:500": "group:from-slate-500",
  "first:500": "first:from-slate-500",
  "last:500": "last:from-slate-500",
  "odd:500": "odd:from-slate-500",
  "even:500": "even:from-slate-500",
  "dark:500": "dark:from-slate-500",
  "600": "from-slate-600",
  "xs:600": "xs:from-slate-600",
  "sm:600": "sm:from-slate-600",
  "md:600": "md:from-slate-600",
  "lg:600": "lg:from-slate-600",
  "xl:600": "xl:from-slate-600",
  "2xl:600": "2xl:from-slate-600",
  "hover:600": "hover:from-slate-600",
  "focus:600": "focus:from-slate-600",
  "active:600": "active:from-slate-600",
  "disabled:600": "disabled:from-slate-600",
  "group-hover:600": "group-hover:from-slate-600",
  "group:600": "group:from-slate-600",
  "first:600": "first:from-slate-600",
  "last:600": "last:from-slate-600",
  "odd:600": "odd:from-slate-600",
  "even:600": "even:from-slate-600",
  "dark:600": "dark:from-slate-600",
  "700": "from-slate-700",
  "xs:700": "xs:from-slate-700",
  "sm:700": "sm:from-slate-700",
  "md:700": "md:from-slate-700",
  "lg:700": "lg:from-slate-700",
  "xl:700": "xl:from-slate-700",
  "2xl:700": "2xl:from-slate-700",
  "hover:700": "hover:from-slate-700",
  "focus:700": "focus:from-slate-700",
  "active:700": "active:from-slate-700",
  "disabled:700": "disabled:from-slate-700",
  "group-hover:700": "group-hover:from-slate-700",
  "group:700": "group:from-slate-700",
  "first:700": "first:from-slate-700",
  "last:700": "last:from-slate-700",
  "odd:700": "odd:from-slate-700",
  "even:700": "even:from-slate-700",
  "dark:700": "dark:from-slate-700",
  "800": "from-slate-800",
  "xs:800": "xs:from-slate-800",
  "sm:800": "sm:from-slate-800",
  "md:800": "md:from-slate-800",
  "lg:800": "lg:from-slate-800",
  "xl:800": "xl:from-slate-800",
  "2xl:800": "2xl:from-slate-800",
  "hover:800": "hover:from-slate-800",
  "focus:800": "focus:from-slate-800",
  "active:800": "active:from-slate-800",
  "disabled:800": "disabled:from-slate-800",
  "group-hover:800": "group-hover:from-slate-800",
  "group:800": "group:from-slate-800",
  "first:800": "first:from-slate-800",
  "last:800": "last:from-slate-800",
  "odd:800": "odd:from-slate-800",
  "even:800": "even:from-slate-800",
  "dark:800": "dark:from-slate-800",
  "900": "from-slate-900",
  "xs:900": "xs:from-slate-900",
  "sm:900": "sm:from-slate-900",
  "md:900": "md:from-slate-900",
  "lg:900": "lg:from-slate-900",
  "xl:900": "xl:from-slate-900",
  "2xl:900": "2xl:from-slate-900",
  "hover:900": "hover:from-slate-900",
  "focus:900": "focus:from-slate-900",
  "active:900": "active:from-slate-900",
  "disabled:900": "disabled:from-slate-900",
  "group-hover:900": "group-hover:from-slate-900",
  "group:900": "group:from-slate-900",
  "first:900": "first:from-slate-900",
  "last:900": "last:from-slate-900",
  "odd:900": "odd:from-slate-900",
  "even:900": "even:from-slate-900",
  "dark:900": "dark:from-slate-900",
  "950": "from-slate-950",
  "xs:950": "xs:from-slate-950",
  "sm:950": "sm:from-slate-950",
  "md:950": "md:from-slate-950",
  "lg:950": "lg:from-slate-950",
  "xl:950": "xl:from-slate-950",
  "2xl:950": "2xl:from-slate-950",
  "hover:950": "hover:from-slate-950",
  "focus:950": "focus:from-slate-950",
  "active:950": "active:from-slate-950",
  "disabled:950": "disabled:from-slate-950",
  "group-hover:950": "group-hover:from-slate-950",
  "group:950": "group:from-slate-950",
  "first:950": "first:from-slate-950",
  "last:950": "last:from-slate-950",
  "odd:950": "odd:from-slate-950",
  "even:950": "even:from-slate-950",
  "dark:950": "dark:from-slate-950",
} as const;