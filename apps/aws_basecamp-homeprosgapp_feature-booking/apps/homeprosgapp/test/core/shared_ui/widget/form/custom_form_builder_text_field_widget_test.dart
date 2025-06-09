import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

class MockNotifier extends Mock {
  void updateField(String? value, dynamic Function(dynamic, String?) copyWithField);
}

void main() {
  late MockNotifier mockNotifier;

  setUp(() {
    mockNotifier = MockNotifier();
  });

  testWidgets('CustomFormBuilderTextField displays initial value and updates on change', (WidgetTester tester) async {
    // Arrange: Set up the initial value and label text
    const initialValue = 'Initial Value';
    const fieldName = 'testField';
    const labelText = 'Test Label';

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: CustomFormBuilderTextField<MockNotifier, dynamic>(
            fieldName: fieldName,
            labelText: labelText,
            labelStyle: const TextStyle(fontSize: 16),
            formFieldLabelStyle: const TextStyle(fontSize: 14),
            notifier: mockNotifier,
            initialValue: initialValue,
            copyWithField: (entity, value) => entity,
            updateField: mockNotifier.updateField,
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Assert: Check the label text and initial value
    expect(find.text(labelText), findsOneWidget);
    expect(find.text(initialValue), findsOneWidget);

    await tester.pumpAndSettle();

    // Act: Enter new text and verify the update
    await tester.enterText(find.byType(FormBuilderTextField), 'New Value');
    await tester.pump();

    // Assert: Verify that updateField is called with the new value
    verify(() => mockNotifier.updateField('New Value', any())).called(1);
  });
}
