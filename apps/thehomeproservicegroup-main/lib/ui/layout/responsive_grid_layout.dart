import 'package:flutter/material.dart';
import 'package:hpsg/theme/spacing.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class ResponsiveGrid extends StatelessWidget {
  final double? columnHeight;
  final EdgeInsets? responsiveGridPadding;
  const ResponsiveGrid({
    super.key,
    this.columnHeight = k16,
    this.responsiveGridPadding
  });

  @override
  Widget build(BuildContext context) {
    int totalColumns = 4;

    if (ResponsiveBreakpoints.of(context).largerThan('xs') && ResponsiveBreakpoints.of(context).smallerThan('lg')) {
      totalColumns = 8;
    } else if (ResponsiveBreakpoints.of(context).largerThan("md")) {
      totalColumns = 12;
    }

    return Padding(
      padding: ResponsiveUtil.responsiveValue<EdgeInsets>(
        context: context,
        defaultValue: responsiveGridPadding ?? const EdgeInsets.symmetric(horizontal: k4),
        sm: EdgeInsets.zero,
      ),
      child: ResponsiveRowColumn(
        layout: ResponsiveRowColumnType.ROW,
        rowSpacing: k4,
        children: List.generate(
          totalColumns,
          (index) => ResponsiveRowColumnItem(
            rowFlex: ResponsiveUtil.responsiveValue(
              context: context,
              defaultValue: 4,
              xs: 4,
              sm: 8,
              md: totalColumns > 8 ? 4 : (totalColumns > 4 ? 6 : 12),
              lg: totalColumns > 8 ? 3 : (totalColumns > 4 ? 6 : 12),
              xl: totalColumns > 8 ? 3 : (totalColumns > 4 ? 6 : 12),
            ),
            child: Container(
              color: Colors.lightBlue.shade200.withOpacity(.2),
              height: columnHeight,
              width: double.infinity,
              child: Center(
                child: Text(
                  'Item ${index + 1}',
                  style: const TextStyle(color: Colors.white),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
