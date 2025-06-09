import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/booking_domain.dart';
import '../../booking_repository_provider/booking_repository_provider.dart';

part 'send_booking_email_confirmation_use_case_provider.g.dart';

@riverpod
SendBookingEmailConfirmationUseCase sendBookingEmailConfirmationUseCase(
  Ref ref,
) {
  final repository = ref.watch(bookingRepositoryProvider); // Assuming you have a bookingRepositoryProvider
  return SendBookingEmailConfirmationUseCase(repository);
}

class MockSendBookingEmailConfirmationUseCase extends Mock implements SendBookingEmailConfirmationUseCase {}