import 'package:either_dart/either.dart';

import '../../exception/early_adopter_email_exception.dart';
import '../entity/early_adopter_email_entity.dart';

abstract class EarlyAdopterEmailRepository {
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopterEmailEntity>> createEarlyAdopterEmail(EarlyAdopterEmailEntity earlyAdoptorEmail);
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopterEmailEntity>>> listEarlyAdopterEmails();
}
