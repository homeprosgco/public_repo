import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/use_case/list_bookings_use_case.dart';
import '../../booking_repository_provider/booking_repository_provider.dart';

part 'list_bookings_use_case_provider.g.dart'; // Generated file

@riverpod
ListBookingsUseCase listBookingsUseCase(Ref ref) {
  final repository = ref.watch(bookingRepositoryProvider);
  return ListBookingsUseCase(repository);
}
