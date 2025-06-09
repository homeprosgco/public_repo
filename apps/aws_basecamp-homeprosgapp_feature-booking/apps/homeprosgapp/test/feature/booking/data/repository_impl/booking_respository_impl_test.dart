import 'package:flutter_test/flutter_test.dart';
import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

import '../../booking_test_utils.dart';


// Mock class for the BookingRemoteDataSource
class MockBookingRemoteDataSource extends Mock implements BookingRemoteDataSource {}

// Register fallback classes
class FakeBooking extends Fake implements Booking {}

void main() {
  late BookingRepositoryImpl bookingRepository;
  late MockBookingRemoteDataSource mockRemoteDataSource;

  const bookingId = 'booking123';
  // Create valid Booking model and entity using enums.
  final bookingModel = createMockBooking();

  final bookingEntity = bookingModel.toEntity();

  // Register fallback values for testing with Mocktail
  setUpAll(() {
    registerFallbackValue(FakeBooking());
    registerFallbackValue(bookingId);
  });

  setUp(() {
    mockRemoteDataSource = MockBookingRemoteDataSource();
    bookingRepository = BookingRepositoryImpl(mockRemoteDataSource);
  });

  group('Booking Repository Tests', () {
    test('should return BookingEntity on createBooking success', () async {
      // Arrange
      when(() => mockRemoteDataSource.createBooking(any()))
          .thenAnswer((_) async => Right(bookingModel));

      // Act
      final result = await bookingRepository.createBooking(bookingEntity);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (createdBooking) {
          expect(createdBooking.id, bookingEntity.id);
          expect(createdBooking.status, bookingEntity.status);
        },
      );
      verify(() => mockRemoteDataSource.createBooking(any())).called(1);
    });

    test('should return BookingCreateException on createBooking failure', () async {
      // Arrange
      when(() => mockRemoteDataSource.createBooking(any()))
          .thenAnswer((_) async => Left(BookingCreateException('Creation failed')));

      // Act
      final result = await bookingRepository.createBooking(bookingEntity);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingCreateException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDataSource.createBooking(any())).called(1);
    });

    test('should return BookingEntity on getBookingById success', () async {
      // Arrange
      when(() => mockRemoteDataSource.getBookingById(bookingId))
          .thenAnswer((_) async => Right(bookingModel));

      // Act
      final result = await bookingRepository.getBookingById(bookingId);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (retrievedBooking) => expect(retrievedBooking?.id, bookingId),
      );
      verify(() => mockRemoteDataSource.getBookingById(bookingId)).called(1);
    });

    test('should return BookingGetException on getBookingById failure', () async {
      // Arrange
      when(() => mockRemoteDataSource.getBookingById(bookingId))
          .thenAnswer((_) async => Left(BookingGetException('Not found')));

      // Act
      final result = await bookingRepository.getBookingById(bookingId);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingGetException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDataSource.getBookingById(bookingId)).called(1);
    });

    test('should return void on deleteBooking success', () async {
      // Arrange
      when(() => mockRemoteDataSource.deleteBooking(any()))
          .thenAnswer((_) async => const Right(null));

      // Act
      final result = await bookingRepository.deleteBooking(bookingEntity);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (_) => fail('Expected success but got error'),
        (_) => null, // Success: void result
      );
      verify(() => mockRemoteDataSource.deleteBooking(any())).called(1);
    });

    test('should return BookingDeleteException on deleteBooking failure', () async {
      // Arrange
      when(() => mockRemoteDataSource.deleteBooking(any()))
          .thenAnswer((_) async => Left(BookingDeleteException('Deletion failed')));

      // Act
      final result = await bookingRepository.deleteBooking(bookingEntity);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingDeleteException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDataSource.deleteBooking(any())).called(1);
    });

    test('should return BookingEntity on updateBooking success', () async {
      // Arrange
      when(() => mockRemoteDataSource.updateBooking(any()))
          .thenAnswer((_) async => Right(bookingModel));

      // Act
      final result = await bookingRepository.updateBooking(bookingEntity);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (updatedBooking) {
          expect(updatedBooking.id, bookingEntity.id);
          expect(updatedBooking.status, bookingEntity.status);
        },
      );
      verify(() => mockRemoteDataSource.updateBooking(any())).called(1);
    });

    test('should return BookingUpdateException on updateBooking failure', () async {
      // Arrange
      when(() => mockRemoteDataSource.updateBooking(any()))
          .thenAnswer((_) async => Left(BookingUpdateException('Update failed')));

      // Act
      final result = await bookingRepository.updateBooking(bookingEntity);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingUpdateException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDataSource.updateBooking(any())).called(1);
    });
  });
}
