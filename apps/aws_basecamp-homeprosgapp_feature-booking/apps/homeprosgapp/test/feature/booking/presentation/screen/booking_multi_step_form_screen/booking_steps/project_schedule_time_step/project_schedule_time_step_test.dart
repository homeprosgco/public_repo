import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/feature/booking/domain/enum/booking_entity_enums.dart' as available;

import '../../../../../../../test_utils/test_utils.dart';
import '../../../../../booking_test_utils.dart';

class MockBookingEntity extends Mock implements BookingEntity {}

class MockGoRouter extends Mock implements GoRouter {}

void main() {
  late MockBookingFormNotifier mockBookingNotifier;
  late BookingEntity mockBooking;

  setUp(() {
    mockBookingNotifier = MockBookingFormNotifier();
    mockBooking = createMockBookingEntity();
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
          child: ProjectScheduleTimeStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('ProjectScheduleTimeStep', () {
    testWidgets('displays the schedule time options', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Verify the options are displayed
      expect(find.text('Early Morning'), findsOneWidget);
      expect(find.text('Morning'), findsOneWidget);
      expect(find.text('Afternoon'), findsOneWidget);
      expect(find.text('Late Afternoon'), findsOneWidget);
    });

    testWidgets('calls updateField on selection change', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Tap to select 'Afternoon' option
      await tester.tap(find.text('Afternoon'));
      await tester.pumpAndSettle();

      // Verify updateField is called with the new selection
      verify(() => mockBookingNotifier.updateField<available.TimeOfDay>(
            available.TimeOfDay.afternoon,
            any(),
          )).called(1);
    });
  });

}
