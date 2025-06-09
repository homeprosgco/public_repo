import '../../../../exception/app_exception.dart';

class SendEmailException extends AppException {
  SendEmailException(super.message, [super.cause]);
}