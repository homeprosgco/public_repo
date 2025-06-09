import 'package:amplify_flutter/amplify_flutter.dart';

abstract class ModelMutationsInterface {
  GraphQLRequest<T> create<T extends Model>(T model);
  GraphQLRequest<T> update<T extends Model>(T model);
  GraphQLRequest<T> delete<T extends Model>(T model);
}
