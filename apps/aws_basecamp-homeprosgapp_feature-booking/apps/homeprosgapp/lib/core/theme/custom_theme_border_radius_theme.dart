import 'package:flutter/material.dart';

// Define a custom theme extension for border radius
class CustomThemeBorderRadius extends ThemeExtension<CustomThemeBorderRadius> {
  final BorderRadius xs;
  final BorderRadius sm;
  final BorderRadius md;
  final BorderRadius lg;
  final BorderRadius xl;
  final BorderRadius xxl;

  const CustomThemeBorderRadius({
    required this.xs,
    required this.sm,
    required this.md,
    required this.lg,
    required this.xl,
    required this.xxl,
  });

  @override
  CustomThemeBorderRadius copyWith({
    BorderRadius? xs,
    BorderRadius? sm,
    BorderRadius? md,
    BorderRadius? lg,
    BorderRadius? xl,
    BorderRadius? xxl,
  }) {
    return CustomThemeBorderRadius(
      xs: xs ?? this.xs,
      sm: sm ?? this.sm,
      md: md ?? this.md,
      lg: lg ?? this.lg,
      xl: xl ?? this.xl,
      xxl: xxl ?? this.xxl,
    );
  }

  @override
  CustomThemeBorderRadius lerp(ThemeExtension<CustomThemeBorderRadius>? other, double t) {
    if (other is! CustomThemeBorderRadius) {
      return this;
    }
    return CustomThemeBorderRadius(
      xs: BorderRadius.lerp(xs, other.xs, t)!,
      sm: BorderRadius.lerp(sm, other.sm, t)!,
      md: BorderRadius.lerp(md, other.md, t)!,
      lg: BorderRadius.lerp(lg, other.lg, t)!,
      xl: BorderRadius.lerp(xl, other.xl, t)!,
      xxl: BorderRadius.lerp(xxl, other.xxl, t)!,
    );
  }
}
