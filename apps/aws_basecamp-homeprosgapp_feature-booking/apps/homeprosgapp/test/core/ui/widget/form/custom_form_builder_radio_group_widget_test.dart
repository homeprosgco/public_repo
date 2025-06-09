import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomFormBuilderRadioGroup', () {
    testWidgets('renders all radio options and handles selection', (WidgetTester tester) async {
      // Define sample enum options
      final sampleOptions = {
        'Option1': 'First Option',
        'Option2': 'Second Option',
        'Option3': 'Third Option',
      };

      String? selectedValue;
      onChanged(value) {
        selectedValue = value;
      }

      // Build widget
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: FormBuilder(
              child: CustomFormBuilderRadioGroup<String>(
                name: 'sampleRadioGroup',
                enumOptions: sampleOptions,
                initialSelectedValue: selectedValue,
                onChanged: onChanged,
                iconColor: Colors.green,
              ),
            ),
          ),
        ),
      );

      await tester.pumpAndSettle();

      // Verify that all radio options are rendered
      expect(find.text('First Option'), findsOneWidget);
      expect(find.text('Second Option'), findsOneWidget);
      expect(find.text('Third Option'), findsOneWidget);

      // Verify that the selected option initially has no icon
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsNothing);

      // // Tap the first option
      await tester.tap(find.text('First Option'));
      await tester.pumpAndSettle();

      // // Verify that the onChanged callback updates the selected value
      expect(selectedValue, equals('Option1'));

      // // Verify that the selected option has the check icon
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);

      // // Tap the second option
      await tester.tap(find.text('Second Option'));
      await tester.pumpAndSettle();

      // // Verify that the onChanged callback updates the selected value
      expect(selectedValue, equals('Option2'));

      // // Verify that the selected option has the check icon, and it moved
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);
    });

    testWidgets('CustomFormBuilderRadioGroup should validate selection', (WidgetTester tester) async {
      final formKey = GlobalKey<FormBuilderState>();

      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: FormBuilder(
              key: formKey,
              child: CustomFormBuilderRadioGroup<String>(
                name: 'testRadio',
                enumOptions: const {
                  'option1': 'Option 1',
                  'option2': 'Option 2',
                },
                initialSelectedValue: null,
                onChanged: (value) {},
              ),
            ),
          ),
        ),
      );

      // Act: Call saveAndValidate without making a selection
      final isValid = formKey.currentState!.saveAndValidate();

      // Assert: Validator should fail as no selection has been made
      expect(isValid, isFalse);
      expect(formKey.currentState!.fields['testRadio']?.errorText, isNotNull);

      // Act: Select an option and re-validate
      await tester.tap(find.text('Option 1'));
      await tester.pumpAndSettle();

      // Check that field has updated and validation passes
      expect(formKey.currentState!.saveAndValidate(), isTrue);
    });
  });
}
