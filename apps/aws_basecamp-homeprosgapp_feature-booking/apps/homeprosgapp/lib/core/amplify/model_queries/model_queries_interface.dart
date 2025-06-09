import 'package:amplify_flutter/amplify_flutter.dart';

abstract class ModelQueriesInterface {
  GraphQLRequest<T?> get<T extends Model>(
      ModelType<T> modelType, ModelIdentifier<T> modelIdentifier);

  GraphQLRequest<PaginatedResult<T>> list<T extends Model>(
      ModelType<T> modelType);
}
