import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

class PlatformDashboardViewHeaderViewModel {
  final String route;
  final List<String> breadcrumbs;
  final Color color;
  final bool isNestedRoute;

  const PlatformDashboardViewHeaderViewModel({
    required this.route,
    required this.breadcrumbs,
    required this.color,
    this.isNestedRoute = false,
  });

  // Method to convert breadcrumbs to a list of Text widgets with separators
  List<Widget> getBreadcrumbWidgets() {
    List<Widget> breadcrumbWidgets = [];
    for (int i = 0; i < breadcrumbs.length; i++) {
      breadcrumbWidgets.add(
        CustomThemeText(
          text: breadcrumbs[i],
          color: (i != breadcrumbs.length - 1) ? null : color,
          fontKey: FontKey.primary,
          fontWeight: (i != breadcrumbs.length - 1) ? FontWeight.w600 : FontWeight.normal,
          variant: TypographyVariant.bodyMedium,
        ),
      );
      // Add a separator ">>" between each breadcrumb, except the last one
      if (i < breadcrumbs.length - 1) {
        breadcrumbWidgets.add(
          Icon(
            Icons.keyboard_double_arrow_right_sharp,
            color: (i != breadcrumbs.length - 1) ? null : color,
            size: k4,
          ),
        );
      }
    }
    return breadcrumbWidgets;
  }
}
