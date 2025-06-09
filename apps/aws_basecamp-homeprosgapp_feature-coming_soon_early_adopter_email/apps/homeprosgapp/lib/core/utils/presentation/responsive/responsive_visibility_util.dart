import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'fallback_values_util.dart';

/// A utility function `responsiveVisibility` that controls the visibility of a widget 
/// based on predefined breakpoints. It uses the `ResponsiveVisibility` widget from the 
/// `responsive_framework` package to manage when the widget should be shown or hidden.
///
/// ### Example Usage:
///
/// ```dart
/// responsiveVisibility(
///   context: context,
///   child: Text('Visible on small screens only'),
///   visibleOnSM: true,
///   visibleOnMD: false,
///   visibleOnLG: false,
/// );
/// ```
///
/// In this example:
/// - The widget (Text) will be **visible** on small screens (640px - 767px).
/// - It will be **hidden** on medium and large screens.
///
/// ### Parameters:
///
/// - `context`: The `BuildContext` of the widget.
/// - `child`: The widget to display based on visibility conditions.
/// - `name`: (Optional) A name for the visibility configuration (useful for debugging or tracking).
/// - `defaultValue`: Determines if the widget is visible by default if no conditions are met (default is `true`).
/// - `visibleOnXXS`, `visibleOnXS`, `visibleOnSM`, `visibleOnMD`, `visibleOnLG`, `visibleOnXL`, `visibleOnXXL`:
///   Optional parameters for specifying whether the widget is visible on specific breakpoints:
///   - `xxs`: Up to 349px
///   - `xs`: 350px - 639px
///   - `sm`: 640px - 767px
///   - `md`: 768px - 1023px
///   - `lg`: 1024px - 1279px
///   - `xl`: 1280px - 1535px
///   - `xxl`: 1536px and beyond
///
/// ### Return Value:
/// - A `ResponsiveVisibility` widget that displays the `child` widget based on the visibility settings for each breakpoint.
/// - If the widget is not visible on the current breakpoint, it will display an empty `SizedBox` (shrinked) as a placeholder.
///
/// ### Example with Fallback:
/// ```dart
/// responsiveVisibility(
///   context: context,
///   child: Text('Fallback Example'),
///   visibleOnXS: true, // Visible on extra small screens.
///   visibleOnSM: null, // Falls back to the previous value (visible on XS).
///   visibleOnMD: false, // Hidden on medium screens.
/// );
/// ```
///
/// ### Code:
Widget responsiveVisibility({
  required BuildContext context,
  required Widget child,
  String? name,
  bool defaultValue = true,
  bool? visibleOnXXS,
  bool? visibleOnXS,
  bool? visibleOnSM,
  bool? visibleOnMD,
  bool? visibleOnLG,
  bool? visibleOnXL,
  bool? visibleOnXXL,
}) {
  // Use the fallbackValues utility to ensure consistent visibility values.
  final visibilityValues = fallbackValues<bool>(
    defaultValue: defaultValue,
    values: [
      visibleOnXXS,
      visibleOnXS,
      visibleOnSM,
      visibleOnMD,
      visibleOnLG,
      visibleOnXL,
      visibleOnXXL,
    ],
  );

  // Lists to store the visibility conditions.
  List<Condition<bool>> visibleConditions = [];
  List<Condition<bool>> hiddenConditions = [];

  // Define the breakpoints.
  List<String> breakpoints = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  // Loop through the visibility values and assign conditions.
  for (var i = 0; i < visibilityValues.length; i++) {
    if (visibilityValues[i] == true) {
      visibleConditions.add(Condition.equals(name: breakpoints[i], value: true));
    } else {
      hiddenConditions.add(Condition.equals(name: breakpoints[i], value: false));
    }
  }

  // Return the ResponsiveVisibility widget with the defined conditions.
  return ResponsiveVisibility(
    visible: defaultValue,
    visibleConditions: visibleConditions,
    hiddenConditions: hiddenConditions,
    replacement: const SizedBox.shrink(), // Placeholder for hidden state.
    child: child,
  );
}
