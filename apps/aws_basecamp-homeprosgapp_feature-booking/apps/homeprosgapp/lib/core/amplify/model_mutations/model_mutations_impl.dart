import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_flutter/amplify_flutter.dart';

import 'model_mutations_interface.dart';

class ModelMutationsImpl implements ModelMutationsInterface {
  @override
  GraphQLRequest<T> create<T extends Model>(T model) {
    return ModelMutations.create(model);
  }

  @override
  GraphQLRequest<T> update<T extends Model>(T model) {
    return ModelMutations.update(model);
  }

  @override
  GraphQLRequest<T> delete<T extends Model>(T model) {
    return ModelMutations.delete(model);
  }
}
