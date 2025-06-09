import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() {
  group('ResponsiveLayout Widget Tests', () {
    testWidgets('ResponsiveLayout builds with row layout and correct children', (tester) async {
      // Build the ResponsiveLayout with row layout and two children
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: ResponsiveLayout(
              layout: ResponsiveRowColumnType.ROW,
              children: [
                Text('Child 1'),
                Text('Child 2'),
              ],
            ),
          ),
        ),
      );

      // Verify the ResponsiveRowColumn widget is present with the row layout
      final responsiveLayoutFinder = find.byType(ResponsiveRowColumn);
      expect(responsiveLayoutFinder, findsOneWidget);

      final responsiveLayout = tester.widget<ResponsiveRowColumn>(responsiveLayoutFinder);
      expect(responsiveLayout.layout, ResponsiveRowColumnType.ROW);

      // Verify the children are present in the layout
      expect(find.text('Child 1'), findsOneWidget);
      expect(find.text('Child 2'), findsOneWidget);
    });

    testWidgets('ResponsiveLayout applies flex and fit values correctly', (tester) async {
      // Build the ResponsiveLayout with flex configuration
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: ResponsiveLayout(
              flexValues: [
                FlexConfig(rowFlex: 2, columnFlex: 1),
                FlexConfig(rowFlex: 1, columnFlex: 2, rowFit: FlexFit.tight),
              ],
              children: const [
                Text('Child 1'),
                Text('Child 2'),
              ],
            ),
          ),
        ),
      );

      // Find the ResponsiveRowColumnItem widgets
      final itemFinders = find.byType(ResponsiveRowColumnItem);
      expect(itemFinders, findsNWidgets(2));

      // Verify the flex and fit values of the first child
      final firstItem = tester.widget<ResponsiveRowColumnItem>(itemFinders.at(0));
      expect(firstItem.rowFlex, 2);
      expect(firstItem.columnFlex, 1);
      expect(firstItem.rowFit, FlexFit.loose);

      // Verify the flex and fit values of the second child
      final secondItem = tester.widget<ResponsiveRowColumnItem>(itemFinders.at(1));
      expect(secondItem.rowFlex, 1);
      expect(secondItem.columnFlex, 2);
      expect(secondItem.rowFit, FlexFit.tight);
    });

    testWidgets('ResponsiveLayout applies spacing and padding correctly', (tester) async {
      // Build the ResponsiveLayout with custom spacing and padding
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: ResponsiveLayout(
              spacing: 10.0,
              padding: EdgeInsets.all(8.0),
              children: [
                Text('Child 1'),
                Text('Child 2'),
              ],
            ),
          ),
        ),
      );

      // Verify the spacing and padding values
      final responsiveLayoutFinder = find.byType(ResponsiveRowColumn);
      final responsiveLayout = tester.widget<ResponsiveRowColumn>(responsiveLayoutFinder);

      expect(responsiveLayout.rowSpacing, 10.0);
      expect(responsiveLayout.columnSpacing, 10.0);
      expect(responsiveLayout.rowPadding, const EdgeInsets.all(8.0));
      expect(responsiveLayout.columnPadding, const EdgeInsets.all(8.0));
    });
  });
}
