import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';
import 'package:homeprosgapp/feature/booking/domain/enum/booking_entity_enums.dart' as available;

import '../../../../../test_utils/test_utils.dart';

Future<void> checkValidationError({
  required WidgetTester tester,
  required Finder nextButtonFinder,
  String expectedErrorMessage = 'This field cannot be empty.',
}) async {
  final formBuilderFinder = find.byType(FormBuilder);
  // Tap the Next button
  await tester.tap(nextButtonFinder);
  await tester.pumpAndSettle();

  // Get the FormBuilder state and check for errors
  final formState = tester.state(formBuilderFinder) as FormBuilderState;
  final hasErrors = formState.errors.isNotEmpty;

  // Assert that there are validation errors
  expect(hasErrors, isTrue);

  // Assert that the expected error message is displayed
  final fieldRequiredText = find.text(expectedErrorMessage);
  expect(fieldRequiredText, findsAtLeast(1));
}

// Helper function to interact with PropertyTypeStep and validate field
Future<void> fillStepAndProceed(
  WidgetTester tester, {
  required Type type,
  required Key key,
  required Finder nextButtonFinder,
  required Future<void> Function() stepAction,
  bool checkValidation = false,
  bool findNested = true,
}) async {
  final typeStepFinder = find.byType(type);

  expect(typeStepFinder, findsOneWidget);

  final nextButton = find.text('Next');

  if (checkValidation) {
// Call the helper function to check validation error
    await checkValidationError(tester: tester, nextButtonFinder: nextButton);
  }

  if (findNested) {
// Find the service field within the ProjectServiceStep widget
    final fieldFinder = find.descendant(
      of: typeStepFinder,
      matching: find.byKey(key),
    );

    expect(fieldFinder, findsOneWidget);
  }

  // ******this is where i need to inject a function that is specific to each step

  await stepAction();

  // *****above this comment is where the injected code ends that is specific for each step

  // Proceed to the next step
  await tester.tap(nextButtonFinder);
  await tester.pumpAndSettle();
}

