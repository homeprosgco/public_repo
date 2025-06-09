import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

import '../../booking_test_utils.dart';


// Mock BookingRepository class
class MockBookingRepository extends Mock implements BookingRepository {}

void main() {
  late MockBookingRepository mockRepository;
  late DeleteBookingUseCase deleteBookingUseCase;

  // Example booking data
  final booking = createMockBookingEntity();

  setUp(() {
    // Initialize the mock repository and use case before each test.
    mockRepository = MockBookingRepository();
    deleteBookingUseCase = DeleteBookingUseCase(mockRepository);

    // Register fallback values for mocktail.
    registerFallbackValue(booking);
  });

  group('DeleteBookingUseCase', () {
    test('should return void on successful deletion', () async {
      // Arrange: Stub the mock repository to return a Right(Either) with void.
      when(() => mockRepository.deleteBooking(any())).thenAnswer(
        (_) async => const Right(null),
      );

      // Act: Call the use case with the booking entity.
      final result = await deleteBookingUseCase.call(booking);

      // Assert: Verify that the result is a successful deletion.
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success, but got an error.'),
        (_) => safePrint('Booking delelted successfully'),
      );

      // Verify that the repository's deleteBooking was called once.
      verify(() => mockRepository.deleteBooking(booking)).called(1);
    });

    test('should return BookingDeleteException on failure', () async {
      // Arrange: Stub the mock repository to return a Left(Either) with an exception.
      final exception = BookingDeleteException('Failed to delete booking');
      when(() => mockRepository.deleteBooking(any())).thenAnswer(
        (_) async => Left(exception),
      );

      // Act: Call the use case with the booking entity.
      final result = await deleteBookingUseCase.call(booking);

      // Assert: Verify that the result contains the exception.
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, exception),
        (_) => fail('Expected a BookingDeleteException, but got success.'),
      );

      // Verify that the repository's deleteBooking was called once.
      verify(() => mockRepository.deleteBooking(booking)).called(1);
    });
  });
}
