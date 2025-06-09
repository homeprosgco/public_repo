import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../data/booking_data.dart';
import '../../../domain/booking_domain.dart';
import '../booking_datasource_provider/booking_datasource_provider.dart';

part 'booking_repository_provider.g.dart';

@riverpod
BookingRepository bookingRepository(Ref ref) {
  final remoteDataSource = ref.watch(bookingRemoteDataSourceProvider);
  return BookingRepositoryImpl(remoteDataSource);
}