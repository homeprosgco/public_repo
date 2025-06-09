import 'package:either_dart/either.dart';


import '../../domain/booking_domain.dart';
import '../../exception/booking_exception.dart';
import '../datasource/remote/booking_remote_datasource_interface.dart';
import '../mapper/booking_mapper.dart';

/// Implementation of the `BookingRepository` interface that interacts with a remote data source.
/// This class handles all booking-related operations such as creating, retrieving, updating, 
/// and deleting bookings. It returns `Either` types to handle success and failure cases gracefully.
///
/// ### Purpose:
/// - Provides the logic to interact with the remote data source.
/// - Ensures that the application follows the **Repository Pattern** by abstracting
///   data operations from the domain layer.
///
/// ### Example Usage:
/// ```dart
/// final bookingRepository = BookingRepositoryImpl(remoteDataSource);
/// final result = await bookingRepository.getBookingById('12345');
///
/// result.fold(
///   (exception) => print('Failed to fetch booking: ${exception.message}'),
///   (booking) => print('Booking found: ${booking?.id}'),
/// );
/// ```

class BookingRepositoryImpl implements BookingRepository {
  /// The remote data source used to perform booking operations.
  final BookingRemoteDataSource remoteDataSource;

  /// Constructor that initializes the repository with the provided `BookingRemoteDataSource`.
  BookingRepositoryImpl(this.remoteDataSource);

  /// Creates a new booking by interacting with the remote data source.
  ///
  /// ### Parameters:
  /// - `booking`: The `BookingEntity` instance containing booking details.
  ///
  /// ### Returns:
  /// - `Either<BookingCreateException, BookingEntity>`:
  ///   - **Left**: Contains a `BookingCreateException` if the operation fails.
  ///   - **Right**: Contains the created `BookingEntity` if successful.
  @override
  Future<Either<BookingCreateException, BookingEntity>> createBooking(
      BookingEntity booking) async {
    try {
      final bookingModel = booking.toModel(); // Convert to model.
      final result = await remoteDataSource.createBooking(bookingModel);

      return result.fold(
        (error) => Left(BookingCreateException('Failed to create booking', error)),
        (model) => Right(model.toEntity()), // Convert back to entity.
      );
    } catch (e) {
      return Left(BookingCreateException('Unexpected error occurred', e as Exception));
    }
  }

  /// Retrieves a booking by its ID.
  ///
  /// ### Parameters:
  /// - `id`: The unique identifier of the booking to retrieve.
  ///
  /// ### Returns:
  /// - `Either<BookingGetException, BookingEntity?>`:
  ///   - **Left**: Contains a `BookingGetException` if the operation fails.
  ///   - **Right**: Contains the `BookingEntity` or `null` if not found.
  @override
  Future<Either<BookingGetException, BookingEntity?>> getBookingById(
      String id) async {
    try {
      final result = await remoteDataSource.getBookingById(id);

      return result.fold(
        (error) => Left(BookingGetException('Failed to get booking by ID', error)),
        (model) => Right(model?.toEntity()), // Handle nullability.
      );
    } catch (e) {
      return Left(BookingGetException('Unexpected error occurred', e as Exception));
    }
  }

  /// Retrieves all bookings from the remote data source.
  ///
  /// ### Returns:
  /// - `Either<BookingListException, List<BookingEntity>>`:
  ///   - **Left**: Contains a `BookingListException` if the operation fails.
  ///   - **Right**: Contains a list of `BookingEntity` if successful.
  @override
  Future<Either<BookingListException, List<BookingEntity>>> listBookings() async {
    try {
      final result = await remoteDataSource.listBookings();

      return result.fold(
        (error) => Left(BookingListException('Failed to retrieve bookings', error)),
        (models) => Right(models.map((model) => model.toEntity()).toList()),
      );
    } catch (e) {
      return Left(BookingListException('Unexpected error occurred', e as Exception));
    }
  }

  /// Deletes a booking by its ID.
  ///
  /// ### Parameters:
  /// - `id`: The unique identifier of the booking to delete.
  ///
  /// ### Returns:
  /// - `Either<BookingDeleteException, void>`:
  ///   - **Left**: Contains a `BookingDeleteException` if the operation fails.
  ///   - **Right**: Contains `void` if successful.
  @override
  Future<Either<BookingDeleteException, void>> deleteBooking(BookingEntity booking) async {
    try {
      final bookingModel = booking.toModel(); // Convert to model.
      final result = await remoteDataSource.deleteBooking(bookingModel);

      return result.fold(
        (error) => Left(BookingDeleteException('Failed to delete booking', error)),
        (_) => const Right(null), // No value on success.
      );
    } catch (e) {
      return Left(BookingDeleteException('Unexpected error occurred', e as Exception));
    }
  }

  /// Updates an existing booking.
  ///
  /// ### Parameters:
  /// - `booking`: The `BookingEntity` containing updated booking details.
  ///
  /// ### Returns:
  /// - `Either<BookingUpdateException, BookingEntity>`:
  ///   - **Left**: Contains a `BookingUpdateException` if the operation fails.
  ///   - **Right**: Contains the updated `BookingEntity` if successful.
  @override
  Future<Either<BookingUpdateException, BookingEntity>> updateBooking(
      BookingEntity booking) async {
    try {
      final bookingModel = booking.toModel(); // Convert to model.
      final result = await remoteDataSource.updateBooking(bookingModel);

      return result.fold(
        (error) => Left(BookingUpdateException('Failed to update booking', error)),
        (model) => Right(model.toEntity()), // Convert back to entity.
      );
    } catch (e) {
      return Left(BookingUpdateException('Unexpected error occurred', e as Exception));
    }
  }
}
