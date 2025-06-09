import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomThemeButton Tests', () {
    testWidgets('displays solid button with primary color', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'solid-primary',
              variant: 'solid',
              color: 'primary',
              onPressed: () {},
              child: const Text('Solid Button'),
            ),
          ),
        ),
      );

      final button = find.byKey(const Key('solid-primary'));
      expect(button, findsOneWidget);
      expect(find.text('Solid Button'), findsOneWidget);
    });

    testWidgets('displays outlined button with secondary color', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'outlined-secondary',
              variant: 'outlined',
              color: 'secondary',
              onPressed: () {},
              child: const Text('Outlined Button'),
            ),
          ),
        ),
      );

      final button = find.byKey(const Key('outlined-secondary'));
      expect(button, findsOneWidget);
      expect(find.text('Outlined Button'), findsOneWidget);
    });

    testWidgets('displays text button with tertiary color', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'text-tertiary',
              variant: 'text',
              color: 'tertiary',
              onPressed: () {},
              child: const Text('Text Button'),
            ),
          ),
        ),
      );

      final button = find.byKey(const Key('text-tertiary'));
      expect(button, findsOneWidget);
      expect(find.text('Text Button'), findsOneWidget);
    });

    testWidgets('displays button with icon at the start', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'icon-start',
              icon: const Icon(Icons.add),
              iconPosition: 'start',
              onPressed: () {},
              child: const Text('With Icon'),
            ),
          ),
        ),
      );

      final button = find.byKey(const Key('icon-start'));
      expect(button, findsOneWidget);
      expect(find.text('With Icon'), findsOneWidget);
      expect(find.byIcon(Icons.add), findsOneWidget);
    });

    testWidgets('displays button with icon at the end', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'icon-end',
              icon: const Icon(Icons.add),
              iconPosition: 'end',
              onPressed: () {},
              child: const Text('With Icon'),
            ),
          ),
        ),
      );

      final button = find.byKey(const Key('icon-end'));
      expect(button, findsOneWidget);
      expect(find.text('With Icon'), findsOneWidget);
      expect(find.byIcon(Icons.add), findsOneWidget);
    });

    testWidgets('button responds to onPressed', (WidgetTester tester) async {
      bool pressed = false;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomThemeButton(
              keyName: 'button-press',
              child: const Text('Press Me'),
              onPressed: () => pressed = true,
            ),
          ),
        ),
      );

      await tester.tap(find.byKey(const Key('button-press')));
      expect(pressed, isTrue);
    });
  });
}
