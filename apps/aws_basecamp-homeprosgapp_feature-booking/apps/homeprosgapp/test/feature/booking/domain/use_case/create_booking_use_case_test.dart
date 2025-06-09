import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

import '../../booking_test_utils.dart';


// Mock BookingRepository class
class MockBookingRepository extends Mock implements BookingRepository {}

void main() {
  late MockBookingRepository mockRepository;
  late CreateBookingUseCase createBookingUseCase;

  // Example booking data using your enums.
  final validBooking = createMockBookingEntity();

  setUp(() {
    // Initialize the mock repository and use case before each test.
    mockRepository = MockBookingRepository();
    createBookingUseCase = CreateBookingUseCase(mockRepository);

    // Register fallback values for mocktail.
    registerFallbackValue(validBooking);
  });

  group('CreateBookingUseCase', () {
    test('should return BookingEntity on success', () async {
      // Arrange: Stub the mock repository to return a Right(Either) with validBooking.
      when(() => mockRepository.createBooking(any())).thenAnswer(
        (_) async => Right(validBooking),
      );

      // Act: Call the use case with the valid booking.
      final result = await createBookingUseCase.call(validBooking);

      // Assert: Verify that the result contains the valid booking entity.
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected a BookingEntity, but got an error.'),
        (booking) => expect(booking, validBooking),
      );

      // Verify that the repository's createBooking was called once.
      verify(() => mockRepository.createBooking(validBooking)).called(1);
    });

    test('should return BookingCreateException on failure', () async {
      // Arrange: Stub the mock repository to return a Left(Either) with an exception.
      final exception = BookingCreateException('Failed to create booking');
      when(() => mockRepository.createBooking(any())).thenAnswer(
        (_) async => Left(exception),
      );

      // Act: Call the use case with the valid booking.
      final result = await createBookingUseCase.call(validBooking);

      // Assert: Verify that the result contains the exception.
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, exception),
        (_) => fail('Expected a BookingCreateException, but got success.'),
      );

      // Verify that the repository's createBooking was called once.
      verify(() => mockRepository.createBooking(validBooking)).called(1);
    });
  });
}
