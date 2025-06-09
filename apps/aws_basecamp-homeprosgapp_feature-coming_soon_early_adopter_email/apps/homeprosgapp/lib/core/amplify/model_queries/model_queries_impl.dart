import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'model_queries_interface.dart';

class ModelQueriesImpl implements ModelQueriesInterface {
  @override
  GraphQLRequest<T?> get<T extends Model>(
      ModelType<T> modelType, ModelIdentifier<T> modelIdentifier) {
    return ModelQueries.get(modelType, modelIdentifier);
  }

  @override
  GraphQLRequest<PaginatedResult<T>> list<T extends Model>(ModelType<T> modelType) {
    return ModelQueries.list(modelType);
  }
}
