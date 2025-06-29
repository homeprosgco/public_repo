import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type LeftType = 
  | LeftValue
  | Partial<Record<ResponsiveBreakpoint, LeftValue>>;

export type LeftValue = keyof typeof LEFT_CLASS_MAP;

export const LEFT_CLASS_MAP = {
  "0": "left-0",
  "xs:0": "xs:left-0",
  "sm:0": "sm:left-0",
  "md:0": "md:left-0",
  "lg:0": "lg:left-0",
  "xl:0": "xl:left-0",
  "2xl:0": "2xl:left-0",
  "hover:0": "hover:left-0",
  "focus:0": "focus:left-0",
  "active:0": "active:left-0",
  "disabled:0": "disabled:left-0",
  "group-hover:0": "group-hover:left-0",
  "group:0": "group:left-0",
  "first:0": "first:left-0",
  "last:0": "last:left-0",
  "odd:0": "odd:left-0",
  "even:0": "even:left-0",
  "dark:0": "dark:left-0",
  "px": "left-px",
  "xs:px": "xs:left-px",
  "sm:px": "sm:left-px",
  "md:px": "md:left-px",
  "lg:px": "lg:left-px",
  "xl:px": "xl:left-px",
  "2xl:px": "2xl:left-px",
  "hover:px": "hover:left-px",
  "focus:px": "focus:left-px",
  "active:px": "active:left-px",
  "disabled:px": "disabled:left-px",
  "group-hover:px": "group-hover:left-px",
  "group:px": "group:left-px",
  "first:px": "first:left-px",
  "last:px": "last:left-px",
  "odd:px": "odd:left-px",
  "even:px": "even:left-px",
  "dark:px": "dark:left-px",
  "0.5": "left-0.5",
  "xs:0.5": "xs:left-0.5",
  "sm:0.5": "sm:left-0.5",
  "md:0.5": "md:left-0.5",
  "lg:0.5": "lg:left-0.5",
  "xl:0.5": "xl:left-0.5",
  "2xl:0.5": "2xl:left-0.5",
  "hover:0.5": "hover:left-0.5",
  "focus:0.5": "focus:left-0.5",
  "active:0.5": "active:left-0.5",
  "disabled:0.5": "disabled:left-0.5",
  "group-hover:0.5": "group-hover:left-0.5",
  "group:0.5": "group:left-0.5",
  "first:0.5": "first:left-0.5",
  "last:0.5": "last:left-0.5",
  "odd:0.5": "odd:left-0.5",
  "even:0.5": "even:left-0.5",
  "dark:0.5": "dark:left-0.5",
  "1": "left-1",
  "xs:1": "xs:left-1",
  "sm:1": "sm:left-1",
  "md:1": "md:left-1",
  "lg:1": "lg:left-1",
  "xl:1": "xl:left-1",
  "2xl:1": "2xl:left-1",
  "hover:1": "hover:left-1",
  "focus:1": "focus:left-1",
  "active:1": "active:left-1",
  "disabled:1": "disabled:left-1",
  "group-hover:1": "group-hover:left-1",
  "group:1": "group:left-1",
  "first:1": "first:left-1",
  "last:1": "last:left-1",
  "odd:1": "odd:left-1",
  "even:1": "even:left-1",
  "dark:1": "dark:left-1",
  "1.5": "left-1.5",
  "xs:1.5": "xs:left-1.5",
  "sm:1.5": "sm:left-1.5",
  "md:1.5": "md:left-1.5",
  "lg:1.5": "lg:left-1.5",
  "xl:1.5": "xl:left-1.5",
  "2xl:1.5": "2xl:left-1.5",
  "hover:1.5": "hover:left-1.5",
  "focus:1.5": "focus:left-1.5",
  "active:1.5": "active:left-1.5",
  "disabled:1.5": "disabled:left-1.5",
  "group-hover:1.5": "group-hover:left-1.5",
  "group:1.5": "group:left-1.5",
  "first:1.5": "first:left-1.5",
  "last:1.5": "last:left-1.5",
  "odd:1.5": "odd:left-1.5",
  "even:1.5": "even:left-1.5",
  "dark:1.5": "dark:left-1.5",
  "2": "left-2",
  "xs:2": "xs:left-2",
  "sm:2": "sm:left-2",
  "md:2": "md:left-2",
  "lg:2": "lg:left-2",
  "xl:2": "xl:left-2",
  "2xl:2": "2xl:left-2",
  "hover:2": "hover:left-2",
  "focus:2": "focus:left-2",
  "active:2": "active:left-2",
  "disabled:2": "disabled:left-2",
  "group-hover:2": "group-hover:left-2",
  "group:2": "group:left-2",
  "first:2": "first:left-2",
  "last:2": "last:left-2",
  "odd:2": "odd:left-2",
  "even:2": "even:left-2",
  "dark:2": "dark:left-2",
  "2.5": "left-2.5",
  "xs:2.5": "xs:left-2.5",
  "sm:2.5": "sm:left-2.5",
  "md:2.5": "md:left-2.5",
  "lg:2.5": "lg:left-2.5",
  "xl:2.5": "xl:left-2.5",
  "2xl:2.5": "2xl:left-2.5",
  "hover:2.5": "hover:left-2.5",
  "focus:2.5": "focus:left-2.5",
  "active:2.5": "active:left-2.5",
  "disabled:2.5": "disabled:left-2.5",
  "group-hover:2.5": "group-hover:left-2.5",
  "group:2.5": "group:left-2.5",
  "first:2.5": "first:left-2.5",
  "last:2.5": "last:left-2.5",
  "odd:2.5": "odd:left-2.5",
  "even:2.5": "even:left-2.5",
  "dark:2.5": "dark:left-2.5",
  "3": "left-3",
  "xs:3": "xs:left-3",
  "sm:3": "sm:left-3",
  "md:3": "md:left-3",
  "lg:3": "lg:left-3",
  "xl:3": "xl:left-3",
  "2xl:3": "2xl:left-3",
  "hover:3": "hover:left-3",
  "focus:3": "focus:left-3",
  "active:3": "active:left-3",
  "disabled:3": "disabled:left-3",
  "group-hover:3": "group-hover:left-3",
  "group:3": "group:left-3",
  "first:3": "first:left-3",
  "last:3": "last:left-3",
  "odd:3": "odd:left-3",
  "even:3": "even:left-3",
  "dark:3": "dark:left-3",
  "3.5": "left-3.5",
  "xs:3.5": "xs:left-3.5",
  "sm:3.5": "sm:left-3.5",
  "md:3.5": "md:left-3.5",
  "lg:3.5": "lg:left-3.5",
  "xl:3.5": "xl:left-3.5",
  "2xl:3.5": "2xl:left-3.5",
  "hover:3.5": "hover:left-3.5",
  "focus:3.5": "focus:left-3.5",
  "active:3.5": "active:left-3.5",
  "disabled:3.5": "disabled:left-3.5",
  "group-hover:3.5": "group-hover:left-3.5",
  "group:3.5": "group:left-3.5",
  "first:3.5": "first:left-3.5",
  "last:3.5": "last:left-3.5",
  "odd:3.5": "odd:left-3.5",
  "even:3.5": "even:left-3.5",
  "dark:3.5": "dark:left-3.5",
  "4": "left-4",
  "xs:4": "xs:left-4",
  "sm:4": "sm:left-4",
  "md:4": "md:left-4",
  "lg:4": "lg:left-4",
  "xl:4": "xl:left-4",
  "2xl:4": "2xl:left-4",
  "hover:4": "hover:left-4",
  "focus:4": "focus:left-4",
  "active:4": "active:left-4",
  "disabled:4": "disabled:left-4",
  "group-hover:4": "group-hover:left-4",
  "group:4": "group:left-4",
  "first:4": "first:left-4",
  "last:4": "last:left-4",
  "odd:4": "odd:left-4",
  "even:4": "even:left-4",
  "dark:4": "dark:left-4",
  "5": "left-5",
  "xs:5": "xs:left-5",
  "sm:5": "sm:left-5",
  "md:5": "md:left-5",
  "lg:5": "lg:left-5",
  "xl:5": "xl:left-5",
  "2xl:5": "2xl:left-5",
  "hover:5": "hover:left-5",
  "focus:5": "focus:left-5",
  "active:5": "active:left-5",
  "disabled:5": "disabled:left-5",
  "group-hover:5": "group-hover:left-5",
  "group:5": "group:left-5",
  "first:5": "first:left-5",
  "last:5": "last:left-5",
  "odd:5": "odd:left-5",
  "even:5": "even:left-5",
  "dark:5": "dark:left-5",
  "6": "left-6",
  "xs:6": "xs:left-6",
  "sm:6": "sm:left-6",
  "md:6": "md:left-6",
  "lg:6": "lg:left-6",
  "xl:6": "xl:left-6",
  "2xl:6": "2xl:left-6",
  "hover:6": "hover:left-6",
  "focus:6": "focus:left-6",
  "active:6": "active:left-6",
  "disabled:6": "disabled:left-6",
  "group-hover:6": "group-hover:left-6",
  "group:6": "group:left-6",
  "first:6": "first:left-6",
  "last:6": "last:left-6",
  "odd:6": "odd:left-6",
  "even:6": "even:left-6",
  "dark:6": "dark:left-6",
  "7": "left-7",
  "xs:7": "xs:left-7",
  "sm:7": "sm:left-7",
  "md:7": "md:left-7",
  "lg:7": "lg:left-7",
  "xl:7": "xl:left-7",
  "2xl:7": "2xl:left-7",
  "hover:7": "hover:left-7",
  "focus:7": "focus:left-7",
  "active:7": "active:left-7",
  "disabled:7": "disabled:left-7",
  "group-hover:7": "group-hover:left-7",
  "group:7": "group:left-7",
  "first:7": "first:left-7",
  "last:7": "last:left-7",
  "odd:7": "odd:left-7",
  "even:7": "even:left-7",
  "dark:7": "dark:left-7",
  "8": "left-8",
  "xs:8": "xs:left-8",
  "sm:8": "sm:left-8",
  "md:8": "md:left-8",
  "lg:8": "lg:left-8",
  "xl:8": "xl:left-8",
  "2xl:8": "2xl:left-8",
  "hover:8": "hover:left-8",
  "focus:8": "focus:left-8",
  "active:8": "active:left-8",
  "disabled:8": "disabled:left-8",
  "group-hover:8": "group-hover:left-8",
  "group:8": "group:left-8",
  "first:8": "first:left-8",
  "last:8": "last:left-8",
  "odd:8": "odd:left-8",
  "even:8": "even:left-8",
  "dark:8": "dark:left-8",
  "9": "left-9",
  "xs:9": "xs:left-9",
  "sm:9": "sm:left-9",
  "md:9": "md:left-9",
  "lg:9": "lg:left-9",
  "xl:9": "xl:left-9",
  "2xl:9": "2xl:left-9",
  "hover:9": "hover:left-9",
  "focus:9": "focus:left-9",
  "active:9": "active:left-9",
  "disabled:9": "disabled:left-9",
  "group-hover:9": "group-hover:left-9",
  "group:9": "group:left-9",
  "first:9": "first:left-9",
  "last:9": "last:left-9",
  "odd:9": "odd:left-9",
  "even:9": "even:left-9",
  "dark:9": "dark:left-9",
  "10": "left-10",
  "xs:10": "xs:left-10",
  "sm:10": "sm:left-10",
  "md:10": "md:left-10",
  "lg:10": "lg:left-10",
  "xl:10": "xl:left-10",
  "2xl:10": "2xl:left-10",
  "hover:10": "hover:left-10",
  "focus:10": "focus:left-10",
  "active:10": "active:left-10",
  "disabled:10": "disabled:left-10",
  "group-hover:10": "group-hover:left-10",
  "group:10": "group:left-10",
  "first:10": "first:left-10",
  "last:10": "last:left-10",
  "odd:10": "odd:left-10",
  "even:10": "even:left-10",
  "dark:10": "dark:left-10",
  "11": "left-11",
  "xs:11": "xs:left-11",
  "sm:11": "sm:left-11",
  "md:11": "md:left-11",
  "lg:11": "lg:left-11",
  "xl:11": "xl:left-11",
  "2xl:11": "2xl:left-11",
  "hover:11": "hover:left-11",
  "focus:11": "focus:left-11",
  "active:11": "active:left-11",
  "disabled:11": "disabled:left-11",
  "group-hover:11": "group-hover:left-11",
  "group:11": "group:left-11",
  "first:11": "first:left-11",
  "last:11": "last:left-11",
  "odd:11": "odd:left-11",
  "even:11": "even:left-11",
  "dark:11": "dark:left-11",
  "12": "left-12",
  "xs:12": "xs:left-12",
  "sm:12": "sm:left-12",
  "md:12": "md:left-12",
  "lg:12": "lg:left-12",
  "xl:12": "xl:left-12",
  "2xl:12": "2xl:left-12",
  "hover:12": "hover:left-12",
  "focus:12": "focus:left-12",
  "active:12": "active:left-12",
  "disabled:12": "disabled:left-12",
  "group-hover:12": "group-hover:left-12",
  "group:12": "group:left-12",
  "first:12": "first:left-12",
  "last:12": "last:left-12",
  "odd:12": "odd:left-12",
  "even:12": "even:left-12",
  "dark:12": "dark:left-12",
  "14": "left-14",
  "xs:14": "xs:left-14",
  "sm:14": "sm:left-14",
  "md:14": "md:left-14",
  "lg:14": "lg:left-14",
  "xl:14": "xl:left-14",
  "2xl:14": "2xl:left-14",
  "hover:14": "hover:left-14",
  "focus:14": "focus:left-14",
  "active:14": "active:left-14",
  "disabled:14": "disabled:left-14",
  "group-hover:14": "group-hover:left-14",
  "group:14": "group:left-14",
  "first:14": "first:left-14",
  "last:14": "last:left-14",
  "odd:14": "odd:left-14",
  "even:14": "even:left-14",
  "dark:14": "dark:left-14",
  "16": "left-16",
  "xs:16": "xs:left-16",
  "sm:16": "sm:left-16",
  "md:16": "md:left-16",
  "lg:16": "lg:left-16",
  "xl:16": "xl:left-16",
  "2xl:16": "2xl:left-16",
  "hover:16": "hover:left-16",
  "focus:16": "focus:left-16",
  "active:16": "active:left-16",
  "disabled:16": "disabled:left-16",
  "group-hover:16": "group-hover:left-16",
  "group:16": "group:left-16",
  "first:16": "first:left-16",
  "last:16": "last:left-16",
  "odd:16": "odd:left-16",
  "even:16": "even:left-16",
  "dark:16": "dark:left-16",
  "20": "left-20",
  "xs:20": "xs:left-20",
  "sm:20": "sm:left-20",
  "md:20": "md:left-20",
  "lg:20": "lg:left-20",
  "xl:20": "xl:left-20",
  "2xl:20": "2xl:left-20",
  "hover:20": "hover:left-20",
  "focus:20": "focus:left-20",
  "active:20": "active:left-20",
  "disabled:20": "disabled:left-20",
  "group-hover:20": "group-hover:left-20",
  "group:20": "group:left-20",
  "first:20": "first:left-20",
  "last:20": "last:left-20",
  "odd:20": "odd:left-20",
  "even:20": "even:left-20",
  "dark:20": "dark:left-20",
  "24": "left-24",
  "xs:24": "xs:left-24",
  "sm:24": "sm:left-24",
  "md:24": "md:left-24",
  "lg:24": "lg:left-24",
  "xl:24": "xl:left-24",
  "2xl:24": "2xl:left-24",
  "hover:24": "hover:left-24",
  "focus:24": "focus:left-24",
  "active:24": "active:left-24",
  "disabled:24": "disabled:left-24",
  "group-hover:24": "group-hover:left-24",
  "group:24": "group:left-24",
  "first:24": "first:left-24",
  "last:24": "last:left-24",
  "odd:24": "odd:left-24",
  "even:24": "even:left-24",
  "dark:24": "dark:left-24",
  "28": "left-28",
  "xs:28": "xs:left-28",
  "sm:28": "sm:left-28",
  "md:28": "md:left-28",
  "lg:28": "lg:left-28",
  "xl:28": "xl:left-28",
  "2xl:28": "2xl:left-28",
  "hover:28": "hover:left-28",
  "focus:28": "focus:left-28",
  "active:28": "active:left-28",
  "disabled:28": "disabled:left-28",
  "group-hover:28": "group-hover:left-28",
  "group:28": "group:left-28",
  "first:28": "first:left-28",
  "last:28": "last:left-28",
  "odd:28": "odd:left-28",
  "even:28": "even:left-28",
  "dark:28": "dark:left-28",
  "32": "left-32",
  "xs:32": "xs:left-32",
  "sm:32": "sm:left-32",
  "md:32": "md:left-32",
  "lg:32": "lg:left-32",
  "xl:32": "xl:left-32",
  "2xl:32": "2xl:left-32",
  "hover:32": "hover:left-32",
  "focus:32": "focus:left-32",
  "active:32": "active:left-32",
  "disabled:32": "disabled:left-32",
  "group-hover:32": "group-hover:left-32",
  "group:32": "group:left-32",
  "first:32": "first:left-32",
  "last:32": "last:left-32",
  "odd:32": "odd:left-32",
  "even:32": "even:left-32",
  "dark:32": "dark:left-32",
  "36": "left-36",
  "xs:36": "xs:left-36",
  "sm:36": "sm:left-36",
  "md:36": "md:left-36",
  "lg:36": "lg:left-36",
  "xl:36": "xl:left-36",
  "2xl:36": "2xl:left-36",
  "hover:36": "hover:left-36",
  "focus:36": "focus:left-36",
  "active:36": "active:left-36",
  "disabled:36": "disabled:left-36",
  "group-hover:36": "group-hover:left-36",
  "group:36": "group:left-36",
  "first:36": "first:left-36",
  "last:36": "last:left-36",
  "odd:36": "odd:left-36",
  "even:36": "even:left-36",
  "dark:36": "dark:left-36",
  "40": "left-40",
  "xs:40": "xs:left-40",
  "sm:40": "sm:left-40",
  "md:40": "md:left-40",
  "lg:40": "lg:left-40",
  "xl:40": "xl:left-40",
  "2xl:40": "2xl:left-40",
  "hover:40": "hover:left-40",
  "focus:40": "focus:left-40",
  "active:40": "active:left-40",
  "disabled:40": "disabled:left-40",
  "group-hover:40": "group-hover:left-40",
  "group:40": "group:left-40",
  "first:40": "first:left-40",
  "last:40": "last:left-40",
  "odd:40": "odd:left-40",
  "even:40": "even:left-40",
  "dark:40": "dark:left-40",
  "44": "left-44",
  "xs:44": "xs:left-44",
  "sm:44": "sm:left-44",
  "md:44": "md:left-44",
  "lg:44": "lg:left-44",
  "xl:44": "xl:left-44",
  "2xl:44": "2xl:left-44",
  "hover:44": "hover:left-44",
  "focus:44": "focus:left-44",
  "active:44": "active:left-44",
  "disabled:44": "disabled:left-44",
  "group-hover:44": "group-hover:left-44",
  "group:44": "group:left-44",
  "first:44": "first:left-44",
  "last:44": "last:left-44",
  "odd:44": "odd:left-44",
  "even:44": "even:left-44",
  "dark:44": "dark:left-44",
  "48": "left-48",
  "xs:48": "xs:left-48",
  "sm:48": "sm:left-48",
  "md:48": "md:left-48",
  "lg:48": "lg:left-48",
  "xl:48": "xl:left-48",
  "2xl:48": "2xl:left-48",
  "hover:48": "hover:left-48",
  "focus:48": "focus:left-48",
  "active:48": "active:left-48",
  "disabled:48": "disabled:left-48",
  "group-hover:48": "group-hover:left-48",
  "group:48": "group:left-48",
  "first:48": "first:left-48",
  "last:48": "last:left-48",
  "odd:48": "odd:left-48",
  "even:48": "even:left-48",
  "dark:48": "dark:left-48",
  "52": "left-52",
  "xs:52": "xs:left-52",
  "sm:52": "sm:left-52",
  "md:52": "md:left-52",
  "lg:52": "lg:left-52",
  "xl:52": "xl:left-52",
  "2xl:52": "2xl:left-52",
  "hover:52": "hover:left-52",
  "focus:52": "focus:left-52",
  "active:52": "active:left-52",
  "disabled:52": "disabled:left-52",
  "group-hover:52": "group-hover:left-52",
  "group:52": "group:left-52",
  "first:52": "first:left-52",
  "last:52": "last:left-52",
  "odd:52": "odd:left-52",
  "even:52": "even:left-52",
  "dark:52": "dark:left-52",
  "56": "left-56",
  "xs:56": "xs:left-56",
  "sm:56": "sm:left-56",
  "md:56": "md:left-56",
  "lg:56": "lg:left-56",
  "xl:56": "xl:left-56",
  "2xl:56": "2xl:left-56",
  "hover:56": "hover:left-56",
  "focus:56": "focus:left-56",
  "active:56": "active:left-56",
  "disabled:56": "disabled:left-56",
  "group-hover:56": "group-hover:left-56",
  "group:56": "group:left-56",
  "first:56": "first:left-56",
  "last:56": "last:left-56",
  "odd:56": "odd:left-56",
  "even:56": "even:left-56",
  "dark:56": "dark:left-56",
  "60": "left-60",
  "xs:60": "xs:left-60",
  "sm:60": "sm:left-60",
  "md:60": "md:left-60",
  "lg:60": "lg:left-60",
  "xl:60": "xl:left-60",
  "2xl:60": "2xl:left-60",
  "hover:60": "hover:left-60",
  "focus:60": "focus:left-60",
  "active:60": "active:left-60",
  "disabled:60": "disabled:left-60",
  "group-hover:60": "group-hover:left-60",
  "group:60": "group:left-60",
  "first:60": "first:left-60",
  "last:60": "last:left-60",
  "odd:60": "odd:left-60",
  "even:60": "even:left-60",
  "dark:60": "dark:left-60",
  "64": "left-64",
  "xs:64": "xs:left-64",
  "sm:64": "sm:left-64",
  "md:64": "md:left-64",
  "lg:64": "lg:left-64",
  "xl:64": "xl:left-64",
  "2xl:64": "2xl:left-64",
  "hover:64": "hover:left-64",
  "focus:64": "focus:left-64",
  "active:64": "active:left-64",
  "disabled:64": "disabled:left-64",
  "group-hover:64": "group-hover:left-64",
  "group:64": "group:left-64",
  "first:64": "first:left-64",
  "last:64": "last:left-64",
  "odd:64": "odd:left-64",
  "even:64": "even:left-64",
  "dark:64": "dark:left-64",
  "72": "left-72",
  "xs:72": "xs:left-72",
  "sm:72": "sm:left-72",
  "md:72": "md:left-72",
  "lg:72": "lg:left-72",
  "xl:72": "xl:left-72",
  "2xl:72": "2xl:left-72",
  "hover:72": "hover:left-72",
  "focus:72": "focus:left-72",
  "active:72": "active:left-72",
  "disabled:72": "disabled:left-72",
  "group-hover:72": "group-hover:left-72",
  "group:72": "group:left-72",
  "first:72": "first:left-72",
  "last:72": "last:left-72",
  "odd:72": "odd:left-72",
  "even:72": "even:left-72",
  "dark:72": "dark:left-72",
  "80": "left-80",
  "xs:80": "xs:left-80",
  "sm:80": "sm:left-80",
  "md:80": "md:left-80",
  "lg:80": "lg:left-80",
  "xl:80": "xl:left-80",
  "2xl:80": "2xl:left-80",
  "hover:80": "hover:left-80",
  "focus:80": "focus:left-80",
  "active:80": "active:left-80",
  "disabled:80": "disabled:left-80",
  "group-hover:80": "group-hover:left-80",
  "group:80": "group:left-80",
  "first:80": "first:left-80",
  "last:80": "last:left-80",
  "odd:80": "odd:left-80",
  "even:80": "even:left-80",
  "dark:80": "dark:left-80",
  "96": "left-96",
  "xs:96": "xs:left-96",
  "sm:96": "sm:left-96",
  "md:96": "md:left-96",
  "lg:96": "lg:left-96",
  "xl:96": "xl:left-96",
  "2xl:96": "2xl:left-96",
  "hover:96": "hover:left-96",
  "focus:96": "focus:left-96",
  "active:96": "active:left-96",
  "disabled:96": "disabled:left-96",
  "group-hover:96": "group-hover:left-96",
  "group:96": "group:left-96",
  "first:96": "first:left-96",
  "last:96": "last:left-96",
  "odd:96": "odd:left-96",
  "even:96": "even:left-96",
  "dark:96": "dark:left-96",
  "auto": "left-auto",
  "xs:auto": "xs:left-auto",
  "sm:auto": "sm:left-auto",
  "md:auto": "md:left-auto",
  "lg:auto": "lg:left-auto",
  "xl:auto": "xl:left-auto",
  "2xl:auto": "2xl:left-auto",
  "hover:auto": "hover:left-auto",
  "focus:auto": "focus:left-auto",
  "active:auto": "active:left-auto",
  "disabled:auto": "disabled:left-auto",
  "group-hover:auto": "group-hover:left-auto",
  "group:auto": "group:left-auto",
  "first:auto": "first:left-auto",
  "last:auto": "last:left-auto",
  "odd:auto": "odd:left-auto",
  "even:auto": "even:left-auto",
  "dark:auto": "dark:left-auto",
  "2/4": "left-2/4",
  "xs:2/4": "xs:left-2/4",
  "sm:2/4": "sm:left-2/4",
  "md:2/4": "md:left-2/4",
  "lg:2/4": "lg:left-2/4",
  "xl:2/4": "xl:left-2/4",
  "2xl:2/4": "2xl:left-2/4",
  "hover:2/4": "hover:left-2/4",
  "focus:2/4": "focus:left-2/4",
  "active:2/4": "active:left-2/4",
  "disabled:2/4": "disabled:left-2/4",
  "group-hover:2/4": "group-hover:left-2/4",
  "group:2/4": "group:left-2/4",
  "first:2/4": "first:left-2/4",
  "last:2/4": "last:left-2/4",
  "odd:2/4": "odd:left-2/4",
  "even:2/4": "even:left-2/4",
  "dark:2/4": "dark:left-2/4",
  "1/3": "left-1/3",
  "xs:1/3": "xs:left-1/3",
  "sm:1/3": "sm:left-1/3",
  "md:1/3": "md:left-1/3",
  "lg:1/3": "lg:left-1/3",
  "xl:1/3": "xl:left-1/3",
  "2xl:1/3": "2xl:left-1/3",
  "hover:1/3": "hover:left-1/3",
  "focus:1/3": "focus:left-1/3",
  "active:1/3": "active:left-1/3",
  "disabled:1/3": "disabled:left-1/3",
  "group-hover:1/3": "group-hover:left-1/3",
  "group:1/3": "group:left-1/3",
  "first:1/3": "first:left-1/3",
  "last:1/3": "last:left-1/3",
  "odd:1/3": "odd:left-1/3",
  "even:1/3": "even:left-1/3",
  "dark:1/3": "dark:left-1/3",
  "2/3": "left-2/3",
  "xs:2/3": "xs:left-2/3",
  "sm:2/3": "sm:left-2/3",
  "md:2/3": "md:left-2/3",
  "lg:2/3": "lg:left-2/3",
  "xl:2/3": "xl:left-2/3",
  "2xl:2/3": "2xl:left-2/3",
  "hover:2/3": "hover:left-2/3",
  "focus:2/3": "focus:left-2/3",
  "active:2/3": "active:left-2/3",
  "disabled:2/3": "disabled:left-2/3",
  "group-hover:2/3": "group-hover:left-2/3",
  "group:2/3": "group:left-2/3",
  "first:2/3": "first:left-2/3",
  "last:2/3": "last:left-2/3",
  "odd:2/3": "odd:left-2/3",
  "even:2/3": "even:left-2/3",
  "dark:2/3": "dark:left-2/3",
  "1/4": "left-1/4",
  "xs:1/4": "xs:left-1/4",
  "sm:1/4": "sm:left-1/4",
  "md:1/4": "md:left-1/4",
  "lg:1/4": "lg:left-1/4",
  "xl:1/4": "xl:left-1/4",
  "2xl:1/4": "2xl:left-1/4",
  "hover:1/4": "hover:left-1/4",
  "focus:1/4": "focus:left-1/4",
  "active:1/4": "active:left-1/4",
  "disabled:1/4": "disabled:left-1/4",
  "group-hover:1/4": "group-hover:left-1/4",
  "group:1/4": "group:left-1/4",
  "first:1/4": "first:left-1/4",
  "last:1/4": "last:left-1/4",
  "odd:1/4": "odd:left-1/4",
  "even:1/4": "even:left-1/4",
  "dark:1/4": "dark:left-1/4",
  "3/4": "left-3/4",
  "xs:3/4": "xs:left-3/4",
  "sm:3/4": "sm:left-3/4",
  "md:3/4": "md:left-3/4",
  "lg:3/4": "lg:left-3/4",
  "xl:3/4": "xl:left-3/4",
  "2xl:3/4": "2xl:left-3/4",
  "hover:3/4": "hover:left-3/4",
  "focus:3/4": "focus:left-3/4",
  "active:3/4": "active:left-3/4",
  "disabled:3/4": "disabled:left-3/4",
  "group-hover:3/4": "group-hover:left-3/4",
  "group:3/4": "group:left-3/4",
  "first:3/4": "first:left-3/4",
  "last:3/4": "last:left-3/4",
  "odd:3/4": "odd:left-3/4",
  "even:3/4": "even:left-3/4",
  "dark:3/4": "dark:left-3/4",
  "100": "left-full",
  "xs:100": "xs:left-full",
  "sm:100": "sm:left-full",
  "md:100": "md:left-full",
  "lg:100": "lg:left-full",
  "xl:100": "xl:left-full",
  "2xl:100": "2xl:left-full",
  "hover:100": "hover:left-full",
  "focus:100": "focus:left-full",
  "active:100": "active:left-full",
  "disabled:100": "disabled:left-full",
  "group-hover:100": "group-hover:left-full",
  "group:100": "group:left-full",
  "first:100": "first:left-full",
  "last:100": "last:left-full",
  "odd:100": "odd:left-full",
  "even:100": "even:left-full",
  "dark:100": "dark:left-full",
} as const;