import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:go_router/go_router.dart';

import '../../../../../../../test_utils/test_utils.dart';
import '../../../../../booking_test_utils.dart';

class MockBookingEntity extends Mock implements BookingEntity {}

class MockGoRouter extends Mock implements GoRouter {}

void main() {
  late MockBookingFormNotifier mockBookingNotifier;
  late BookingEntity mockBooking;

  setUp(() {
    mockBookingNotifier = MockBookingFormNotifier();
    mockBooking = createMockUpdateBookingEntity();;
    // Set up the mock notifier to handle updateField calls
    when(() => mockBookingNotifier.updateField<dynamic>(
          any<dynamic>(),
          any(),
        )).thenReturn(null);
  });

  final formKey = GlobalKey<FormBuilderState>();

  Widget createTestWidget() {
    return createMaterialAppTestWidget(
      overrides: [bookingFormNotifierProvider.overrideWith(MockBookingFormNotifier.new)],
      child: Scaffold(
        body: FormBuilder(
          key: formKey,
          child: ProjectDetailsStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('ProjectDetailsStep', () {
    testWidgets('displays the initial project details', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Verify that the project details field is displayed with the initial value
      final textFieldFinder = find.byType(FormBuilderTextField);
      expect(textFieldFinder, findsOneWidget);
      expect(find.text('Tell us more about your project'), findsOneWidget);
    });

    testWidgets('calls updateField when project details are changed', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Enter new project details
      const newDetails = 'Install new lighting in the living room';
      await tester.enterText(find.byType(FormBuilderTextField), newDetails);
      await tester.pumpAndSettle();

      // Assert: Verify updateField is called with the new details
      verify(() => mockBookingNotifier.updateField<String?>(
            newDetails,
            any(),
          )).called(1);
    });

    testWidgets('validates that project details are required', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Clear the text field and validate the form
      await tester.enterText(find.byType(FormBuilderTextField), '');
      await tester.pumpAndSettle();
      formKey.currentState?.save();
      final isValid = formKey.currentState?.validate();

      // Assert: Check for validation error message
      expect(isValid, isFalse);
      expect(formKey.currentState?.fields['project_details']?.errorText, isNotNull);
    });
  });
}
