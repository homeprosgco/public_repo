import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';

Widget buildSectionHeader(
  ThemeData theme, {
  required String header,
  String? body,
  double? spacing = k5,
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.start, 
}) {
  return Column(
    crossAxisAlignment: crossAxisAlignment,
    children: [
      AutoSizeText(header, style: theme.textTheme.titleLarge),
      SizedBox(height: spacing),
      if (body != null)
        AutoSizeText(
          body,
          style: theme.textTheme.bodyMedium,
        )
    ],
  );
}
