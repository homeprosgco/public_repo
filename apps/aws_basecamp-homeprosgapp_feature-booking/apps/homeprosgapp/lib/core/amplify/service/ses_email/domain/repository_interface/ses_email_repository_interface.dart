import 'package:either_dart/either.dart';

import '../../../../models/core_models.dart';

abstract class SESEmailRepository {
  /// Sends a general-purpose email.
  Future<Either<Exception, EmailResponse>> sendEmail(
    String recipient,
    String subject,
    String body,
  );

}