import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import '../../../domain/booking_domain.dart';
import '../use_cases/booking_use_case_providers.dart';

part 'booking_workflow_provider.g.dart';

@riverpod
class BookingWorkflowNotifier extends _$BookingWorkflowNotifier {
  late final CreateBookingUseCase _createBookingUseCase;
  late final SendBookingEmailConfirmationUseCase _sendBookingEmailConfirmationUseCase;

  @override
  AsyncValue<dynamic> build() {
    _initializeDependencies();
    return const AsyncValue.data(null);
  }

  void _initializeDependencies() {
    _createBookingUseCase = ref.read(createBookingUseCaseProvider);
    _sendBookingEmailConfirmationUseCase = ref.read(sendBookingEmailConfirmationUseCaseProvider);
  }

  Future<void> submitBookingWorkflow(BookingEntity bookingFormData) async {
    state = const AsyncValue.loading();
    


    try {
      // Step 1: Create Booking
      await _createBookingUseCase(bookingFormData);

      // Step 2: Send Email Confirmation if booking creation succeeds
      final bookingEmailConfirmation = bookingFormData.toBookingEmailConfirmationEntity('https://example.com/confirm');

      try {
        final emailResponse = await _sendBookingEmailConfirmationUseCase(bookingEmailConfirmation);

        if (emailResponse.right.statusCode == 200) {
          state = const AsyncValue.data(null);
        } else {
          state = AsyncValue.error(
            'Booking created, but email failed: ${emailResponse.right.message}',
            StackTrace.current,
          );
        }
      } catch (emailError, stackTrace) {
        state = AsyncValue.error('Email sending failed: $emailError', stackTrace);
      }
    } catch (bookingError, stackTrace) {
      state = AsyncValue.error('Error submitting booking: $bookingError', stackTrace);
    }
  }
  
}

class MockBookingWorkflowNotifier extends _$BookingWorkflowNotifier with Mock implements BookingWorkflowNotifier {
  @override
  AsyncValue<dynamic> build() {
    _initializeDependencies();
    return const AsyncValue.data(null);
  }

  @override
  Future<void> submitBookingWorkflow(BookingEntity bookingFormData) async {
    state = const AsyncValue.loading();

    return Future.value();
  }
}
