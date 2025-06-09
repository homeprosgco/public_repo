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
          child: PropertyTypeStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('PropertyTypeStep', () {
    testWidgets('displays options for property types', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Assert: All options are displayed
      expect(find.text('Residential'), findsOneWidget);
      expect(find.text('Multi-unit Building'), findsOneWidget);
      expect(find.text('Commercial'), findsOneWidget);
      expect(find.text('Mobile Home'), findsOneWidget);
    });

    testWidgets('calls updateField on selecting a property type', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.tap(find.text('Commercial'));
      await tester.pumpAndSettle();

      // Verify updateField is called with the selected value
      verify(() => mockBookingNotifier.updateField<PropertyType>(
            PropertyType.commercial,
            any(),
          )).called(1);
    });
  });
}
