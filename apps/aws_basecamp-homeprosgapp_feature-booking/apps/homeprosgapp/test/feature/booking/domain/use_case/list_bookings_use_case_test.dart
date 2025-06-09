import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

import '../../booking_test_utils.dart';

// Mock class for BookingRepository
class MockBookingRepository extends Mock implements BookingRepository {}

// A dummy NoParams class
class FakeNoParams extends Fake implements NoParams {}

void main() {
  late ListBookingsUseCase listBookingsUseCase;
  late MockBookingRepository mockRepository;

  // Sample list of bookings for testing.
  final booking1 = createMockBookingEntity();

  final booking2 = createMockBookingEntity2();

  final List<BookingEntity> bookings = [booking1, booking2];

  setUpAll(() {
    // Register the Fake class for NoParams
    registerFallbackValue(FakeNoParams());
  });

  setUp(() {
    // Initialize the mock repository and use case before each test.
    mockRepository = MockBookingRepository();
    listBookingsUseCase = ListBookingsUseCase(mockRepository);
  });

  test('should return a list of BookingEntity on success', () async {
    // Arrange: Set up the mock to return a successful result.
    when(() => mockRepository.listBookings()).thenAnswer((_) async => Right(bookings));

    // Act: Call the use case.
    final result = await listBookingsUseCase.call(NoParams());

    // Assert: Verify the result and ensure the right path was taken.
    expect(result.isRight, true);
    result.fold(
      (error) => fail('Expected success but got error: ${error.message}'),
      (retrievedBookings) {
        expect(retrievedBookings, equals(bookings));
        expect(retrievedBookings.length, 2);
      },
    );

    // Verify that the repository method was called once.
    verify(() => mockRepository.listBookings()).called(1);
  });

  test('should return BookingListException on failure', () async {
    // Arrange: Set up the mock to return a failure.
    final exception = BookingListException('Failed to retrieve bookings');
    when(() => mockRepository.listBookings()).thenAnswer((_) async => Left(exception));

    // Act: Call the use case.
    final result = await listBookingsUseCase.call(NoParams());

    // Assert: Verify the result and ensure the error path was taken.
    expect(result.isLeft, true);
    result.fold(
      (error) {
        expect(error, isA<BookingListException>());
        expect(error.message, 'Failed to retrieve bookings');
      },
      (_) => fail('Expected error but got success'),
    );

    // Verify that the repository method was called once.
    verify(() => mockRepository.listBookings()).called(1);
  });
}
