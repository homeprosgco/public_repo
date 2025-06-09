import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'responsive_grid_layout.dart';

class PageSection extends StatelessWidget {
  final Widget? background;
  final ResponsiveRowColumnType? layout;
  final List<ResponsiveRowColumnItem> children;
  final double designGridColumnHeight;
  final EdgeInsets? responsiveGridPadding;
  final double? spacing;
  final EdgeInsets padding;

  const PageSection({
    super.key,
    this.background,
    required this.children,
    this.layout,
    this.designGridColumnHeight = 0,
    this.spacing,
    this.responsiveGridPadding,
    this.padding = const EdgeInsets.symmetric(horizontal: k4),
  });

  @override
  Widget build(BuildContext context) {
    return MaxWidthBox(
      background: background,
      maxWidth: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: MediaQuery.of(context).size.width,
        xs: MediaQuery.of(context).size.width,
        sm: breakpointsm,
        md: breakpointmd,
        lg: breakpointlg,
        xl: breakpointxl,
        xxl: breakpointxxl,
      ),
      child: designGridColumnHeight > 0
          ? Stack(
              children: [
                ResponsiveRowColumn(
                  layout: layout ?? ResponsiveRowColumnType.COLUMN,
                  columnCrossAxisAlignment: CrossAxisAlignment.stretch,
                  rowSpacing: spacing,
                  columnSpacing: spacing,
                  rowPadding: padding,
                  columnPadding: padding,
                  children: children,
                ),
                ResponsiveGrid(
                  columnHeight: designGridColumnHeight,
                  responsiveGridPadding: responsiveGridPadding,
                )
              ],
            )
          : ResponsiveRowColumn(
              layout: layout ?? ResponsiveRowColumnType.COLUMN,
              columnCrossAxisAlignment: CrossAxisAlignment.stretch,
              rowSpacing: spacing,
              columnSpacing: spacing,
              rowPadding: padding,
              columnPadding: padding,
              children: children,
            ),
    );
  }
}
