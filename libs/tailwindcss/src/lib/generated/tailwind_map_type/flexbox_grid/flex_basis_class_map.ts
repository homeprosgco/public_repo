import type { ResponsiveBreakpoint } from "../../../types/responsive_breakpoint.types";

export type FlexBasisType = 
  | FlexBasisValue
  | Partial<Record<ResponsiveBreakpoint, FlexBasisValue>>;

export type FlexBasisValue = keyof typeof FLEX_BASIS_CLASS_MAP;

export const FLEX_BASIS_CLASS_MAP = {
  "0": "basis-0",
  "xs:0": "xs:basis-0",
  "sm:0": "sm:basis-0",
  "md:0": "md:basis-0",
  "lg:0": "lg:basis-0",
  "xl:0": "xl:basis-0",
  "2xl:0": "2xl:basis-0",
  "hover:0": "hover:basis-0",
  "focus:0": "focus:basis-0",
  "active:0": "active:basis-0",
  "disabled:0": "disabled:basis-0",
  "group-hover:0": "group-hover:basis-0",
  "group:0": "group:basis-0",
  "first:0": "first:basis-0",
  "last:0": "last:basis-0",
  "odd:0": "odd:basis-0",
  "even:0": "even:basis-0",
  "dark:0": "dark:basis-0",
  "1": "basis-1",
  "xs:1": "xs:basis-1",
  "sm:1": "sm:basis-1",
  "md:1": "md:basis-1",
  "lg:1": "lg:basis-1",
  "xl:1": "xl:basis-1",
  "2xl:1": "2xl:basis-1",
  "hover:1": "hover:basis-1",
  "focus:1": "focus:basis-1",
  "active:1": "active:basis-1",
  "disabled:1": "disabled:basis-1",
  "group-hover:1": "group-hover:basis-1",
  "group:1": "group:basis-1",
  "first:1": "first:basis-1",
  "last:1": "last:basis-1",
  "odd:1": "odd:basis-1",
  "even:1": "even:basis-1",
  "dark:1": "dark:basis-1",
  "2": "basis-2",
  "xs:2": "xs:basis-2",
  "sm:2": "sm:basis-2",
  "md:2": "md:basis-2",
  "lg:2": "lg:basis-2",
  "xl:2": "xl:basis-2",
  "2xl:2": "2xl:basis-2",
  "hover:2": "hover:basis-2",
  "focus:2": "focus:basis-2",
  "active:2": "active:basis-2",
  "disabled:2": "disabled:basis-2",
  "group-hover:2": "group-hover:basis-2",
  "group:2": "group:basis-2",
  "first:2": "first:basis-2",
  "last:2": "last:basis-2",
  "odd:2": "odd:basis-2",
  "even:2": "even:basis-2",
  "dark:2": "dark:basis-2",
  "3": "basis-3",
  "xs:3": "xs:basis-3",
  "sm:3": "sm:basis-3",
  "md:3": "md:basis-3",
  "lg:3": "lg:basis-3",
  "xl:3": "xl:basis-3",
  "2xl:3": "2xl:basis-3",
  "hover:3": "hover:basis-3",
  "focus:3": "focus:basis-3",
  "active:3": "active:basis-3",
  "disabled:3": "disabled:basis-3",
  "group-hover:3": "group-hover:basis-3",
  "group:3": "group:basis-3",
  "first:3": "first:basis-3",
  "last:3": "last:basis-3",
  "odd:3": "odd:basis-3",
  "even:3": "even:basis-3",
  "dark:3": "dark:basis-3",
  "4": "basis-4",
  "xs:4": "xs:basis-4",
  "sm:4": "sm:basis-4",
  "md:4": "md:basis-4",
  "lg:4": "lg:basis-4",
  "xl:4": "xl:basis-4",
  "2xl:4": "2xl:basis-4",
  "hover:4": "hover:basis-4",
  "focus:4": "focus:basis-4",
  "active:4": "active:basis-4",
  "disabled:4": "disabled:basis-4",
  "group-hover:4": "group-hover:basis-4",
  "group:4": "group:basis-4",
  "first:4": "first:basis-4",
  "last:4": "last:basis-4",
  "odd:4": "odd:basis-4",
  "even:4": "even:basis-4",
  "dark:4": "dark:basis-4",
  "5": "basis-5",
  "xs:5": "xs:basis-5",
  "sm:5": "sm:basis-5",
  "md:5": "md:basis-5",
  "lg:5": "lg:basis-5",
  "xl:5": "xl:basis-5",
  "2xl:5": "2xl:basis-5",
  "hover:5": "hover:basis-5",
  "focus:5": "focus:basis-5",
  "active:5": "active:basis-5",
  "disabled:5": "disabled:basis-5",
  "group-hover:5": "group-hover:basis-5",
  "group:5": "group:basis-5",
  "first:5": "first:basis-5",
  "last:5": "last:basis-5",
  "odd:5": "odd:basis-5",
  "even:5": "even:basis-5",
  "dark:5": "dark:basis-5",
  "6": "basis-6",
  "xs:6": "xs:basis-6",
  "sm:6": "sm:basis-6",
  "md:6": "md:basis-6",
  "lg:6": "lg:basis-6",
  "xl:6": "xl:basis-6",
  "2xl:6": "2xl:basis-6",
  "hover:6": "hover:basis-6",
  "focus:6": "focus:basis-6",
  "active:6": "active:basis-6",
  "disabled:6": "disabled:basis-6",
  "group-hover:6": "group-hover:basis-6",
  "group:6": "group:basis-6",
  "first:6": "first:basis-6",
  "last:6": "last:basis-6",
  "odd:6": "odd:basis-6",
  "even:6": "even:basis-6",
  "dark:6": "dark:basis-6",
  "7": "basis-7",
  "xs:7": "xs:basis-7",
  "sm:7": "sm:basis-7",
  "md:7": "md:basis-7",
  "lg:7": "lg:basis-7",
  "xl:7": "xl:basis-7",
  "2xl:7": "2xl:basis-7",
  "hover:7": "hover:basis-7",
  "focus:7": "focus:basis-7",
  "active:7": "active:basis-7",
  "disabled:7": "disabled:basis-7",
  "group-hover:7": "group-hover:basis-7",
  "group:7": "group:basis-7",
  "first:7": "first:basis-7",
  "last:7": "last:basis-7",
  "odd:7": "odd:basis-7",
  "even:7": "even:basis-7",
  "dark:7": "dark:basis-7",
  "8": "basis-8",
  "xs:8": "xs:basis-8",
  "sm:8": "sm:basis-8",
  "md:8": "md:basis-8",
  "lg:8": "lg:basis-8",
  "xl:8": "xl:basis-8",
  "2xl:8": "2xl:basis-8",
  "hover:8": "hover:basis-8",
  "focus:8": "focus:basis-8",
  "active:8": "active:basis-8",
  "disabled:8": "disabled:basis-8",
  "group-hover:8": "group-hover:basis-8",
  "group:8": "group:basis-8",
  "first:8": "first:basis-8",
  "last:8": "last:basis-8",
  "odd:8": "odd:basis-8",
  "even:8": "even:basis-8",
  "dark:8": "dark:basis-8",
  "9": "basis-9",
  "xs:9": "xs:basis-9",
  "sm:9": "sm:basis-9",
  "md:9": "md:basis-9",
  "lg:9": "lg:basis-9",
  "xl:9": "xl:basis-9",
  "2xl:9": "2xl:basis-9",
  "hover:9": "hover:basis-9",
  "focus:9": "focus:basis-9",
  "active:9": "active:basis-9",
  "disabled:9": "disabled:basis-9",
  "group-hover:9": "group-hover:basis-9",
  "group:9": "group:basis-9",
  "first:9": "first:basis-9",
  "last:9": "last:basis-9",
  "odd:9": "odd:basis-9",
  "even:9": "even:basis-9",
  "dark:9": "dark:basis-9",
  "10": "basis-10",
  "xs:10": "xs:basis-10",
  "sm:10": "sm:basis-10",
  "md:10": "md:basis-10",
  "lg:10": "lg:basis-10",
  "xl:10": "xl:basis-10",
  "2xl:10": "2xl:basis-10",
  "hover:10": "hover:basis-10",
  "focus:10": "focus:basis-10",
  "active:10": "active:basis-10",
  "disabled:10": "disabled:basis-10",
  "group-hover:10": "group-hover:basis-10",
  "group:10": "group:basis-10",
  "first:10": "first:basis-10",
  "last:10": "last:basis-10",
  "odd:10": "odd:basis-10",
  "even:10": "even:basis-10",
  "dark:10": "dark:basis-10",
  "11": "basis-11",
  "xs:11": "xs:basis-11",
  "sm:11": "sm:basis-11",
  "md:11": "md:basis-11",
  "lg:11": "lg:basis-11",
  "xl:11": "xl:basis-11",
  "2xl:11": "2xl:basis-11",
  "hover:11": "hover:basis-11",
  "focus:11": "focus:basis-11",
  "active:11": "active:basis-11",
  "disabled:11": "disabled:basis-11",
  "group-hover:11": "group-hover:basis-11",
  "group:11": "group:basis-11",
  "first:11": "first:basis-11",
  "last:11": "last:basis-11",
  "odd:11": "odd:basis-11",
  "even:11": "even:basis-11",
  "dark:11": "dark:basis-11",
  "12": "basis-12",
  "xs:12": "xs:basis-12",
  "sm:12": "sm:basis-12",
  "md:12": "md:basis-12",
  "lg:12": "lg:basis-12",
  "xl:12": "xl:basis-12",
  "2xl:12": "2xl:basis-12",
  "hover:12": "hover:basis-12",
  "focus:12": "focus:basis-12",
  "active:12": "active:basis-12",
  "disabled:12": "disabled:basis-12",
  "group-hover:12": "group-hover:basis-12",
  "group:12": "group:basis-12",
  "first:12": "first:basis-12",
  "last:12": "last:basis-12",
  "odd:12": "odd:basis-12",
  "even:12": "even:basis-12",
  "dark:12": "dark:basis-12",
  "14": "basis-14",
  "xs:14": "xs:basis-14",
  "sm:14": "sm:basis-14",
  "md:14": "md:basis-14",
  "lg:14": "lg:basis-14",
  "xl:14": "xl:basis-14",
  "2xl:14": "2xl:basis-14",
  "hover:14": "hover:basis-14",
  "focus:14": "focus:basis-14",
  "active:14": "active:basis-14",
  "disabled:14": "disabled:basis-14",
  "group-hover:14": "group-hover:basis-14",
  "group:14": "group:basis-14",
  "first:14": "first:basis-14",
  "last:14": "last:basis-14",
  "odd:14": "odd:basis-14",
  "even:14": "even:basis-14",
  "dark:14": "dark:basis-14",
  "16": "basis-16",
  "xs:16": "xs:basis-16",
  "sm:16": "sm:basis-16",
  "md:16": "md:basis-16",
  "lg:16": "lg:basis-16",
  "xl:16": "xl:basis-16",
  "2xl:16": "2xl:basis-16",
  "hover:16": "hover:basis-16",
  "focus:16": "focus:basis-16",
  "active:16": "active:basis-16",
  "disabled:16": "disabled:basis-16",
  "group-hover:16": "group-hover:basis-16",
  "group:16": "group:basis-16",
  "first:16": "first:basis-16",
  "last:16": "last:basis-16",
  "odd:16": "odd:basis-16",
  "even:16": "even:basis-16",
  "dark:16": "dark:basis-16",
  "20": "basis-20",
  "xs:20": "xs:basis-20",
  "sm:20": "sm:basis-20",
  "md:20": "md:basis-20",
  "lg:20": "lg:basis-20",
  "xl:20": "xl:basis-20",
  "2xl:20": "2xl:basis-20",
  "hover:20": "hover:basis-20",
  "focus:20": "focus:basis-20",
  "active:20": "active:basis-20",
  "disabled:20": "disabled:basis-20",
  "group-hover:20": "group-hover:basis-20",
  "group:20": "group:basis-20",
  "first:20": "first:basis-20",
  "last:20": "last:basis-20",
  "odd:20": "odd:basis-20",
  "even:20": "even:basis-20",
  "dark:20": "dark:basis-20",
  "24": "basis-24",
  "xs:24": "xs:basis-24",
  "sm:24": "sm:basis-24",
  "md:24": "md:basis-24",
  "lg:24": "lg:basis-24",
  "xl:24": "xl:basis-24",
  "2xl:24": "2xl:basis-24",
  "hover:24": "hover:basis-24",
  "focus:24": "focus:basis-24",
  "active:24": "active:basis-24",
  "disabled:24": "disabled:basis-24",
  "group-hover:24": "group-hover:basis-24",
  "group:24": "group:basis-24",
  "first:24": "first:basis-24",
  "last:24": "last:basis-24",
  "odd:24": "odd:basis-24",
  "even:24": "even:basis-24",
  "dark:24": "dark:basis-24",
  "28": "basis-28",
  "xs:28": "xs:basis-28",
  "sm:28": "sm:basis-28",
  "md:28": "md:basis-28",
  "lg:28": "lg:basis-28",
  "xl:28": "xl:basis-28",
  "2xl:28": "2xl:basis-28",
  "hover:28": "hover:basis-28",
  "focus:28": "focus:basis-28",
  "active:28": "active:basis-28",
  "disabled:28": "disabled:basis-28",
  "group-hover:28": "group-hover:basis-28",
  "group:28": "group:basis-28",
  "first:28": "first:basis-28",
  "last:28": "last:basis-28",
  "odd:28": "odd:basis-28",
  "even:28": "even:basis-28",
  "dark:28": "dark:basis-28",
  "32": "basis-32",
  "xs:32": "xs:basis-32",
  "sm:32": "sm:basis-32",
  "md:32": "md:basis-32",
  "lg:32": "lg:basis-32",
  "xl:32": "xl:basis-32",
  "2xl:32": "2xl:basis-32",
  "hover:32": "hover:basis-32",
  "focus:32": "focus:basis-32",
  "active:32": "active:basis-32",
  "disabled:32": "disabled:basis-32",
  "group-hover:32": "group-hover:basis-32",
  "group:32": "group:basis-32",
  "first:32": "first:basis-32",
  "last:32": "last:basis-32",
  "odd:32": "odd:basis-32",
  "even:32": "even:basis-32",
  "dark:32": "dark:basis-32",
  "36": "basis-36",
  "xs:36": "xs:basis-36",
  "sm:36": "sm:basis-36",
  "md:36": "md:basis-36",
  "lg:36": "lg:basis-36",
  "xl:36": "xl:basis-36",
  "2xl:36": "2xl:basis-36",
  "hover:36": "hover:basis-36",
  "focus:36": "focus:basis-36",
  "active:36": "active:basis-36",
  "disabled:36": "disabled:basis-36",
  "group-hover:36": "group-hover:basis-36",
  "group:36": "group:basis-36",
  "first:36": "first:basis-36",
  "last:36": "last:basis-36",
  "odd:36": "odd:basis-36",
  "even:36": "even:basis-36",
  "dark:36": "dark:basis-36",
  "40": "basis-40",
  "xs:40": "xs:basis-40",
  "sm:40": "sm:basis-40",
  "md:40": "md:basis-40",
  "lg:40": "lg:basis-40",
  "xl:40": "xl:basis-40",
  "2xl:40": "2xl:basis-40",
  "hover:40": "hover:basis-40",
  "focus:40": "focus:basis-40",
  "active:40": "active:basis-40",
  "disabled:40": "disabled:basis-40",
  "group-hover:40": "group-hover:basis-40",
  "group:40": "group:basis-40",
  "first:40": "first:basis-40",
  "last:40": "last:basis-40",
  "odd:40": "odd:basis-40",
  "even:40": "even:basis-40",
  "dark:40": "dark:basis-40",
  "44": "basis-44",
  "xs:44": "xs:basis-44",
  "sm:44": "sm:basis-44",
  "md:44": "md:basis-44",
  "lg:44": "lg:basis-44",
  "xl:44": "xl:basis-44",
  "2xl:44": "2xl:basis-44",
  "hover:44": "hover:basis-44",
  "focus:44": "focus:basis-44",
  "active:44": "active:basis-44",
  "disabled:44": "disabled:basis-44",
  "group-hover:44": "group-hover:basis-44",
  "group:44": "group:basis-44",
  "first:44": "first:basis-44",
  "last:44": "last:basis-44",
  "odd:44": "odd:basis-44",
  "even:44": "even:basis-44",
  "dark:44": "dark:basis-44",
  "48": "basis-48",
  "xs:48": "xs:basis-48",
  "sm:48": "sm:basis-48",
  "md:48": "md:basis-48",
  "lg:48": "lg:basis-48",
  "xl:48": "xl:basis-48",
  "2xl:48": "2xl:basis-48",
  "hover:48": "hover:basis-48",
  "focus:48": "focus:basis-48",
  "active:48": "active:basis-48",
  "disabled:48": "disabled:basis-48",
  "group-hover:48": "group-hover:basis-48",
  "group:48": "group:basis-48",
  "first:48": "first:basis-48",
  "last:48": "last:basis-48",
  "odd:48": "odd:basis-48",
  "even:48": "even:basis-48",
  "dark:48": "dark:basis-48",
  "52": "basis-52",
  "xs:52": "xs:basis-52",
  "sm:52": "sm:basis-52",
  "md:52": "md:basis-52",
  "lg:52": "lg:basis-52",
  "xl:52": "xl:basis-52",
  "2xl:52": "2xl:basis-52",
  "hover:52": "hover:basis-52",
  "focus:52": "focus:basis-52",
  "active:52": "active:basis-52",
  "disabled:52": "disabled:basis-52",
  "group-hover:52": "group-hover:basis-52",
  "group:52": "group:basis-52",
  "first:52": "first:basis-52",
  "last:52": "last:basis-52",
  "odd:52": "odd:basis-52",
  "even:52": "even:basis-52",
  "dark:52": "dark:basis-52",
  "56": "basis-56",
  "xs:56": "xs:basis-56",
  "sm:56": "sm:basis-56",
  "md:56": "md:basis-56",
  "lg:56": "lg:basis-56",
  "xl:56": "xl:basis-56",
  "2xl:56": "2xl:basis-56",
  "hover:56": "hover:basis-56",
  "focus:56": "focus:basis-56",
  "active:56": "active:basis-56",
  "disabled:56": "disabled:basis-56",
  "group-hover:56": "group-hover:basis-56",
  "group:56": "group:basis-56",
  "first:56": "first:basis-56",
  "last:56": "last:basis-56",
  "odd:56": "odd:basis-56",
  "even:56": "even:basis-56",
  "dark:56": "dark:basis-56",
  "60": "basis-60",
  "xs:60": "xs:basis-60",
  "sm:60": "sm:basis-60",
  "md:60": "md:basis-60",
  "lg:60": "lg:basis-60",
  "xl:60": "xl:basis-60",
  "2xl:60": "2xl:basis-60",
  "hover:60": "hover:basis-60",
  "focus:60": "focus:basis-60",
  "active:60": "active:basis-60",
  "disabled:60": "disabled:basis-60",
  "group-hover:60": "group-hover:basis-60",
  "group:60": "group:basis-60",
  "first:60": "first:basis-60",
  "last:60": "last:basis-60",
  "odd:60": "odd:basis-60",
  "even:60": "even:basis-60",
  "dark:60": "dark:basis-60",
  "64": "basis-64",
  "xs:64": "xs:basis-64",
  "sm:64": "sm:basis-64",
  "md:64": "md:basis-64",
  "lg:64": "lg:basis-64",
  "xl:64": "xl:basis-64",
  "2xl:64": "2xl:basis-64",
  "hover:64": "hover:basis-64",
  "focus:64": "focus:basis-64",
  "active:64": "active:basis-64",
  "disabled:64": "disabled:basis-64",
  "group-hover:64": "group-hover:basis-64",
  "group:64": "group:basis-64",
  "first:64": "first:basis-64",
  "last:64": "last:basis-64",
  "odd:64": "odd:basis-64",
  "even:64": "even:basis-64",
  "dark:64": "dark:basis-64",
  "72": "basis-72",
  "xs:72": "xs:basis-72",
  "sm:72": "sm:basis-72",
  "md:72": "md:basis-72",
  "lg:72": "lg:basis-72",
  "xl:72": "xl:basis-72",
  "2xl:72": "2xl:basis-72",
  "hover:72": "hover:basis-72",
  "focus:72": "focus:basis-72",
  "active:72": "active:basis-72",
  "disabled:72": "disabled:basis-72",
  "group-hover:72": "group-hover:basis-72",
  "group:72": "group:basis-72",
  "first:72": "first:basis-72",
  "last:72": "last:basis-72",
  "odd:72": "odd:basis-72",
  "even:72": "even:basis-72",
  "dark:72": "dark:basis-72",
  "80": "basis-80",
  "xs:80": "xs:basis-80",
  "sm:80": "sm:basis-80",
  "md:80": "md:basis-80",
  "lg:80": "lg:basis-80",
  "xl:80": "xl:basis-80",
  "2xl:80": "2xl:basis-80",
  "hover:80": "hover:basis-80",
  "focus:80": "focus:basis-80",
  "active:80": "active:basis-80",
  "disabled:80": "disabled:basis-80",
  "group-hover:80": "group-hover:basis-80",
  "group:80": "group:basis-80",
  "first:80": "first:basis-80",
  "last:80": "last:basis-80",
  "odd:80": "odd:basis-80",
  "even:80": "even:basis-80",
  "dark:80": "dark:basis-80",
  "96": "basis-96",
  "xs:96": "xs:basis-96",
  "sm:96": "sm:basis-96",
  "md:96": "md:basis-96",
  "lg:96": "lg:basis-96",
  "xl:96": "xl:basis-96",
  "2xl:96": "2xl:basis-96",
  "hover:96": "hover:basis-96",
  "focus:96": "focus:basis-96",
  "active:96": "active:basis-96",
  "disabled:96": "disabled:basis-96",
  "group-hover:96": "group-hover:basis-96",
  "group:96": "group:basis-96",
  "first:96": "first:basis-96",
  "last:96": "last:basis-96",
  "odd:96": "odd:basis-96",
  "even:96": "even:basis-96",
  "dark:96": "dark:basis-96",
  "auto": "basis-auto",
  "xs:auto": "xs:basis-auto",
  "sm:auto": "sm:basis-auto",
  "md:auto": "md:basis-auto",
  "lg:auto": "lg:basis-auto",
  "xl:auto": "xl:basis-auto",
  "2xl:auto": "2xl:basis-auto",
  "hover:auto": "hover:basis-auto",
  "focus:auto": "focus:basis-auto",
  "active:auto": "active:basis-auto",
  "disabled:auto": "disabled:basis-auto",
  "group-hover:auto": "group-hover:basis-auto",
  "group:auto": "group:basis-auto",
  "first:auto": "first:basis-auto",
  "last:auto": "last:basis-auto",
  "odd:auto": "odd:basis-auto",
  "even:auto": "even:basis-auto",
  "dark:auto": "dark:basis-auto",
  "px": "basis-px",
  "xs:px": "xs:basis-px",
  "sm:px": "sm:basis-px",
  "md:px": "md:basis-px",
  "lg:px": "lg:basis-px",
  "xl:px": "xl:basis-px",
  "2xl:px": "2xl:basis-px",
  "hover:px": "hover:basis-px",
  "focus:px": "focus:basis-px",
  "active:px": "active:basis-px",
  "disabled:px": "disabled:basis-px",
  "group-hover:px": "group-hover:basis-px",
  "group:px": "group:basis-px",
  "first:px": "first:basis-px",
  "last:px": "last:basis-px",
  "odd:px": "odd:basis-px",
  "even:px": "even:basis-px",
  "dark:px": "dark:basis-px",
  "0.5": "basis-0.5",
  "xs:0.5": "xs:basis-0.5",
  "sm:0.5": "sm:basis-0.5",
  "md:0.5": "md:basis-0.5",
  "lg:0.5": "lg:basis-0.5",
  "xl:0.5": "xl:basis-0.5",
  "2xl:0.5": "2xl:basis-0.5",
  "hover:0.5": "hover:basis-0.5",
  "focus:0.5": "focus:basis-0.5",
  "active:0.5": "active:basis-0.5",
  "disabled:0.5": "disabled:basis-0.5",
  "group-hover:0.5": "group-hover:basis-0.5",
  "group:0.5": "group:basis-0.5",
  "first:0.5": "first:basis-0.5",
  "last:0.5": "last:basis-0.5",
  "odd:0.5": "odd:basis-0.5",
  "even:0.5": "even:basis-0.5",
  "dark:0.5": "dark:basis-0.5",
  "1.5": "basis-1.5",
  "xs:1.5": "xs:basis-1.5",
  "sm:1.5": "sm:basis-1.5",
  "md:1.5": "md:basis-1.5",
  "lg:1.5": "lg:basis-1.5",
  "xl:1.5": "xl:basis-1.5",
  "2xl:1.5": "2xl:basis-1.5",
  "hover:1.5": "hover:basis-1.5",
  "focus:1.5": "focus:basis-1.5",
  "active:1.5": "active:basis-1.5",
  "disabled:1.5": "disabled:basis-1.5",
  "group-hover:1.5": "group-hover:basis-1.5",
  "group:1.5": "group:basis-1.5",
  "first:1.5": "first:basis-1.5",
  "last:1.5": "last:basis-1.5",
  "odd:1.5": "odd:basis-1.5",
  "even:1.5": "even:basis-1.5",
  "dark:1.5": "dark:basis-1.5",
  "2.5": "basis-2.5",
  "xs:2.5": "xs:basis-2.5",
  "sm:2.5": "sm:basis-2.5",
  "md:2.5": "md:basis-2.5",
  "lg:2.5": "lg:basis-2.5",
  "xl:2.5": "xl:basis-2.5",
  "2xl:2.5": "2xl:basis-2.5",
  "hover:2.5": "hover:basis-2.5",
  "focus:2.5": "focus:basis-2.5",
  "active:2.5": "active:basis-2.5",
  "disabled:2.5": "disabled:basis-2.5",
  "group-hover:2.5": "group-hover:basis-2.5",
  "group:2.5": "group:basis-2.5",
  "first:2.5": "first:basis-2.5",
  "last:2.5": "last:basis-2.5",
  "odd:2.5": "odd:basis-2.5",
  "even:2.5": "even:basis-2.5",
  "dark:2.5": "dark:basis-2.5",
  "3.5": "basis-3.5",
  "xs:3.5": "xs:basis-3.5",
  "sm:3.5": "sm:basis-3.5",
  "md:3.5": "md:basis-3.5",
  "lg:3.5": "lg:basis-3.5",
  "xl:3.5": "xl:basis-3.5",
  "2xl:3.5": "2xl:basis-3.5",
  "hover:3.5": "hover:basis-3.5",
  "focus:3.5": "focus:basis-3.5",
  "active:3.5": "active:basis-3.5",
  "disabled:3.5": "disabled:basis-3.5",
  "group-hover:3.5": "group-hover:basis-3.5",
  "group:3.5": "group:basis-3.5",
  "first:3.5": "first:basis-3.5",
  "last:3.5": "last:basis-3.5",
  "odd:3.5": "odd:basis-3.5",
  "even:3.5": "even:basis-3.5",
  "dark:3.5": "dark:basis-3.5",
  "6/12": "basis-6/12",
  "xs:6/12": "xs:basis-6/12",
  "sm:6/12": "sm:basis-6/12",
  "md:6/12": "md:basis-6/12",
  "lg:6/12": "lg:basis-6/12",
  "xl:6/12": "xl:basis-6/12",
  "2xl:6/12": "2xl:basis-6/12",
  "hover:6/12": "hover:basis-6/12",
  "focus:6/12": "focus:basis-6/12",
  "active:6/12": "active:basis-6/12",
  "disabled:6/12": "disabled:basis-6/12",
  "group-hover:6/12": "group-hover:basis-6/12",
  "group:6/12": "group:basis-6/12",
  "first:6/12": "first:basis-6/12",
  "last:6/12": "last:basis-6/12",
  "odd:6/12": "odd:basis-6/12",
  "even:6/12": "even:basis-6/12",
  "dark:6/12": "dark:basis-6/12",
  "4/12": "basis-4/12",
  "xs:4/12": "xs:basis-4/12",
  "sm:4/12": "sm:basis-4/12",
  "md:4/12": "md:basis-4/12",
  "lg:4/12": "lg:basis-4/12",
  "xl:4/12": "xl:basis-4/12",
  "2xl:4/12": "2xl:basis-4/12",
  "hover:4/12": "hover:basis-4/12",
  "focus:4/12": "focus:basis-4/12",
  "active:4/12": "active:basis-4/12",
  "disabled:4/12": "disabled:basis-4/12",
  "group-hover:4/12": "group-hover:basis-4/12",
  "group:4/12": "group:basis-4/12",
  "first:4/12": "first:basis-4/12",
  "last:4/12": "last:basis-4/12",
  "odd:4/12": "odd:basis-4/12",
  "even:4/12": "even:basis-4/12",
  "dark:4/12": "dark:basis-4/12",
  "8/12": "basis-8/12",
  "xs:8/12": "xs:basis-8/12",
  "sm:8/12": "sm:basis-8/12",
  "md:8/12": "md:basis-8/12",
  "lg:8/12": "lg:basis-8/12",
  "xl:8/12": "xl:basis-8/12",
  "2xl:8/12": "2xl:basis-8/12",
  "hover:8/12": "hover:basis-8/12",
  "focus:8/12": "focus:basis-8/12",
  "active:8/12": "active:basis-8/12",
  "disabled:8/12": "disabled:basis-8/12",
  "group-hover:8/12": "group-hover:basis-8/12",
  "group:8/12": "group:basis-8/12",
  "first:8/12": "first:basis-8/12",
  "last:8/12": "last:basis-8/12",
  "odd:8/12": "odd:basis-8/12",
  "even:8/12": "even:basis-8/12",
  "dark:8/12": "dark:basis-8/12",
  "3/12": "basis-3/12",
  "xs:3/12": "xs:basis-3/12",
  "sm:3/12": "sm:basis-3/12",
  "md:3/12": "md:basis-3/12",
  "lg:3/12": "lg:basis-3/12",
  "xl:3/12": "xl:basis-3/12",
  "2xl:3/12": "2xl:basis-3/12",
  "hover:3/12": "hover:basis-3/12",
  "focus:3/12": "focus:basis-3/12",
  "active:3/12": "active:basis-3/12",
  "disabled:3/12": "disabled:basis-3/12",
  "group-hover:3/12": "group-hover:basis-3/12",
  "group:3/12": "group:basis-3/12",
  "first:3/12": "first:basis-3/12",
  "last:3/12": "last:basis-3/12",
  "odd:3/12": "odd:basis-3/12",
  "even:3/12": "even:basis-3/12",
  "dark:3/12": "dark:basis-3/12",
  "9/12": "basis-9/12",
  "xs:9/12": "xs:basis-9/12",
  "sm:9/12": "sm:basis-9/12",
  "md:9/12": "md:basis-9/12",
  "lg:9/12": "lg:basis-9/12",
  "xl:9/12": "xl:basis-9/12",
  "2xl:9/12": "2xl:basis-9/12",
  "hover:9/12": "hover:basis-9/12",
  "focus:9/12": "focus:basis-9/12",
  "active:9/12": "active:basis-9/12",
  "disabled:9/12": "disabled:basis-9/12",
  "group-hover:9/12": "group-hover:basis-9/12",
  "group:9/12": "group:basis-9/12",
  "first:9/12": "first:basis-9/12",
  "last:9/12": "last:basis-9/12",
  "odd:9/12": "odd:basis-9/12",
  "even:9/12": "even:basis-9/12",
  "dark:9/12": "dark:basis-9/12",
  "1/5": "basis-1/5",
  "xs:1/5": "xs:basis-1/5",
  "sm:1/5": "sm:basis-1/5",
  "md:1/5": "md:basis-1/5",
  "lg:1/5": "lg:basis-1/5",
  "xl:1/5": "xl:basis-1/5",
  "2xl:1/5": "2xl:basis-1/5",
  "hover:1/5": "hover:basis-1/5",
  "focus:1/5": "focus:basis-1/5",
  "active:1/5": "active:basis-1/5",
  "disabled:1/5": "disabled:basis-1/5",
  "group-hover:1/5": "group-hover:basis-1/5",
  "group:1/5": "group:basis-1/5",
  "first:1/5": "first:basis-1/5",
  "last:1/5": "last:basis-1/5",
  "odd:1/5": "odd:basis-1/5",
  "even:1/5": "even:basis-1/5",
  "dark:1/5": "dark:basis-1/5",
  "2/5": "basis-2/5",
  "xs:2/5": "xs:basis-2/5",
  "sm:2/5": "sm:basis-2/5",
  "md:2/5": "md:basis-2/5",
  "lg:2/5": "lg:basis-2/5",
  "xl:2/5": "xl:basis-2/5",
  "2xl:2/5": "2xl:basis-2/5",
  "hover:2/5": "hover:basis-2/5",
  "focus:2/5": "focus:basis-2/5",
  "active:2/5": "active:basis-2/5",
  "disabled:2/5": "disabled:basis-2/5",
  "group-hover:2/5": "group-hover:basis-2/5",
  "group:2/5": "group:basis-2/5",
  "first:2/5": "first:basis-2/5",
  "last:2/5": "last:basis-2/5",
  "odd:2/5": "odd:basis-2/5",
  "even:2/5": "even:basis-2/5",
  "dark:2/5": "dark:basis-2/5",
  "3/5": "basis-3/5",
  "xs:3/5": "xs:basis-3/5",
  "sm:3/5": "sm:basis-3/5",
  "md:3/5": "md:basis-3/5",
  "lg:3/5": "lg:basis-3/5",
  "xl:3/5": "xl:basis-3/5",
  "2xl:3/5": "2xl:basis-3/5",
  "hover:3/5": "hover:basis-3/5",
  "focus:3/5": "focus:basis-3/5",
  "active:3/5": "active:basis-3/5",
  "disabled:3/5": "disabled:basis-3/5",
  "group-hover:3/5": "group-hover:basis-3/5",
  "group:3/5": "group:basis-3/5",
  "first:3/5": "first:basis-3/5",
  "last:3/5": "last:basis-3/5",
  "odd:3/5": "odd:basis-3/5",
  "even:3/5": "even:basis-3/5",
  "dark:3/5": "dark:basis-3/5",
  "4/5": "basis-4/5",
  "xs:4/5": "xs:basis-4/5",
  "sm:4/5": "sm:basis-4/5",
  "md:4/5": "md:basis-4/5",
  "lg:4/5": "lg:basis-4/5",
  "xl:4/5": "xl:basis-4/5",
  "2xl:4/5": "2xl:basis-4/5",
  "hover:4/5": "hover:basis-4/5",
  "focus:4/5": "focus:basis-4/5",
  "active:4/5": "active:basis-4/5",
  "disabled:4/5": "disabled:basis-4/5",
  "group-hover:4/5": "group-hover:basis-4/5",
  "group:4/5": "group:basis-4/5",
  "first:4/5": "first:basis-4/5",
  "last:4/5": "last:basis-4/5",
  "odd:4/5": "odd:basis-4/5",
  "even:4/5": "even:basis-4/5",
  "dark:4/5": "dark:basis-4/5",
  "2/12": "basis-2/12",
  "xs:2/12": "xs:basis-2/12",
  "sm:2/12": "sm:basis-2/12",
  "md:2/12": "md:basis-2/12",
  "lg:2/12": "lg:basis-2/12",
  "xl:2/12": "xl:basis-2/12",
  "2xl:2/12": "2xl:basis-2/12",
  "hover:2/12": "hover:basis-2/12",
  "focus:2/12": "focus:basis-2/12",
  "active:2/12": "active:basis-2/12",
  "disabled:2/12": "disabled:basis-2/12",
  "group-hover:2/12": "group-hover:basis-2/12",
  "group:2/12": "group:basis-2/12",
  "first:2/12": "first:basis-2/12",
  "last:2/12": "last:basis-2/12",
  "odd:2/12": "odd:basis-2/12",
  "even:2/12": "even:basis-2/12",
  "dark:2/12": "dark:basis-2/12",
  "10/12": "basis-10/12",
  "xs:10/12": "xs:basis-10/12",
  "sm:10/12": "sm:basis-10/12",
  "md:10/12": "md:basis-10/12",
  "lg:10/12": "lg:basis-10/12",
  "xl:10/12": "xl:basis-10/12",
  "2xl:10/12": "2xl:basis-10/12",
  "hover:10/12": "hover:basis-10/12",
  "focus:10/12": "focus:basis-10/12",
  "active:10/12": "active:basis-10/12",
  "disabled:10/12": "disabled:basis-10/12",
  "group-hover:10/12": "group-hover:basis-10/12",
  "group:10/12": "group:basis-10/12",
  "first:10/12": "first:basis-10/12",
  "last:10/12": "last:basis-10/12",
  "odd:10/12": "odd:basis-10/12",
  "even:10/12": "even:basis-10/12",
  "dark:10/12": "dark:basis-10/12",
  "1/12": "basis-1/12",
  "xs:1/12": "xs:basis-1/12",
  "sm:1/12": "sm:basis-1/12",
  "md:1/12": "md:basis-1/12",
  "lg:1/12": "lg:basis-1/12",
  "xl:1/12": "xl:basis-1/12",
  "2xl:1/12": "2xl:basis-1/12",
  "hover:1/12": "hover:basis-1/12",
  "focus:1/12": "focus:basis-1/12",
  "active:1/12": "active:basis-1/12",
  "disabled:1/12": "disabled:basis-1/12",
  "group-hover:1/12": "group-hover:basis-1/12",
  "group:1/12": "group:basis-1/12",
  "first:1/12": "first:basis-1/12",
  "last:1/12": "last:basis-1/12",
  "odd:1/12": "odd:basis-1/12",
  "even:1/12": "even:basis-1/12",
  "dark:1/12": "dark:basis-1/12",
  "5/12": "basis-5/12",
  "xs:5/12": "xs:basis-5/12",
  "sm:5/12": "sm:basis-5/12",
  "md:5/12": "md:basis-5/12",
  "lg:5/12": "lg:basis-5/12",
  "xl:5/12": "xl:basis-5/12",
  "2xl:5/12": "2xl:basis-5/12",
  "hover:5/12": "hover:basis-5/12",
  "focus:5/12": "focus:basis-5/12",
  "active:5/12": "active:basis-5/12",
  "disabled:5/12": "disabled:basis-5/12",
  "group-hover:5/12": "group-hover:basis-5/12",
  "group:5/12": "group:basis-5/12",
  "first:5/12": "first:basis-5/12",
  "last:5/12": "last:basis-5/12",
  "odd:5/12": "odd:basis-5/12",
  "even:5/12": "even:basis-5/12",
  "dark:5/12": "dark:basis-5/12",
  "7/12": "basis-7/12",
  "xs:7/12": "xs:basis-7/12",
  "sm:7/12": "sm:basis-7/12",
  "md:7/12": "md:basis-7/12",
  "lg:7/12": "lg:basis-7/12",
  "xl:7/12": "xl:basis-7/12",
  "2xl:7/12": "2xl:basis-7/12",
  "hover:7/12": "hover:basis-7/12",
  "focus:7/12": "focus:basis-7/12",
  "active:7/12": "active:basis-7/12",
  "disabled:7/12": "disabled:basis-7/12",
  "group-hover:7/12": "group-hover:basis-7/12",
  "group:7/12": "group:basis-7/12",
  "first:7/12": "first:basis-7/12",
  "last:7/12": "last:basis-7/12",
  "odd:7/12": "odd:basis-7/12",
  "even:7/12": "even:basis-7/12",
  "dark:7/12": "dark:basis-7/12",
  "11/12": "basis-11/12",
  "xs:11/12": "xs:basis-11/12",
  "sm:11/12": "sm:basis-11/12",
  "md:11/12": "md:basis-11/12",
  "lg:11/12": "lg:basis-11/12",
  "xl:11/12": "xl:basis-11/12",
  "2xl:11/12": "2xl:basis-11/12",
  "hover:11/12": "hover:basis-11/12",
  "focus:11/12": "focus:basis-11/12",
  "active:11/12": "active:basis-11/12",
  "disabled:11/12": "disabled:basis-11/12",
  "group-hover:11/12": "group-hover:basis-11/12",
  "group:11/12": "group:basis-11/12",
  "first:11/12": "first:basis-11/12",
  "last:11/12": "last:basis-11/12",
  "odd:11/12": "odd:basis-11/12",
  "even:11/12": "even:basis-11/12",
  "dark:11/12": "dark:basis-11/12",
  "100": "basis-full",
  "xs:100": "xs:basis-full",
  "sm:100": "sm:basis-full",
  "md:100": "md:basis-full",
  "lg:100": "lg:basis-full",
  "xl:100": "xl:basis-full",
  "2xl:100": "2xl:basis-full",
  "hover:100": "hover:basis-full",
  "focus:100": "focus:basis-full",
  "active:100": "active:basis-full",
  "disabled:100": "disabled:basis-full",
  "group-hover:100": "group-hover:basis-full",
  "group:100": "group:basis-full",
  "first:100": "first:basis-full",
  "last:100": "last:basis-full",
  "odd:100": "odd:basis-full",
  "even:100": "even:basis-full",
  "dark:100": "dark:basis-full",
} as const;