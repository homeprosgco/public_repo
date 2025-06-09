import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../custom_navigation_drawer/custom_navigation_drawer.dart';
import '../platform_destination.dart';

class PlatformLayoutShell extends StatelessWidget {
  final StatefulNavigationShell navigationShell;

  const PlatformLayoutShell({
    Key? key,
    required this.navigationShell,
  }) : super(key: key ?? const ValueKey<String>('PlatformNavigationShell'));

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: LayoutBuilder(
        builder: (context, constraints) {
          bool isMobile = ResponsiveBreakpoints.of(context).smallerOrEqualTo('sm');

          return Scaffold(
              drawer: isMobile
                  ? const CustomNavigationDrawer(
                      key: Key('custom_navigation_drawer'),
                      destinations: platformDashboardDestinations,
                    )
                  : null,
              body: Row(
                children: [
                  responsiveVisibility(
                    context: context,
                    defaultValue: false,
                    visibleOnXL: true,
                    child: const SizedBox(
                      width: 256, // Fixed width for the sidebar on wider screens
                      child: CustomNavigationDrawer(
                        destinations: platformDashboardDestinations,
                      ),
                    ),
                  ),
                  Expanded(
                    child: StackColumn(
                      horizontalAlignment: CrossAxisAlignment.start,
                      children: [
                        const PlatformDashboardHeader(),
                        Expanded(
                          child: navigationShell,
                        )
                      ],
                    ),
                  )
                ],
              ));
        },
      ),
    );
  }
}
