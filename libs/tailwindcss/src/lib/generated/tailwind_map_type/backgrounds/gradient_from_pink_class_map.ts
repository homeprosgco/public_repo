import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientFromPinkType = 
  | GradientFromPinkValue
  | Partial<Record<ResponsiveBreakpoint, GradientFromPinkValue>>;

export type GradientFromPinkValue = keyof typeof GRADIENT_FROM_PINK_CLASS_MAP;

export const GRADIENT_FROM_PINK_CLASS_MAP = {
  "50": "from-pink-50",
  "xs:50": "xs:from-pink-50",
  "sm:50": "sm:from-pink-50",
  "md:50": "md:from-pink-50",
  "lg:50": "lg:from-pink-50",
  "xl:50": "xl:from-pink-50",
  "2xl:50": "2xl:from-pink-50",
  "hover:50": "hover:from-pink-50",
  "focus:50": "focus:from-pink-50",
  "active:50": "active:from-pink-50",
  "disabled:50": "disabled:from-pink-50",
  "group-hover:50": "group-hover:from-pink-50",
  "group:50": "group:from-pink-50",
  "first:50": "first:from-pink-50",
  "last:50": "last:from-pink-50",
  "odd:50": "odd:from-pink-50",
  "even:50": "even:from-pink-50",
  "dark:50": "dark:from-pink-50",
  "100": "from-pink-100",
  "xs:100": "xs:from-pink-100",
  "sm:100": "sm:from-pink-100",
  "md:100": "md:from-pink-100",
  "lg:100": "lg:from-pink-100",
  "xl:100": "xl:from-pink-100",
  "2xl:100": "2xl:from-pink-100",
  "hover:100": "hover:from-pink-100",
  "focus:100": "focus:from-pink-100",
  "active:100": "active:from-pink-100",
  "disabled:100": "disabled:from-pink-100",
  "group-hover:100": "group-hover:from-pink-100",
  "group:100": "group:from-pink-100",
  "first:100": "first:from-pink-100",
  "last:100": "last:from-pink-100",
  "odd:100": "odd:from-pink-100",
  "even:100": "even:from-pink-100",
  "dark:100": "dark:from-pink-100",
  "200": "from-pink-200",
  "xs:200": "xs:from-pink-200",
  "sm:200": "sm:from-pink-200",
  "md:200": "md:from-pink-200",
  "lg:200": "lg:from-pink-200",
  "xl:200": "xl:from-pink-200",
  "2xl:200": "2xl:from-pink-200",
  "hover:200": "hover:from-pink-200",
  "focus:200": "focus:from-pink-200",
  "active:200": "active:from-pink-200",
  "disabled:200": "disabled:from-pink-200",
  "group-hover:200": "group-hover:from-pink-200",
  "group:200": "group:from-pink-200",
  "first:200": "first:from-pink-200",
  "last:200": "last:from-pink-200",
  "odd:200": "odd:from-pink-200",
  "even:200": "even:from-pink-200",
  "dark:200": "dark:from-pink-200",
  "300": "from-pink-300",
  "xs:300": "xs:from-pink-300",
  "sm:300": "sm:from-pink-300",
  "md:300": "md:from-pink-300",
  "lg:300": "lg:from-pink-300",
  "xl:300": "xl:from-pink-300",
  "2xl:300": "2xl:from-pink-300",
  "hover:300": "hover:from-pink-300",
  "focus:300": "focus:from-pink-300",
  "active:300": "active:from-pink-300",
  "disabled:300": "disabled:from-pink-300",
  "group-hover:300": "group-hover:from-pink-300",
  "group:300": "group:from-pink-300",
  "first:300": "first:from-pink-300",
  "last:300": "last:from-pink-300",
  "odd:300": "odd:from-pink-300",
  "even:300": "even:from-pink-300",
  "dark:300": "dark:from-pink-300",
  "400": "from-pink-400",
  "xs:400": "xs:from-pink-400",
  "sm:400": "sm:from-pink-400",
  "md:400": "md:from-pink-400",
  "lg:400": "lg:from-pink-400",
  "xl:400": "xl:from-pink-400",
  "2xl:400": "2xl:from-pink-400",
  "hover:400": "hover:from-pink-400",
  "focus:400": "focus:from-pink-400",
  "active:400": "active:from-pink-400",
  "disabled:400": "disabled:from-pink-400",
  "group-hover:400": "group-hover:from-pink-400",
  "group:400": "group:from-pink-400",
  "first:400": "first:from-pink-400",
  "last:400": "last:from-pink-400",
  "odd:400": "odd:from-pink-400",
  "even:400": "even:from-pink-400",
  "dark:400": "dark:from-pink-400",
  "500": "from-pink-500",
  "xs:500": "xs:from-pink-500",
  "sm:500": "sm:from-pink-500",
  "md:500": "md:from-pink-500",
  "lg:500": "lg:from-pink-500",
  "xl:500": "xl:from-pink-500",
  "2xl:500": "2xl:from-pink-500",
  "hover:500": "hover:from-pink-500",
  "focus:500": "focus:from-pink-500",
  "active:500": "active:from-pink-500",
  "disabled:500": "disabled:from-pink-500",
  "group-hover:500": "group-hover:from-pink-500",
  "group:500": "group:from-pink-500",
  "first:500": "first:from-pink-500",
  "last:500": "last:from-pink-500",
  "odd:500": "odd:from-pink-500",
  "even:500": "even:from-pink-500",
  "dark:500": "dark:from-pink-500",
  "600": "from-pink-600",
  "xs:600": "xs:from-pink-600",
  "sm:600": "sm:from-pink-600",
  "md:600": "md:from-pink-600",
  "lg:600": "lg:from-pink-600",
  "xl:600": "xl:from-pink-600",
  "2xl:600": "2xl:from-pink-600",
  "hover:600": "hover:from-pink-600",
  "focus:600": "focus:from-pink-600",
  "active:600": "active:from-pink-600",
  "disabled:600": "disabled:from-pink-600",
  "group-hover:600": "group-hover:from-pink-600",
  "group:600": "group:from-pink-600",
  "first:600": "first:from-pink-600",
  "last:600": "last:from-pink-600",
  "odd:600": "odd:from-pink-600",
  "even:600": "even:from-pink-600",
  "dark:600": "dark:from-pink-600",
  "700": "from-pink-700",
  "xs:700": "xs:from-pink-700",
  "sm:700": "sm:from-pink-700",
  "md:700": "md:from-pink-700",
  "lg:700": "lg:from-pink-700",
  "xl:700": "xl:from-pink-700",
  "2xl:700": "2xl:from-pink-700",
  "hover:700": "hover:from-pink-700",
  "focus:700": "focus:from-pink-700",
  "active:700": "active:from-pink-700",
  "disabled:700": "disabled:from-pink-700",
  "group-hover:700": "group-hover:from-pink-700",
  "group:700": "group:from-pink-700",
  "first:700": "first:from-pink-700",
  "last:700": "last:from-pink-700",
  "odd:700": "odd:from-pink-700",
  "even:700": "even:from-pink-700",
  "dark:700": "dark:from-pink-700",
  "800": "from-pink-800",
  "xs:800": "xs:from-pink-800",
  "sm:800": "sm:from-pink-800",
  "md:800": "md:from-pink-800",
  "lg:800": "lg:from-pink-800",
  "xl:800": "xl:from-pink-800",
  "2xl:800": "2xl:from-pink-800",
  "hover:800": "hover:from-pink-800",
  "focus:800": "focus:from-pink-800",
  "active:800": "active:from-pink-800",
  "disabled:800": "disabled:from-pink-800",
  "group-hover:800": "group-hover:from-pink-800",
  "group:800": "group:from-pink-800",
  "first:800": "first:from-pink-800",
  "last:800": "last:from-pink-800",
  "odd:800": "odd:from-pink-800",
  "even:800": "even:from-pink-800",
  "dark:800": "dark:from-pink-800",
  "900": "from-pink-900",
  "xs:900": "xs:from-pink-900",
  "sm:900": "sm:from-pink-900",
  "md:900": "md:from-pink-900",
  "lg:900": "lg:from-pink-900",
  "xl:900": "xl:from-pink-900",
  "2xl:900": "2xl:from-pink-900",
  "hover:900": "hover:from-pink-900",
  "focus:900": "focus:from-pink-900",
  "active:900": "active:from-pink-900",
  "disabled:900": "disabled:from-pink-900",
  "group-hover:900": "group-hover:from-pink-900",
  "group:900": "group:from-pink-900",
  "first:900": "first:from-pink-900",
  "last:900": "last:from-pink-900",
  "odd:900": "odd:from-pink-900",
  "even:900": "even:from-pink-900",
  "dark:900": "dark:from-pink-900",
  "950": "from-pink-950",
  "xs:950": "xs:from-pink-950",
  "sm:950": "sm:from-pink-950",
  "md:950": "md:from-pink-950",
  "lg:950": "lg:from-pink-950",
  "xl:950": "xl:from-pink-950",
  "2xl:950": "2xl:from-pink-950",
  "hover:950": "hover:from-pink-950",
  "focus:950": "focus:from-pink-950",
  "active:950": "active:from-pink-950",
  "disabled:950": "disabled:from-pink-950",
  "group-hover:950": "group-hover:from-pink-950",
  "group:950": "group:from-pink-950",
  "first:950": "first:from-pink-950",
  "last:950": "last:from-pink-950",
  "odd:950": "odd:from-pink-950",
  "even:950": "even:from-pink-950",
  "dark:950": "dark:from-pink-950",
} as const;