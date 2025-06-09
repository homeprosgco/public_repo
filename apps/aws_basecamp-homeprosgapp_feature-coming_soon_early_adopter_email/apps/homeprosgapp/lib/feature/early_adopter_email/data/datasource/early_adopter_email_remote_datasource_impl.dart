// Interface implementation for EarlyAdopterEmailRemoteDatasource.
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../exception/early_adopter_email_exception.dart';
import 'early_adopter_email_remote_datasource_interface.dart';

class EarlyAdopterEmailRemoteDatasourceImpl implements EarlyAdopterEmailRemoteDatasource {
  final APICategory api;
  final ModelMutationsInterface mutations;
  final ModelQueriesInterface queries;

  EarlyAdopterEmailRemoteDatasourceImpl({
    required this.api,
    required this.mutations,
    required this.queries,
  });

  // Create a new EarlyAdopter email entry.
  @override
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopter>> createEarlyAdopterEmail(EarlyAdopter earlyAdopter) async {
    try {
      // Simulate successful email creation (this logic can vary as needed).
      if (earlyAdopter.email.isEmpty) {
        throw EarlyAdopterEmailCreateException('Email cannot be empty');
      }

      // Use mutations to create the request.
      final request = mutations.create(earlyAdopter);
      final mutation = api.mutate<EarlyAdopter>(request: request);
      final response = await mutation.response;
      final data = response.data;

      if (data != null) {
        return Right(data);
      } else {
        return Left(EarlyAdopterEmailCreateException(response.errors.toString()));
      }
    } catch (e) {
      // Return Left with an exception if any error occurs.
      return Left(EarlyAdopterEmailCreateException(e.toString()));
    }
  }

  // List all EarlyAdopter emails.
  @override
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopter>>> listEarlyAdopterEmails() async {
    try {
      // Define the query request to list all emails.
      final request = queries.list(EarlyAdopter.classType);

      // Execute the query request.
      final query = api.query(request: request);

      final response = await query.response;

      // Handle any errors from the response.
      if (response.hasErrors) {
        return Left(EarlyAdopterEmailListException(response.errors.toString()));
      }

      if (response.data != null) {
        return Right(response.data!.items.whereType<EarlyAdopter>().toList());
      } else {
        return const Right([]);
      }
    } catch (e) {
      // Catch and handle any exceptions.
      return Left(EarlyAdopterEmailListException(e.toString()));
    }
  }
}