void main() {
  late MockGoRouter mockGoRouter;

  setUp(() {
    mockGoRouter = MockGoRouter();

    when(() => mockGoRouter.go(any())).thenAnswer((_) async {});
  });

  group('BookingMultiStepFormScreen Widget Tests', () {
    Widget createTestWidget() {
      return createMaterialAppTestWidget(
        // overrides: [bookingFormNotifierProvider.overrideWith(MockBookingFormNotifier.new)],
        child: const BookingMultiStepFormScreen(),
        mockGoRouter: mockGoRouter,
      );
    }

    testWidgets('displays initial booking form step', (WidgetTester tester) async {
      await tester.pumpWidget(createTestWidget());

      // Find the ProjectServiceStep widget
      final projectServiceStepFinder = find.byType(ProjectServiceStep);

      // Verify initial UI elements
      expect(find.byType(BookingScreenHeader), findsOneWidget);
      expect(find.byType(FormBuilder), findsOneWidget);
      expect(find.byType(LinearPercentIndicator), findsOneWidget);
      expect(projectServiceStepFinder, findsOneWidget);
      expect(find.text('Next'), findsOneWidget);
    });

    testWidgets('should navigate on pressing Next when required fields are valid', (WidgetTester tester) async {
      tester.view.physicalSize = const Size(640, 2200);
      tester.view.devicePixelRatio = 1.0;

      addTearDown(() {
        tester.view.resetPhysicalSize();
        tester.view.devicePixelRatio = 1.0;
      });

      await tester.pumpWidget(createTestWidget());

      await tester.pumpAndSettle();

      final element = tester.element(find.byType(BookingMultiStepFormScreen));
      final container = ProviderScope.containerOf(element);

      final nextButtonFinder = find.text('Next');
      const serviceStepKey = Key('project_service');

      await fillStepAndProceed(
        tester,
        type: ProjectServiceStep,
        key: serviceStepKey,
        nextButtonFinder: nextButtonFinder,
        checkValidation: true,
        stepAction: () async {
          // Enter text in the service field and select a suggestion
          await tester.enterText(find.byKey(serviceStepKey), 'Pool');
          await tester.tap(find.byKey(serviceStepKey));
          await tester.pumpAndSettle();

          // Select a specific suggestion
          expect(find.text('Pool Cleaning Services'), findsOneWidget);
          await tester.tap(find.text('Pool Cleaning Services'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's service was updated
          expect(container.read(bookingFormNotifierProvider).service, 'Pool Cleaning Services');
        },
      );

      await fillStepAndProceed(
        tester,
        type: PropertyTypeStep,
        key: const Key('property_type'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          await tester.tap(find.text('Commercial'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).propertyType, PropertyType.commercial);

          await tester.tap(find.text('Multi-unit Building'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).propertyType, PropertyType.multiUnitBuilding);
        },
      );

      await fillStepAndProceed(
        tester,
        type: HiringStageStep,
        key: const Key('hiring_stage'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          await tester.tap(find.text('Planning & Budgeting'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).hiringStage, HiringStage.planningAndBudgeting);

          await tester.tap(find.text('Ready to Hire'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).hiringStage, HiringStage.readyToHire);
        },
      );

      await fillStepAndProceed(
        tester,
        type: ProjectTimelineStep,
        key: const Key('project_timeline'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          await tester.tap(find.text('More than 2 Weeks'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).timeline, ProjectTimeline.moreThanTwoWeeks);

          await tester.tap(find.text('Timing is Flexible'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).timeline, ProjectTimeline.timingIsFlexible);
        },
      );

      await fillStepAndProceed(
        tester,
        type: ProjectScheduleTimeStep,
        key: const Key('project_schedule_time'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          await tester.tap(find.text('Morning'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).timeOfDay, available.TimeOfDay.morning);

          await tester.tap(find.text('Late Afternoon'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).timeOfDay, available.TimeOfDay.lateAfternoon);
        },
      );

      await fillStepAndProceed(
        tester,
        type: OwnershipStatusStep,
        key: const Key('ownership_status'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          await tester.tap(find.text('Authorized, I am authorized to make improvements'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).ownershipStatus, OwnershipStatus.authorizedToImprove);

          await tester.tap(find.text('Renter'));
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).ownershipStatus, OwnershipStatus.renter);
        },
      );

      const projectDetailsKey = Key('project_details');

      await fillStepAndProceed(
        tester,
        type: ProjectDetailsStep,
        key: projectDetailsKey,
        nextButtonFinder: nextButtonFinder,
        checkValidation: true,
        stepAction: () async {
          const projectDetails =
              'I am interested in obtaining weekly pool cleaning services that include debris removal, water chemistry testing and balancing, and equipment inspection. Please provide information on your service offerings, availability, and pricing.';
          // Enter text in the service field and select a suggestion
          await tester.enterText(
            find.byKey(projectDetailsKey),
            projectDetails,
          );

          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(bookingFormNotifierProvider).details, projectDetails);
        },
      );

      await fillStepAndProceed(
        tester,
        type: ProjectFileUploadsStep,
        key: const Key('project_file_uploads'),
        nextButtonFinder: nextButtonFinder,
        stepAction: () async {
          // Simulate tapping on the file picker
          await tester.tap(find.byKey(const Key('project_file_uploads')));
          await tester.pumpAndSettle();

          // Simulate file selection by directly calling onChanged in FormBuilderFilePicker
          final filePickerFinder = find.byType(FormBuilderFilePicker);
          final FormBuilderFilePicker filePicker = tester.widget(filePickerFinder);
          filePicker.onChanged?.call([sampleFile1, sampleFile2]);
          await tester.pumpAndSettle();

          // Verify that the booking notifier's property type was updated
          expect(container.read(uploadedFilesProvider).length, equals(2));
        },
      );

      await fillStepAndProceed(
        tester,
        type: ContactDetailsStep,
        key: const Key('contact_details'),
        nextButtonFinder: nextButtonFinder,
        checkValidation: true,
        findNested: false,
        stepAction: () async {
          // Simulate tapping on the file picker
          await tester.enterText(find.byKey(const Key('full_name')), 'John Doe');
          await tester.enterText(find.byKey(const Key('address')), '123 Main St');
          await tester.enterText(find.byKey(const Key('phone_number')), '1234567890');
          await tester.enterText(find.byKey(const Key('email_address')), 'john@example.com');
          await tester.pumpAndSettle();

          // Accept terms and conditions
          await tester.tap(find.byKey(const Key('terms_accepted')));
          await tester.pumpAndSettle();

          expect(container.read(bookingFormNotifierProvider).fullname, 'John Doe');
          expect(container.read(bookingFormNotifierProvider).address, '123 Main St');
          expect(container.read(bookingFormNotifierProvider).phone, '1234567890');
          expect(container.read(bookingFormNotifierProvider).email, 'john@example.com');
        },
      );

      // print(const JsonEncoder.withIndent('  ').convert(container.read(bookingFormNotifierProvider).toJson()));
      verify(() => mockGoRouter.go('/booking-confirmation')).called(1);
    });
  });
}
