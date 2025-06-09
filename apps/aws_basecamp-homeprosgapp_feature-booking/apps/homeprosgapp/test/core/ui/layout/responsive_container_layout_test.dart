import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() {
  group('ResponsiveContainer Widget Tests', () {
    Widget buildTestApp(Widget body) {
      return MaterialApp(
        title: 'The Home Pro Service Group Website',
        theme: AppTheme.lightTheme,
        debugShowCheckedModeBanner: false,
        builder: (context, child) => ResponsiveBreakpoints.builder(
          child: ClampingScrollWrapper.builder(context, body),
          breakpoints: deviceWidthBreakpoints,
        ),
      );
    }

    testWidgets('Renders with background image and overlay color', (tester) async {
      // Build the widget with a background image and overlay color
      await tester.pumpWidget(
        buildTestApp(
          const Scaffold(
            body: ResponsiveContainer(
              heightFactor: 0.5,
              backgroundImage: 'images/screens/residential_handyman.jpg',
              overlayColor: Colors.black,
              child: Text('Child Content'),
            ),
          ),
        ),
      );

      // Verify the background image is rendered
      final imageFinder = find.byType(Image);
      expect(imageFinder, findsOneWidget);

      // Verify the image asset path
      final image = tester.widget<Image>(imageFinder);
      expect((image.image as AssetImage).assetName, 'images/screens/residential_handyman.jpg');

      // Verify the overlay container with semi-transparent color
      final overlayFinder = find.byWidgetPredicate((widget) => widget is Container && widget.color == Colors.black.withOpacity(0.5));
      expect(overlayFinder, findsOneWidget);

      // Verify the child content is present
      expect(find.text('Child Content'), findsOneWidget);
    });

    testWidgets('Renders with background color when no image is provided', (tester) async {
      // Build the widget with a background color
      await tester.pumpWidget(
        buildTestApp(
          const Scaffold(
            body: ResponsiveContainer(
              heightFactor: 0.3,
              backgroundColor: Colors.blue,
              child: Text('Child Content'),
            ),
          ),
        ),
      );

      // Verify that the background color container is rendered
      final containerFinder = find.byWidgetPredicate((widget) => widget is Container && widget.color == Colors.blue);
      expect(containerFinder, findsAtLeastNWidgets(2));

      // Verify the child content is present
      expect(find.text('Child Content'), findsOneWidget);
    });

    testWidgets('Calculates height correctly based on heightFactor', (tester) async {
      // Create a small screen size to simulate mobile view.
      tester.view.devicePixelRatio = 1.0;
      tester.view.physicalSize = const Size(700, 800);

      await tester.pumpWidget(
        buildTestApp(
          Scaffold(
            body: LayoutBuilder(
              builder: (context, constraints) {
                return ResponsiveBreakpoints.builder(
                  child: ClampingScrollWrapper.builder(
                    context,
                    const ResponsiveContainer(
                      heightFactor: 0.4, // 40% of 800 = 320
                      backgroundColor: Colors.green,
                      child: Text('Child Content'),
                    ),
                  ),
                  breakpoints: deviceWidthBreakpoints,
                );
              },
            ),
          ),
        ),
      );

      // Allow the UI to settle.
      await tester.pumpAndSettle();

      // Retrieve the breakpoints context.
      final BuildContext context = tester.element(find.byType(Scaffold));
      final ResponsiveBreakpointsData breakpoints = ResponsiveBreakpoints.of(context);

      // Validate that the breakpoint is recognized as a tablet.
      expect(breakpoints.breakpoint.name, equals('sm'));

      // Verify the height of the background container
      final containerFinder = find.byWidgetPredicate((widget) => widget is Container && widget.color == Colors.green);

      final container = tester.widget<Container>(containerFinder.first);

      // Ensure that the height matches the expected value
      final height = container.constraints?.maxHeight ?? container.constraints?.minHeight;
      expect(height, 306.8);
    });
  });
}
