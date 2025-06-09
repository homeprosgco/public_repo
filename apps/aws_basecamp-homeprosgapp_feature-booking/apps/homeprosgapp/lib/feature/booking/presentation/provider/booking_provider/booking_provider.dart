import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'booking_provider.g.dart';

@riverpod
class AsyncBookings extends _$AsyncBookings {
  // Declare the use cases as `late final` to ensure they are initialized only once.
  late final ListBookingsUseCase _listBookingsUseCase;
  late final CreateBookingUseCase _createBookingUseCase;
  late final DeleteBookingUseCase _removeBookingUseCase;
  late final UpdateBookingUseCase _updateBookingUseCase;
  late final GetBookingByIdUseCase _getBookingByIdUseCase;

  @override
  FutureOr<List<BookingEntity>> build() async {
    // Initialize the use cases only once here.
    _initializeUseCases();

    state = const AsyncValue.loading(); // Set state to loading
    // Fetch initial bookings and return them
    return await _listBookings();
  }

  // Initialize the use cases from the Riverpod providers.
  void _initializeUseCases() {
    _listBookingsUseCase = ref.read(listBookingsUseCaseProvider);
    _createBookingUseCase = ref.read(createBookingUseCaseProvider);
    _removeBookingUseCase = ref.read(deleteBookingUseCaseProvider);
    _updateBookingUseCase = ref.read(updateBookingUseCaseProvider);
    _getBookingByIdUseCase = ref.read(getBookingByIdUseCaseProvider);
  }

  // Fetch all bookings
  Future<List<BookingEntity>> _listBookings() async {
    final eitherResult = await _listBookingsUseCase.call(NoParams());

    return eitherResult.fold(
      (failure) => _handleFailure(failure, 'list bookings'),
      (bookings) {
        state = AsyncValue.data(bookings); // Update state with data
        return bookings;
      },
    );
  }

  // Get booking by ID using GetBookingByIdUseCase.
  Future<void> getBookingById(String id) async {
    state = const AsyncValue.loading(); // Set state to loading.
    try {
      final eitherResult = await _getBookingByIdUseCase.call(id);

      eitherResult.fold(
        (failure) {
          state = AsyncValue.error(failure, StackTrace.current); // Handle failure.
          throw failure;
        },
        (booking) => state = AsyncValue.data([if (booking != null) booking]), // Success: Load the booking.
      );
    } catch (e, st) {
      state = AsyncValue.error(e, st); // Handle unexpected errors.
      rethrow;
    }
  }

  // Create a booking
  Future<void> createBooking(BookingEntity booking) async {
    state = const AsyncValue.loading(); // Set state to loading
    try {
      final eitherResult = await _createBookingUseCase.call(booking);

      eitherResult.fold(
        (failure) => throw failure, // Ensure the exception is thrown
        (_) async {
          await _listBookings(); // Refresh the bookings list on success
        },
      );
    } catch (e) {
      // Update the state with the error and rethrow it for testing
      state = AsyncValue.error(e, StackTrace.current);
      rethrow; // Rethrow the exception to be caught in the test
    }
  }

  Future<void> removeBooking(BookingEntity booking) async {
    state = const AsyncValue.loading(); // Set state to loading
    try {
      final eitherResult = await _removeBookingUseCase.call(booking);

      eitherResult.fold(
        (failure) {
          state = AsyncValue.error(failure, StackTrace.current); // Set state to error
          throw failure; // Ensure the exception is rethrown
        },
        (_) async {
          state = AsyncValue.data(await _listBookings()); // Refresh the list on success
        },
      );
    } catch (e, st) {
      state = AsyncValue.error(e, st); // Set state to error with stack trace
      rethrow; // Rethrow for testing purposes
    }
  }

  Future<void> updateBooking(BookingEntity booking) async {
    state = const AsyncValue.loading(); // Set state to loading
    try {
      final eitherResult = await _updateBookingUseCase.call(booking);

      eitherResult.fold(
        (failure) {
          state = AsyncValue.error(failure, StackTrace.current); // Set state to error
          throw failure; // Ensure the exception is rethrown
        },
        (_) async {
          state = AsyncValue.data(await _listBookings()); // Refresh the list on success
        },
      );
    } catch (e, st) {
      state = AsyncValue.error(e, st); // Set state to error with stack trace
      rethrow; // Rethrow for testing purposes
    }
  }

  // Handle failures
  List<BookingEntity> _handleFailure(AppException failure, String operation) {
    final message = 'Error $operation: ${failure.message}';
    safePrint(message);
    throw failure;
  }
}

class MockAsynBookings extends _$AsyncBookings with Mock implements AsyncBookings {}
