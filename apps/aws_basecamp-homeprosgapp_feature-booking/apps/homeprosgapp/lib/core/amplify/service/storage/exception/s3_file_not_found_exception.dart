import '../../../../exception/app_exception.dart';

class S3FileNotFoundException extends AppException {
  S3FileNotFoundException(super.message, [super.cause]);
}