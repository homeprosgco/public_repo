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
          child: HiringStageStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('HiringStageStep', () {
    testWidgets('displays initial selected hiring stage', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Assert: Ensure initial selection displays correctly
      expect(find.text('Planning & Budgeting'), findsOneWidget);
      expect(find.text('Ready to Hire'), findsOneWidget);

      expect(
        find.byIcon(Icons.check_circle_outline_outlined),
        findsOneWidget,
      );
    });

    testWidgets('calls updateField when a different hiring stage is selected', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Tap on the "Planning & Budgeting" option
      await tester.tap(find.text('Planning & Budgeting'));
      await tester.pumpAndSettle();

      // Assert: Verify that updateField is called with the new value
      verify(() => mockBookingNotifier.updateField<HiringStage>(
            HiringStage.planningAndBudgeting,
            any(),
          )).called(1);
    });

    testWidgets('allows only one hiring stage to be selected at a time', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Act: Select "Planning & Budgeting"
      await tester.tap(find.text('Planning & Budgeting'));
      await tester.pumpAndSettle();

      // Assert: Verify that only one icon appears for the selected hiring stage
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);

      // Act: Switch selection to "Ready to Hire"
      await tester.tap(find.text('Ready to Hire'));
      await tester.pumpAndSettle();

      // Assert: Verify that selection switched and only one icon is present
      verify(() => mockBookingNotifier.updateField<HiringStage>(
            HiringStage.readyToHire,
            any(),
          )).called(1);
      expect(find.byIcon(Icons.check_circle_outline_outlined), findsOneWidget);
    });
  });
}
