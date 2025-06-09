import 'package:either_dart/either.dart';

import '../../exception/booking_exception.dart';
import '../entity/booking_entity.dart';

abstract class BookingRepository {
  Future<Either<BookingCreateException, BookingEntity>> createBooking(BookingEntity booking);
  Future<Either<BookingGetException, BookingEntity?>> getBookingById(String id);
  Future<Either<BookingListException, List<BookingEntity>>> listBookings();
  Future<Either<BookingDeleteException, void>> deleteBooking(BookingEntity booking);
  Future<Either<BookingUpdateException, BookingEntity>> updateBooking(BookingEntity booking);
  Future<Either<BookingSendEmailConfirmationException, BookingEntity>> sendBookingEmailConfirmation(BookingEntity booking);
}
