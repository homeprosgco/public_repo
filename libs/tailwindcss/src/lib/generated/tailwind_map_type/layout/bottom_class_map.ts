import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type BottomType = 
  | BottomValue
  | Partial<Record<ResponsiveBreakpoint, BottomValue>>;

export type BottomValue = keyof typeof BOTTOM_CLASS_MAP;

export const BOTTOM_CLASS_MAP = {
  "0": "bottom-0",
  "xs:0": "xs:bottom-0",
  "sm:0": "sm:bottom-0",
  "md:0": "md:bottom-0",
  "lg:0": "lg:bottom-0",
  "xl:0": "xl:bottom-0",
  "2xl:0": "2xl:bottom-0",
  "hover:0": "hover:bottom-0",
  "focus:0": "focus:bottom-0",
  "active:0": "active:bottom-0",
  "disabled:0": "disabled:bottom-0",
  "group-hover:0": "group-hover:bottom-0",
  "group:0": "group:bottom-0",
  "first:0": "first:bottom-0",
  "last:0": "last:bottom-0",
  "odd:0": "odd:bottom-0",
  "even:0": "even:bottom-0",
  "dark:0": "dark:bottom-0",
  "px": "bottom-px",
  "xs:px": "xs:bottom-px",
  "sm:px": "sm:bottom-px",
  "md:px": "md:bottom-px",
  "lg:px": "lg:bottom-px",
  "xl:px": "xl:bottom-px",
  "2xl:px": "2xl:bottom-px",
  "hover:px": "hover:bottom-px",
  "focus:px": "focus:bottom-px",
  "active:px": "active:bottom-px",
  "disabled:px": "disabled:bottom-px",
  "group-hover:px": "group-hover:bottom-px",
  "group:px": "group:bottom-px",
  "first:px": "first:bottom-px",
  "last:px": "last:bottom-px",
  "odd:px": "odd:bottom-px",
  "even:px": "even:bottom-px",
  "dark:px": "dark:bottom-px",
  "0.5": "bottom-0.5",
  "xs:0.5": "xs:bottom-0.5",
  "sm:0.5": "sm:bottom-0.5",
  "md:0.5": "md:bottom-0.5",
  "lg:0.5": "lg:bottom-0.5",
  "xl:0.5": "xl:bottom-0.5",
  "2xl:0.5": "2xl:bottom-0.5",
  "hover:0.5": "hover:bottom-0.5",
  "focus:0.5": "focus:bottom-0.5",
  "active:0.5": "active:bottom-0.5",
  "disabled:0.5": "disabled:bottom-0.5",
  "group-hover:0.5": "group-hover:bottom-0.5",
  "group:0.5": "group:bottom-0.5",
  "first:0.5": "first:bottom-0.5",
  "last:0.5": "last:bottom-0.5",
  "odd:0.5": "odd:bottom-0.5",
  "even:0.5": "even:bottom-0.5",
  "dark:0.5": "dark:bottom-0.5",
  "1": "bottom-1",
  "xs:1": "xs:bottom-1",
  "sm:1": "sm:bottom-1",
  "md:1": "md:bottom-1",
  "lg:1": "lg:bottom-1",
  "xl:1": "xl:bottom-1",
  "2xl:1": "2xl:bottom-1",
  "hover:1": "hover:bottom-1",
  "focus:1": "focus:bottom-1",
  "active:1": "active:bottom-1",
  "disabled:1": "disabled:bottom-1",
  "group-hover:1": "group-hover:bottom-1",
  "group:1": "group:bottom-1",
  "first:1": "first:bottom-1",
  "last:1": "last:bottom-1",
  "odd:1": "odd:bottom-1",
  "even:1": "even:bottom-1",
  "dark:1": "dark:bottom-1",
  "1.5": "bottom-1.5",
  "xs:1.5": "xs:bottom-1.5",
  "sm:1.5": "sm:bottom-1.5",
  "md:1.5": "md:bottom-1.5",
  "lg:1.5": "lg:bottom-1.5",
  "xl:1.5": "xl:bottom-1.5",
  "2xl:1.5": "2xl:bottom-1.5",
  "hover:1.5": "hover:bottom-1.5",
  "focus:1.5": "focus:bottom-1.5",
  "active:1.5": "active:bottom-1.5",
  "disabled:1.5": "disabled:bottom-1.5",
  "group-hover:1.5": "group-hover:bottom-1.5",
  "group:1.5": "group:bottom-1.5",
  "first:1.5": "first:bottom-1.5",
  "last:1.5": "last:bottom-1.5",
  "odd:1.5": "odd:bottom-1.5",
  "even:1.5": "even:bottom-1.5",
  "dark:1.5": "dark:bottom-1.5",
  "2": "bottom-2",
  "xs:2": "xs:bottom-2",
  "sm:2": "sm:bottom-2",
  "md:2": "md:bottom-2",
  "lg:2": "lg:bottom-2",
  "xl:2": "xl:bottom-2",
  "2xl:2": "2xl:bottom-2",
  "hover:2": "hover:bottom-2",
  "focus:2": "focus:bottom-2",
  "active:2": "active:bottom-2",
  "disabled:2": "disabled:bottom-2",
  "group-hover:2": "group-hover:bottom-2",
  "group:2": "group:bottom-2",
  "first:2": "first:bottom-2",
  "last:2": "last:bottom-2",
  "odd:2": "odd:bottom-2",
  "even:2": "even:bottom-2",
  "dark:2": "dark:bottom-2",
  "2.5": "bottom-2.5",
  "xs:2.5": "xs:bottom-2.5",
  "sm:2.5": "sm:bottom-2.5",
  "md:2.5": "md:bottom-2.5",
  "lg:2.5": "lg:bottom-2.5",
  "xl:2.5": "xl:bottom-2.5",
  "2xl:2.5": "2xl:bottom-2.5",
  "hover:2.5": "hover:bottom-2.5",
  "focus:2.5": "focus:bottom-2.5",
  "active:2.5": "active:bottom-2.5",
  "disabled:2.5": "disabled:bottom-2.5",
  "group-hover:2.5": "group-hover:bottom-2.5",
  "group:2.5": "group:bottom-2.5",
  "first:2.5": "first:bottom-2.5",
  "last:2.5": "last:bottom-2.5",
  "odd:2.5": "odd:bottom-2.5",
  "even:2.5": "even:bottom-2.5",
  "dark:2.5": "dark:bottom-2.5",
  "3": "bottom-3",
  "xs:3": "xs:bottom-3",
  "sm:3": "sm:bottom-3",
  "md:3": "md:bottom-3",
  "lg:3": "lg:bottom-3",
  "xl:3": "xl:bottom-3",
  "2xl:3": "2xl:bottom-3",
  "hover:3": "hover:bottom-3",
  "focus:3": "focus:bottom-3",
  "active:3": "active:bottom-3",
  "disabled:3": "disabled:bottom-3",
  "group-hover:3": "group-hover:bottom-3",
  "group:3": "group:bottom-3",
  "first:3": "first:bottom-3",
  "last:3": "last:bottom-3",
  "odd:3": "odd:bottom-3",
  "even:3": "even:bottom-3",
  "dark:3": "dark:bottom-3",
  "3.5": "bottom-3.5",
  "xs:3.5": "xs:bottom-3.5",
  "sm:3.5": "sm:bottom-3.5",
  "md:3.5": "md:bottom-3.5",
  "lg:3.5": "lg:bottom-3.5",
  "xl:3.5": "xl:bottom-3.5",
  "2xl:3.5": "2xl:bottom-3.5",
  "hover:3.5": "hover:bottom-3.5",
  "focus:3.5": "focus:bottom-3.5",
  "active:3.5": "active:bottom-3.5",
  "disabled:3.5": "disabled:bottom-3.5",
  "group-hover:3.5": "group-hover:bottom-3.5",
  "group:3.5": "group:bottom-3.5",
  "first:3.5": "first:bottom-3.5",
  "last:3.5": "last:bottom-3.5",
  "odd:3.5": "odd:bottom-3.5",
  "even:3.5": "even:bottom-3.5",
  "dark:3.5": "dark:bottom-3.5",
  "4": "bottom-4",
  "xs:4": "xs:bottom-4",
  "sm:4": "sm:bottom-4",
  "md:4": "md:bottom-4",
  "lg:4": "lg:bottom-4",
  "xl:4": "xl:bottom-4",
  "2xl:4": "2xl:bottom-4",
  "hover:4": "hover:bottom-4",
  "focus:4": "focus:bottom-4",
  "active:4": "active:bottom-4",
  "disabled:4": "disabled:bottom-4",
  "group-hover:4": "group-hover:bottom-4",
  "group:4": "group:bottom-4",
  "first:4": "first:bottom-4",
  "last:4": "last:bottom-4",
  "odd:4": "odd:bottom-4",
  "even:4": "even:bottom-4",
  "dark:4": "dark:bottom-4",
  "5": "bottom-5",
  "xs:5": "xs:bottom-5",
  "sm:5": "sm:bottom-5",
  "md:5": "md:bottom-5",
  "lg:5": "lg:bottom-5",
  "xl:5": "xl:bottom-5",
  "2xl:5": "2xl:bottom-5",
  "hover:5": "hover:bottom-5",
  "focus:5": "focus:bottom-5",
  "active:5": "active:bottom-5",
  "disabled:5": "disabled:bottom-5",
  "group-hover:5": "group-hover:bottom-5",
  "group:5": "group:bottom-5",
  "first:5": "first:bottom-5",
  "last:5": "last:bottom-5",
  "odd:5": "odd:bottom-5",
  "even:5": "even:bottom-5",
  "dark:5": "dark:bottom-5",
  "6": "bottom-6",
  "xs:6": "xs:bottom-6",
  "sm:6": "sm:bottom-6",
  "md:6": "md:bottom-6",
  "lg:6": "lg:bottom-6",
  "xl:6": "xl:bottom-6",
  "2xl:6": "2xl:bottom-6",
  "hover:6": "hover:bottom-6",
  "focus:6": "focus:bottom-6",
  "active:6": "active:bottom-6",
  "disabled:6": "disabled:bottom-6",
  "group-hover:6": "group-hover:bottom-6",
  "group:6": "group:bottom-6",
  "first:6": "first:bottom-6",
  "last:6": "last:bottom-6",
  "odd:6": "odd:bottom-6",
  "even:6": "even:bottom-6",
  "dark:6": "dark:bottom-6",
  "7": "bottom-7",
  "xs:7": "xs:bottom-7",
  "sm:7": "sm:bottom-7",
  "md:7": "md:bottom-7",
  "lg:7": "lg:bottom-7",
  "xl:7": "xl:bottom-7",
  "2xl:7": "2xl:bottom-7",
  "hover:7": "hover:bottom-7",
  "focus:7": "focus:bottom-7",
  "active:7": "active:bottom-7",
  "disabled:7": "disabled:bottom-7",
  "group-hover:7": "group-hover:bottom-7",
  "group:7": "group:bottom-7",
  "first:7": "first:bottom-7",
  "last:7": "last:bottom-7",
  "odd:7": "odd:bottom-7",
  "even:7": "even:bottom-7",
  "dark:7": "dark:bottom-7",
  "8": "bottom-8",
  "xs:8": "xs:bottom-8",
  "sm:8": "sm:bottom-8",
  "md:8": "md:bottom-8",
  "lg:8": "lg:bottom-8",
  "xl:8": "xl:bottom-8",
  "2xl:8": "2xl:bottom-8",
  "hover:8": "hover:bottom-8",
  "focus:8": "focus:bottom-8",
  "active:8": "active:bottom-8",
  "disabled:8": "disabled:bottom-8",
  "group-hover:8": "group-hover:bottom-8",
  "group:8": "group:bottom-8",
  "first:8": "first:bottom-8",
  "last:8": "last:bottom-8",
  "odd:8": "odd:bottom-8",
  "even:8": "even:bottom-8",
  "dark:8": "dark:bottom-8",
  "9": "bottom-9",
  "xs:9": "xs:bottom-9",
  "sm:9": "sm:bottom-9",
  "md:9": "md:bottom-9",
  "lg:9": "lg:bottom-9",
  "xl:9": "xl:bottom-9",
  "2xl:9": "2xl:bottom-9",
  "hover:9": "hover:bottom-9",
  "focus:9": "focus:bottom-9",
  "active:9": "active:bottom-9",
  "disabled:9": "disabled:bottom-9",
  "group-hover:9": "group-hover:bottom-9",
  "group:9": "group:bottom-9",
  "first:9": "first:bottom-9",
  "last:9": "last:bottom-9",
  "odd:9": "odd:bottom-9",
  "even:9": "even:bottom-9",
  "dark:9": "dark:bottom-9",
  "10": "bottom-10",
  "xs:10": "xs:bottom-10",
  "sm:10": "sm:bottom-10",
  "md:10": "md:bottom-10",
  "lg:10": "lg:bottom-10",
  "xl:10": "xl:bottom-10",
  "2xl:10": "2xl:bottom-10",
  "hover:10": "hover:bottom-10",
  "focus:10": "focus:bottom-10",
  "active:10": "active:bottom-10",
  "disabled:10": "disabled:bottom-10",
  "group-hover:10": "group-hover:bottom-10",
  "group:10": "group:bottom-10",
  "first:10": "first:bottom-10",
  "last:10": "last:bottom-10",
  "odd:10": "odd:bottom-10",
  "even:10": "even:bottom-10",
  "dark:10": "dark:bottom-10",
  "11": "bottom-11",
  "xs:11": "xs:bottom-11",
  "sm:11": "sm:bottom-11",
  "md:11": "md:bottom-11",
  "lg:11": "lg:bottom-11",
  "xl:11": "xl:bottom-11",
  "2xl:11": "2xl:bottom-11",
  "hover:11": "hover:bottom-11",
  "focus:11": "focus:bottom-11",
  "active:11": "active:bottom-11",
  "disabled:11": "disabled:bottom-11",
  "group-hover:11": "group-hover:bottom-11",
  "group:11": "group:bottom-11",
  "first:11": "first:bottom-11",
  "last:11": "last:bottom-11",
  "odd:11": "odd:bottom-11",
  "even:11": "even:bottom-11",
  "dark:11": "dark:bottom-11",
  "12": "bottom-12",
  "xs:12": "xs:bottom-12",
  "sm:12": "sm:bottom-12",
  "md:12": "md:bottom-12",
  "lg:12": "lg:bottom-12",
  "xl:12": "xl:bottom-12",
  "2xl:12": "2xl:bottom-12",
  "hover:12": "hover:bottom-12",
  "focus:12": "focus:bottom-12",
  "active:12": "active:bottom-12",
  "disabled:12": "disabled:bottom-12",
  "group-hover:12": "group-hover:bottom-12",
  "group:12": "group:bottom-12",
  "first:12": "first:bottom-12",
  "last:12": "last:bottom-12",
  "odd:12": "odd:bottom-12",
  "even:12": "even:bottom-12",
  "dark:12": "dark:bottom-12",
  "14": "bottom-14",
  "xs:14": "xs:bottom-14",
  "sm:14": "sm:bottom-14",
  "md:14": "md:bottom-14",
  "lg:14": "lg:bottom-14",
  "xl:14": "xl:bottom-14",
  "2xl:14": "2xl:bottom-14",
  "hover:14": "hover:bottom-14",
  "focus:14": "focus:bottom-14",
  "active:14": "active:bottom-14",
  "disabled:14": "disabled:bottom-14",
  "group-hover:14": "group-hover:bottom-14",
  "group:14": "group:bottom-14",
  "first:14": "first:bottom-14",
  "last:14": "last:bottom-14",
  "odd:14": "odd:bottom-14",
  "even:14": "even:bottom-14",
  "dark:14": "dark:bottom-14",
  "16": "bottom-16",
  "xs:16": "xs:bottom-16",
  "sm:16": "sm:bottom-16",
  "md:16": "md:bottom-16",
  "lg:16": "lg:bottom-16",
  "xl:16": "xl:bottom-16",
  "2xl:16": "2xl:bottom-16",
  "hover:16": "hover:bottom-16",
  "focus:16": "focus:bottom-16",
  "active:16": "active:bottom-16",
  "disabled:16": "disabled:bottom-16",
  "group-hover:16": "group-hover:bottom-16",
  "group:16": "group:bottom-16",
  "first:16": "first:bottom-16",
  "last:16": "last:bottom-16",
  "odd:16": "odd:bottom-16",
  "even:16": "even:bottom-16",
  "dark:16": "dark:bottom-16",
  "20": "bottom-20",
  "xs:20": "xs:bottom-20",
  "sm:20": "sm:bottom-20",
  "md:20": "md:bottom-20",
  "lg:20": "lg:bottom-20",
  "xl:20": "xl:bottom-20",
  "2xl:20": "2xl:bottom-20",
  "hover:20": "hover:bottom-20",
  "focus:20": "focus:bottom-20",
  "active:20": "active:bottom-20",
  "disabled:20": "disabled:bottom-20",
  "group-hover:20": "group-hover:bottom-20",
  "group:20": "group:bottom-20",
  "first:20": "first:bottom-20",
  "last:20": "last:bottom-20",
  "odd:20": "odd:bottom-20",
  "even:20": "even:bottom-20",
  "dark:20": "dark:bottom-20",
  "24": "bottom-24",
  "xs:24": "xs:bottom-24",
  "sm:24": "sm:bottom-24",
  "md:24": "md:bottom-24",
  "lg:24": "lg:bottom-24",
  "xl:24": "xl:bottom-24",
  "2xl:24": "2xl:bottom-24",
  "hover:24": "hover:bottom-24",
  "focus:24": "focus:bottom-24",
  "active:24": "active:bottom-24",
  "disabled:24": "disabled:bottom-24",
  "group-hover:24": "group-hover:bottom-24",
  "group:24": "group:bottom-24",
  "first:24": "first:bottom-24",
  "last:24": "last:bottom-24",
  "odd:24": "odd:bottom-24",
  "even:24": "even:bottom-24",
  "dark:24": "dark:bottom-24",
  "28": "bottom-28",
  "xs:28": "xs:bottom-28",
  "sm:28": "sm:bottom-28",
  "md:28": "md:bottom-28",
  "lg:28": "lg:bottom-28",
  "xl:28": "xl:bottom-28",
  "2xl:28": "2xl:bottom-28",
  "hover:28": "hover:bottom-28",
  "focus:28": "focus:bottom-28",
  "active:28": "active:bottom-28",
  "disabled:28": "disabled:bottom-28",
  "group-hover:28": "group-hover:bottom-28",
  "group:28": "group:bottom-28",
  "first:28": "first:bottom-28",
  "last:28": "last:bottom-28",
  "odd:28": "odd:bottom-28",
  "even:28": "even:bottom-28",
  "dark:28": "dark:bottom-28",
  "32": "bottom-32",
  "xs:32": "xs:bottom-32",
  "sm:32": "sm:bottom-32",
  "md:32": "md:bottom-32",
  "lg:32": "lg:bottom-32",
  "xl:32": "xl:bottom-32",
  "2xl:32": "2xl:bottom-32",
  "hover:32": "hover:bottom-32",
  "focus:32": "focus:bottom-32",
  "active:32": "active:bottom-32",
  "disabled:32": "disabled:bottom-32",
  "group-hover:32": "group-hover:bottom-32",
  "group:32": "group:bottom-32",
  "first:32": "first:bottom-32",
  "last:32": "last:bottom-32",
  "odd:32": "odd:bottom-32",
  "even:32": "even:bottom-32",
  "dark:32": "dark:bottom-32",
  "36": "bottom-36",
  "xs:36": "xs:bottom-36",
  "sm:36": "sm:bottom-36",
  "md:36": "md:bottom-36",
  "lg:36": "lg:bottom-36",
  "xl:36": "xl:bottom-36",
  "2xl:36": "2xl:bottom-36",
  "hover:36": "hover:bottom-36",
  "focus:36": "focus:bottom-36",
  "active:36": "active:bottom-36",
  "disabled:36": "disabled:bottom-36",
  "group-hover:36": "group-hover:bottom-36",
  "group:36": "group:bottom-36",
  "first:36": "first:bottom-36",
  "last:36": "last:bottom-36",
  "odd:36": "odd:bottom-36",
  "even:36": "even:bottom-36",
  "dark:36": "dark:bottom-36",
  "40": "bottom-40",
  "xs:40": "xs:bottom-40",
  "sm:40": "sm:bottom-40",
  "md:40": "md:bottom-40",
  "lg:40": "lg:bottom-40",
  "xl:40": "xl:bottom-40",
  "2xl:40": "2xl:bottom-40",
  "hover:40": "hover:bottom-40",
  "focus:40": "focus:bottom-40",
  "active:40": "active:bottom-40",
  "disabled:40": "disabled:bottom-40",
  "group-hover:40": "group-hover:bottom-40",
  "group:40": "group:bottom-40",
  "first:40": "first:bottom-40",
  "last:40": "last:bottom-40",
  "odd:40": "odd:bottom-40",
  "even:40": "even:bottom-40",
  "dark:40": "dark:bottom-40",
  "44": "bottom-44",
  "xs:44": "xs:bottom-44",
  "sm:44": "sm:bottom-44",
  "md:44": "md:bottom-44",
  "lg:44": "lg:bottom-44",
  "xl:44": "xl:bottom-44",
  "2xl:44": "2xl:bottom-44",
  "hover:44": "hover:bottom-44",
  "focus:44": "focus:bottom-44",
  "active:44": "active:bottom-44",
  "disabled:44": "disabled:bottom-44",
  "group-hover:44": "group-hover:bottom-44",
  "group:44": "group:bottom-44",
  "first:44": "first:bottom-44",
  "last:44": "last:bottom-44",
  "odd:44": "odd:bottom-44",
  "even:44": "even:bottom-44",
  "dark:44": "dark:bottom-44",
  "48": "bottom-48",
  "xs:48": "xs:bottom-48",
  "sm:48": "sm:bottom-48",
  "md:48": "md:bottom-48",
  "lg:48": "lg:bottom-48",
  "xl:48": "xl:bottom-48",
  "2xl:48": "2xl:bottom-48",
  "hover:48": "hover:bottom-48",
  "focus:48": "focus:bottom-48",
  "active:48": "active:bottom-48",
  "disabled:48": "disabled:bottom-48",
  "group-hover:48": "group-hover:bottom-48",
  "group:48": "group:bottom-48",
  "first:48": "first:bottom-48",
  "last:48": "last:bottom-48",
  "odd:48": "odd:bottom-48",
  "even:48": "even:bottom-48",
  "dark:48": "dark:bottom-48",
  "52": "bottom-52",
  "xs:52": "xs:bottom-52",
  "sm:52": "sm:bottom-52",
  "md:52": "md:bottom-52",
  "lg:52": "lg:bottom-52",
  "xl:52": "xl:bottom-52",
  "2xl:52": "2xl:bottom-52",
  "hover:52": "hover:bottom-52",
  "focus:52": "focus:bottom-52",
  "active:52": "active:bottom-52",
  "disabled:52": "disabled:bottom-52",
  "group-hover:52": "group-hover:bottom-52",
  "group:52": "group:bottom-52",
  "first:52": "first:bottom-52",
  "last:52": "last:bottom-52",
  "odd:52": "odd:bottom-52",
  "even:52": "even:bottom-52",
  "dark:52": "dark:bottom-52",
  "56": "bottom-56",
  "xs:56": "xs:bottom-56",
  "sm:56": "sm:bottom-56",
  "md:56": "md:bottom-56",
  "lg:56": "lg:bottom-56",
  "xl:56": "xl:bottom-56",
  "2xl:56": "2xl:bottom-56",
  "hover:56": "hover:bottom-56",
  "focus:56": "focus:bottom-56",
  "active:56": "active:bottom-56",
  "disabled:56": "disabled:bottom-56",
  "group-hover:56": "group-hover:bottom-56",
  "group:56": "group:bottom-56",
  "first:56": "first:bottom-56",
  "last:56": "last:bottom-56",
  "odd:56": "odd:bottom-56",
  "even:56": "even:bottom-56",
  "dark:56": "dark:bottom-56",
  "60": "bottom-60",
  "xs:60": "xs:bottom-60",
  "sm:60": "sm:bottom-60",
  "md:60": "md:bottom-60",
  "lg:60": "lg:bottom-60",
  "xl:60": "xl:bottom-60",
  "2xl:60": "2xl:bottom-60",
  "hover:60": "hover:bottom-60",
  "focus:60": "focus:bottom-60",
  "active:60": "active:bottom-60",
  "disabled:60": "disabled:bottom-60",
  "group-hover:60": "group-hover:bottom-60",
  "group:60": "group:bottom-60",
  "first:60": "first:bottom-60",
  "last:60": "last:bottom-60",
  "odd:60": "odd:bottom-60",
  "even:60": "even:bottom-60",
  "dark:60": "dark:bottom-60",
  "64": "bottom-64",
  "xs:64": "xs:bottom-64",
  "sm:64": "sm:bottom-64",
  "md:64": "md:bottom-64",
  "lg:64": "lg:bottom-64",
  "xl:64": "xl:bottom-64",
  "2xl:64": "2xl:bottom-64",
  "hover:64": "hover:bottom-64",
  "focus:64": "focus:bottom-64",
  "active:64": "active:bottom-64",
  "disabled:64": "disabled:bottom-64",
  "group-hover:64": "group-hover:bottom-64",
  "group:64": "group:bottom-64",
  "first:64": "first:bottom-64",
  "last:64": "last:bottom-64",
  "odd:64": "odd:bottom-64",
  "even:64": "even:bottom-64",
  "dark:64": "dark:bottom-64",
  "72": "bottom-72",
  "xs:72": "xs:bottom-72",
  "sm:72": "sm:bottom-72",
  "md:72": "md:bottom-72",
  "lg:72": "lg:bottom-72",
  "xl:72": "xl:bottom-72",
  "2xl:72": "2xl:bottom-72",
  "hover:72": "hover:bottom-72",
  "focus:72": "focus:bottom-72",
  "active:72": "active:bottom-72",
  "disabled:72": "disabled:bottom-72",
  "group-hover:72": "group-hover:bottom-72",
  "group:72": "group:bottom-72",
  "first:72": "first:bottom-72",
  "last:72": "last:bottom-72",
  "odd:72": "odd:bottom-72",
  "even:72": "even:bottom-72",
  "dark:72": "dark:bottom-72",
  "80": "bottom-80",
  "xs:80": "xs:bottom-80",
  "sm:80": "sm:bottom-80",
  "md:80": "md:bottom-80",
  "lg:80": "lg:bottom-80",
  "xl:80": "xl:bottom-80",
  "2xl:80": "2xl:bottom-80",
  "hover:80": "hover:bottom-80",
  "focus:80": "focus:bottom-80",
  "active:80": "active:bottom-80",
  "disabled:80": "disabled:bottom-80",
  "group-hover:80": "group-hover:bottom-80",
  "group:80": "group:bottom-80",
  "first:80": "first:bottom-80",
  "last:80": "last:bottom-80",
  "odd:80": "odd:bottom-80",
  "even:80": "even:bottom-80",
  "dark:80": "dark:bottom-80",
  "96": "bottom-96",
  "xs:96": "xs:bottom-96",
  "sm:96": "sm:bottom-96",
  "md:96": "md:bottom-96",
  "lg:96": "lg:bottom-96",
  "xl:96": "xl:bottom-96",
  "2xl:96": "2xl:bottom-96",
  "hover:96": "hover:bottom-96",
  "focus:96": "focus:bottom-96",
  "active:96": "active:bottom-96",
  "disabled:96": "disabled:bottom-96",
  "group-hover:96": "group-hover:bottom-96",
  "group:96": "group:bottom-96",
  "first:96": "first:bottom-96",
  "last:96": "last:bottom-96",
  "odd:96": "odd:bottom-96",
  "even:96": "even:bottom-96",
  "dark:96": "dark:bottom-96",
  "auto": "bottom-auto",
  "xs:auto": "xs:bottom-auto",
  "sm:auto": "sm:bottom-auto",
  "md:auto": "md:bottom-auto",
  "lg:auto": "lg:bottom-auto",
  "xl:auto": "xl:bottom-auto",
  "2xl:auto": "2xl:bottom-auto",
  "hover:auto": "hover:bottom-auto",
  "focus:auto": "focus:bottom-auto",
  "active:auto": "active:bottom-auto",
  "disabled:auto": "disabled:bottom-auto",
  "group-hover:auto": "group-hover:bottom-auto",
  "group:auto": "group:bottom-auto",
  "first:auto": "first:bottom-auto",
  "last:auto": "last:bottom-auto",
  "odd:auto": "odd:bottom-auto",
  "even:auto": "even:bottom-auto",
  "dark:auto": "dark:bottom-auto",
  "2/4": "bottom-2/4",
  "xs:2/4": "xs:bottom-2/4",
  "sm:2/4": "sm:bottom-2/4",
  "md:2/4": "md:bottom-2/4",
  "lg:2/4": "lg:bottom-2/4",
  "xl:2/4": "xl:bottom-2/4",
  "2xl:2/4": "2xl:bottom-2/4",
  "hover:2/4": "hover:bottom-2/4",
  "focus:2/4": "focus:bottom-2/4",
  "active:2/4": "active:bottom-2/4",
  "disabled:2/4": "disabled:bottom-2/4",
  "group-hover:2/4": "group-hover:bottom-2/4",
  "group:2/4": "group:bottom-2/4",
  "first:2/4": "first:bottom-2/4",
  "last:2/4": "last:bottom-2/4",
  "odd:2/4": "odd:bottom-2/4",
  "even:2/4": "even:bottom-2/4",
  "dark:2/4": "dark:bottom-2/4",
  "1/3": "bottom-1/3",
  "xs:1/3": "xs:bottom-1/3",
  "sm:1/3": "sm:bottom-1/3",
  "md:1/3": "md:bottom-1/3",
  "lg:1/3": "lg:bottom-1/3",
  "xl:1/3": "xl:bottom-1/3",
  "2xl:1/3": "2xl:bottom-1/3",
  "hover:1/3": "hover:bottom-1/3",
  "focus:1/3": "focus:bottom-1/3",
  "active:1/3": "active:bottom-1/3",
  "disabled:1/3": "disabled:bottom-1/3",
  "group-hover:1/3": "group-hover:bottom-1/3",
  "group:1/3": "group:bottom-1/3",
  "first:1/3": "first:bottom-1/3",
  "last:1/3": "last:bottom-1/3",
  "odd:1/3": "odd:bottom-1/3",
  "even:1/3": "even:bottom-1/3",
  "dark:1/3": "dark:bottom-1/3",
  "2/3": "bottom-2/3",
  "xs:2/3": "xs:bottom-2/3",
  "sm:2/3": "sm:bottom-2/3",
  "md:2/3": "md:bottom-2/3",
  "lg:2/3": "lg:bottom-2/3",
  "xl:2/3": "xl:bottom-2/3",
  "2xl:2/3": "2xl:bottom-2/3",
  "hover:2/3": "hover:bottom-2/3",
  "focus:2/3": "focus:bottom-2/3",
  "active:2/3": "active:bottom-2/3",
  "disabled:2/3": "disabled:bottom-2/3",
  "group-hover:2/3": "group-hover:bottom-2/3",
  "group:2/3": "group:bottom-2/3",
  "first:2/3": "first:bottom-2/3",
  "last:2/3": "last:bottom-2/3",
  "odd:2/3": "odd:bottom-2/3",
  "even:2/3": "even:bottom-2/3",
  "dark:2/3": "dark:bottom-2/3",
  "1/4": "bottom-1/4",
  "xs:1/4": "xs:bottom-1/4",
  "sm:1/4": "sm:bottom-1/4",
  "md:1/4": "md:bottom-1/4",
  "lg:1/4": "lg:bottom-1/4",
  "xl:1/4": "xl:bottom-1/4",
  "2xl:1/4": "2xl:bottom-1/4",
  "hover:1/4": "hover:bottom-1/4",
  "focus:1/4": "focus:bottom-1/4",
  "active:1/4": "active:bottom-1/4",
  "disabled:1/4": "disabled:bottom-1/4",
  "group-hover:1/4": "group-hover:bottom-1/4",
  "group:1/4": "group:bottom-1/4",
  "first:1/4": "first:bottom-1/4",
  "last:1/4": "last:bottom-1/4",
  "odd:1/4": "odd:bottom-1/4",
  "even:1/4": "even:bottom-1/4",
  "dark:1/4": "dark:bottom-1/4",
  "3/4": "bottom-3/4",
  "xs:3/4": "xs:bottom-3/4",
  "sm:3/4": "sm:bottom-3/4",
  "md:3/4": "md:bottom-3/4",
  "lg:3/4": "lg:bottom-3/4",
  "xl:3/4": "xl:bottom-3/4",
  "2xl:3/4": "2xl:bottom-3/4",
  "hover:3/4": "hover:bottom-3/4",
  "focus:3/4": "focus:bottom-3/4",
  "active:3/4": "active:bottom-3/4",
  "disabled:3/4": "disabled:bottom-3/4",
  "group-hover:3/4": "group-hover:bottom-3/4",
  "group:3/4": "group:bottom-3/4",
  "first:3/4": "first:bottom-3/4",
  "last:3/4": "last:bottom-3/4",
  "odd:3/4": "odd:bottom-3/4",
  "even:3/4": "even:bottom-3/4",
  "dark:3/4": "dark:bottom-3/4",
  "100": "bottom-full",
  "xs:100": "xs:bottom-full",
  "sm:100": "sm:bottom-full",
  "md:100": "md:bottom-full",
  "lg:100": "lg:bottom-full",
  "xl:100": "xl:bottom-full",
  "2xl:100": "2xl:bottom-full",
  "hover:100": "hover:bottom-full",
  "focus:100": "focus:bottom-full",
  "active:100": "active:bottom-full",
  "disabled:100": "disabled:bottom-full",
  "group-hover:100": "group-hover:bottom-full",
  "group:100": "group:bottom-full",
  "first:100": "first:bottom-full",
  "last:100": "last:bottom-full",
  "odd:100": "odd:bottom-full",
  "even:100": "even:bottom-full",
  "dark:100": "dark:bottom-full",
} as const;