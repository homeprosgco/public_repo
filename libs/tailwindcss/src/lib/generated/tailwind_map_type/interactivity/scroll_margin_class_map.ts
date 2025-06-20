import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type ScrollMarginType = 
  | ScrollMarginValue
  | Partial<Record<ResponsiveBreakpoint, ScrollMarginValue>>;

export type ScrollMarginValue = keyof typeof SCROLL_MARGIN_CLASS_MAP;

export const SCROLL_MARGIN_CLASS_MAP = {
  "0": "scroll-m-0",
  "xs:0": "xs:scroll-m-0",
  "sm:0": "sm:scroll-m-0",
  "md:0": "md:scroll-m-0",
  "lg:0": "lg:scroll-m-0",
  "xl:0": "xl:scroll-m-0",
  "2xl:0": "2xl:scroll-m-0",
  "hover:0": "hover:scroll-m-0",
  "focus:0": "focus:scroll-m-0",
  "active:0": "active:scroll-m-0",
  "disabled:0": "disabled:scroll-m-0",
  "group-hover:0": "group-hover:scroll-m-0",
  "group:0": "group:scroll-m-0",
  "first:0": "first:scroll-m-0",
  "last:0": "last:scroll-m-0",
  "odd:0": "odd:scroll-m-0",
  "even:0": "even:scroll-m-0",
  "dark:0": "dark:scroll-m-0",
  "px": "scroll-m-px",
  "xs:px": "xs:scroll-m-px",
  "sm:px": "sm:scroll-m-px",
  "md:px": "md:scroll-m-px",
  "lg:px": "lg:scroll-m-px",
  "xl:px": "xl:scroll-m-px",
  "2xl:px": "2xl:scroll-m-px",
  "hover:px": "hover:scroll-m-px",
  "focus:px": "focus:scroll-m-px",
  "active:px": "active:scroll-m-px",
  "disabled:px": "disabled:scroll-m-px",
  "group-hover:px": "group-hover:scroll-m-px",
  "group:px": "group:scroll-m-px",
  "first:px": "first:scroll-m-px",
  "last:px": "last:scroll-m-px",
  "odd:px": "odd:scroll-m-px",
  "even:px": "even:scroll-m-px",
  "dark:px": "dark:scroll-m-px",
  "0.5": "scroll-m-0.5",
  "xs:0.5": "xs:scroll-m-0.5",
  "sm:0.5": "sm:scroll-m-0.5",
  "md:0.5": "md:scroll-m-0.5",
  "lg:0.5": "lg:scroll-m-0.5",
  "xl:0.5": "xl:scroll-m-0.5",
  "2xl:0.5": "2xl:scroll-m-0.5",
  "hover:0.5": "hover:scroll-m-0.5",
  "focus:0.5": "focus:scroll-m-0.5",
  "active:0.5": "active:scroll-m-0.5",
  "disabled:0.5": "disabled:scroll-m-0.5",
  "group-hover:0.5": "group-hover:scroll-m-0.5",
  "group:0.5": "group:scroll-m-0.5",
  "first:0.5": "first:scroll-m-0.5",
  "last:0.5": "last:scroll-m-0.5",
  "odd:0.5": "odd:scroll-m-0.5",
  "even:0.5": "even:scroll-m-0.5",
  "dark:0.5": "dark:scroll-m-0.5",
  "1": "scroll-m-1",
  "xs:1": "xs:scroll-m-1",
  "sm:1": "sm:scroll-m-1",
  "md:1": "md:scroll-m-1",
  "lg:1": "lg:scroll-m-1",
  "xl:1": "xl:scroll-m-1",
  "2xl:1": "2xl:scroll-m-1",
  "hover:1": "hover:scroll-m-1",
  "focus:1": "focus:scroll-m-1",
  "active:1": "active:scroll-m-1",
  "disabled:1": "disabled:scroll-m-1",
  "group-hover:1": "group-hover:scroll-m-1",
  "group:1": "group:scroll-m-1",
  "first:1": "first:scroll-m-1",
  "last:1": "last:scroll-m-1",
  "odd:1": "odd:scroll-m-1",
  "even:1": "even:scroll-m-1",
  "dark:1": "dark:scroll-m-1",
  "1.5": "scroll-m-1.5",
  "xs:1.5": "xs:scroll-m-1.5",
  "sm:1.5": "sm:scroll-m-1.5",
  "md:1.5": "md:scroll-m-1.5",
  "lg:1.5": "lg:scroll-m-1.5",
  "xl:1.5": "xl:scroll-m-1.5",
  "2xl:1.5": "2xl:scroll-m-1.5",
  "hover:1.5": "hover:scroll-m-1.5",
  "focus:1.5": "focus:scroll-m-1.5",
  "active:1.5": "active:scroll-m-1.5",
  "disabled:1.5": "disabled:scroll-m-1.5",
  "group-hover:1.5": "group-hover:scroll-m-1.5",
  "group:1.5": "group:scroll-m-1.5",
  "first:1.5": "first:scroll-m-1.5",
  "last:1.5": "last:scroll-m-1.5",
  "odd:1.5": "odd:scroll-m-1.5",
  "even:1.5": "even:scroll-m-1.5",
  "dark:1.5": "dark:scroll-m-1.5",
  "2": "scroll-m-2",
  "xs:2": "xs:scroll-m-2",
  "sm:2": "sm:scroll-m-2",
  "md:2": "md:scroll-m-2",
  "lg:2": "lg:scroll-m-2",
  "xl:2": "xl:scroll-m-2",
  "2xl:2": "2xl:scroll-m-2",
  "hover:2": "hover:scroll-m-2",
  "focus:2": "focus:scroll-m-2",
  "active:2": "active:scroll-m-2",
  "disabled:2": "disabled:scroll-m-2",
  "group-hover:2": "group-hover:scroll-m-2",
  "group:2": "group:scroll-m-2",
  "first:2": "first:scroll-m-2",
  "last:2": "last:scroll-m-2",
  "odd:2": "odd:scroll-m-2",
  "even:2": "even:scroll-m-2",
  "dark:2": "dark:scroll-m-2",
  "2.5": "scroll-m-2.5",
  "xs:2.5": "xs:scroll-m-2.5",
  "sm:2.5": "sm:scroll-m-2.5",
  "md:2.5": "md:scroll-m-2.5",
  "lg:2.5": "lg:scroll-m-2.5",
  "xl:2.5": "xl:scroll-m-2.5",
  "2xl:2.5": "2xl:scroll-m-2.5",
  "hover:2.5": "hover:scroll-m-2.5",
  "focus:2.5": "focus:scroll-m-2.5",
  "active:2.5": "active:scroll-m-2.5",
  "disabled:2.5": "disabled:scroll-m-2.5",
  "group-hover:2.5": "group-hover:scroll-m-2.5",
  "group:2.5": "group:scroll-m-2.5",
  "first:2.5": "first:scroll-m-2.5",
  "last:2.5": "last:scroll-m-2.5",
  "odd:2.5": "odd:scroll-m-2.5",
  "even:2.5": "even:scroll-m-2.5",
  "dark:2.5": "dark:scroll-m-2.5",
  "3": "scroll-m-3",
  "xs:3": "xs:scroll-m-3",
  "sm:3": "sm:scroll-m-3",
  "md:3": "md:scroll-m-3",
  "lg:3": "lg:scroll-m-3",
  "xl:3": "xl:scroll-m-3",
  "2xl:3": "2xl:scroll-m-3",
  "hover:3": "hover:scroll-m-3",
  "focus:3": "focus:scroll-m-3",
  "active:3": "active:scroll-m-3",
  "disabled:3": "disabled:scroll-m-3",
  "group-hover:3": "group-hover:scroll-m-3",
  "group:3": "group:scroll-m-3",
  "first:3": "first:scroll-m-3",
  "last:3": "last:scroll-m-3",
  "odd:3": "odd:scroll-m-3",
  "even:3": "even:scroll-m-3",
  "dark:3": "dark:scroll-m-3",
  "3.5": "scroll-m-3.5",
  "xs:3.5": "xs:scroll-m-3.5",
  "sm:3.5": "sm:scroll-m-3.5",
  "md:3.5": "md:scroll-m-3.5",
  "lg:3.5": "lg:scroll-m-3.5",
  "xl:3.5": "xl:scroll-m-3.5",
  "2xl:3.5": "2xl:scroll-m-3.5",
  "hover:3.5": "hover:scroll-m-3.5",
  "focus:3.5": "focus:scroll-m-3.5",
  "active:3.5": "active:scroll-m-3.5",
  "disabled:3.5": "disabled:scroll-m-3.5",
  "group-hover:3.5": "group-hover:scroll-m-3.5",
  "group:3.5": "group:scroll-m-3.5",
  "first:3.5": "first:scroll-m-3.5",
  "last:3.5": "last:scroll-m-3.5",
  "odd:3.5": "odd:scroll-m-3.5",
  "even:3.5": "even:scroll-m-3.5",
  "dark:3.5": "dark:scroll-m-3.5",
  "4": "scroll-m-4",
  "xs:4": "xs:scroll-m-4",
  "sm:4": "sm:scroll-m-4",
  "md:4": "md:scroll-m-4",
  "lg:4": "lg:scroll-m-4",
  "xl:4": "xl:scroll-m-4",
  "2xl:4": "2xl:scroll-m-4",
  "hover:4": "hover:scroll-m-4",
  "focus:4": "focus:scroll-m-4",
  "active:4": "active:scroll-m-4",
  "disabled:4": "disabled:scroll-m-4",
  "group-hover:4": "group-hover:scroll-m-4",
  "group:4": "group:scroll-m-4",
  "first:4": "first:scroll-m-4",
  "last:4": "last:scroll-m-4",
  "odd:4": "odd:scroll-m-4",
  "even:4": "even:scroll-m-4",
  "dark:4": "dark:scroll-m-4",
  "5": "scroll-m-5",
  "xs:5": "xs:scroll-m-5",
  "sm:5": "sm:scroll-m-5",
  "md:5": "md:scroll-m-5",
  "lg:5": "lg:scroll-m-5",
  "xl:5": "xl:scroll-m-5",
  "2xl:5": "2xl:scroll-m-5",
  "hover:5": "hover:scroll-m-5",
  "focus:5": "focus:scroll-m-5",
  "active:5": "active:scroll-m-5",
  "disabled:5": "disabled:scroll-m-5",
  "group-hover:5": "group-hover:scroll-m-5",
  "group:5": "group:scroll-m-5",
  "first:5": "first:scroll-m-5",
  "last:5": "last:scroll-m-5",
  "odd:5": "odd:scroll-m-5",
  "even:5": "even:scroll-m-5",
  "dark:5": "dark:scroll-m-5",
  "6": "scroll-m-6",
  "xs:6": "xs:scroll-m-6",
  "sm:6": "sm:scroll-m-6",
  "md:6": "md:scroll-m-6",
  "lg:6": "lg:scroll-m-6",
  "xl:6": "xl:scroll-m-6",
  "2xl:6": "2xl:scroll-m-6",
  "hover:6": "hover:scroll-m-6",
  "focus:6": "focus:scroll-m-6",
  "active:6": "active:scroll-m-6",
  "disabled:6": "disabled:scroll-m-6",
  "group-hover:6": "group-hover:scroll-m-6",
  "group:6": "group:scroll-m-6",
  "first:6": "first:scroll-m-6",
  "last:6": "last:scroll-m-6",
  "odd:6": "odd:scroll-m-6",
  "even:6": "even:scroll-m-6",
  "dark:6": "dark:scroll-m-6",
  "7": "scroll-m-7",
  "xs:7": "xs:scroll-m-7",
  "sm:7": "sm:scroll-m-7",
  "md:7": "md:scroll-m-7",
  "lg:7": "lg:scroll-m-7",
  "xl:7": "xl:scroll-m-7",
  "2xl:7": "2xl:scroll-m-7",
  "hover:7": "hover:scroll-m-7",
  "focus:7": "focus:scroll-m-7",
  "active:7": "active:scroll-m-7",
  "disabled:7": "disabled:scroll-m-7",
  "group-hover:7": "group-hover:scroll-m-7",
  "group:7": "group:scroll-m-7",
  "first:7": "first:scroll-m-7",
  "last:7": "last:scroll-m-7",
  "odd:7": "odd:scroll-m-7",
  "even:7": "even:scroll-m-7",
  "dark:7": "dark:scroll-m-7",
  "8": "scroll-m-8",
  "xs:8": "xs:scroll-m-8",
  "sm:8": "sm:scroll-m-8",
  "md:8": "md:scroll-m-8",
  "lg:8": "lg:scroll-m-8",
  "xl:8": "xl:scroll-m-8",
  "2xl:8": "2xl:scroll-m-8",
  "hover:8": "hover:scroll-m-8",
  "focus:8": "focus:scroll-m-8",
  "active:8": "active:scroll-m-8",
  "disabled:8": "disabled:scroll-m-8",
  "group-hover:8": "group-hover:scroll-m-8",
  "group:8": "group:scroll-m-8",
  "first:8": "first:scroll-m-8",
  "last:8": "last:scroll-m-8",
  "odd:8": "odd:scroll-m-8",
  "even:8": "even:scroll-m-8",
  "dark:8": "dark:scroll-m-8",
  "9": "scroll-m-9",
  "xs:9": "xs:scroll-m-9",
  "sm:9": "sm:scroll-m-9",
  "md:9": "md:scroll-m-9",
  "lg:9": "lg:scroll-m-9",
  "xl:9": "xl:scroll-m-9",
  "2xl:9": "2xl:scroll-m-9",
  "hover:9": "hover:scroll-m-9",
  "focus:9": "focus:scroll-m-9",
  "active:9": "active:scroll-m-9",
  "disabled:9": "disabled:scroll-m-9",
  "group-hover:9": "group-hover:scroll-m-9",
  "group:9": "group:scroll-m-9",
  "first:9": "first:scroll-m-9",
  "last:9": "last:scroll-m-9",
  "odd:9": "odd:scroll-m-9",
  "even:9": "even:scroll-m-9",
  "dark:9": "dark:scroll-m-9",
  "10": "scroll-m-10",
  "xs:10": "xs:scroll-m-10",
  "sm:10": "sm:scroll-m-10",
  "md:10": "md:scroll-m-10",
  "lg:10": "lg:scroll-m-10",
  "xl:10": "xl:scroll-m-10",
  "2xl:10": "2xl:scroll-m-10",
  "hover:10": "hover:scroll-m-10",
  "focus:10": "focus:scroll-m-10",
  "active:10": "active:scroll-m-10",
  "disabled:10": "disabled:scroll-m-10",
  "group-hover:10": "group-hover:scroll-m-10",
  "group:10": "group:scroll-m-10",
  "first:10": "first:scroll-m-10",
  "last:10": "last:scroll-m-10",
  "odd:10": "odd:scroll-m-10",
  "even:10": "even:scroll-m-10",
  "dark:10": "dark:scroll-m-10",
  "11": "scroll-m-11",
  "xs:11": "xs:scroll-m-11",
  "sm:11": "sm:scroll-m-11",
  "md:11": "md:scroll-m-11",
  "lg:11": "lg:scroll-m-11",
  "xl:11": "xl:scroll-m-11",
  "2xl:11": "2xl:scroll-m-11",
  "hover:11": "hover:scroll-m-11",
  "focus:11": "focus:scroll-m-11",
  "active:11": "active:scroll-m-11",
  "disabled:11": "disabled:scroll-m-11",
  "group-hover:11": "group-hover:scroll-m-11",
  "group:11": "group:scroll-m-11",
  "first:11": "first:scroll-m-11",
  "last:11": "last:scroll-m-11",
  "odd:11": "odd:scroll-m-11",
  "even:11": "even:scroll-m-11",
  "dark:11": "dark:scroll-m-11",
  "12": "scroll-m-12",
  "xs:12": "xs:scroll-m-12",
  "sm:12": "sm:scroll-m-12",
  "md:12": "md:scroll-m-12",
  "lg:12": "lg:scroll-m-12",
  "xl:12": "xl:scroll-m-12",
  "2xl:12": "2xl:scroll-m-12",
  "hover:12": "hover:scroll-m-12",
  "focus:12": "focus:scroll-m-12",
  "active:12": "active:scroll-m-12",
  "disabled:12": "disabled:scroll-m-12",
  "group-hover:12": "group-hover:scroll-m-12",
  "group:12": "group:scroll-m-12",
  "first:12": "first:scroll-m-12",
  "last:12": "last:scroll-m-12",
  "odd:12": "odd:scroll-m-12",
  "even:12": "even:scroll-m-12",
  "dark:12": "dark:scroll-m-12",
  "14": "scroll-m-14",
  "xs:14": "xs:scroll-m-14",
  "sm:14": "sm:scroll-m-14",
  "md:14": "md:scroll-m-14",
  "lg:14": "lg:scroll-m-14",
  "xl:14": "xl:scroll-m-14",
  "2xl:14": "2xl:scroll-m-14",
  "hover:14": "hover:scroll-m-14",
  "focus:14": "focus:scroll-m-14",
  "active:14": "active:scroll-m-14",
  "disabled:14": "disabled:scroll-m-14",
  "group-hover:14": "group-hover:scroll-m-14",
  "group:14": "group:scroll-m-14",
  "first:14": "first:scroll-m-14",
  "last:14": "last:scroll-m-14",
  "odd:14": "odd:scroll-m-14",
  "even:14": "even:scroll-m-14",
  "dark:14": "dark:scroll-m-14",
  "16": "scroll-m-16",
  "xs:16": "xs:scroll-m-16",
  "sm:16": "sm:scroll-m-16",
  "md:16": "md:scroll-m-16",
  "lg:16": "lg:scroll-m-16",
  "xl:16": "xl:scroll-m-16",
  "2xl:16": "2xl:scroll-m-16",
  "hover:16": "hover:scroll-m-16",
  "focus:16": "focus:scroll-m-16",
  "active:16": "active:scroll-m-16",
  "disabled:16": "disabled:scroll-m-16",
  "group-hover:16": "group-hover:scroll-m-16",
  "group:16": "group:scroll-m-16",
  "first:16": "first:scroll-m-16",
  "last:16": "last:scroll-m-16",
  "odd:16": "odd:scroll-m-16",
  "even:16": "even:scroll-m-16",
  "dark:16": "dark:scroll-m-16",
  "20": "scroll-m-20",
  "xs:20": "xs:scroll-m-20",
  "sm:20": "sm:scroll-m-20",
  "md:20": "md:scroll-m-20",
  "lg:20": "lg:scroll-m-20",
  "xl:20": "xl:scroll-m-20",
  "2xl:20": "2xl:scroll-m-20",
  "hover:20": "hover:scroll-m-20",
  "focus:20": "focus:scroll-m-20",
  "active:20": "active:scroll-m-20",
  "disabled:20": "disabled:scroll-m-20",
  "group-hover:20": "group-hover:scroll-m-20",
  "group:20": "group:scroll-m-20",
  "first:20": "first:scroll-m-20",
  "last:20": "last:scroll-m-20",
  "odd:20": "odd:scroll-m-20",
  "even:20": "even:scroll-m-20",
  "dark:20": "dark:scroll-m-20",
  "24": "scroll-m-24",
  "xs:24": "xs:scroll-m-24",
  "sm:24": "sm:scroll-m-24",
  "md:24": "md:scroll-m-24",
  "lg:24": "lg:scroll-m-24",
  "xl:24": "xl:scroll-m-24",
  "2xl:24": "2xl:scroll-m-24",
  "hover:24": "hover:scroll-m-24",
  "focus:24": "focus:scroll-m-24",
  "active:24": "active:scroll-m-24",
  "disabled:24": "disabled:scroll-m-24",
  "group-hover:24": "group-hover:scroll-m-24",
  "group:24": "group:scroll-m-24",
  "first:24": "first:scroll-m-24",
  "last:24": "last:scroll-m-24",
  "odd:24": "odd:scroll-m-24",
  "even:24": "even:scroll-m-24",
  "dark:24": "dark:scroll-m-24",
  "28": "scroll-m-28",
  "xs:28": "xs:scroll-m-28",
  "sm:28": "sm:scroll-m-28",
  "md:28": "md:scroll-m-28",
  "lg:28": "lg:scroll-m-28",
  "xl:28": "xl:scroll-m-28",
  "2xl:28": "2xl:scroll-m-28",
  "hover:28": "hover:scroll-m-28",
  "focus:28": "focus:scroll-m-28",
  "active:28": "active:scroll-m-28",
  "disabled:28": "disabled:scroll-m-28",
  "group-hover:28": "group-hover:scroll-m-28",
  "group:28": "group:scroll-m-28",
  "first:28": "first:scroll-m-28",
  "last:28": "last:scroll-m-28",
  "odd:28": "odd:scroll-m-28",
  "even:28": "even:scroll-m-28",
  "dark:28": "dark:scroll-m-28",
  "32": "scroll-m-32",
  "xs:32": "xs:scroll-m-32",
  "sm:32": "sm:scroll-m-32",
  "md:32": "md:scroll-m-32",
  "lg:32": "lg:scroll-m-32",
  "xl:32": "xl:scroll-m-32",
  "2xl:32": "2xl:scroll-m-32",
  "hover:32": "hover:scroll-m-32",
  "focus:32": "focus:scroll-m-32",
  "active:32": "active:scroll-m-32",
  "disabled:32": "disabled:scroll-m-32",
  "group-hover:32": "group-hover:scroll-m-32",
  "group:32": "group:scroll-m-32",
  "first:32": "first:scroll-m-32",
  "last:32": "last:scroll-m-32",
  "odd:32": "odd:scroll-m-32",
  "even:32": "even:scroll-m-32",
  "dark:32": "dark:scroll-m-32",
  "36": "scroll-m-36",
  "xs:36": "xs:scroll-m-36",
  "sm:36": "sm:scroll-m-36",
  "md:36": "md:scroll-m-36",
  "lg:36": "lg:scroll-m-36",
  "xl:36": "xl:scroll-m-36",
  "2xl:36": "2xl:scroll-m-36",
  "hover:36": "hover:scroll-m-36",
  "focus:36": "focus:scroll-m-36",
  "active:36": "active:scroll-m-36",
  "disabled:36": "disabled:scroll-m-36",
  "group-hover:36": "group-hover:scroll-m-36",
  "group:36": "group:scroll-m-36",
  "first:36": "first:scroll-m-36",
  "last:36": "last:scroll-m-36",
  "odd:36": "odd:scroll-m-36",
  "even:36": "even:scroll-m-36",
  "dark:36": "dark:scroll-m-36",
  "40": "scroll-m-40",
  "xs:40": "xs:scroll-m-40",
  "sm:40": "sm:scroll-m-40",
  "md:40": "md:scroll-m-40",
  "lg:40": "lg:scroll-m-40",
  "xl:40": "xl:scroll-m-40",
  "2xl:40": "2xl:scroll-m-40",
  "hover:40": "hover:scroll-m-40",
  "focus:40": "focus:scroll-m-40",
  "active:40": "active:scroll-m-40",
  "disabled:40": "disabled:scroll-m-40",
  "group-hover:40": "group-hover:scroll-m-40",
  "group:40": "group:scroll-m-40",
  "first:40": "first:scroll-m-40",
  "last:40": "last:scroll-m-40",
  "odd:40": "odd:scroll-m-40",
  "even:40": "even:scroll-m-40",
  "dark:40": "dark:scroll-m-40",
  "44": "scroll-m-44",
  "xs:44": "xs:scroll-m-44",
  "sm:44": "sm:scroll-m-44",
  "md:44": "md:scroll-m-44",
  "lg:44": "lg:scroll-m-44",
  "xl:44": "xl:scroll-m-44",
  "2xl:44": "2xl:scroll-m-44",
  "hover:44": "hover:scroll-m-44",
  "focus:44": "focus:scroll-m-44",
  "active:44": "active:scroll-m-44",
  "disabled:44": "disabled:scroll-m-44",
  "group-hover:44": "group-hover:scroll-m-44",
  "group:44": "group:scroll-m-44",
  "first:44": "first:scroll-m-44",
  "last:44": "last:scroll-m-44",
  "odd:44": "odd:scroll-m-44",
  "even:44": "even:scroll-m-44",
  "dark:44": "dark:scroll-m-44",
  "48": "scroll-m-48",
  "xs:48": "xs:scroll-m-48",
  "sm:48": "sm:scroll-m-48",
  "md:48": "md:scroll-m-48",
  "lg:48": "lg:scroll-m-48",
  "xl:48": "xl:scroll-m-48",
  "2xl:48": "2xl:scroll-m-48",
  "hover:48": "hover:scroll-m-48",
  "focus:48": "focus:scroll-m-48",
  "active:48": "active:scroll-m-48",
  "disabled:48": "disabled:scroll-m-48",
  "group-hover:48": "group-hover:scroll-m-48",
  "group:48": "group:scroll-m-48",
  "first:48": "first:scroll-m-48",
  "last:48": "last:scroll-m-48",
  "odd:48": "odd:scroll-m-48",
  "even:48": "even:scroll-m-48",
  "dark:48": "dark:scroll-m-48",
  "52": "scroll-m-52",
  "xs:52": "xs:scroll-m-52",
  "sm:52": "sm:scroll-m-52",
  "md:52": "md:scroll-m-52",
  "lg:52": "lg:scroll-m-52",
  "xl:52": "xl:scroll-m-52",
  "2xl:52": "2xl:scroll-m-52",
  "hover:52": "hover:scroll-m-52",
  "focus:52": "focus:scroll-m-52",
  "active:52": "active:scroll-m-52",
  "disabled:52": "disabled:scroll-m-52",
  "group-hover:52": "group-hover:scroll-m-52",
  "group:52": "group:scroll-m-52",
  "first:52": "first:scroll-m-52",
  "last:52": "last:scroll-m-52",
  "odd:52": "odd:scroll-m-52",
  "even:52": "even:scroll-m-52",
  "dark:52": "dark:scroll-m-52",
  "56": "scroll-m-56",
  "xs:56": "xs:scroll-m-56",
  "sm:56": "sm:scroll-m-56",
  "md:56": "md:scroll-m-56",
  "lg:56": "lg:scroll-m-56",
  "xl:56": "xl:scroll-m-56",
  "2xl:56": "2xl:scroll-m-56",
  "hover:56": "hover:scroll-m-56",
  "focus:56": "focus:scroll-m-56",
  "active:56": "active:scroll-m-56",
  "disabled:56": "disabled:scroll-m-56",
  "group-hover:56": "group-hover:scroll-m-56",
  "group:56": "group:scroll-m-56",
  "first:56": "first:scroll-m-56",
  "last:56": "last:scroll-m-56",
  "odd:56": "odd:scroll-m-56",
  "even:56": "even:scroll-m-56",
  "dark:56": "dark:scroll-m-56",
  "60": "scroll-m-60",
  "xs:60": "xs:scroll-m-60",
  "sm:60": "sm:scroll-m-60",
  "md:60": "md:scroll-m-60",
  "lg:60": "lg:scroll-m-60",
  "xl:60": "xl:scroll-m-60",
  "2xl:60": "2xl:scroll-m-60",
  "hover:60": "hover:scroll-m-60",
  "focus:60": "focus:scroll-m-60",
  "active:60": "active:scroll-m-60",
  "disabled:60": "disabled:scroll-m-60",
  "group-hover:60": "group-hover:scroll-m-60",
  "group:60": "group:scroll-m-60",
  "first:60": "first:scroll-m-60",
  "last:60": "last:scroll-m-60",
  "odd:60": "odd:scroll-m-60",
  "even:60": "even:scroll-m-60",
  "dark:60": "dark:scroll-m-60",
  "64": "scroll-m-64",
  "xs:64": "xs:scroll-m-64",
  "sm:64": "sm:scroll-m-64",
  "md:64": "md:scroll-m-64",
  "lg:64": "lg:scroll-m-64",
  "xl:64": "xl:scroll-m-64",
  "2xl:64": "2xl:scroll-m-64",
  "hover:64": "hover:scroll-m-64",
  "focus:64": "focus:scroll-m-64",
  "active:64": "active:scroll-m-64",
  "disabled:64": "disabled:scroll-m-64",
  "group-hover:64": "group-hover:scroll-m-64",
  "group:64": "group:scroll-m-64",
  "first:64": "first:scroll-m-64",
  "last:64": "last:scroll-m-64",
  "odd:64": "odd:scroll-m-64",
  "even:64": "even:scroll-m-64",
  "dark:64": "dark:scroll-m-64",
  "72": "scroll-m-72",
  "xs:72": "xs:scroll-m-72",
  "sm:72": "sm:scroll-m-72",
  "md:72": "md:scroll-m-72",
  "lg:72": "lg:scroll-m-72",
  "xl:72": "xl:scroll-m-72",
  "2xl:72": "2xl:scroll-m-72",
  "hover:72": "hover:scroll-m-72",
  "focus:72": "focus:scroll-m-72",
  "active:72": "active:scroll-m-72",
  "disabled:72": "disabled:scroll-m-72",
  "group-hover:72": "group-hover:scroll-m-72",
  "group:72": "group:scroll-m-72",
  "first:72": "first:scroll-m-72",
  "last:72": "last:scroll-m-72",
  "odd:72": "odd:scroll-m-72",
  "even:72": "even:scroll-m-72",
  "dark:72": "dark:scroll-m-72",
  "80": "scroll-m-80",
  "xs:80": "xs:scroll-m-80",
  "sm:80": "sm:scroll-m-80",
  "md:80": "md:scroll-m-80",
  "lg:80": "lg:scroll-m-80",
  "xl:80": "xl:scroll-m-80",
  "2xl:80": "2xl:scroll-m-80",
  "hover:80": "hover:scroll-m-80",
  "focus:80": "focus:scroll-m-80",
  "active:80": "active:scroll-m-80",
  "disabled:80": "disabled:scroll-m-80",
  "group-hover:80": "group-hover:scroll-m-80",
  "group:80": "group:scroll-m-80",
  "first:80": "first:scroll-m-80",
  "last:80": "last:scroll-m-80",
  "odd:80": "odd:scroll-m-80",
  "even:80": "even:scroll-m-80",
  "dark:80": "dark:scroll-m-80",
  "96": "scroll-m-96",
  "xs:96": "xs:scroll-m-96",
  "sm:96": "sm:scroll-m-96",
  "md:96": "md:scroll-m-96",
  "lg:96": "lg:scroll-m-96",
  "xl:96": "xl:scroll-m-96",
  "2xl:96": "2xl:scroll-m-96",
  "hover:96": "hover:scroll-m-96",
  "focus:96": "focus:scroll-m-96",
  "active:96": "active:scroll-m-96",
  "disabled:96": "disabled:scroll-m-96",
  "group-hover:96": "group-hover:scroll-m-96",
  "group:96": "group:scroll-m-96",
  "first:96": "first:scroll-m-96",
  "last:96": "last:scroll-m-96",
  "odd:96": "odd:scroll-m-96",
  "even:96": "even:scroll-m-96",
  "dark:96": "dark:scroll-m-96",
} as const;