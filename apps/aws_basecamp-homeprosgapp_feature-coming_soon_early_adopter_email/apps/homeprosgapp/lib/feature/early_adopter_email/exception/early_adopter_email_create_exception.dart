import 'package:homeprosgapp/core/core.dart';

/// Exception thrown when there is an issue creating a booking.
class EarlyAdopterEmailCreateException extends AppException {
  EarlyAdopterEmailCreateException(super.message, [super.cause]);
}
