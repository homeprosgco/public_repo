import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_extra_fields/form_builder_extra_fields.dart';
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
          child: ProjectServiceStep(
            bookingNotifier: mockBookingNotifier,
            booking: mockBooking,
          ),
        ),
      ),
    );
  }

  group('ProjectServiceStep', () {
    testWidgets('displays service suggestions based on input', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.enterText(find.byType(FormBuilderTypeAhead<String>), 'Pool');
      await tester.pumpAndSettle();

      // Ensure the suggestion list is shown based on the query 'electrician'
      expect(find.textContaining('Pool'), findsWidgets);
    });

    testWidgets('calls updateField on suggestion selection', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.enterText(find.byType(FormBuilderTypeAhead<String>), 'Pool');
      await tester.pumpAndSettle();

      // Tap on a suggestion
      await tester.tap(find.text('Above Ground Pool Installers'));
      await tester.pumpAndSettle();

      // Verify updateField is called with the selected value
      verify(() => mockBookingNotifier.updateField<String>(
            'Above Ground Pool Installers',
            any(),
          )).called(1);
    });
  });
}
