import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomThemeButton', () {
    testWidgets('renders elevated button by default', (WidgetTester tester) async {
      // Arrange & Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              child: const Text('Default Button'),
              onPressed: () {},
            ),
          ),
        ),
      );

      // Assert
      expect(find.byKey(const Key('notifyButton')), findsOneWidget);
      expect(find.text('Default Button'), findsOneWidget);
    });

    testWidgets('renders outlined button when variant is outlined', (WidgetTester tester) async {
      // Arrange & Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              variant: 'outlined',
              onPressed: () {},
              child: const Text('Outlined Button'),
            ),
          ),
        ),
      );

      // Assert
      expect(find.byKey(const Key('notifyButton')), findsOneWidget);
      expect(find.byType(OutlinedButton), findsOneWidget);
      expect(find.text('Outlined Button'), findsOneWidget);
    });

    testWidgets('renders text button when variant is text', (WidgetTester tester) async {
      // Arrange & Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              variant: 'text',
              onPressed: () {},
              child: const Text('Text Button'),
            ),
          ),
        ),
      );

      // Assert
      expect(find.byKey(const Key('notifyButton')), findsOneWidget);
      expect(find.byType(TextButton), findsOneWidget);
      expect(find.text('Text Button'), findsOneWidget);
    });

    testWidgets('displays icon at the start of the button', (WidgetTester tester) async {
      // Arrange & Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              icon: const Icon(Icons.add),
              iconPosition: 'start',
              onPressed: () {},
              child: const Text('Icon Button'),
            ),
          ),
        ),
      );

      // Assert
      expect(find.byKey(const Key('notifyButton')), findsOneWidget);
      expect(find.byIcon(Icons.add), findsOneWidget);
      expect(find.text('Icon Button'), findsOneWidget);
    });

    testWidgets('displays icon at the end of the button', (WidgetTester tester) async {
      // Arrange & Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              icon: const Icon(Icons.add),
              iconPosition: 'end',
              onPressed: () {},
              child: const Text('Icon Button'),
            ),
          ),
        ),
      );

      // Assert
      expect(find.byKey(const Key('notifyButton')), findsOneWidget);
      expect(find.byIcon(Icons.add), findsOneWidget);
      expect(find.text('Icon Button'), findsOneWidget);
    });

    testWidgets('uses correct background color for primary variant', (WidgetTester tester) async {
      // Arrange
      final theme = ThemeData(
        colorScheme: const ColorScheme.light(
          primary: Colors.blue,
        ),
      );

      // Act
      await tester.pumpWidget(
        MaterialApp(
          theme: theme,
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              color: 'primary',
              onPressed: () {},
              child: const Text('Primary Button'),
            ),
          ),
        ),
      );

      // Assert
      final elevatedButton = tester.widget<ElevatedButton>(find.byType(ElevatedButton));
      final backgroundColor = elevatedButton.style?.backgroundColor?.resolve({});
      expect(backgroundColor, Colors.blue);
    });

    testWidgets('uses custom padding when size is custom', (WidgetTester tester) async {
      // Arrange
      const customPadding = EdgeInsets.all(20);

      // Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'notifyButton',
              size: 'custom',
              customPadding: customPadding,
              onPressed: () {},
              child: const Text('Custom Button'),
            ),
          ),
        ),
      );

      // Assert
      final elevatedButton = tester.widget<ElevatedButton>(find.byType(ElevatedButton));
      final padding = elevatedButton.style?.padding?.resolve({});
      expect(padding, customPadding);
    });
  });
}
