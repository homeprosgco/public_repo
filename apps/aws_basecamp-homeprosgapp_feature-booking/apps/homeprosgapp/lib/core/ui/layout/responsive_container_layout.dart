import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../utils/utils.dart';


class ResponsiveContainer extends StatelessWidget {
  final Widget child;
  final String? backgroundImage; // Nullable, can be null if no image is provided
  final double heightFactor; // Height as a percentage of screen width
  final AlignmentGeometry alignment;
  final EdgeInsets? padding;
  final Color? backgroundColor; // Optional background color when no image is provided
  final Color? overlayColor; // Optional overlay color on top of background image

  const ResponsiveContainer({
    super.key,
    required this.child,
    this.backgroundImage, // Optional background image
    required this.heightFactor,
    this.alignment = Alignment.topCenter,
    this.padding,
    this.backgroundColor,
    this.overlayColor, // Optional overlay color
  });

  @override
  Widget build(BuildContext context) {
    final breakpoint = ResponsiveBreakpoints.of(context).breakpoint.end;
    final backgroundHeight = breakpoint * heightFactor; // Calculate height based on width

    return Stack(
      children: [
        // Conditionally render the background image or solid color
        if (backgroundImage != null)
          SizedBox(
            width: double.infinity, // Full screen width
            height: backgroundHeight, // Dynamic height based on width
            child: Image.asset(
              backgroundImage!, // Safe to unwrap since we checked for null
              fit: BoxFit.cover, // Ensure the image covers the container
            ),
          )
        else if (backgroundColor != null)
          Container(
            width: double.infinity, // Full screen width
            height: backgroundHeight, // Dynamic height based on width
            color: backgroundColor, // Use background color if no image is provided
          ),

        // Optional overlay color if background image is provided
        if (backgroundImage != null && overlayColor != null)
          Container(
            width: double.infinity,
            height: backgroundHeight,
            color: overlayColor!.withOpacity(0.5), // Apply semi-transparent overlay color
          ),

        // Centered content with responsive width
        Center(
          child: MaxWidthBox(
            maxWidth: getScreenMaxWidth(context),
            alignment: alignment,
            padding: padding ?? (breakpoint < breakpointsm ? const EdgeInsets.symmetric(horizontal: 16) : EdgeInsets.zero),
            backgroundColor: backgroundColor, // Background color for the content container
            child: child,
          ),
        ),
      ],
    );
  }
}
