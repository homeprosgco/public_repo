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
    mockBooking = createMockUpdateBookingEntity();
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
          child: ContactDetailsStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('ContactDetailsStep', () {
    testWidgets('Test if updateField is called', (WidgetTester tester) async {
      // Step 2: Define the behavior of `updateField` in the mock

      // Step 3: Set up widget with mockBookingFormNotifier
      await tester.pumpWidget(createTestWidget());

      // Step 4: Enter text to trigger `updateField`
      await tester.enterText(find.byKey(const Key('full_name')), 'John Doe');
      await tester.pumpAndSettle();

      // Step 5: Verify `updateField` was called
      verify(() => mockBookingNotifier.updateField<String?>(
            'John Doe',
            any(),
          )).called(1);
    });
    testWidgets('displays all fields and terms checkbox', (tester) async {
      await tester.pumpWidget(createTestWidget());

      await tester.pumpAndSettle();

      // Check if the Full Name, Address, Phone Number, and Email Address fields are displayed
      expect(find.text('Full Name'), findsOneWidget);
      expect(find.text('Address'), findsOneWidget);
      expect(find.text('Phone Number'), findsOneWidget);
      expect(find.text('Email Address'), findsOneWidget);

      // Check if the terms and conditions checkbox is displayed
      expect(find.text('By submitting, I acknowledge and agree to the Terms of Use and Privacy Policy'), findsOneWidget);
    });

    testWidgets('validates required fields', (tester) async {
      await tester.pumpWidget(createTestWidget());

      // Attempt to submit without filling required fields
      final isValid = formKey.currentState!.validate();
      await tester.pumpAndSettle();

      // Assert: Validator should fail as no selection has been made
      expect(isValid, isFalse);

      // Assert: Validator should fail as no text has been entered
      expect(formKey.currentState!.fields['full_name']?.errorText, isNotNull);
      expect(formKey.currentState!.fields['address']?.errorText, isNotNull);
      expect(formKey.currentState!.fields['email_address']?.errorText, isNotNull);
      expect(formKey.currentState!.fields['terms_accepted']?.errorText, isNotNull);
    });

    testWidgets('updates bookingNotifier when fields are changed', (tester) async {
      await tester.pumpWidget(createTestWidget());

      // Enter values in the Full Name and Address fields
      await tester.enterText(find.byKey(const Key('full_name')), 'John Doe');
      await tester.enterText(find.byKey(const Key('address')), '123 Main St');
      await tester.enterText(find.byKey(const Key('phone_number')), '1234567890');
      await tester.enterText(find.byKey(const Key('email_address')), 'john@example.com');
      await tester.pumpAndSettle();

      // Accept terms and conditions
      await tester.tap(find.byKey(const Key('terms_accepted')));
      await tester.pumpAndSettle();

      // Verify that the notifier's updateField method is called with the new values
      verify(() => mockBookingNotifier.updateField<String?>('John Doe', any())).called(1);
      verify(() => mockBookingNotifier.updateField<String?>('123 Main St', any())).called(1);
      verify(() => mockBookingNotifier.updateField<String?>('1234567890', any())).called(1);
      verify(() => mockBookingNotifier.updateField<String?>('john@example.com', any())).called(1);
      verify(() => mockBookingNotifier.updateField<bool?>(true, any())).called(1);
    });
  });
}
