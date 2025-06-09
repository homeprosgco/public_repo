import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/early_adopter_email_exception.dart';
import '../entity/early_adopter_email_entity.dart';
import '../repository_interface/early_adopter_email_repository_interface.dart';

class CreateEarlyAdopterEmailUseCase extends UseCase<EarlyAdopterEmailEntity, EarlyAdopterEmailEntity> {
  final EarlyAdopterEmailRepository repository;

  CreateEarlyAdopterEmailUseCase(this.repository);

  /// Executes the use case to create an early adopter email.
  ///
  /// - **Parameters**:
  ///   - `email`: The email to be added.
  ///
  /// - **Returns**: An `Either` containing the result:
  ///   - `Right`: On success, it contains the created `EarlyAdopterEmailEntity`.
  ///   - `Left`: On failure, it contains a `EarlyAdopterEmailCreateException`.

  @override
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopterEmailEntity>> call(EarlyAdopterEmailEntity params) {
    return repository.createEarlyAdopterEmail(params);
  }
}
