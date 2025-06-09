import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/use_case/get_booking_by_id_use_case.dart';
import '../../booking_repository_provider/booking_repository_provider.dart';

part 'get_booking_by_id_use_case_provider.g.dart'; // Generated file

@riverpod
GetBookingByIdUseCase getBookingByIdUseCase(Ref ref) {
  final repository = ref.watch(bookingRepositoryProvider);
  return GetBookingByIdUseCase(repository);
}
