import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/booking_list_exception.dart';
import '../booking_domain.dart';

/// A **use case** class `ListBookingsUseCase` that encapsulates the logic for retrieving
/// all bookings. This class follows the **Use Case Pattern**, ensuring that business logic
/// for fetching all bookings is isolated and reusable across the application.
///
/// It interacts with the `BookingRepository` interface to retrieve a list of bookings and returns 
/// an `Either` type to manage success and failure cases gracefully.
///
/// ### Example Usage:
///
/// ```dart
/// final bookingRepository = BookingRepositoryImpl(remoteDataSource);
/// final getAllBookingsUseCase = ListBookingsUseCase(bookingRepository);
///
/// final result = await getAllBookingsUseCase.call(NoParams());
///
/// result.fold(
///   (exception) => print('Failed to get bookings: ${exception.message}'),
///   (bookings) => bookings.forEach((booking) {
///     print('Booking ID: ${booking.id}, Service: ${booking.service}');
///   }),
/// );
/// ```

class ListBookingsUseCase implements UseCase<List<BookingEntity>, NoParams> {
  final BookingRepository repository;
  
  ListBookingsUseCase(this.repository);
  
  @override
  Future<Either<BookingListException, List<BookingEntity>>> call(
      NoParams params) {
    return repository.listBookings();
  }
}
