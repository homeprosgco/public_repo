import 'package:flutter/material.dart';

// Define a custom theme extension for border radius
class CustomThemeEdgeInsets extends ThemeExtension<CustomThemeEdgeInsets> {
  final EdgeInsets xs;
  final EdgeInsets sm;
  final EdgeInsets md;
  final EdgeInsets lg;
  final EdgeInsets xl;
  final EdgeInsets xxl;

  const CustomThemeEdgeInsets({
    required this.xs,
    required this.sm,
    required this.md,
    required this.lg,
    required this.xl,
    required this.xxl,
  });

  @override
  CustomThemeEdgeInsets copyWith({
    EdgeInsets? xs,
    EdgeInsets? sm,
    EdgeInsets? md,
    EdgeInsets? lg,
    EdgeInsets? xl,
    EdgeInsets? xxl,
  }) {
    return CustomThemeEdgeInsets(
      xs: xs ?? this.xs,
      sm: sm ?? this.sm,
      md: md ?? this.md,
      lg: lg ?? this.lg,
      xl: xl ?? this.xl,
      xxl: xxl ?? this.xxl,
    );
  }

  @override
  CustomThemeEdgeInsets lerp(ThemeExtension<CustomThemeEdgeInsets>? other, double t) {
    if (other is! CustomThemeEdgeInsets) {
      return this;
    }
    return CustomThemeEdgeInsets(
      xs: EdgeInsets.lerp(xs, other.xs, t)!,
      sm: EdgeInsets.lerp(sm, other.sm, t)!,
      md: EdgeInsets.lerp(md, other.md, t)!,
      lg: EdgeInsets.lerp(lg, other.lg, t)!,
      xl: EdgeInsets.lerp(xl, other.xl, t)!,
      xxl: EdgeInsets.lerp(xxl, other.xxl, t)!,
    );
  }
}
