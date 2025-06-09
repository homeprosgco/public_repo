import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/booking_delete_exception.dart';
import '../booking_domain.dart';

class DeleteBookingUseCase implements UseCase<void, BookingEntity> {
  final BookingRepository repository;

  DeleteBookingUseCase(this.repository);

  @override
  Future<Either<BookingDeleteException, void>> call(BookingEntity booking) {
    return repository.deleteBooking(booking);
  }
}
