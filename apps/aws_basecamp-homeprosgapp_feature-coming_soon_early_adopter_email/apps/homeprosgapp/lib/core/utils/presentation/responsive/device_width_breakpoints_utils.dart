import 'package:responsive_framework/responsive_framework.dart';
import 'breakpoints_util.dart';

const List<Breakpoint> deviceWidthBreakpoints = [
  Breakpoint(start: breakpointstart, end: breakpointxs - 1, name: 'xxs'),
  Breakpoint(start: breakpointxs, end: breakpointsm - 1, name: 'xs'),
  Breakpoint(start: breakpointsm, end: breakpointmd - 1, name: 'sm'),
  Breakpoint(start: breakpointmd, end: breakpointlg - 1, name: 'md'),
  Breakpoint(start: breakpointlg, end: breakpointxl - 1, name: 'lg'),
  Breakpoint(start: breakpointxl, end: breakpointxxl - 1, name: 'xl'),
  Breakpoint(start: breakpointxxl, end: 2100, name: 'xxl'),
];
