import 'package:either_dart/either.dart';

import '../../exception/booking_create_exception.dart';
import '../../../../core/core.dart';
import '../booking_domain.dart';

/// A **use case** class `CreateBookingUseCase` that encapsulates the logic for creating a booking.
/// This class follows the **Use Case Pattern**, ensuring that the business logic for creating
/// a booking is isolated from the rest of the application.
///
/// It interacts with the `BookingRepository` interface to create a booking and returns an `Either`
/// type to handle success and failure scenarios gracefully.
///
/// ### Example Usage:
///
/// ```dart
/// final bookingRepository = BookingRepositoryImpl(remoteDataSource);
/// final createBookingUseCase = CreateBookingUseCase(bookingRepository);
///
/// final booking = BookingEntity(
///   id: '12345',
///   service: 'Cleaning Service',
///   propertyType: 'Apartment',
///   status: 'Pending',
///   timeline: 'Next Monday, 10 AM',
///   timeOfDay: 'Morning',
///   ownership: 'Renter',
///   details: 'Please bring cleaning supplies.',
///   termsAccepted: true,
///   fullname: 'John Doe',
///   address: '123 Main Street, Springfield',
///   email: 'john.doe@example.com',
///   phone: '123-456-7890',
///   createdAt: DateTime.now(),
/// );
///
/// final result = await createBookingUseCase(booking);
///
/// result.fold(
///   (exception) => print('Failed to create booking: ${exception.message}'),
///   (createdBooking) => print('Booking created: ${createdBooking.id}'),
/// );
/// ```

class CreateBookingUseCase implements UseCase<BookingEntity, BookingEntity> {
  final BookingRepository repository;

  CreateBookingUseCase(this.repository);
  @override
  Future<Either<BookingCreateException, BookingEntity>> call(BookingEntity booking) {
    return repository.createBooking(booking);
  }
}
