import 'package:either_dart/either.dart';

import '../../../../../core/core.dart';
import '../../../exception/booking_exception.dart';
import '../../entity/booking_email_confirmation_entity.dart';
import '../../repository_interface/booking_repository_interface.dart';

class SendBookingEmailConfirmationUseCase {
  final BookingRepository _repository;

  SendBookingEmailConfirmationUseCase(this._repository);

  Future<Either<BookingSendEmailConfirmationException, EmailResponseEntity>> call(
      BookingEmailConfirmationEntity bookingEntity) {
    return _repository.sendBookingEmailConfirmation(bookingEntity);
  }
}