import '../../../../exception/app_exception.dart';

class S3StorageException extends AppException {
  S3StorageException(super.message, [super.cause]);
}