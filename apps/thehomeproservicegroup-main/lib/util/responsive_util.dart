import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

const double breakpointstart = 0;
const double breakpointxs = 350;
const double breakpointsm = 640;
const double breakpointmd = 768;
const double breakpointlg = 1024;
const double breakpointxl = 1280;
const double breakpointxxl = 1536;

class ResponsiveUtil {
  static const List<Breakpoint> breakpoints = [
    Breakpoint(start: breakpointstart, end: breakpointxs - 1, name: 'xxs'),
    Breakpoint(start: breakpointxs, end: breakpointsm - 1, name: 'xs'),
    Breakpoint(start: breakpointsm, end: breakpointmd - 1, name: 'sm'),
    Breakpoint(start: breakpointmd, end: breakpointlg - 1, name: 'md'),
    Breakpoint(start: breakpointlg, end: breakpointxl - 1, name: 'lg'),
    Breakpoint(start: breakpointxl, end: breakpointxxl - 1, name: 'xl'),
    Breakpoint(start: breakpointxxl, end: double.infinity, name: 'xxl'),
  ];

  static T responsiveValue<T>({
    required BuildContext context,
    required T defaultValue,
    T? xxs,
    T? xs,
    T? sm,
    T? md,
    T? lg,
    T? xl,
    T? xxl,
  }) {
    final values = _getValuesWithFallback<T>(
      defaultValue: defaultValue,
      values: [xxs, xs, sm, md, lg, xl, xxl],
    );

    final responsiveValue = ResponsiveValue<T>(
      context,
      defaultValue: defaultValue,
      conditionalValues: [
        Condition.between(start: breakpointstart.toInt(), end: (breakpointxs - 1).toInt(), value: values[0]),
        Condition.between(start: breakpointxs.toInt(), end: (breakpointsm - 1).toInt(), value: values[1]),
        Condition.between(start: breakpointsm.toInt(), end: (breakpointmd - 1).toInt(), value: values[2]),
        Condition.between(start: breakpointmd.toInt(), end: (breakpointlg - 1).toInt(), value: values[3]),
        Condition.between(start: breakpointlg.toInt(), end: (breakpointxl - 1).toInt(), value: values[4]),
        Condition.between(start: breakpointxl.toInt(), end: (breakpointxxl - 1).toInt(), value: values[5]),
        Condition.between(start: breakpointxxl.toInt(), end: 5000, value: values[6]),
      ],
    );

    return responsiveValue.value;
  }

  static List<T> _getValuesWithFallback<T>({
    required T defaultValue,
    required List<T?> values,
  }) {
    final filledValues = <T>[];
    T previousValue = defaultValue;

    for (var value in values) {
      if (value != null) {
        filledValues.add(value);
        previousValue = value;
      } else {
        filledValues.add(previousValue);
      }
    }

    return filledValues;
  }

  static double responsiveHeight({
    required BuildContext context,
    required double defaultValue,
    double? xxs,
    double? xs,
    double? sm,
    double? md,
    double? lg,
    double? xl,
  }) {
    double height = MediaQuery.of(context).size.height;
    double screenHeight(double percentage) {
      return height * percentage;
    }

    if (height <= 600) {
      return screenHeight(xs ?? defaultValue);
    } else if (height < 740) {
      return screenHeight(sm ?? xs ?? defaultValue);
    } else if (height < 960) {
      return screenHeight(md ?? sm ?? xs ?? defaultValue);
    } else if (height < 1281) {
      return screenHeight(lg ?? md ?? sm ?? xs ?? defaultValue);
    } else {
      return screenHeight(xl ?? lg ?? md ?? sm ?? xs ?? defaultValue);
    }
  }

  static Widget responsiveVisibility({
    required BuildContext context,
    required Widget child,
    bool? visibleOnXXS,
    bool? visibleOnXS,
    bool? visibleOnSM,
    bool? visibleOnMD,
    bool? visibleOnLG,
    bool? visibleOnXL,
    bool? visibleOnXXL,
  }) {
    final visibilityValues = _getValuesWithFallback<bool>(
      defaultValue: false,
      values: [visibleOnXXS, visibleOnXS, visibleOnSM, visibleOnMD, visibleOnLG, visibleOnXL, visibleOnXXL],
    );

    return ResponsiveVisibility(
      visible: visibilityValues[0],
      visibleConditions: [
        Condition.largerThan(name: 'xs', value: visibilityValues[1]),
        Condition.largerThan(name: 'sm', value: visibilityValues[2]),
        Condition.largerThan(name: 'md', value: visibilityValues[3]),
        Condition.largerThan(name: 'lg', value: visibilityValues[4]),
        Condition.largerThan(name: 'xl', value: visibilityValues[5]),
        Condition.largerThan(name: 'xxl', value: visibilityValues[6]),
      ],
      replacement: const SizedBox.shrink(),
      child: child,
    );
  }

  static ResponsiveRowColumnType getResponsiveRowColumnType(
    BuildContext context, {
    ResponsiveRowColumnType defaultType = ResponsiveRowColumnType.COLUMN,
    ResponsiveRowColumnType? xxs,
    ResponsiveRowColumnType? xs,
    ResponsiveRowColumnType? sm,
    ResponsiveRowColumnType? md,
    ResponsiveRowColumnType? lg,
    ResponsiveRowColumnType? xl,
    ResponsiveRowColumnType? xxl,
  }) {
    return responsiveValue<ResponsiveRowColumnType>(
      context: context,
      defaultValue: defaultType,
      xxs: xxs,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      xxl: xxl,
    );
  }

  static T customBreakpointValue<T>({
    required BuildContext context,
    required T defaultValue,
    required List<BreakpointValue<T>> breakpointValues,
  }) {
    double width = MediaQuery.of(context).size.width;

    for (var breakpointValue in breakpointValues.reversed) {
      if (width >= breakpointValue.breakpoint) {
        return breakpointValue.value;
      }
    }
    return defaultValue;
  }
}

class BreakpointValue<T> {
  final int breakpoint;
  final T value;

  BreakpointValue({required this.breakpoint, required this.value});
}
