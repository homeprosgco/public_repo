import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('ScreenScrollView Widget Tests', () {
    testWidgets('ScreenScrollView renders with child widget', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: ScreenScrollView(
            child: Text('Scrollable Content'),
          ),
        ),
      );

      // Verify the presence of the child widget in the widget tree.
      expect(find.text('Scrollable Content'), findsOneWidget);

      // Ensure SafeArea and SingleChildScrollView are present.
      expect(find.byType(SafeArea), findsOneWidget);
      expect(find.byType(SingleChildScrollView), findsOneWidget);
    });

    testWidgets('ScreenScrollView allows scrolling and visibility check', (tester) async {
      // Build the widget with a long list to allow scrolling.
      await tester.pumpWidget(
        MaterialApp(
          home: ScreenScrollView(
            child: Column(
              children: List.generate(
                150,
                (index) => Text('Item $index'),
              ),
            ),
          ),
        ),
      );

      // Verify that the first item is in the widget tree and visible.
      expect(find.text('Item 0'), findsOneWidget);
      expect(isVisible(find.text('Item 0'), tester), isTrue);

      // Verify that the last item is in the widget tree but not visible initially.
      expect(find.text('Item 149'), findsOneWidget);
      expect(isVisible(find.text('Item 149'), tester), isFalse);

      // Perform a scroll to the bottom of the page.
      await tester.drag(find.byType(SingleChildScrollView), const Offset(0, -5000));
      await tester.pumpAndSettle();

      // Verify that the first item is no longer visible.
      expect(isVisible(find.text('Item 0'), tester), isFalse);

      // Verify that the last item is now visible.
      expect(isVisible(find.text('Item 149'), tester), isTrue);
    });
  });
}

// Helper function to determine if a widget is visible within the viewport.
bool isVisible(Finder finder, WidgetTester tester) {
  final widget = tester.element(finder);
  final renderBox = widget.renderObject as RenderBox;
  final container = tester.firstRenderObject<RenderBox>(find.byType(SingleChildScrollView));

  // Calculate the widget's position within the viewport.
  final widgetOffset = renderBox.localToGlobal(Offset.zero);
  final containerOffset = container.localToGlobal(Offset.zero);
  final containerHeight = container.size.height;

  // Check if the widget's position is within the visible portion of the scroll view.
  return widgetOffset.dy >= containerOffset.dy && widgetOffset.dy < containerOffset.dy + containerHeight;
}
