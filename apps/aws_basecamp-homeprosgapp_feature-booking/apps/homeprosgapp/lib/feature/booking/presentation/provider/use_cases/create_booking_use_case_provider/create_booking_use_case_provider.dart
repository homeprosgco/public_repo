import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/use_case/create_booking_use_case.dart';
import '../../booking_repository_provider/booking_repository_provider.dart';

part 'create_booking_use_case_provider.g.dart'; // Generated file

@riverpod
CreateBookingUseCase createBookingUseCase(Ref ref) {
  final repository = ref.watch(bookingRepositoryProvider);
  return CreateBookingUseCase(repository);
}
