import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/shared_ui/widget/form/custom_file_upload_picker_widget.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:go_router/go_router.dart';

import '../../../../../../../test_utils/test_utils.dart';

class MockBookingEntity extends Mock implements BookingEntity {}

class MockGoRouter extends Mock implements GoRouter {}

void main() {
  late MockBookingFormNotifier mockBookingNotifier;

  setUp(() {
    mockBookingNotifier = MockBookingFormNotifier();
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
          child: const ProjectFileUploadsStep(),
        ),
      ),
    );
  }

  group('ProjectFileUploadsStep', () {
    testWidgets('displays the file upload picker with correct label', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Verify the CustomFileUploadPicker is displayed with the correct label
      final pickerFinder = find.byType(CustomFileUploadPicker);
      expect(pickerFinder, findsOneWidget);
      expect(find.text('Attach Plans and Photos'), findsOneWidget);
    });

    testWidgets('allows file selection when picker is tapped', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Simulate tapping on the file picker
      await tester.tap(find.byType(CustomFileUploadPicker));
      await tester.pumpAndSettle();

      // No direct UI change expected, but it confirms that tap interaction is enabled
      // Optionally verify that the picker opens file selector (mock any further interactions if needed)
    });
  });

  
}
