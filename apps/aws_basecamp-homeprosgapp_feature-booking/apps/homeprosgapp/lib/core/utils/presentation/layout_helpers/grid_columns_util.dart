import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

class GridColumnsUtil extends StatelessWidget {
  const GridColumnsUtil({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsiveLayout(
      spacing: k4,
      layout: ResponsiveRowColumnType.ROW,
      children: List.generate(
        responsiveValue(
          context: context,
          defaultValue: 4,
          md: 8,
          lg: 12,
        ),
        (i) {
          return Container(
            width: k12,
            height: k64,
            color: Colors.red.shade100,
          );
        },
      ),
    );
  }
}
