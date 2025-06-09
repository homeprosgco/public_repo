import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/feature/feature.dart';

import '../route/platform_route.dart';

final navigatorKey = GlobalKey<NavigatorState>();

class RouteManager {
  // Notifier for top-level routes, such as Home, About, Contact, etc.
  static final ValueNotifier<List<RouteBase>> initialRoutesNotifier = ValueNotifier(
    _buildInitialRoutes(),
  );

  // Notifier for dashboard shell child routes where each feature can register its routes
  static final ValueNotifier<List<RouteBase>> dashboardRoutesNotifier = ValueNotifier([]);

  /// Builds the initial routes with top-level pages.
  static List<RouteBase> _buildInitialRoutes() {
    return [
      // GoRoute(
      //   path: CoreRoutes.home,
      //   builder: (context, state) => const HomePage(),
      // ),
      // GoRoute(
      //   path: CoreRoutes.about,
      //   builder: (context, state) => const AboutPage(),
      // ),
      // GoRoute(
      //   path: CoreRoutes.contact,
      //   builder: (context, state) => const ContactPage(),
      // ),
      _buildDashboardShell(),
    ];
  }

  /// Builds the dashboard shell route with dynamic child routes
  static StatefulShellRoute _buildDashboardShell() {
    return StatefulShellRoute.indexedStack(
      builder: (context, state, navigationShell) => DashboardLayoutShell(navigationShell: navigationShell),
      branches: dashboardRoutesNotifier.value
          .map((route) => StatefulShellBranch(routes: [
                GoRoute(path: PlatformRoute.platformDashbaordView, builder: (context, state) => const PlatformDashboardView(), routes: [route]),
              ]))
          .toList(),
    );
  }

  /// Adds a top-level route (e.g., Home, About, etc.) dynamically
  static void addInitialRoutes(List<RouteBase> routes) {
    initialRoutesNotifier.value = [...initialRoutesNotifier.value, ...routes];
  }

  /// Adds a feature-specific route to the dashboard shell dynamically
  static void addDashboardRoute(RouteBase route) {
    dashboardRoutesNotifier.value = [...dashboardRoutesNotifier.value, route];
  }

  /// Returns a complete list of routes for GoRouter
  static List<RouteBase> get completeRoutes {
    return [
      ...initialRoutesNotifier.value,
      _buildDashboardShell(),
    ];
  }
}
