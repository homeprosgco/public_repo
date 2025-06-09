import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomThemeText Widget Tests', () {
    testWidgets('Renders with default properties', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomThemeText(
              text: 'Hello, World!',
            ),
          ),
        ),
      );

      // Verify that the text is rendered.
      expect(find.text('Hello, World!'), findsOneWidget);

      // Verify that the default text style (bodyMedium) is applied.
      final textWidget = tester.widget<Text>(find.text('Hello, World!'));
      final textStyle = textWidget.style;
      expect(textStyle?.fontWeight, FontWeight.normal);
      expect(textStyle?.fontFamily, contains('Alexandria_regular')); // Default font family
    });

    testWidgets('Applies custom color and weight', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomThemeText(
              text: 'Hello, Flutter!',
              color: Colors.blue,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      );

      // Verify that the text is rendered with the correct content.
      expect(find.text('Hello, Flutter!'), findsOneWidget);

      // Verify that the text style contains the custom color and font weight.
      final textWidget = tester.widget<Text>(find.text('Hello, Flutter!'));
      final textStyle = textWidget.style;
      expect(textStyle?.color, Colors.blue);
      expect(textStyle?.fontWeight, FontWeight.bold);
    });

    testWidgets('Applies a specific TypographyVariant', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomThemeText(
              text: 'Headline Text',
              variant: TypographyVariant.headlineMedium,
            ),
          ),
        ),
      );

      // Verify that the text is rendered.
      expect(find.text('Headline Text'), findsOneWidget);

      // Verify that the correct variant is applied.
      final textWidget = tester.widget<Text>(find.text('Headline Text'));
      final textStyle = textWidget.style;

      // Retrieve the expected style directly from the theme.
      final expectedStyle = AppTheme.lightTheme.textTheme.headlineMedium!;

      expect(textStyle?.fontSize, expectedStyle.fontSize);
      expect(textStyle?.fontWeight, expectedStyle.fontWeight);
    });

    testWidgets('Handles maxLines and overflow', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomThemeText(
              text: 'This is a long text that should overflow',
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ),
      );

      // Verify that the text is rendered.
      expect(find.textContaining('This is a long text'), findsOneWidget);

      // Verify the overflow behavior by checking the widget properties.
      final textWidget = tester.widget<AutoSizeText>(
        find.byType(AutoSizeText),
      );
      expect(textWidget.maxLines, 1);
      expect(textWidget.overflow, TextOverflow.ellipsis);
    });
  });
}
