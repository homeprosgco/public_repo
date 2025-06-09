import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../data/early_adopter_data.dart';

part 'early_adopter_email_remote_datasource_provider.g.dart'; // Generated file

// Provider for EarlyAdopterEmailRemoteDatasourceImpl using Riverpod.
@riverpod
EarlyAdopterEmailRemoteDatasource earlyAdopterEmailRemoteDatasource(
  Ref ref,
) {
  final api = ref.watch(apiCategoryProvider);
  final modelMutations = ref.watch(modelMutationsProvider);
  final modelQueries = ref.watch(modelQueriesProvider);
  return EarlyAdopterEmailRemoteDatasourceImpl(
    api: api,
    mutations: modelMutations,
    queries: modelQueries,
  );
}
