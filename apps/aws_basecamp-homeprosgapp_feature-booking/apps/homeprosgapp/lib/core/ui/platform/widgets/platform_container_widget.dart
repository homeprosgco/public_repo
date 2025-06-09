import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

class PlatformContainer extends StatelessWidget {
  final Widget child;
  final EdgeInsets? padding;
  final double? topBorderRadius;
  final double? bottomBorderRadius;
  final Color? color;

  const PlatformContainer({
    super.key,
    required this.child,
    this.padding,
    this.bottomBorderRadius,
    this.topBorderRadius,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Container(
      padding: padding ?? const EdgeInsets.symmetric(horizontal: k5, vertical: k5),
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.grey.shade50,
        ),
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(topBorderRadius ?? k3),
          topRight: Radius.circular(topBorderRadius ?? k3),
          bottomLeft: Radius.circular(bottomBorderRadius ?? k3),
          bottomRight: Radius.circular(bottomBorderRadius ?? k3),
        ),
        color: color ?? white,
        boxShadow: [
          BoxShadow(
            color: colorScheme.onSurface.withOpacity(0.01),
            blurRadius: 10,
            offset: const Offset(0, 5),
          )
        ],
      ),
      child: child,
    );
  }
}
