import '../../../../exception/app_exception.dart';

class S3NetworkException extends AppException {
  S3NetworkException(super.message, [super.cause]);
}