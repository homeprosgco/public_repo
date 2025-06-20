import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BrightnessType = 
  | BrightnessValue
  | Partial<Record<ResponsiveBreakpoint, BrightnessValue>>;

export type BrightnessValue = keyof typeof BRIGHTNESS_CLASS_MAP;

export const BRIGHTNESS_CLASS_MAP = {
  "0": "brightness-0",
  "xs:0": "xs:brightness-0",
  "sm:0": "sm:brightness-0",
  "md:0": "md:brightness-0",
  "lg:0": "lg:brightness-0",
  "xl:0": "xl:brightness-0",
  "2xl:0": "2xl:brightness-0",
  "hover:0": "hover:brightness-0",
  "focus:0": "focus:brightness-0",
  "active:0": "active:brightness-0",
  "disabled:0": "disabled:brightness-0",
  "group-hover:0": "group-hover:brightness-0",
  "group:0": "group:brightness-0",
  "first:0": "first:brightness-0",
  "last:0": "last:brightness-0",
  "odd:0": "odd:brightness-0",
  "even:0": "even:brightness-0",
  "dark:0": "dark:brightness-0",
  "50": "brightness-50",
  "xs:50": "xs:brightness-50",
  "sm:50": "sm:brightness-50",
  "md:50": "md:brightness-50",
  "lg:50": "lg:brightness-50",
  "xl:50": "xl:brightness-50",
  "2xl:50": "2xl:brightness-50",
  "hover:50": "hover:brightness-50",
  "focus:50": "focus:brightness-50",
  "active:50": "active:brightness-50",
  "disabled:50": "disabled:brightness-50",
  "group-hover:50": "group-hover:brightness-50",
  "group:50": "group:brightness-50",
  "first:50": "first:brightness-50",
  "last:50": "last:brightness-50",
  "odd:50": "odd:brightness-50",
  "even:50": "even:brightness-50",
  "dark:50": "dark:brightness-50",
  "75": "brightness-75",
  "xs:75": "xs:brightness-75",
  "sm:75": "sm:brightness-75",
  "md:75": "md:brightness-75",
  "lg:75": "lg:brightness-75",
  "xl:75": "xl:brightness-75",
  "2xl:75": "2xl:brightness-75",
  "hover:75": "hover:brightness-75",
  "focus:75": "focus:brightness-75",
  "active:75": "active:brightness-75",
  "disabled:75": "disabled:brightness-75",
  "group-hover:75": "group-hover:brightness-75",
  "group:75": "group:brightness-75",
  "first:75": "first:brightness-75",
  "last:75": "last:brightness-75",
  "odd:75": "odd:brightness-75",
  "even:75": "even:brightness-75",
  "dark:75": "dark:brightness-75",
  "90": "brightness-90",
  "xs:90": "xs:brightness-90",
  "sm:90": "sm:brightness-90",
  "md:90": "md:brightness-90",
  "lg:90": "lg:brightness-90",
  "xl:90": "xl:brightness-90",
  "2xl:90": "2xl:brightness-90",
  "hover:90": "hover:brightness-90",
  "focus:90": "focus:brightness-90",
  "active:90": "active:brightness-90",
  "disabled:90": "disabled:brightness-90",
  "group-hover:90": "group-hover:brightness-90",
  "group:90": "group:brightness-90",
  "first:90": "first:brightness-90",
  "last:90": "last:brightness-90",
  "odd:90": "odd:brightness-90",
  "even:90": "even:brightness-90",
  "dark:90": "dark:brightness-90",
  "95": "brightness-95",
  "xs:95": "xs:brightness-95",
  "sm:95": "sm:brightness-95",
  "md:95": "md:brightness-95",
  "lg:95": "lg:brightness-95",
  "xl:95": "xl:brightness-95",
  "2xl:95": "2xl:brightness-95",
  "hover:95": "hover:brightness-95",
  "focus:95": "focus:brightness-95",
  "active:95": "active:brightness-95",
  "disabled:95": "disabled:brightness-95",
  "group-hover:95": "group-hover:brightness-95",
  "group:95": "group:brightness-95",
  "first:95": "first:brightness-95",
  "last:95": "last:brightness-95",
  "odd:95": "odd:brightness-95",
  "even:95": "even:brightness-95",
  "dark:95": "dark:brightness-95",
  "100": "brightness-100",
  "xs:100": "xs:brightness-100",
  "sm:100": "sm:brightness-100",
  "md:100": "md:brightness-100",
  "lg:100": "lg:brightness-100",
  "xl:100": "xl:brightness-100",
  "2xl:100": "2xl:brightness-100",
  "hover:100": "hover:brightness-100",
  "focus:100": "focus:brightness-100",
  "active:100": "active:brightness-100",
  "disabled:100": "disabled:brightness-100",
  "group-hover:100": "group-hover:brightness-100",
  "group:100": "group:brightness-100",
  "first:100": "first:brightness-100",
  "last:100": "last:brightness-100",
  "odd:100": "odd:brightness-100",
  "even:100": "even:brightness-100",
  "dark:100": "dark:brightness-100",
  "105": "brightness-105",
  "xs:105": "xs:brightness-105",
  "sm:105": "sm:brightness-105",
  "md:105": "md:brightness-105",
  "lg:105": "lg:brightness-105",
  "xl:105": "xl:brightness-105",
  "2xl:105": "2xl:brightness-105",
  "hover:105": "hover:brightness-105",
  "focus:105": "focus:brightness-105",
  "active:105": "active:brightness-105",
  "disabled:105": "disabled:brightness-105",
  "group-hover:105": "group-hover:brightness-105",
  "group:105": "group:brightness-105",
  "first:105": "first:brightness-105",
  "last:105": "last:brightness-105",
  "odd:105": "odd:brightness-105",
  "even:105": "even:brightness-105",
  "dark:105": "dark:brightness-105",
  "110": "brightness-110",
  "xs:110": "xs:brightness-110",
  "sm:110": "sm:brightness-110",
  "md:110": "md:brightness-110",
  "lg:110": "lg:brightness-110",
  "xl:110": "xl:brightness-110",
  "2xl:110": "2xl:brightness-110",
  "hover:110": "hover:brightness-110",
  "focus:110": "focus:brightness-110",
  "active:110": "active:brightness-110",
  "disabled:110": "disabled:brightness-110",
  "group-hover:110": "group-hover:brightness-110",
  "group:110": "group:brightness-110",
  "first:110": "first:brightness-110",
  "last:110": "last:brightness-110",
  "odd:110": "odd:brightness-110",
  "even:110": "even:brightness-110",
  "dark:110": "dark:brightness-110",
  "125": "brightness-125",
  "xs:125": "xs:brightness-125",
  "sm:125": "sm:brightness-125",
  "md:125": "md:brightness-125",
  "lg:125": "lg:brightness-125",
  "xl:125": "xl:brightness-125",
  "2xl:125": "2xl:brightness-125",
  "hover:125": "hover:brightness-125",
  "focus:125": "focus:brightness-125",
  "active:125": "active:brightness-125",
  "disabled:125": "disabled:brightness-125",
  "group-hover:125": "group-hover:brightness-125",
  "group:125": "group:brightness-125",
  "first:125": "first:brightness-125",
  "last:125": "last:brightness-125",
  "odd:125": "odd:brightness-125",
  "even:125": "even:brightness-125",
  "dark:125": "dark:brightness-125",
  "150": "brightness-150",
  "xs:150": "xs:brightness-150",
  "sm:150": "sm:brightness-150",
  "md:150": "md:brightness-150",
  "lg:150": "lg:brightness-150",
  "xl:150": "xl:brightness-150",
  "2xl:150": "2xl:brightness-150",
  "hover:150": "hover:brightness-150",
  "focus:150": "focus:brightness-150",
  "active:150": "active:brightness-150",
  "disabled:150": "disabled:brightness-150",
  "group-hover:150": "group-hover:brightness-150",
  "group:150": "group:brightness-150",
  "first:150": "first:brightness-150",
  "last:150": "last:brightness-150",
  "odd:150": "odd:brightness-150",
  "even:150": "even:brightness-150",
  "dark:150": "dark:brightness-150",
  "200": "brightness-200",
  "xs:200": "xs:brightness-200",
  "sm:200": "sm:brightness-200",
  "md:200": "md:brightness-200",
  "lg:200": "lg:brightness-200",
  "xl:200": "xl:brightness-200",
  "2xl:200": "2xl:brightness-200",
  "hover:200": "hover:brightness-200",
  "focus:200": "focus:brightness-200",
  "active:200": "active:brightness-200",
  "disabled:200": "disabled:brightness-200",
  "group-hover:200": "group-hover:brightness-200",
  "group:200": "group:brightness-200",
  "first:200": "first:brightness-200",
  "last:200": "last:brightness-200",
  "odd:200": "odd:brightness-200",
  "even:200": "even:brightness-200",
  "dark:200": "dark:brightness-200",
} as const;