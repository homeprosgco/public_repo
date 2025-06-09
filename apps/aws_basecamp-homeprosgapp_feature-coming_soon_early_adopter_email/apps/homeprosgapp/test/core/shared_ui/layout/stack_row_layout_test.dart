import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('StackRow Widget Tests', () {
    testWidgets('StackRow builds with provided mainAxisAlignment', (tester) async {
      // Build the StackRow with children and mainAxisAlignment
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: StackRow(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Child 1'),
                Text('Child 2'),
              ],
            ),
          ),
        ),
      );

      // Verify that both children are present in the widget tree
      expect(find.text('Child 1'), findsOneWidget);
      expect(find.text('Child 2'), findsOneWidget);

      // Verify that the Row widget is using MainAxisAlignment.spaceBetween
      final row = tester.widget<Row>(find.byType(Row));
      expect(row.mainAxisAlignment, MainAxisAlignment.spaceBetween);
    });

    testWidgets('StackRow applies custom spacing correctly', (tester) async {
      // Build the StackRow with children and custom spacing
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: StackRow(
              spacing: [10.0, 20.0],
              children: [
                Text('Child 1'),
                Text('Child 2'),
                Text('Child 3'),
              ],
            ),
          ),
        ),
      );

      // Verify that all children are present in the widget tree
      expect(find.text('Child 1'), findsOneWidget);
      expect(find.text('Child 2'), findsOneWidget);
      expect(find.text('Child 3'), findsOneWidget);

      // Verify that the correct number of SizedBox widgets are added for spacing
      final sizedBoxes = find.byType(SizedBox);
      expect(sizedBoxes, findsNWidgets(2));

      // Verify the width of each SizedBox
      final firstSizedBox = tester.widget<SizedBox>(sizedBoxes.at(0));
      final secondSizedBox = tester.widget<SizedBox>(sizedBoxes.at(1));
      expect(firstSizedBox.width, 10.0);
      expect(secondSizedBox.width, 20.0);
    });
  });
}
