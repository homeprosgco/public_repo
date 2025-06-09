import 'package:responsive_framework/responsive_framework.dart';
import 'breakpoints_util.dart';

const List<Breakpoint> deviceWidthBreakpoints = [
  // Screen widths from 0 to 349 pixels
  Breakpoint(start: breakpointstart, end: breakpointxs - 1, name: 'xxs'),

  // Screen widths from 350 to 639 pixels
  Breakpoint(start: breakpointxs, end: breakpointsm - 1, name: 'xs'),

  // Screen widths from 640 to 767 pixels
  Breakpoint(start: breakpointsm, end: breakpointmd - 1, name: 'sm'),

  // Screen widths from 768 to 1023 pixels
  Breakpoint(start: breakpointmd, end: breakpointlg - 1, name: 'md'),

  // Screen widths from 1024 to 1279 pixels
  Breakpoint(start: breakpointlg, end: breakpointxl - 1, name: 'lg'),

  // Screen widths from 1280 to 1535 pixels
  Breakpoint(start: breakpointxl, end: breakpointxxl - 1, name: 'xl'),

  // Screen widths from 1536 pixels up to 2100 pixels
  Breakpoint(start: breakpointxxl, end: 2100, name: 'xxl'),
];

