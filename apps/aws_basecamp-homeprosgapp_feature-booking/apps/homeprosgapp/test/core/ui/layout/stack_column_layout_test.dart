import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('StackColumn Widget Tests', () {
    testWidgets('StackColumn builds with correct alignment and padding', (tester) async {
      // Build the StackColumn with padding and alignment.
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: StackColumn(
              padding: EdgeInsets.all(16.0),
              verticalAlignment: MainAxisAlignment.center,
              horizontalAlignment: CrossAxisAlignment.start,
              children: [
                Text('Child 1'),
                Text('Child 2'),
              ],
            ),
          ),
        ),
      );

      // Verify that the Column widget is present.
      final columnFinder = find.byType(Column);
      expect(columnFinder, findsOneWidget);

      // Verify the alignment properties of the Column.
      final column = tester.widget<Column>(columnFinder);
      expect(column.mainAxisAlignment, MainAxisAlignment.center);
      expect(column.crossAxisAlignment, CrossAxisAlignment.start);

      // Verify that the Padding widget has the correct padding value.
      final paddingFinder = find.byType(Padding);
      final padding = tester.widget<Padding>(paddingFinder);
      expect(padding.padding, const EdgeInsets.all(16.0));
    });

    testWidgets('StackColumn applies custom spacing correctly', (tester) async {
      // Build the StackColumn with custom spacing between children.
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: StackColumn(
              spacing: [8.0, 16.0],
              children: [
                Text('Child 1'),
                Text('Child 2'),
                Text('Child 3'),
              ],
            ),
          ),
        ),
      );

      // Verify that all children are present.
      expect(find.text('Child 1'), findsOneWidget);
      expect(find.text('Child 2'), findsOneWidget);
      expect(find.text('Child 3'), findsOneWidget);

      // Verify the correct number of SizedBox widgets for spacing.
      final sizedBoxFinder = find.byType(SizedBox);
      expect(sizedBoxFinder, findsNWidgets(2));

      // Check the heights of the SizedBox widgets.
      final firstSizedBox = tester.widget<SizedBox>(sizedBoxFinder.at(0));
      final secondSizedBox = tester.widget<SizedBox>(sizedBoxFinder.at(1));
      expect(firstSizedBox.height, 8.0);
      expect(secondSizedBox.height, 16.0);
    });
  });
}
