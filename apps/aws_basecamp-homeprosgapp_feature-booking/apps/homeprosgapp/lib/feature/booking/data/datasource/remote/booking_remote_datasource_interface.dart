import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../../exception/booking_exception.dart';

abstract class BookingRemoteDataSource {
  Future<Either<BookingCreateException, Booking>> createBooking(Booking booking);
  Future<Either<BookingGetException, Booking?>> getBookingById(String id);
  Future<Either<BookingListException, List<Booking>>> listBookings();
  Future<Either<BookingDeleteException, void>> deleteBooking(Booking booking);
  Future<Either<BookingUpdateException, Booking>> updateBooking(Booking booking);
}