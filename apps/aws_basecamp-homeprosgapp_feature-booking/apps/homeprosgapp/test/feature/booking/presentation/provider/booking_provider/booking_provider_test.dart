import 'package:either_dart/either.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

import '../../../booking_test_utils.dart';

// Mock classes for use cases
class MockListBookingsUseCase extends Mock implements ListBookingsUseCase {}

class MockCreateBookingUseCase extends Mock implements CreateBookingUseCase {}

class MockDeleteBookingUseCase extends Mock implements DeleteBookingUseCase {}

class MockUpdateBookingUseCase extends Mock implements UpdateBookingUseCase {}

class MockGetBookingByIdUseCase extends Mock implements GetBookingByIdUseCase {}

ProviderContainer createContainer({
  ProviderContainer? parent,
  List<Override> overrides = const [],
  List<ProviderObserver>? observers,
}) {
  // Create a ProviderContainer, and optionally allow specifying parameters.
  final container = ProviderContainer(
    parent: parent,
    overrides: overrides,
    observers: observers,
  );

  // When the test ends, dispose the container.
  addTearDown(container.dispose);

  return container;
}

void main() {
  late MockListBookingsUseCase mockListBookingsUseCase;
  late MockCreateBookingUseCase mockCreateBookingUseCase;
  late MockDeleteBookingUseCase mockDeleteBookingUseCase;
  late MockUpdateBookingUseCase mockUpdateBookingUseCase;
  late MockGetBookingByIdUseCase mockGetBookingByIdUseCase;
  late List<Override> overrides;

  final bookingEntity = createMockBookingEntity();

  setUpAll(() {
    // Register fallback values if required
    registerFallbackValue(NoParams());
    registerFallbackValue(bookingEntity);
  });

  setUp(() {
    // Initialize mocks and provider container
    mockListBookingsUseCase = MockListBookingsUseCase();
    mockCreateBookingUseCase = MockCreateBookingUseCase();
    mockDeleteBookingUseCase = MockDeleteBookingUseCase();
    mockUpdateBookingUseCase = MockUpdateBookingUseCase();
    mockGetBookingByIdUseCase = MockGetBookingByIdUseCase();

    overrides = [
      listBookingsUseCaseProvider.overrideWithValue(mockListBookingsUseCase),
      createBookingUseCaseProvider.overrideWithValue(mockCreateBookingUseCase),
      deleteBookingUseCaseProvider.overrideWithValue(mockDeleteBookingUseCase),
      updateBookingUseCaseProvider.overrideWithValue(mockUpdateBookingUseCase),
      getBookingByIdUseCaseProvider.overrideWithValue(mockGetBookingByIdUseCase)
    ];
  });

  group('AsyncBookings Provider', () {
    test('should load bookings on initialization', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock a successful booking list
      when(() => mockListBookingsUseCase.call(any())).thenAnswer(
        (_) async => Right([bookingEntity]),
      );

      await expectLater(
        container.read(asyncBookingsProvider.future),
        completion([bookingEntity]),
      );

      // Assert: Verify that bookings are loaded correctly
      verify(() => mockListBookingsUseCase.call(any())).called(1);
    });

    test('should handle error during booking list loading', () async {
      final container = createContainer(overrides: overrides);

      // Arrange: Mock a failure response
      when(() => mockListBookingsUseCase.call(any())).thenAnswer(
        (_) async => Left(BookingListException('Failed to load bookings')),
      );

      // Expect the provider to throw an exception

      await expectLater(
        container.read(asyncBookingsProvider.future),
        throwsA(isA<BookingListException>()),
      );

      verify(() => mockListBookingsUseCase.call(any())).called(1);
    });

    test('getBookingById should return BookingEntity on success', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock the use case to return a valid booking entity.
      when(() => mockGetBookingByIdUseCase.call(any())).thenAnswer((_) async => Right(bookingEntity));

      // Act: Call the getBookingById method.
      final notifier = container.read(asyncBookingsProvider.notifier);
      await notifier.getBookingById('booking123');

      // Assert: Verify the state is updated with the booking entity.
      expect(notifier.state, isA<AsyncData<List<BookingEntity>>>());
      expect(notifier.state.value!.first.id, equals('booking123'));

      verify(() => mockGetBookingByIdUseCase.call(any())).called(1);
    });

    test('getBookingById should return error state on failure', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock the use case to return an exception.
      when(() => mockGetBookingByIdUseCase.call(any()))
      .thenAnswer((_) async => Left(BookingGetException('Failed to fetch booking')));

      // Act: Call the getBookingById method.
      final notifier = container.read(asyncBookingsProvider.notifier);
      await expectLater(
        () async => await notifier.getBookingById('invalid_id'),
        throwsA(isA<BookingGetException>()),
      );

      // Assert: Verify the state is error.
      expect(notifier.state, isA<AsyncError>());

      verify(() => mockGetBookingByIdUseCase.call(any())).called(1);
    });

    test('should create a booking and refresh the list', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock successful creation and list refresh
      when(() => mockCreateBookingUseCase.call(bookingEntity)).thenAnswer((_) async => Right(bookingEntity));
      when(() => mockListBookingsUseCase.call(any())).thenAnswer((_) async => Right([bookingEntity]));

      // Act: Create a booking
      final notifier = container.read(asyncBookingsProvider.notifier);
      await notifier.createBooking(bookingEntity);

      // Assert: Verify that the state is updated and list is refreshed
      expect(notifier.state, isA<AsyncData<List<BookingEntity>>>());
      expect(notifier.state.value, [bookingEntity]);
      expect(notifier.state.value?.length, 1);

      verify(() => mockCreateBookingUseCase.call(bookingEntity)).called(1);
      verify(() => mockListBookingsUseCase.call(any())).called(2);
    });

    test('should delete a booking and refresh the list', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock successful deletion and list refresh
      when(() => mockDeleteBookingUseCase.call(bookingEntity)).thenAnswer((_) async => const Right(null));
      when(() => mockListBookingsUseCase.call(any())).thenAnswer((_) async => const Right([]));

      // Act: Delete the booking
      final notifier = container.read(asyncBookingsProvider.notifier);
      await notifier.removeBooking(bookingEntity);

      // Assert: Verify that the booking was removed and list refreshed
      expect(notifier.state, isA<AsyncData<List<BookingEntity>>>());
      expect(notifier.state.value, isEmpty);

      verify(() => mockDeleteBookingUseCase.call(bookingEntity)).called(1);
      verify(() => mockListBookingsUseCase.call(any())).called(2);
    });

    test('should update a booking and refresh the list', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock successful update and list refresh
      when(() => mockUpdateBookingUseCase.call(bookingEntity)).thenAnswer((_) async => Right(bookingEntity));
      when(() => mockListBookingsUseCase.call(any())).thenAnswer((_) async => Right([bookingEntity]));

      // Act: Update the booking
      final notifier = container.read(asyncBookingsProvider.notifier);
      await notifier.updateBooking(bookingEntity);

      // Assert: Verify that the booking was updated and list refreshed
      expect(notifier.state, isA<AsyncData<List<BookingEntity>>>());
      expect(notifier.state.value, [bookingEntity]);

      verify(() => mockUpdateBookingUseCase.call(bookingEntity)).called(1);
      verify(() => mockListBookingsUseCase.call(any())).called(2);
    });

    test('should handle failure during booking creation', () async {
      final container = createContainer(overrides: overrides);
      // Arrange: Mock a failure during creation
      when(() => mockCreateBookingUseCase.call(bookingEntity)).thenAnswer((_) async => Left(BookingCreateException('Creation failed')));

      // Act: Attempt to create a booking
      final notifier = container.read(asyncBookingsProvider.notifier);

      // Expect the provider to throw an exception
      expect(
        () async => await notifier.createBooking(bookingEntity),
        throwsA(isA<BookingCreateException>()),
      );

      verify(() => mockCreateBookingUseCase.call(bookingEntity)).called(1);
    });
  });
}
