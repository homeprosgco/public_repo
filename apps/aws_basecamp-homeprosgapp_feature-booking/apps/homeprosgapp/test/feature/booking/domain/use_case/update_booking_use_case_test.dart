import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

import '../../booking_test_utils.dart';


// Mock class for BookingRepository
class MockBookingRepository extends Mock implements BookingRepository {}

// Sample booking entity for testing
final BookingEntity sampleBooking = createMockBookingEntity();

// A fake booking entity to use as a fallback value.
class FakeBookingEntity extends Fake implements BookingEntity {}

void main() {
  late MockBookingRepository mockRepository;
  late UpdateBookingUseCase updateBookingUseCase;

  setUpAll(() {
    // Register the fallback value for BookingEntity.
    registerFallbackValue(FakeBookingEntity());
  });

  setUp(() {
    // Initialize mock repository and use case.
    mockRepository = MockBookingRepository();
    updateBookingUseCase = UpdateBookingUseCase(mockRepository);
  });

  test('should return updated BookingEntity on success', () async {
    // Arrange: Set up the mock to return a successful update.
    when(() => mockRepository.updateBooking(any())).thenAnswer((_) async => Right(sampleBooking));

    // Act: Call the use case with the sample booking.
    final result = await updateBookingUseCase.call(sampleBooking);

    // Assert: Verify the result is a successful update.
    expect(result.isRight, true);
    result.fold(
      (error) => fail('Expected success but got error: ${error.message}'),
      (updatedBooking) => expect(updatedBooking, equals(sampleBooking)),
    );

    // Verify the updateBooking method was called once with the sample booking.
    verify(() => mockRepository.updateBooking(sampleBooking)).called(1);
  });

  test('should return BookingUpdateException on failure', () async {
    // Arrange: Set up the mock to return a failure.
    final exception = BookingUpdateException('Failed to update booking');
    when(() => mockRepository.updateBooking(any())).thenAnswer((_) async => Left(exception));

    // Act: Call the use case with the sample booking.
    final result = await updateBookingUseCase.call(sampleBooking);

    // Assert: Verify the result is a failure with the expected exception.
    expect(result.isLeft, true);
    result.fold(
      (error) {
        expect(error, isA<BookingUpdateException>());
        expect(error.message, 'Failed to update booking');
      },
      (_) => fail('Expected error but got success'),
    );

    // Verify the updateBooking method was called once with the sample booking.
    verify(() => mockRepository.updateBooking(sampleBooking)).called(1);
  });
}
