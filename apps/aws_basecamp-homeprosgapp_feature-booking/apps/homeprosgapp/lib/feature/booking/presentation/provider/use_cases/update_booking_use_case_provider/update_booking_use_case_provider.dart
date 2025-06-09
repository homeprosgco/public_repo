import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/use_case/update_booking_use_case.dart';
import '../../booking_repository_provider/booking_repository_provider.dart';

part 'update_booking_use_case_provider.g.dart'; // Generated file

@riverpod
UpdateBookingUseCase updateBookingUseCase(Ref ref) {
  final repository = ref.watch(bookingRepositoryProvider);
  return UpdateBookingUseCase(repository);
}
