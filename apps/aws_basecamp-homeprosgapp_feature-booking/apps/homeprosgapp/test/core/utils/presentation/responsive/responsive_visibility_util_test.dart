import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

// Helper widget to encapsulate the responsiveVisibility logic for testing.
class TestResponsiveVisibility extends StatelessWidget {
  final bool? visibleOnSM;
  final bool? visibleOnMD;
  final bool? visibleOnLG;

  const TestResponsiveVisibility({
    super.key,
    this.visibleOnSM,
    this.visibleOnMD,
    this.visibleOnLG,
  });

  @override
  Widget build(BuildContext context) {
    return responsiveVisibility(
      context: context,
      child: const Text('Visible Widget', textDirection: TextDirection.ltr),
      visibleOnSM: visibleOnSM,
      visibleOnMD: visibleOnMD,
      visibleOnLG: visibleOnLG,
    );
  }
}

void main() {
  group('ResponsiveVisibility Utility Tests', () {
    // Helper function to wrap the test app with ResponsiveBreakpoints.
    Widget buildTestApp(Widget child) {
      return MaterialApp(
        builder: (context, widget) => ResponsiveBreakpoints.builder(
          child: widget!,
          breakpoints: deviceWidthBreakpoints, // Use your custom breakpoints here.
        ),
        home: child,
      );
    }

    testWidgets('Widget is visible on small (sm) screens', (tester) async {
      // Set the screen size to 700px (small screen).
      tester.view.physicalSize = const Size(700, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(
        buildTestApp(
          const TestResponsiveVisibility(
            visibleOnSM: true,
            visibleOnMD: false,
          ),
        ),
      );

      await tester.pumpAndSettle();

      // Verify the widget is visible on small screens.
      expect(find.text('Visible Widget'), findsOneWidget);

      // Reset the view after the test.
      addTearDown(tester.view.resetPhysicalSize);
    });

    testWidgets('Widget is hidden on medium (md) screens', (tester) async {
      // Set the screen size to 800px (medium screen).
      tester.view.physicalSize = const Size(800, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(
        buildTestApp(
          const TestResponsiveVisibility(
            visibleOnSM: true,
            visibleOnMD: false,
          ),
        ),
      );

      await tester.pumpAndSettle();

      // Verify the widget is hidden on medium screens.
      expect(find.text('Visible Widget'), findsNothing);

      // Reset the view after the test.
      addTearDown(tester.view.resetPhysicalSize);
    });

    testWidgets('Widget is visible on large (lg) screens', (tester) async {
      // Set the screen size to 1100px (large screen).
      tester.view.physicalSize = const Size(1100, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(
        buildTestApp(
          const TestResponsiveVisibility(
            visibleOnLG: true,
          ),
        ),
      );

      await tester.pumpAndSettle();

      // Verify the widget is visible on large screens.
      expect(find.text('Visible Widget'), findsOneWidget);

      // Reset the view after the test.
      addTearDown(tester.view.resetPhysicalSize);
    });

    testWidgets('Widget defaults to visible when no breakpoints match', (tester) async {
      // Set the screen size to 300px (extra small screen, no specific visibility rule).
      tester.view.physicalSize = const Size(300, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(
        buildTestApp(
          const TestResponsiveVisibility(),
        ),
      );

      await tester.pumpAndSettle();

      // Verify the widget is visible by default.
      expect(find.text('Visible Widget'), findsOneWidget);

      // Reset the view after the test.
      addTearDown(tester.view.resetPhysicalSize);
    });
  });
}
