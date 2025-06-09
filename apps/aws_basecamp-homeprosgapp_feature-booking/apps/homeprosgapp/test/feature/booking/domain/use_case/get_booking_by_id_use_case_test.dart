import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

import '../../booking_test_utils.dart';


// Mock repository class for BookingRepository.
class MockBookingRepository extends Mock implements BookingRepository {}

void main() {
  late GetBookingByIdUseCase getBookingByIdUseCase;
  late MockBookingRepository mockRepository;

  // Sample data for testing.
  final booking = createMockBookingEntity();

  setUp(() {
    // Initialize the mock repository and use case before each test.
    mockRepository = MockBookingRepository();
    getBookingByIdUseCase = GetBookingByIdUseCase(mockRepository);
  });

  test('should return BookingEntity on success', () async {
    // Arrange: Set up the mock to return a successful result.
    when(() => mockRepository.getBookingById(bookingId))
        .thenAnswer((_) async => Right(booking));

    // Act: Call the use case.
    final result = await getBookingByIdUseCase.call(bookingId);

    // Assert: Verify the result and ensure the right path was taken.
    expect(result.isRight, true);
    result.fold(
      (error) => fail('Expected success but got error: ${error.message}'),
      (retrievedBooking) {
        expect(retrievedBooking, equals(booking));
      },
    );

    // Verify the repository method was called once with the correct ID.
    verify(() => mockRepository.getBookingById(bookingId)).called(1);
  });

  test('should return BookingGetException on failure', () async {
    // Arrange: Set up the mock to return a failure.
    final exception = BookingGetException('Booking not found');
    when(() => mockRepository.getBookingById(bookingId))
        .thenAnswer((_) async => Left(exception));

    // Act: Call the use case.
    final result = await getBookingByIdUseCase.call(bookingId);

    // Assert: Verify the result and ensure the error path was taken.
    expect(result.isLeft, true);
    result.fold(
      (error) {
        expect(error, isA<BookingGetException>());
        expect(error.message, 'Booking not found');
      },
      (_) => fail('Expected error but got success'),
    );

    // Verify the repository method was called once with the correct ID.
    verify(() => mockRepository.getBookingById(bookingId)).called(1);
  });
}
