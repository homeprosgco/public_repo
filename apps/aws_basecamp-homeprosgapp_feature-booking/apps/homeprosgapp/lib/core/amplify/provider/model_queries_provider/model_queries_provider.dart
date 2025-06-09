import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../model_queries/amplify_queries.dart';

part 'model_queries_provider.g.dart';

// Provider for ModelQueriesImpl
@riverpod
ModelQueriesInterface modelQueries(Ref ref) {
  return ModelQueriesImpl();
}
