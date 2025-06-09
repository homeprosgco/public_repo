import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

class PlatformSectionHeader extends StatelessWidget {
  final String sectionHeader;
  final Color? color;

  const PlatformSectionHeader({
    super.key,
    required this.sectionHeader,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    return StackRow(
      spacing: const [k2],
      children: [
        Container(
          width: k1,
          height: k4,
          decoration: BoxDecoration(
            color: color ?? Theme.of(context).colorScheme.primary,
            borderRadius: const BorderRadius.all(
              Radius.circular(k2),
            ),
          ),
        ),
        CustomThemeText(
          text: sectionHeader,
          variant: TypographyVariant.titleMedium,
          fontWeight: FontWeight.w600,
          fontKey: FontKey.primary,
        ),
      ],
    );
  }
}
