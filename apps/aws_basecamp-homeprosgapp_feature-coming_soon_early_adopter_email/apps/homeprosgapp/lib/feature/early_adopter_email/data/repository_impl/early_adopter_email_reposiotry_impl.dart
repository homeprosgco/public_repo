import 'package:either_dart/either.dart';

import '../../domain/early_adopter_email_domain.dart';
import '../../exception/early_adopter_email_exception.dart';
import '../datasource/early_adopter_email_remote_datasource_interface.dart';
import '../mapper/early_adopter_email_mapper.dart';

class EarlyAdopterEmailRepositoryImpl implements EarlyAdopterEmailRepository {
  /// The remote data source used to perform earlyAdoptorEmail operations.
  final EarlyAdopterEmailRemoteDatasource remoteDataSource;

  /// Constructor that initializes the repository with the provided `EarlyAdoptorEmailRemoteDataSource`.
  EarlyAdopterEmailRepositoryImpl(this.remoteDataSource);

  @override
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopterEmailEntity>> createEarlyAdopterEmail(EarlyAdopterEmailEntity earlyAdoptorEmail) async {
    try {
      final earlyAdoptorEmailModel = earlyAdoptorEmail.toModel(); // Convert to model.
      final result = await remoteDataSource.createEarlyAdopterEmail(earlyAdoptorEmailModel);

      return result.fold(
        (error) => Left(EarlyAdopterEmailCreateException('Failed to create earlyAdoptorEmail')),
        (model) => Right(model.toEntity()), // Convert back to entity.
      );
    } catch (e) {
      return Left(EarlyAdopterEmailCreateException('Unexpected error occurred'));
    }
  }

@override
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopterEmailEntity>>> listEarlyAdopterEmails() async {
    try {
      final result = await remoteDataSource.listEarlyAdopterEmails();

      return result.fold(
        (error) => Left(EarlyAdopterEmailListException('Failed to retrieve earlyAdoptorEmails', error)),
        (models) => Right(models.map((model) => model.toEntity()).toList()),
      );
    } catch (e) {
      return Left(EarlyAdopterEmailListException('Unexpected error occurred', e as Exception));
    }
  }
  
}
