import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type PaddingBottomType = 
  | PaddingBottomValue
  | Partial<Record<ResponsiveBreakpoint, PaddingBottomValue>>;

export type PaddingBottomValue = keyof typeof PADDING_BOTTOM_CLASS_MAP;

export const PADDING_BOTTOM_CLASS_MAP = {
  "0": "pb-0",
  "xs:0": "xs:pb-0",
  "sm:0": "sm:pb-0",
  "md:0": "md:pb-0",
  "lg:0": "lg:pb-0",
  "xl:0": "xl:pb-0",
  "2xl:0": "2xl:pb-0",
  "hover:0": "hover:pb-0",
  "focus:0": "focus:pb-0",
  "active:0": "active:pb-0",
  "disabled:0": "disabled:pb-0",
  "group-hover:0": "group-hover:pb-0",
  "group:0": "group:pb-0",
  "first:0": "first:pb-0",
  "last:0": "last:pb-0",
  "odd:0": "odd:pb-0",
  "even:0": "even:pb-0",
  "dark:0": "dark:pb-0",
  "px": "pb-px",
  "xs:px": "xs:pb-px",
  "sm:px": "sm:pb-px",
  "md:px": "md:pb-px",
  "lg:px": "lg:pb-px",
  "xl:px": "xl:pb-px",
  "2xl:px": "2xl:pb-px",
  "hover:px": "hover:pb-px",
  "focus:px": "focus:pb-px",
  "active:px": "active:pb-px",
  "disabled:px": "disabled:pb-px",
  "group-hover:px": "group-hover:pb-px",
  "group:px": "group:pb-px",
  "first:px": "first:pb-px",
  "last:px": "last:pb-px",
  "odd:px": "odd:pb-px",
  "even:px": "even:pb-px",
  "dark:px": "dark:pb-px",
  "0.5": "pb-0.5",
  "xs:0.5": "xs:pb-0.5",
  "sm:0.5": "sm:pb-0.5",
  "md:0.5": "md:pb-0.5",
  "lg:0.5": "lg:pb-0.5",
  "xl:0.5": "xl:pb-0.5",
  "2xl:0.5": "2xl:pb-0.5",
  "hover:0.5": "hover:pb-0.5",
  "focus:0.5": "focus:pb-0.5",
  "active:0.5": "active:pb-0.5",
  "disabled:0.5": "disabled:pb-0.5",
  "group-hover:0.5": "group-hover:pb-0.5",
  "group:0.5": "group:pb-0.5",
  "first:0.5": "first:pb-0.5",
  "last:0.5": "last:pb-0.5",
  "odd:0.5": "odd:pb-0.5",
  "even:0.5": "even:pb-0.5",
  "dark:0.5": "dark:pb-0.5",
  "1": "pb-1",
  "xs:1": "xs:pb-1",
  "sm:1": "sm:pb-1",
  "md:1": "md:pb-1",
  "lg:1": "lg:pb-1",
  "xl:1": "xl:pb-1",
  "2xl:1": "2xl:pb-1",
  "hover:1": "hover:pb-1",
  "focus:1": "focus:pb-1",
  "active:1": "active:pb-1",
  "disabled:1": "disabled:pb-1",
  "group-hover:1": "group-hover:pb-1",
  "group:1": "group:pb-1",
  "first:1": "first:pb-1",
  "last:1": "last:pb-1",
  "odd:1": "odd:pb-1",
  "even:1": "even:pb-1",
  "dark:1": "dark:pb-1",
  "1.5": "pb-1.5",
  "xs:1.5": "xs:pb-1.5",
  "sm:1.5": "sm:pb-1.5",
  "md:1.5": "md:pb-1.5",
  "lg:1.5": "lg:pb-1.5",
  "xl:1.5": "xl:pb-1.5",
  "2xl:1.5": "2xl:pb-1.5",
  "hover:1.5": "hover:pb-1.5",
  "focus:1.5": "focus:pb-1.5",
  "active:1.5": "active:pb-1.5",
  "disabled:1.5": "disabled:pb-1.5",
  "group-hover:1.5": "group-hover:pb-1.5",
  "group:1.5": "group:pb-1.5",
  "first:1.5": "first:pb-1.5",
  "last:1.5": "last:pb-1.5",
  "odd:1.5": "odd:pb-1.5",
  "even:1.5": "even:pb-1.5",
  "dark:1.5": "dark:pb-1.5",
  "2": "pb-2",
  "xs:2": "xs:pb-2",
  "sm:2": "sm:pb-2",
  "md:2": "md:pb-2",
  "lg:2": "lg:pb-2",
  "xl:2": "xl:pb-2",
  "2xl:2": "2xl:pb-2",
  "hover:2": "hover:pb-2",
  "focus:2": "focus:pb-2",
  "active:2": "active:pb-2",
  "disabled:2": "disabled:pb-2",
  "group-hover:2": "group-hover:pb-2",
  "group:2": "group:pb-2",
  "first:2": "first:pb-2",
  "last:2": "last:pb-2",
  "odd:2": "odd:pb-2",
  "even:2": "even:pb-2",
  "dark:2": "dark:pb-2",
  "2.5": "pb-2.5",
  "xs:2.5": "xs:pb-2.5",
  "sm:2.5": "sm:pb-2.5",
  "md:2.5": "md:pb-2.5",
  "lg:2.5": "lg:pb-2.5",
  "xl:2.5": "xl:pb-2.5",
  "2xl:2.5": "2xl:pb-2.5",
  "hover:2.5": "hover:pb-2.5",
  "focus:2.5": "focus:pb-2.5",
  "active:2.5": "active:pb-2.5",
  "disabled:2.5": "disabled:pb-2.5",
  "group-hover:2.5": "group-hover:pb-2.5",
  "group:2.5": "group:pb-2.5",
  "first:2.5": "first:pb-2.5",
  "last:2.5": "last:pb-2.5",
  "odd:2.5": "odd:pb-2.5",
  "even:2.5": "even:pb-2.5",
  "dark:2.5": "dark:pb-2.5",
  "3": "pb-3",
  "xs:3": "xs:pb-3",
  "sm:3": "sm:pb-3",
  "md:3": "md:pb-3",
  "lg:3": "lg:pb-3",
  "xl:3": "xl:pb-3",
  "2xl:3": "2xl:pb-3",
  "hover:3": "hover:pb-3",
  "focus:3": "focus:pb-3",
  "active:3": "active:pb-3",
  "disabled:3": "disabled:pb-3",
  "group-hover:3": "group-hover:pb-3",
  "group:3": "group:pb-3",
  "first:3": "first:pb-3",
  "last:3": "last:pb-3",
  "odd:3": "odd:pb-3",
  "even:3": "even:pb-3",
  "dark:3": "dark:pb-3",
  "3.5": "pb-3.5",
  "xs:3.5": "xs:pb-3.5",
  "sm:3.5": "sm:pb-3.5",
  "md:3.5": "md:pb-3.5",
  "lg:3.5": "lg:pb-3.5",
  "xl:3.5": "xl:pb-3.5",
  "2xl:3.5": "2xl:pb-3.5",
  "hover:3.5": "hover:pb-3.5",
  "focus:3.5": "focus:pb-3.5",
  "active:3.5": "active:pb-3.5",
  "disabled:3.5": "disabled:pb-3.5",
  "group-hover:3.5": "group-hover:pb-3.5",
  "group:3.5": "group:pb-3.5",
  "first:3.5": "first:pb-3.5",
  "last:3.5": "last:pb-3.5",
  "odd:3.5": "odd:pb-3.5",
  "even:3.5": "even:pb-3.5",
  "dark:3.5": "dark:pb-3.5",
  "4": "pb-4",
  "xs:4": "xs:pb-4",
  "sm:4": "sm:pb-4",
  "md:4": "md:pb-4",
  "lg:4": "lg:pb-4",
  "xl:4": "xl:pb-4",
  "2xl:4": "2xl:pb-4",
  "hover:4": "hover:pb-4",
  "focus:4": "focus:pb-4",
  "active:4": "active:pb-4",
  "disabled:4": "disabled:pb-4",
  "group-hover:4": "group-hover:pb-4",
  "group:4": "group:pb-4",
  "first:4": "first:pb-4",
  "last:4": "last:pb-4",
  "odd:4": "odd:pb-4",
  "even:4": "even:pb-4",
  "dark:4": "dark:pb-4",
  "5": "pb-5",
  "xs:5": "xs:pb-5",
  "sm:5": "sm:pb-5",
  "md:5": "md:pb-5",
  "lg:5": "lg:pb-5",
  "xl:5": "xl:pb-5",
  "2xl:5": "2xl:pb-5",
  "hover:5": "hover:pb-5",
  "focus:5": "focus:pb-5",
  "active:5": "active:pb-5",
  "disabled:5": "disabled:pb-5",
  "group-hover:5": "group-hover:pb-5",
  "group:5": "group:pb-5",
  "first:5": "first:pb-5",
  "last:5": "last:pb-5",
  "odd:5": "odd:pb-5",
  "even:5": "even:pb-5",
  "dark:5": "dark:pb-5",
  "6": "pb-6",
  "xs:6": "xs:pb-6",
  "sm:6": "sm:pb-6",
  "md:6": "md:pb-6",
  "lg:6": "lg:pb-6",
  "xl:6": "xl:pb-6",
  "2xl:6": "2xl:pb-6",
  "hover:6": "hover:pb-6",
  "focus:6": "focus:pb-6",
  "active:6": "active:pb-6",
  "disabled:6": "disabled:pb-6",
  "group-hover:6": "group-hover:pb-6",
  "group:6": "group:pb-6",
  "first:6": "first:pb-6",
  "last:6": "last:pb-6",
  "odd:6": "odd:pb-6",
  "even:6": "even:pb-6",
  "dark:6": "dark:pb-6",
  "7": "pb-7",
  "xs:7": "xs:pb-7",
  "sm:7": "sm:pb-7",
  "md:7": "md:pb-7",
  "lg:7": "lg:pb-7",
  "xl:7": "xl:pb-7",
  "2xl:7": "2xl:pb-7",
  "hover:7": "hover:pb-7",
  "focus:7": "focus:pb-7",
  "active:7": "active:pb-7",
  "disabled:7": "disabled:pb-7",
  "group-hover:7": "group-hover:pb-7",
  "group:7": "group:pb-7",
  "first:7": "first:pb-7",
  "last:7": "last:pb-7",
  "odd:7": "odd:pb-7",
  "even:7": "even:pb-7",
  "dark:7": "dark:pb-7",
  "8": "pb-8",
  "xs:8": "xs:pb-8",
  "sm:8": "sm:pb-8",
  "md:8": "md:pb-8",
  "lg:8": "lg:pb-8",
  "xl:8": "xl:pb-8",
  "2xl:8": "2xl:pb-8",
  "hover:8": "hover:pb-8",
  "focus:8": "focus:pb-8",
  "active:8": "active:pb-8",
  "disabled:8": "disabled:pb-8",
  "group-hover:8": "group-hover:pb-8",
  "group:8": "group:pb-8",
  "first:8": "first:pb-8",
  "last:8": "last:pb-8",
  "odd:8": "odd:pb-8",
  "even:8": "even:pb-8",
  "dark:8": "dark:pb-8",
  "9": "pb-9",
  "xs:9": "xs:pb-9",
  "sm:9": "sm:pb-9",
  "md:9": "md:pb-9",
  "lg:9": "lg:pb-9",
  "xl:9": "xl:pb-9",
  "2xl:9": "2xl:pb-9",
  "hover:9": "hover:pb-9",
  "focus:9": "focus:pb-9",
  "active:9": "active:pb-9",
  "disabled:9": "disabled:pb-9",
  "group-hover:9": "group-hover:pb-9",
  "group:9": "group:pb-9",
  "first:9": "first:pb-9",
  "last:9": "last:pb-9",
  "odd:9": "odd:pb-9",
  "even:9": "even:pb-9",
  "dark:9": "dark:pb-9",
  "10": "pb-10",
  "xs:10": "xs:pb-10",
  "sm:10": "sm:pb-10",
  "md:10": "md:pb-10",
  "lg:10": "lg:pb-10",
  "xl:10": "xl:pb-10",
  "2xl:10": "2xl:pb-10",
  "hover:10": "hover:pb-10",
  "focus:10": "focus:pb-10",
  "active:10": "active:pb-10",
  "disabled:10": "disabled:pb-10",
  "group-hover:10": "group-hover:pb-10",
  "group:10": "group:pb-10",
  "first:10": "first:pb-10",
  "last:10": "last:pb-10",
  "odd:10": "odd:pb-10",
  "even:10": "even:pb-10",
  "dark:10": "dark:pb-10",
  "11": "pb-11",
  "xs:11": "xs:pb-11",
  "sm:11": "sm:pb-11",
  "md:11": "md:pb-11",
  "lg:11": "lg:pb-11",
  "xl:11": "xl:pb-11",
  "2xl:11": "2xl:pb-11",
  "hover:11": "hover:pb-11",
  "focus:11": "focus:pb-11",
  "active:11": "active:pb-11",
  "disabled:11": "disabled:pb-11",
  "group-hover:11": "group-hover:pb-11",
  "group:11": "group:pb-11",
  "first:11": "first:pb-11",
  "last:11": "last:pb-11",
  "odd:11": "odd:pb-11",
  "even:11": "even:pb-11",
  "dark:11": "dark:pb-11",
  "12": "pb-12",
  "xs:12": "xs:pb-12",
  "sm:12": "sm:pb-12",
  "md:12": "md:pb-12",
  "lg:12": "lg:pb-12",
  "xl:12": "xl:pb-12",
  "2xl:12": "2xl:pb-12",
  "hover:12": "hover:pb-12",
  "focus:12": "focus:pb-12",
  "active:12": "active:pb-12",
  "disabled:12": "disabled:pb-12",
  "group-hover:12": "group-hover:pb-12",
  "group:12": "group:pb-12",
  "first:12": "first:pb-12",
  "last:12": "last:pb-12",
  "odd:12": "odd:pb-12",
  "even:12": "even:pb-12",
  "dark:12": "dark:pb-12",
  "14": "pb-14",
  "xs:14": "xs:pb-14",
  "sm:14": "sm:pb-14",
  "md:14": "md:pb-14",
  "lg:14": "lg:pb-14",
  "xl:14": "xl:pb-14",
  "2xl:14": "2xl:pb-14",
  "hover:14": "hover:pb-14",
  "focus:14": "focus:pb-14",
  "active:14": "active:pb-14",
  "disabled:14": "disabled:pb-14",
  "group-hover:14": "group-hover:pb-14",
  "group:14": "group:pb-14",
  "first:14": "first:pb-14",
  "last:14": "last:pb-14",
  "odd:14": "odd:pb-14",
  "even:14": "even:pb-14",
  "dark:14": "dark:pb-14",
  "16": "pb-16",
  "xs:16": "xs:pb-16",
  "sm:16": "sm:pb-16",
  "md:16": "md:pb-16",
  "lg:16": "lg:pb-16",
  "xl:16": "xl:pb-16",
  "2xl:16": "2xl:pb-16",
  "hover:16": "hover:pb-16",
  "focus:16": "focus:pb-16",
  "active:16": "active:pb-16",
  "disabled:16": "disabled:pb-16",
  "group-hover:16": "group-hover:pb-16",
  "group:16": "group:pb-16",
  "first:16": "first:pb-16",
  "last:16": "last:pb-16",
  "odd:16": "odd:pb-16",
  "even:16": "even:pb-16",
  "dark:16": "dark:pb-16",
  "20": "pb-20",
  "xs:20": "xs:pb-20",
  "sm:20": "sm:pb-20",
  "md:20": "md:pb-20",
  "lg:20": "lg:pb-20",
  "xl:20": "xl:pb-20",
  "2xl:20": "2xl:pb-20",
  "hover:20": "hover:pb-20",
  "focus:20": "focus:pb-20",
  "active:20": "active:pb-20",
  "disabled:20": "disabled:pb-20",
  "group-hover:20": "group-hover:pb-20",
  "group:20": "group:pb-20",
  "first:20": "first:pb-20",
  "last:20": "last:pb-20",
  "odd:20": "odd:pb-20",
  "even:20": "even:pb-20",
  "dark:20": "dark:pb-20",
  "24": "pb-24",
  "xs:24": "xs:pb-24",
  "sm:24": "sm:pb-24",
  "md:24": "md:pb-24",
  "lg:24": "lg:pb-24",
  "xl:24": "xl:pb-24",
  "2xl:24": "2xl:pb-24",
  "hover:24": "hover:pb-24",
  "focus:24": "focus:pb-24",
  "active:24": "active:pb-24",
  "disabled:24": "disabled:pb-24",
  "group-hover:24": "group-hover:pb-24",
  "group:24": "group:pb-24",
  "first:24": "first:pb-24",
  "last:24": "last:pb-24",
  "odd:24": "odd:pb-24",
  "even:24": "even:pb-24",
  "dark:24": "dark:pb-24",
  "28": "pb-28",
  "xs:28": "xs:pb-28",
  "sm:28": "sm:pb-28",
  "md:28": "md:pb-28",
  "lg:28": "lg:pb-28",
  "xl:28": "xl:pb-28",
  "2xl:28": "2xl:pb-28",
  "hover:28": "hover:pb-28",
  "focus:28": "focus:pb-28",
  "active:28": "active:pb-28",
  "disabled:28": "disabled:pb-28",
  "group-hover:28": "group-hover:pb-28",
  "group:28": "group:pb-28",
  "first:28": "first:pb-28",
  "last:28": "last:pb-28",
  "odd:28": "odd:pb-28",
  "even:28": "even:pb-28",
  "dark:28": "dark:pb-28",
  "32": "pb-32",
  "xs:32": "xs:pb-32",
  "sm:32": "sm:pb-32",
  "md:32": "md:pb-32",
  "lg:32": "lg:pb-32",
  "xl:32": "xl:pb-32",
  "2xl:32": "2xl:pb-32",
  "hover:32": "hover:pb-32",
  "focus:32": "focus:pb-32",
  "active:32": "active:pb-32",
  "disabled:32": "disabled:pb-32",
  "group-hover:32": "group-hover:pb-32",
  "group:32": "group:pb-32",
  "first:32": "first:pb-32",
  "last:32": "last:pb-32",
  "odd:32": "odd:pb-32",
  "even:32": "even:pb-32",
  "dark:32": "dark:pb-32",
  "36": "pb-36",
  "xs:36": "xs:pb-36",
  "sm:36": "sm:pb-36",
  "md:36": "md:pb-36",
  "lg:36": "lg:pb-36",
  "xl:36": "xl:pb-36",
  "2xl:36": "2xl:pb-36",
  "hover:36": "hover:pb-36",
  "focus:36": "focus:pb-36",
  "active:36": "active:pb-36",
  "disabled:36": "disabled:pb-36",
  "group-hover:36": "group-hover:pb-36",
  "group:36": "group:pb-36",
  "first:36": "first:pb-36",
  "last:36": "last:pb-36",
  "odd:36": "odd:pb-36",
  "even:36": "even:pb-36",
  "dark:36": "dark:pb-36",
  "40": "pb-40",
  "xs:40": "xs:pb-40",
  "sm:40": "sm:pb-40",
  "md:40": "md:pb-40",
  "lg:40": "lg:pb-40",
  "xl:40": "xl:pb-40",
  "2xl:40": "2xl:pb-40",
  "hover:40": "hover:pb-40",
  "focus:40": "focus:pb-40",
  "active:40": "active:pb-40",
  "disabled:40": "disabled:pb-40",
  "group-hover:40": "group-hover:pb-40",
  "group:40": "group:pb-40",
  "first:40": "first:pb-40",
  "last:40": "last:pb-40",
  "odd:40": "odd:pb-40",
  "even:40": "even:pb-40",
  "dark:40": "dark:pb-40",
  "44": "pb-44",
  "xs:44": "xs:pb-44",
  "sm:44": "sm:pb-44",
  "md:44": "md:pb-44",
  "lg:44": "lg:pb-44",
  "xl:44": "xl:pb-44",
  "2xl:44": "2xl:pb-44",
  "hover:44": "hover:pb-44",
  "focus:44": "focus:pb-44",
  "active:44": "active:pb-44",
  "disabled:44": "disabled:pb-44",
  "group-hover:44": "group-hover:pb-44",
  "group:44": "group:pb-44",
  "first:44": "first:pb-44",
  "last:44": "last:pb-44",
  "odd:44": "odd:pb-44",
  "even:44": "even:pb-44",
  "dark:44": "dark:pb-44",
  "48": "pb-48",
  "xs:48": "xs:pb-48",
  "sm:48": "sm:pb-48",
  "md:48": "md:pb-48",
  "lg:48": "lg:pb-48",
  "xl:48": "xl:pb-48",
  "2xl:48": "2xl:pb-48",
  "hover:48": "hover:pb-48",
  "focus:48": "focus:pb-48",
  "active:48": "active:pb-48",
  "disabled:48": "disabled:pb-48",
  "group-hover:48": "group-hover:pb-48",
  "group:48": "group:pb-48",
  "first:48": "first:pb-48",
  "last:48": "last:pb-48",
  "odd:48": "odd:pb-48",
  "even:48": "even:pb-48",
  "dark:48": "dark:pb-48",
  "52": "pb-52",
  "xs:52": "xs:pb-52",
  "sm:52": "sm:pb-52",
  "md:52": "md:pb-52",
  "lg:52": "lg:pb-52",
  "xl:52": "xl:pb-52",
  "2xl:52": "2xl:pb-52",
  "hover:52": "hover:pb-52",
  "focus:52": "focus:pb-52",
  "active:52": "active:pb-52",
  "disabled:52": "disabled:pb-52",
  "group-hover:52": "group-hover:pb-52",
  "group:52": "group:pb-52",
  "first:52": "first:pb-52",
  "last:52": "last:pb-52",
  "odd:52": "odd:pb-52",
  "even:52": "even:pb-52",
  "dark:52": "dark:pb-52",
  "56": "pb-56",
  "xs:56": "xs:pb-56",
  "sm:56": "sm:pb-56",
  "md:56": "md:pb-56",
  "lg:56": "lg:pb-56",
  "xl:56": "xl:pb-56",
  "2xl:56": "2xl:pb-56",
  "hover:56": "hover:pb-56",
  "focus:56": "focus:pb-56",
  "active:56": "active:pb-56",
  "disabled:56": "disabled:pb-56",
  "group-hover:56": "group-hover:pb-56",
  "group:56": "group:pb-56",
  "first:56": "first:pb-56",
  "last:56": "last:pb-56",
  "odd:56": "odd:pb-56",
  "even:56": "even:pb-56",
  "dark:56": "dark:pb-56",
  "60": "pb-60",
  "xs:60": "xs:pb-60",
  "sm:60": "sm:pb-60",
  "md:60": "md:pb-60",
  "lg:60": "lg:pb-60",
  "xl:60": "xl:pb-60",
  "2xl:60": "2xl:pb-60",
  "hover:60": "hover:pb-60",
  "focus:60": "focus:pb-60",
  "active:60": "active:pb-60",
  "disabled:60": "disabled:pb-60",
  "group-hover:60": "group-hover:pb-60",
  "group:60": "group:pb-60",
  "first:60": "first:pb-60",
  "last:60": "last:pb-60",
  "odd:60": "odd:pb-60",
  "even:60": "even:pb-60",
  "dark:60": "dark:pb-60",
  "64": "pb-64",
  "xs:64": "xs:pb-64",
  "sm:64": "sm:pb-64",
  "md:64": "md:pb-64",
  "lg:64": "lg:pb-64",
  "xl:64": "xl:pb-64",
  "2xl:64": "2xl:pb-64",
  "hover:64": "hover:pb-64",
  "focus:64": "focus:pb-64",
  "active:64": "active:pb-64",
  "disabled:64": "disabled:pb-64",
  "group-hover:64": "group-hover:pb-64",
  "group:64": "group:pb-64",
  "first:64": "first:pb-64",
  "last:64": "last:pb-64",
  "odd:64": "odd:pb-64",
  "even:64": "even:pb-64",
  "dark:64": "dark:pb-64",
  "72": "pb-72",
  "xs:72": "xs:pb-72",
  "sm:72": "sm:pb-72",
  "md:72": "md:pb-72",
  "lg:72": "lg:pb-72",
  "xl:72": "xl:pb-72",
  "2xl:72": "2xl:pb-72",
  "hover:72": "hover:pb-72",
  "focus:72": "focus:pb-72",
  "active:72": "active:pb-72",
  "disabled:72": "disabled:pb-72",
  "group-hover:72": "group-hover:pb-72",
  "group:72": "group:pb-72",
  "first:72": "first:pb-72",
  "last:72": "last:pb-72",
  "odd:72": "odd:pb-72",
  "even:72": "even:pb-72",
  "dark:72": "dark:pb-72",
  "80": "pb-80",
  "xs:80": "xs:pb-80",
  "sm:80": "sm:pb-80",
  "md:80": "md:pb-80",
  "lg:80": "lg:pb-80",
  "xl:80": "xl:pb-80",
  "2xl:80": "2xl:pb-80",
  "hover:80": "hover:pb-80",
  "focus:80": "focus:pb-80",
  "active:80": "active:pb-80",
  "disabled:80": "disabled:pb-80",
  "group-hover:80": "group-hover:pb-80",
  "group:80": "group:pb-80",
  "first:80": "first:pb-80",
  "last:80": "last:pb-80",
  "odd:80": "odd:pb-80",
  "even:80": "even:pb-80",
  "dark:80": "dark:pb-80",
  "96": "pb-96",
  "xs:96": "xs:pb-96",
  "sm:96": "sm:pb-96",
  "md:96": "md:pb-96",
  "lg:96": "lg:pb-96",
  "xl:96": "xl:pb-96",
  "2xl:96": "2xl:pb-96",
  "hover:96": "hover:pb-96",
  "focus:96": "focus:pb-96",
  "active:96": "active:pb-96",
  "disabled:96": "disabled:pb-96",
  "group-hover:96": "group-hover:pb-96",
  "group:96": "group:pb-96",
  "first:96": "first:pb-96",
  "last:96": "last:pb-96",
  "odd:96": "odd:pb-96",
  "even:96": "even:pb-96",
  "dark:96": "dark:pb-96",
} as const;