import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

// Helper widget to encapsulate the responsiveValue logic.
class ResponsiveValueWidget extends StatelessWidget {
  final double defaultValue;
  final double? sm, md, lg, xl, xxl;

  const ResponsiveValueWidget({
    super.key,
    required this.defaultValue,
    this.sm,
    this.md,
    this.lg,
    this.xl,
    this.xxl,
  });

  @override
  Widget build(BuildContext context) {
    final value = responsiveValue<double>(
      context: context,
      defaultValue: defaultValue,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      xxl: xxl,
    );

    return Text('$value', textDirection: TextDirection.ltr); // Render the value as text.
  }
}

void main() {
  group('responsiveValue Utility Tests', () {
    // Helper function to build the app with ResponsiveBreakpoints.
    Widget buildTestApp(Widget child) {
      return MaterialApp(
        builder: (context, widget) => ResponsiveBreakpoints.builder(
          child: ClampingScrollWrapper.builder(
            context,
            child,
          ),
          breakpoints: deviceWidthBreakpoints,
        ),
      );
    }

    testWidgets('Returns correct value for small (sm) screen', (tester) async {
      tester.view.physicalSize = const Size(650, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(
        buildTestApp(
          const ResponsiveValueWidget(
            defaultValue: 10.0,
            sm: 20.0,
            md: 30.0,
            lg: 40.0,
          ),
        ),
      );

      // Wait for the widget tree to stabilize.
      await tester.pumpAndSettle();

      // Verify the correct value is rendered.
      expect(find.text('20.0'), findsOneWidget); // 'sm' value should be 20.0

      // Reset the physical size to avoid side effects in other tests.
      addTearDown(tester.view.resetPhysicalSize);
    });

    testWidgets('Returns correct value for large (lg) screen', (tester) async {
      await tester.pumpWidget(
        buildTestApp(
          const MediaQuery(
            data: MediaQueryData(size: Size(1100, 800)), // Simulate 'lg' screen
            child: ResponsiveValueWidget(
              defaultValue: 10.0,
              lg: 40.0,
            ),
          ),
        ),
      );

      // Wait for the widget tree to stabilize.
      await tester.pumpAndSettle();

      // Verify the correct value is rendered.
      expect(find.text('40.0'), findsOneWidget); // 'lg' value should be 40.0
    });

    testWidgets('Uses fallback value for missing breakpoint', (tester) async {
      await tester.pumpWidget(
        buildTestApp(
          const MediaQuery(
            data: MediaQueryData(size: Size(900, 800)), // Simulate 'md' screen
            child: ResponsiveValueWidget(
              defaultValue: 10.0,
              sm: 20.0,
              lg: 40.0, // Should fallback to 'lg' for 'md'
            ),
          ),
        ),
      );

      // Wait for the widget tree to stabilize.
      await tester.pumpAndSettle();

      // Verify the fallback value is rendered.
      expect(find.text('40.0'), findsOneWidget); // Should fallback to 'lg'
    });

    testWidgets('Returns default value for unmatched screen size', (tester) async {
      await tester.pumpWidget(
        buildTestApp(
          const MediaQuery(
            data: MediaQueryData(size: Size(300, 800)), // Below 'xs' breakpoint
            child: ResponsiveValueWidget(
              defaultValue: 10.0,
            ),
          ),
        ),
      );

      // Wait for the widget tree to stabilize.
      await tester.pumpAndSettle();

      // Verify the default value is rendered.
      expect(find.text('10.0'), findsOneWidget); // Default value should be 10.0
    });

    testWidgets('Returns xxl value for very large screen', (tester) async {
      await tester.pumpWidget(
        buildTestApp(
          const MediaQuery(
            data: MediaQueryData(size: Size(1600, 800)), // Simulate 'xxl' screen
            child: ResponsiveValueWidget(
              defaultValue: 10.0,
              xxl: 50.0,
            ),
          ),
        ),
      );

      // Wait for the widget tree to stabilize.
      await tester.pumpAndSettle();

      // Verify the 'xxl' value is rendered.
      expect(find.text('50.0'), findsOneWidget); // 'xxl' value should be 50.0
    });
  });
}
