import 'package:either_dart/either.dart';

import '../../../../models/core_models.dart';
import '../../domain/ses_email_domain.dart';
import '../datasource/ses_email_remote_datasource_interface.dart';

class SESEmailRepositoryImpl implements SESEmailRepository {
  final SESEmailRemoteDataSource _remoteDataSource;

  SESEmailRepositoryImpl(this._remoteDataSource);

  @override
  Future<Either<Exception, EmailResponse>> sendEmail(String recipient, String subject, String body) async {
    return await _remoteDataSource.sendEmail(recipient, subject, body);
  }
}
