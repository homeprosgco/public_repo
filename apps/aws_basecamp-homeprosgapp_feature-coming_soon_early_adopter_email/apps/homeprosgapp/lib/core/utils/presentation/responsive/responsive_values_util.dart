import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'breakpoints_util.dart'; // Defines breakpoint constants.
import 'fallback_values_util.dart'; // Contains the fallbackValues<T> utility function.

/// A utility function `responsiveValue` that returns a value based on the current screen size.
/// It helps to dynamically select appropriate values for different breakpoints, ensuring a 
/// responsive layout across various devices.
///
/// ### Example Usage:
///
/// ```dart
/// final padding = responsiveValue<double>(
///   context: context,
///   defaultValue: 16.0,
///   sm: 24.0, // For small screens (640px - 767px)
///   md: 32.0, // For medium screens (768px - 1023px)
///   lg: 40.0, // For large screens (1024px - 1279px)
/// );
///
/// print(padding); // Output depends on the current screen width.
/// ```
///
/// In this example:
/// - If the screen width falls within the small range (640px to 767px), the value will be `24.0`.
/// - If the screen width is between 768px and 1023px, the value will be `32.0`.
/// - For larger screens, the value will adjust accordingly based on the provided breakpoints.
///
/// ### Parameters:
///
/// - `context`: The `BuildContext` of the widget tree.
/// - `defaultValue`: The value to use if no specific value is provided for a breakpoint or if the
///   screen size doesn't match any defined breakpoint.
/// - `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`: Optional values corresponding to specific breakpoints:
///   - `xxs`: 0px - 349px
///   - `xs`: 350px - 639px
///   - `sm`: 640px - 767px
///   - `md`: 768px - 1023px
///   - `lg`: 1024px - 1279px
///   - `xl`: 1280px - 1535px
///   - `xxl`: 1536px and above
///
/// ### Return Value:
/// - The function returns the value that matches the current breakpoint, or the `defaultValue` if no match is found.
///
/// ### Fallback Handling:
/// If a specific breakpoint value is not provided, the function uses the closest available non-null value,
/// ensuring consistency across screen sizes. This is achieved using the `fallbackValues` utility.
///
/// ### Example with Fallback:
/// ```dart
/// final fontSize = responsiveValue<double>(
///   context: context,
///   defaultValue: 14.0,
///   sm: 16.0,
///   lg: 20.0, // No value for md, so lg will be used if md breakpoint is hit.
/// );
/// ```
///
/// This ensures that if the `md` value is missing, it falls back to the closest available value, which is `lg`.
///
/// ### Code:
T responsiveValue<T>({
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
  // Use the fallbackValues utility to ensure no null values are left unfilled.
  final values = fallbackValues<T>(
    defaultValue: defaultValue,
    values: [xxs, xs, sm, md, lg, xl, xxl],
  );

  // Create a ResponsiveValue that selects the appropriate value based on screen size.
  final responsiveValue = ResponsiveValue<T>(
    context,
    defaultValue: defaultValue,
    conditionalValues: [
      Condition.between(
        start: breakpointstart.toInt(), 
        end: (breakpointxs - 1).toInt(), 
        value: values[0],
      ),
      Condition.between(
        start: breakpointxs.toInt(), 
        end: (breakpointsm - 1).toInt(), 
        value: values[1],
      ),
      Condition.between(
        start: breakpointsm.toInt(), 
        end: (breakpointmd - 1).toInt(), 
        value: values[2],
      ),
      Condition.between(
        start: breakpointmd.toInt(), 
        end: (breakpointlg - 1).toInt(), 
        value: values[3],
      ),
      Condition.between(
        start: breakpointlg.toInt(), 
        end: (breakpointxl - 1).toInt(), 
        value: values[4],
      ),
      Condition.between(
        start: breakpointxl.toInt(), 
        end: (breakpointxxl - 1).toInt(), 
        value: values[5],
      ),
      Condition.between(
        start: breakpointxxl.toInt(), 
        end: 5000, 
        value: values[6],
      ),
    ],
  );

  return responsiveValue.value;
}
