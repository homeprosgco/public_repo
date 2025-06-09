import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/early_adopter_email_exception.dart';
import '../entity/early_adopter_email_entity.dart';
import '../repository_interface/early_adopter_email_repository_interface.dart';

class ListEarlyAdopterEmailsUseCase extends UseCase<List<EarlyAdopterEmailEntity>, NoParams> {
  final EarlyAdopterEmailRepository repository;

  ListEarlyAdopterEmailsUseCase(this.repository);

  /// Executes the use case to list all early adopter emails.
  ///
  /// - **Returns**: An `Either` containing the result:
  ///   - `Right`: On success, it contains a list of `EarlyAdopterEmailEntity`.
  ///   - `Left`: On failure, it contains a `EarlyAdopterEmailListException`.

  @override
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopterEmailEntity>>> call(NoParams params) {
    return repository.listEarlyAdopterEmails();
  }
}
