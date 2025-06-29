import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type GradientToNeutralType = 
  | GradientToNeutralValue
  | Partial<Record<ResponsiveBreakpoint, GradientToNeutralValue>>;

export type GradientToNeutralValue = keyof typeof GRADIENT_TO_NEUTRAL_CLASS_MAP;

export const GRADIENT_TO_NEUTRAL_CLASS_MAP = {
  "50": "to-neutral-50",
  "xs:50": "xs:to-neutral-50",
  "sm:50": "sm:to-neutral-50",
  "md:50": "md:to-neutral-50",
  "lg:50": "lg:to-neutral-50",
  "xl:50": "xl:to-neutral-50",
  "2xl:50": "2xl:to-neutral-50",
  "hover:50": "hover:to-neutral-50",
  "focus:50": "focus:to-neutral-50",
  "active:50": "active:to-neutral-50",
  "disabled:50": "disabled:to-neutral-50",
  "group-hover:50": "group-hover:to-neutral-50",
  "group:50": "group:to-neutral-50",
  "first:50": "first:to-neutral-50",
  "last:50": "last:to-neutral-50",
  "odd:50": "odd:to-neutral-50",
  "even:50": "even:to-neutral-50",
  "dark:50": "dark:to-neutral-50",
  "100": "to-neutral-100",
  "xs:100": "xs:to-neutral-100",
  "sm:100": "sm:to-neutral-100",
  "md:100": "md:to-neutral-100",
  "lg:100": "lg:to-neutral-100",
  "xl:100": "xl:to-neutral-100",
  "2xl:100": "2xl:to-neutral-100",
  "hover:100": "hover:to-neutral-100",
  "focus:100": "focus:to-neutral-100",
  "active:100": "active:to-neutral-100",
  "disabled:100": "disabled:to-neutral-100",
  "group-hover:100": "group-hover:to-neutral-100",
  "group:100": "group:to-neutral-100",
  "first:100": "first:to-neutral-100",
  "last:100": "last:to-neutral-100",
  "odd:100": "odd:to-neutral-100",
  "even:100": "even:to-neutral-100",
  "dark:100": "dark:to-neutral-100",
  "200": "to-neutral-200",
  "xs:200": "xs:to-neutral-200",
  "sm:200": "sm:to-neutral-200",
  "md:200": "md:to-neutral-200",
  "lg:200": "lg:to-neutral-200",
  "xl:200": "xl:to-neutral-200",
  "2xl:200": "2xl:to-neutral-200",
  "hover:200": "hover:to-neutral-200",
  "focus:200": "focus:to-neutral-200",
  "active:200": "active:to-neutral-200",
  "disabled:200": "disabled:to-neutral-200",
  "group-hover:200": "group-hover:to-neutral-200",
  "group:200": "group:to-neutral-200",
  "first:200": "first:to-neutral-200",
  "last:200": "last:to-neutral-200",
  "odd:200": "odd:to-neutral-200",
  "even:200": "even:to-neutral-200",
  "dark:200": "dark:to-neutral-200",
  "300": "to-neutral-300",
  "xs:300": "xs:to-neutral-300",
  "sm:300": "sm:to-neutral-300",
  "md:300": "md:to-neutral-300",
  "lg:300": "lg:to-neutral-300",
  "xl:300": "xl:to-neutral-300",
  "2xl:300": "2xl:to-neutral-300",
  "hover:300": "hover:to-neutral-300",
  "focus:300": "focus:to-neutral-300",
  "active:300": "active:to-neutral-300",
  "disabled:300": "disabled:to-neutral-300",
  "group-hover:300": "group-hover:to-neutral-300",
  "group:300": "group:to-neutral-300",
  "first:300": "first:to-neutral-300",
  "last:300": "last:to-neutral-300",
  "odd:300": "odd:to-neutral-300",
  "even:300": "even:to-neutral-300",
  "dark:300": "dark:to-neutral-300",
  "400": "to-neutral-400",
  "xs:400": "xs:to-neutral-400",
  "sm:400": "sm:to-neutral-400",
  "md:400": "md:to-neutral-400",
  "lg:400": "lg:to-neutral-400",
  "xl:400": "xl:to-neutral-400",
  "2xl:400": "2xl:to-neutral-400",
  "hover:400": "hover:to-neutral-400",
  "focus:400": "focus:to-neutral-400",
  "active:400": "active:to-neutral-400",
  "disabled:400": "disabled:to-neutral-400",
  "group-hover:400": "group-hover:to-neutral-400",
  "group:400": "group:to-neutral-400",
  "first:400": "first:to-neutral-400",
  "last:400": "last:to-neutral-400",
  "odd:400": "odd:to-neutral-400",
  "even:400": "even:to-neutral-400",
  "dark:400": "dark:to-neutral-400",
  "500": "to-neutral-500",
  "xs:500": "xs:to-neutral-500",
  "sm:500": "sm:to-neutral-500",
  "md:500": "md:to-neutral-500",
  "lg:500": "lg:to-neutral-500",
  "xl:500": "xl:to-neutral-500",
  "2xl:500": "2xl:to-neutral-500",
  "hover:500": "hover:to-neutral-500",
  "focus:500": "focus:to-neutral-500",
  "active:500": "active:to-neutral-500",
  "disabled:500": "disabled:to-neutral-500",
  "group-hover:500": "group-hover:to-neutral-500",
  "group:500": "group:to-neutral-500",
  "first:500": "first:to-neutral-500",
  "last:500": "last:to-neutral-500",
  "odd:500": "odd:to-neutral-500",
  "even:500": "even:to-neutral-500",
  "dark:500": "dark:to-neutral-500",
  "600": "to-neutral-600",
  "xs:600": "xs:to-neutral-600",
  "sm:600": "sm:to-neutral-600",
  "md:600": "md:to-neutral-600",
  "lg:600": "lg:to-neutral-600",
  "xl:600": "xl:to-neutral-600",
  "2xl:600": "2xl:to-neutral-600",
  "hover:600": "hover:to-neutral-600",
  "focus:600": "focus:to-neutral-600",
  "active:600": "active:to-neutral-600",
  "disabled:600": "disabled:to-neutral-600",
  "group-hover:600": "group-hover:to-neutral-600",
  "group:600": "group:to-neutral-600",
  "first:600": "first:to-neutral-600",
  "last:600": "last:to-neutral-600",
  "odd:600": "odd:to-neutral-600",
  "even:600": "even:to-neutral-600",
  "dark:600": "dark:to-neutral-600",
  "700": "to-neutral-700",
  "xs:700": "xs:to-neutral-700",
  "sm:700": "sm:to-neutral-700",
  "md:700": "md:to-neutral-700",
  "lg:700": "lg:to-neutral-700",
  "xl:700": "xl:to-neutral-700",
  "2xl:700": "2xl:to-neutral-700",
  "hover:700": "hover:to-neutral-700",
  "focus:700": "focus:to-neutral-700",
  "active:700": "active:to-neutral-700",
  "disabled:700": "disabled:to-neutral-700",
  "group-hover:700": "group-hover:to-neutral-700",
  "group:700": "group:to-neutral-700",
  "first:700": "first:to-neutral-700",
  "last:700": "last:to-neutral-700",
  "odd:700": "odd:to-neutral-700",
  "even:700": "even:to-neutral-700",
  "dark:700": "dark:to-neutral-700",
  "800": "to-neutral-800",
  "xs:800": "xs:to-neutral-800",
  "sm:800": "sm:to-neutral-800",
  "md:800": "md:to-neutral-800",
  "lg:800": "lg:to-neutral-800",
  "xl:800": "xl:to-neutral-800",
  "2xl:800": "2xl:to-neutral-800",
  "hover:800": "hover:to-neutral-800",
  "focus:800": "focus:to-neutral-800",
  "active:800": "active:to-neutral-800",
  "disabled:800": "disabled:to-neutral-800",
  "group-hover:800": "group-hover:to-neutral-800",
  "group:800": "group:to-neutral-800",
  "first:800": "first:to-neutral-800",
  "last:800": "last:to-neutral-800",
  "odd:800": "odd:to-neutral-800",
  "even:800": "even:to-neutral-800",
  "dark:800": "dark:to-neutral-800",
  "900": "to-neutral-900",
  "xs:900": "xs:to-neutral-900",
  "sm:900": "sm:to-neutral-900",
  "md:900": "md:to-neutral-900",
  "lg:900": "lg:to-neutral-900",
  "xl:900": "xl:to-neutral-900",
  "2xl:900": "2xl:to-neutral-900",
  "hover:900": "hover:to-neutral-900",
  "focus:900": "focus:to-neutral-900",
  "active:900": "active:to-neutral-900",
  "disabled:900": "disabled:to-neutral-900",
  "group-hover:900": "group-hover:to-neutral-900",
  "group:900": "group:to-neutral-900",
  "first:900": "first:to-neutral-900",
  "last:900": "last:to-neutral-900",
  "odd:900": "odd:to-neutral-900",
  "even:900": "even:to-neutral-900",
  "dark:900": "dark:to-neutral-900",
  "950": "to-neutral-950",
  "xs:950": "xs:to-neutral-950",
  "sm:950": "sm:to-neutral-950",
  "md:950": "md:to-neutral-950",
  "lg:950": "lg:to-neutral-950",
  "xl:950": "xl:to-neutral-950",
  "2xl:950": "2xl:to-neutral-950",
  "hover:950": "hover:to-neutral-950",
  "focus:950": "focus:to-neutral-950",
  "active:950": "active:to-neutral-950",
  "disabled:950": "disabled:to-neutral-950",
  "group-hover:950": "group-hover:to-neutral-950",
  "group:950": "group:to-neutral-950",
  "first:950": "first:to-neutral-950",
  "last:950": "last:to-neutral-950",
  "odd:950": "odd:to-neutral-950",
  "even:950": "even:to-neutral-950",
  "dark:950": "dark:to-neutral-950",
} as const;