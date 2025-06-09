import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../data/booking_data.dart';

// Ensure this matches your file name exactly.
part 'booking_datasource_provider.g.dart';

@riverpod
BookingRemoteDataSource bookingRemoteDataSource(Ref ref) {
  final api = ref.watch(apiCategoryProvider);
  final modelMutations = ref.watch(modelMutationsProvider);
  final modelQueries = ref.watch(modelQueriesProvider);
  return BookingRemoteDataSourceImpl(
    api: api,
    mutations: modelMutations,
    queries: modelQueries,
  );
}
