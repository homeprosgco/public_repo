import '../../../../exception/app_exception.dart';

class S3PermissionDeniedException extends AppException {
  S3PermissionDeniedException(super.message, [super.cause]);
}