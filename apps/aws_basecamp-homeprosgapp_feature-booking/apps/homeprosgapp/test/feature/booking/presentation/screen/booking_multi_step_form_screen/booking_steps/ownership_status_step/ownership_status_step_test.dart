import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../../../../test_utils/test_utils.dart';
import '../../../../../booking_test_utils.dart';

class MockBookingEntity extends Mock implements BookingEntity {}

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
          child: OwnershipStatusStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('OwnershipStatusStep', () {
    testWidgets('displays initial selected ownership status', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Assert: Ensure initial selection displays correctly
      expect(find.text('Owner'), findsOneWidget);
      expect(find.text('Renter'), findsOneWidget);
      expect(find.text('Authorized, I am authorized to make improvements'), findsOneWidget);

      // Assert that the initially selected status is "Owner"
      expect(
        find.byIcon(Icons.check_circle_outline_outlined),
        findsOneWidget,
      );
    });

    testWidgets('calls updateField when ownership status is changed to Renter', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Select "Renter" option
      await tester.tap(find.text('Renter'));
      await tester.pumpAndSettle();

      // Assert: Verify updateField is called with OwnershipStatus.renter
      verify(() => mockBookingNotifier.updateField<OwnershipStatus>(
            OwnershipStatus.renter,
            any(),
          )).called(1);
    });

    testWidgets('calls updateField when ownership status is changed to Authorized', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Select "Authorized" option
      await tester.tap(find.text('Authorized, I am authorized to make improvements'));
      await tester.pumpAndSettle();

      // Assert: Verify updateField is called with OwnershipStatus.authorizedToImprove
      verify(() => mockBookingNotifier.updateField<OwnershipStatus>(
            OwnershipStatus.authorizedToImprove,
            any(),
          )).called(1);
    });

    testWidgets('ensures only one ownership status can be selected at a time', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Select "Renter" option
      await tester.tap(find.text('Renter'));
      await tester.pumpAndSettle();

      // Assert: Verify that only one check icon appears
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);

      // Act: Switch selection to "Authorized"
      await tester.tap(find.text('Authorized, I am authorized to make improvements'));
      await tester.pumpAndSettle();

      // Assert: Verify the selection switched correctly
      verify(() => mockBookingNotifier.updateField<OwnershipStatus>(
            OwnershipStatus.authorizedToImprove,
            any(),
          )).called(1);
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);
    });
  });
}
