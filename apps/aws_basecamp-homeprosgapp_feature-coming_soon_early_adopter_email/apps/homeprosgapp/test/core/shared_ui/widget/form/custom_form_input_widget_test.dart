import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomFormInput', () {
    testWidgets('renders a text input', (WidgetTester tester) async {
      String inputValue = '';

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              type: FormInputType.text,
              onChanged: (value) => inputValue = value,
              placeholder: 'Enter text',
            ),
          ),
        ),
      );

      await tester.enterText(find.byKey(const Key('earlyAdopterEmail')), 'Hello World');
      await tester.pumpAndSettle();

      expect(inputValue, 'Hello World');
      expect(find.text('Enter text'), findsOneWidget);
    });

    testWidgets('renders a text input and updates value', (WidgetTester tester) async {
      String inputValue = '';

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              type: FormInputType.text,
              onChanged: (value) => inputValue = value,
              placeholder: 'Enter text',
            ),
          ),
        ),
      );

      await tester.enterText(find.byKey(const Key('earlyAdopterEmail')), 'Hello World');
      await tester.pumpAndSettle();

      expect(inputValue, 'Hello World');
      expect(find.text('Enter text'), findsOneWidget);
    });

    testWidgets('renders a dropdown (select) input correctly', (WidgetTester tester) async {
      String? selectedValue;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              label: 'Select Option',
              type: FormInputType.select,
              options: const [
                DropdownMenuItem(value: 'Option 1', child: Text('Option 1')),
                DropdownMenuItem(value: 'Option 2', child: Text('Option 2')),
              ],
              onChanged: (value) => selectedValue = value,
            ),
          ),
        ),
      );

      expect(find.text('Select Option'), findsOneWidget);

      await tester.tap(find.byKey(const Key('earlyAdopterEmail')));
      await tester.pumpAndSettle();
      await tester.tap(find.text('Option 2').last);
      await tester.pumpAndSettle();

      expect(selectedValue, 'Option 2');
    });

    testWidgets('renders a textarea input', (WidgetTester tester) async {
      String inputValue = '';

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              type: FormInputType.textarea,
              onChanged: (value) => inputValue = value,
              placeholder: 'Enter text',
            ),
          ),
        ),
      );

      await tester.enterText(find.byKey(const Key('earlyAdopterEmail')), 'Multiline Text');
      await tester.pumpAndSettle();

      expect(inputValue, 'Multiline Text');
      expect(find.text('Enter text'), findsOneWidget);
    });

    testWidgets('displays an error message', (WidgetTester tester) async {
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              type: FormInputType.text,
              errorText: 'Invalid input',
            ),
          ),
        ),
      );

      expect(find.text('Invalid input'), findsOneWidget);
    });

    testWidgets('renders a password input correctly', (WidgetTester tester) async {
      String? passwordValue;

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFormInput(
              keyName: 'earlyAdopterEmail',
              label: 'Password',
              type: FormInputType.password,
              placeholder: 'Enter your password',
              onChanged: (value) => passwordValue = value,
            ),
          ),
        ),
      );

      expect(find.text('Enter your password'), findsOneWidget);

      await tester.enterText(find.byKey(const Key('earlyAdopterEmail')), 'password123');
      expect(passwordValue, 'password123');
    });

    testWidgets('finds notify button by key', (WidgetTester tester) async {
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: ElevatedButton(
              key: const Key('notifyButtonKeyName'),
              onPressed: () {},
              child: const Text('Notify Me'),
            ),
          ),
        ),
      );

      expect(find.byKey(const Key('notifyButtonKeyName')), findsOneWidget);
      expect(find.text('Notify Me'), findsOneWidget);
    });
  });
}
