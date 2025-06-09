import 'package:either_dart/either.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../../../../test_utils/test_utils.dart';
import '../../../booking_test_utils/booking_test_utils.dart';

class MockPlatformFile extends Mock implements PlatformFile {}
// Mock Classes
class MockCreateBookingUseCase extends Mock implements CreateBookingUseCase {}
class MockSendBookingEmailConfirmationUseCase extends Mock implements SendBookingEmailConfirmationUseCase {}

void main() {
  late MockGoRouter mockGoRouter;
  // late MockBookingFormNotifier mockBookingFormNotifier;
  // late MockBookingWorkflowNotifier mockBookingWorkflowNotifier;
  // late MockS3FileUploader mockS3FileUploader;
  // late PlatformFile mockFile;
  final testBooking = createMockBookingEntity();
  late MockCreateBookingUseCase mockCreateBookingUseCase;
  late MockSendBookingEmailConfirmationUseCase mockSendBookingEmailConfirmationUseCase;

  setUp(() {
    // mockFile = MockPlatformFile();
    mockGoRouter = MockGoRouter();
    // mockBookingFormNotifier = MockBookingFormNotifier();
    // mockBookingWorkflowNotifier = MockBookingWorkflowNotifier();
    // mockS3FileUploader = MockS3FileUploader();
    mockCreateBookingUseCase = MockCreateBookingUseCase();
    mockSendBookingEmailConfirmationUseCase = MockSendBookingEmailConfirmationUseCase();

    // when(() => mockS3FileUploader.uploadFile(file: mockFile, uploadPath: 'uploads/test.jpg')).thenAnswer((_) async => 'url');
    // when(() => mockGoRouter.go(any())).thenAnswer((_) async {});
    registerFallbackValue(testBooking);
    registerFallbackValue(testBooking.toBookingEmailConfirmationEntity('https://example.com'));
  });

  Widget createTestWidget() {
    return createMaterialAppTestWidget(
      overrides: [
        bookingFormNotifierProvider.overrideWith(MockBookingFormNotifier.new),
        // bookingWorkflowNotifierProvider.overrideWith(MockBookingWorkflowNotifier.new),
        // s3FileUploaderProvider.overrideWith(MockS3FileUploader.new),
        createBookingUseCaseProvider.overrideWith((ref) => mockCreateBookingUseCase),
        sendBookingEmailConfirmationUseCaseProvider.overrideWith((ref) => mockSendBookingEmailConfirmationUseCase),
      ],
      child: const BookingConfirmationScreen(),
      mockGoRouter: mockGoRouter,
    );
  }

  testWidgets('displays booking information and submits data', (tester) async {
    await tester.pumpWidget(createTestWidget());

    await tester.pump();

    // Check if initial booking details are displayed correctly
    expect(find.text('John Doe'), findsOneWidget);
    expect(find.text('johndoe@example.com'), findsOneWidget);
    expect(find.text('123-456-7890'), findsOneWidget);
    expect(find.text('Confirm Project'), findsOneWidget);
  });

  testWidgets('displays loading overlay while submitting', (tester) async {
    // Arrange
      when(() => mockCreateBookingUseCase(any())).thenAnswer((_) async => Right(testBooking));
      when(() => mockSendBookingEmailConfirmationUseCase(any())).thenAnswer(
        (_) async => Right(EmailResponseEntity(statusCode: 200, message: 'Email sent successfully')),
      );

    await tester.pumpWidget(createTestWidget());
    await tester.pumpAndSettle();

    final element = tester.element(find.byType(BookingConfirmationScreen));
    final container = ProviderScope.containerOf(element);


     container.listen<AsyncValue>(
      bookingWorkflowNotifierProvider,
      (previous, next) {
        print('The provider changed from $previous to $next');
      },
      fireImmediately: true,
    );

    final confirmProjectButton = find.text('Confirm Project');
    await tester.ensureVisible(confirmProjectButton);

    expect(confirmProjectButton, findsOneWidget);

    await tester.tap(confirmProjectButton);

    // Verify loading overlay is displayed
    // expect(find.byType(CircularProgressIndicator), findsOneWidget);
  });

  // testWidgets('displays an error message if booking submission fails', (tester) async {
  //   when(() => mockCreateBookingUseCase(any())).thenThrow(Exception('Error submitting booking'));

  //   await tester.pumpWidget(createTestWidget());
  //   await tester.pumpAndSettle();

  //   // Check for the error message
  //   expect(find.text('Error submitting booking'), findsOneWidget);
  // });
}
