import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../theme/theme.dart';
import '../../layout/layout.dart';
import '../../widget/widget.dart';
import 'model/platform_dashboard_view_header_view_model.dart';

class PlatformDashboardViewHeader extends StatelessWidget {
  final PlatformDashboardViewHeaderViewModel header;
  final Widget? child;

  const PlatformDashboardViewHeader({
    super.key,
    required this.header,
    this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: k4),
      child: Row(
        children: [
          if (header.isNestedRoute)
            Padding(
              padding: const EdgeInsets.all(k3),
              child: IconButton(onPressed: () => context.pop(), icon: const Icon(Icons.arrow_back)),
            ),
          StackColumn(
            horizontalAlignment: CrossAxisAlignment.start,
            children: [
              CustomThemeText(
                text: header.route, // Display the route title
                variant: TypographyVariant.headlineSmall,
                fontWeight: FontWeight.w700,
              ),
              if (child != null) child!,
            ],
          ),
          const Spacer(),
          StackRow(
            spacing: header.getBreadcrumbWidgets().map((w) => k2).toList(),
            children: header.getBreadcrumbWidgets(), // Display the breadcrumb widgets
          ),
        ],
      ),
    );
  }
}
