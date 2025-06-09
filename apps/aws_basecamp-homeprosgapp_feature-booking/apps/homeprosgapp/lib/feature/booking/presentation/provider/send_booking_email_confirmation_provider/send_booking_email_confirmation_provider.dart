import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../domain/booking_domain.dart';
import '../use_cases/booking_use_case_providers.dart';

part 'send_booking_email_confirmation_provider.g.dart';

@riverpod
class SendBookingEmailConfirmation extends _$SendBookingEmailConfirmation {
  // Internal reference to use case provider
  late final SendBookingEmailConfirmationUseCase _useCase;

  // Initialize with dependencies in build method
  @override
  Future<void> build() async {
    _useCase = ref.read(sendBookingEmailConfirmationUseCaseProvider);
  }

  // Public method to trigger email sending manually
  Future<EmailResponseEntity> sendBookingEmailConfirmation(BookingEmailConfirmationEntity bookingEntity) async {
    // Execute the use case and handle the response
    final result = await _useCase(bookingEntity);

    // Unwrap the result to either return the EmailResponseEntity or throw an exception
    return result.fold(
      (failure) => throw failure, // Enter error state on failure
      (response) => response,     // Return successful response
    );
  }
}


class MockSendBookingEmailConfirmation extends _$SendBookingEmailConfirmation with Mock implements SendBookingEmailConfirmation {}