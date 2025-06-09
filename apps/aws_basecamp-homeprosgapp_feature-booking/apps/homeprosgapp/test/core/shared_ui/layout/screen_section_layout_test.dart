import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('ScreenSectionLayout Widget Tests', () {
    testWidgets('ScreenSectionLayout builds with correct sections and padding', (WidgetTester tester) async {
      // Define some dummy widgets to use as section contents.
      const widget1 = Text('Section 1');
      const widget2 = Text('Section 2');

      // Build the ScreenSectionLayout with two sections.
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: ScreenSectionLayout(
              sections: [
                ScreenSection(
                  widget: widget1,
                  topPadding: 10.0,
                  bottomPadding: 20.0,
                ),
                ScreenSection(
                  widget: widget2,
                  topPadding: 5.0,
                  bottomPadding: 15.0,
                ),
              ],
            ),
          ),
        ),
      );

      // Verify that both section widgets are present in the widget tree.
      expect(find.text('Section 1'), findsOneWidget);
      expect(find.text('Section 2'), findsOneWidget);

      // Verify that each section has its corresponding padding applied.
      final paddingFinder = find.byType(Padding);
      expect(paddingFinder, findsNWidgets(2)); // Ensure two Padding widgets are found.

      // Verify the padding values for the first section.
      final firstPadding = tester.widget<Padding>(paddingFinder.at(0));
      expect(firstPadding.padding, const EdgeInsets.only(top: 10.0, bottom: 20.0));

      // Verify the padding values for the second section.
      final secondPadding = tester.widget<Padding>(paddingFinder.at(1));
      expect(secondPadding.padding, const EdgeInsets.only(top: 5.0, bottom: 15.0));
    });

    testWidgets('ScreenSectionLayout handles empty sections gracefully', (WidgetTester tester) async {
      // Build the ScreenSectionLayout with no sections.
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: ScreenSectionLayout(
              sections: [],
            ),
          ),
        ),
      );

      // Verify that no child widgets are present.
      expect(find.byType(ScreenSection), findsNothing);
    });
  });
}
