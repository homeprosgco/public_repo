import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/early_adopter_email_exception.dart';

abstract class EarlyAdopterEmailRemoteDatasource {
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopter>> createEarlyAdopterEmail(EarlyAdopter earlyAdopter);
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopter>>> listEarlyAdopterEmails();
}
