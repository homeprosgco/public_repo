import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/booking_update_exception.dart';
import '../booking_domain.dart';

/// A **use case** class `UpdateBookingUseCase` that encapsulates the logic for updating 
/// a booking. This class follows the **Use Case Pattern**, ensuring that the business logic 
/// for updating a booking is isolated from other layers of the application.
///
/// It interacts with the `BookingRepository` interface to update the booking and returns 
/// an `Either` type to manage success and failure cases gracefully.
///
/// ### Example Usage:
///
/// ```dart
/// final bookingRepository = BookingRepositoryImpl(remoteDataSource);
/// final updateBookingUseCase = UpdateBookingUseCase(bookingRepository);
///
/// final updatedBooking = BookingEntity(
///   id: '12345',
///   service: 'Cleaning Service',
///   propertyType: 'Apartment',
///   status: 'Confirmed',
///   timeline: 'Next Monday, 10 AM',
///   timeOfDay: 'Morning',
///   ownership: 'Renter',
///   details: 'Please bring cleaning supplies.',
///   termsAccepted: true,
///   fullname: 'John Doe',
///   address: '123 Main Street, Springfield',
///   email: 'john.doe@example.com',
///   phone: '123-456-7890',
///   updatedAt: DateTime.now(),
/// );
///
/// final result = await updateBookingUseCase.call(updatedBooking);
///
/// result.fold(
///   (exception) => print('Failed to update booking: ${exception.message}'),
///   (booking) => print('Booking updated successfully: ${booking.id}'),
/// );
/// ```

class UpdateBookingUseCase implements UseCase<BookingEntity, BookingEntity> {
  final BookingRepository repository;

  UpdateBookingUseCase(this.repository);

  @override
  Future<Either<BookingUpdateException, BookingEntity>> call(
      BookingEntity booking) {
    return repository.updateBooking(booking);
  }
}
