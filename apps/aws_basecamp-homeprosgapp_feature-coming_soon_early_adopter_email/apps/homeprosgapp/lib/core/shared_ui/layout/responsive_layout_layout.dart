import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

class FlexConfig {
  final int? rowFlex;
  final int? columnFlex;
  final FlexFit? rowFit;
  final FlexFit? columnFit;

  FlexConfig({
    this.rowFlex,
    this.columnFlex,
    this.rowFit,
    this.columnFit,
  });
}

class ResponsiveLayout extends StatelessWidget {
  final List<Widget> children; // Child widgets
  final ResponsiveRowColumnType? layout; // Controls whether it's row or column
  final CrossAxisAlignment? crossAxisAlignment;
  final MainAxisAlignment? mainAxisAlignment;
  final MainAxisSize? mainAxisSize;
  final List<FlexConfig>? flexValues; // Config for flex and fit of each item (can be shorter than children list)
  final double? spacing;
  final EdgeInsets padding;

  const ResponsiveLayout({
    super.key,
    required this.children,
    this.layout,
    this.crossAxisAlignment = CrossAxisAlignment.center,
    this.mainAxisAlignment = MainAxisAlignment.start,
    this.mainAxisSize = MainAxisSize.min,
    this.flexValues,
    this.spacing,
    this.padding = EdgeInsets.zero,
  });

  // Default FlexConfig if no specific config is passed
  FlexConfig _defaultFlexConfig() {
    return FlexConfig(
      rowFlex: 1,
      columnFlex: 1,
      rowFit: FlexFit.loose,
      columnFit: FlexFit.loose,
    );
  }

  // Method to get the flex configuration for each child
  FlexConfig _getFlexConfig(int index) {
    final defaultConfig = _defaultFlexConfig();
    // Check if the flexValues list has an entry for the current child index
    final userConfig = (flexValues != null && flexValues!.length > index) ? flexValues![index] : null;

    // Use user's values when provided, otherwise use default values
    return FlexConfig(
      rowFlex: userConfig?.rowFlex ?? defaultConfig.rowFlex,
      columnFlex: userConfig?.columnFlex ?? defaultConfig.columnFlex,
      rowFit: userConfig?.rowFit ?? defaultConfig.rowFit,
      columnFit: userConfig?.columnFit ?? defaultConfig.columnFit,
    );
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveRowColumn(
      layout: layout ?? ResponsiveRowColumnType.ROW,
      columnCrossAxisAlignment: crossAxisAlignment!,
      columnMainAxisAlignment: mainAxisAlignment!,
      columnMainAxisSize: mainAxisSize!,
      rowCrossAxisAlignment: crossAxisAlignment!,
      rowMainAxisAlignment: mainAxisAlignment!,
      rowMainAxisSize: mainAxisSize!,
      rowSpacing: spacing,
      columnSpacing: spacing,
      rowPadding: padding,
      columnPadding: padding,
      children: List.generate(children.length, (index) {
        final flexConfig = _getFlexConfig(index); // Get config for each child

        return ResponsiveRowColumnItem(
          rowFlex: flexConfig.rowFlex,
          columnFlex: flexConfig.columnFlex,
          rowFit: flexConfig.rowFit,
          columnFit: flexConfig.columnFit,
          child: children[index],
        );
      }),
    );
  }
}
