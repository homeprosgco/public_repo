import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/feature/feature.dart';

/// The route configuration.
final GoRouter router = GoRouter(initialLocation: '/', routes: [
  GoRoute(
    path: '/',
    name: 'coming-soon',
    builder: (context, state) {
      return const ComingSoonScreen();
    },
  ),
]);
