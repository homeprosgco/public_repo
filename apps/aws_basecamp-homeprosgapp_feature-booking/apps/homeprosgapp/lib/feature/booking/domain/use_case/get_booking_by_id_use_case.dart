import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/booking_get_exception.dart';
import '../booking_domain.dart';

/// A **use case** class `GetBookingByIdUseCase` that encapsulates the logic for retrieving 
/// a booking by its unique ID. This class follows the **Use Case Pattern**, ensuring that 
/// business logic for fetching a booking is isolated and reusable across the application.
///
/// It interacts with the `BookingRepository` interface to fetch the booking and returns 
/// an `Either` type to handle both success and failure scenarios gracefully.
///
/// ### Example Usage:
///
/// ```dart
/// final bookingRepository = BookingRepositoryImpl(remoteDataSource);
/// final getBookingByIdUseCase = GetBookingByIdUseCase(bookingRepository);
///
/// final result = await getBookingByIdUseCase.call('12345');
///
/// result.fold(
///   (exception) => print('Failed to get booking: ${exception.message}'),
///   (booking) {
///     if (booking != null) {
///       print('Booking found: ${booking.id}');
///     } else {
///       print('No booking found with the given ID.');
///     }
///   },
/// );
/// ```

class GetBookingByIdUseCase implements UseCase<BookingEntity?, String> {
  final BookingRepository repository;

  GetBookingByIdUseCase(this.repository);

  @override
  Future<Either<BookingGetException, BookingEntity?>> call(String id) {
    return repository.getBookingById(id);
  }
}
