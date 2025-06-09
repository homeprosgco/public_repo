// import 'package:either_dart/either.dart';
// import 'package:flutter_riverpod/flutter_riverpod.dart';
// import 'package:flutter_test/flutter_test.dart';
// import 'package:mocktail/mocktail.dart';
// import 'package:homeprosgapp/core/core.dart';
// import 'package:homeprosgapp/feature/feature.dart';

// import '../../../booking_test_utils/booking_test_utils.dart';

// // Mock Classes
// class MockCreateBookingUseCase extends Mock implements CreateBookingUseCase {}
// class MockSendBookingEmailConfirmationUseCase extends Mock implements SendBookingEmailConfirmationUseCase {}

// void main() {
//   late ProviderContainer container;
//   late MockCreateBookingUseCase mockCreateBookingUseCase;
//   late MockSendBookingEmailConfirmationUseCase mockSendBookingEmailConfirmationUseCase;

//   final bookingFormData = createMockBookingEntity();
//   final bookingEmailConfirmation = bookingFormData.toBookingEmailConfirmationEntity('https://example.com/confirm');

//   setUp(() {
//     mockCreateBookingUseCase = MockCreateBookingUseCase();
//     mockSendBookingEmailConfirmationUseCase = MockSendBookingEmailConfirmationUseCase();

//     container = ProviderContainer(
//       overrides: [
//         createBookingUseCaseProvider.overrideWith((ref) => mockCreateBookingUseCase),
//         sendBookingEmailConfirmationUseCaseProvider.overrideWith((ref) => mockSendBookingEmailConfirmationUseCase),
//       ],
//     );

//     registerFallbackValue(bookingFormData);
//     registerFallbackValue(bookingEmailConfirmation);
//   });

//   tearDown(() {
//     container.dispose();
//   });

//   group('BookingWorkflowNotifier', () {
//     test('should successfully complete the booking workflow', () async {
//       // Arrange
//       when(() => mockCreateBookingUseCase(any())).thenAnswer((_) async => Right(bookingFormData));
//       when(() => mockSendBookingEmailConfirmationUseCase(any())).thenAnswer(
//         (_) async => Right(EmailResponseEntity(statusCode: 200, message: 'Email sent successfully')),
//       );

//       final notifier = container.read(bookingWorkflowNotifierProvider.notifier);

//       // Act
//       await notifier.submitBookingWorkflow(bookingFormData);

//       // Assert
//       final state = container.read(bookingWorkflowNotifierProvider);
//       expect(state, isA<AsyncValue<void>>().having((value) => value.isLoading, 'isLoading', false));
//       verify(() => mockCreateBookingUseCase(any())).called(1);
//       verify(() => mockSendBookingEmailConfirmationUseCase(any())).called(1);
//     });

//     test('should set an error if booking creation fails', () async {
//       // Arrange
//       when(() => mockCreateBookingUseCase(any())).thenThrow(Exception('Booking creation failed'));

//       final notifier = container.read(bookingWorkflowNotifierProvider.notifier);

//       // Act
//       await notifier.submitBookingWorkflow(bookingFormData);

//       // Assert
//       final state = container.read(bookingWorkflowNotifierProvider);
//       expect(
//         state,
//         isA<AsyncValue<void>>()
//             .having((value) => value.hasError, 'hasError', true)
//             .having((value) => value.error.toString(), 'error message', contains('Error submitting booking')),
//       );
//       verify(() => mockCreateBookingUseCase(any())).called(1);
//       verifyNever(() => mockSendBookingEmailConfirmationUseCase(any()));
//     });

//     test('should set an error if email sending fails after successful booking creation', () async {
//       when(() => mockCreateBookingUseCase(any())).thenAnswer((_) async => Right(bookingFormData));
//       when(() => mockSendBookingEmailConfirmationUseCase(any())).thenThrow(
//         Exception('Email sending failed'),
//       );

//       final notifier = container.read(bookingWorkflowNotifierProvider.notifier);

//       // Act
//       await notifier.submitBookingWorkflow(bookingFormData);

//       // Assert
//       final state = container.read(bookingWorkflowNotifierProvider);
//       expect(
//         state,
//         isA<AsyncValue<void>>()
//             .having((value) => value.hasError, 'hasError', true)
//             .having((value) => value.error.toString(), 'error message', contains('Email sending failed')),
//       );
//       verify(() => mockCreateBookingUseCase(any())).called(1);
//       verify(() => mockSendBookingEmailConfirmationUseCase(any())).called(1);
//     });

//     test('should set an error if email response status code is not 200', () async {
//       when(() => mockCreateBookingUseCase(any())).thenAnswer((_) async => Right(bookingFormData));
//       when(() => mockSendBookingEmailConfirmationUseCase(any())).thenAnswer(
//         (_) async => Right(EmailResponseEntity(statusCode: 407, message: 'Booking created, but email failed')),
//       );

//       final notifier = container.read(bookingWorkflowNotifierProvider.notifier);

//       // Act
//       await notifier.submitBookingWorkflow(bookingFormData);

//       // Assert
//       final state = container.read(bookingWorkflowNotifierProvider);
//       expect(
//         state,
//         isA<AsyncValue<void>>()
//             .having((value) => value.hasError, 'hasError', true)
//             .having((value) => value.error.toString(), 'error message', contains('Booking created, but email failed')),
//       );
//       verify(() => mockCreateBookingUseCase(any())).called(1);
//       verify(() => mockSendBookingEmailConfirmationUseCase(any())).called(1);
//     });
//   });
// }
