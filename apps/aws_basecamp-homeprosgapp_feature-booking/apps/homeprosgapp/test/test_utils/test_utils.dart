import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';
import 'package:responsive_framework/responsive_framework.dart';

class MockGoRouter extends Mock implements GoRouter {}

class MockGoRouterProvider extends StatelessWidget {
  final GoRouter goRouter;
  final Widget child;

  const MockGoRouterProvider({
    required this.goRouter,
    required this.child,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return InheritedGoRouter(
      goRouter: goRouter,
      child: child,
    );
  }
}

/// Creates a test widget that wraps the given [child] with necessary dependencies,
/// including Riverpod and GoRouter mocks, if provided.
Widget createMaterialAppTestWidget({
  required Widget child,
  MockGoRouter? mockGoRouter,
  List<Override>? overrides, // New optional parameter
}) {
  final goRouter = mockGoRouter ?? MockGoRouter();

  return ProviderScope(
    overrides: overrides ?? [],
    child: MaterialApp(
      home: Builder(
        builder: (context) => MockGoRouterProvider(
          goRouter: goRouter,
          child: ResponsiveBreakpoints.builder(
            child: ClampingScrollWrapper.builder(context, child),
            breakpoints: deviceWidthBreakpoints,
          ),
        ),
      ),
    ),
  );
}


