import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../../test_utils/test_utils.dart';
import '../../../booking_test_utils/booking_test_utils.dart';

class MockListBookingsUseCase extends Mock implements ListBookingsUseCase {}

void main() {
  late MockGoRouter mockGoRouter;
  // late MockAsyncBookings mockAsyncBookings;
  // late MockListBookingsUseCase mockListBookingsUseCase;

  final List<BookingEntity> bookingEntities = [createMockBookingEntity()];

  setUp(() {
    mockGoRouter = MockGoRouter();
    // mockAsyncBookings = MockAsyncBookings();
    // mockListBookingsUseCase = MockListBookingsUseCase();

  });

  setUpAll(() {
    // Register fallback values if required
    registerFallbackValue(NoParams());
    registerFallbackValue(bookingEntities);
  });

  Widget createTestWidget() {
    return createMaterialAppTestWidget(
      overrides: [bookingRemoteDataSourceProvider.overrideWithValue(MockBookingRemoteDataSource())],
      mockGoRouter: mockGoRouter,
      child: const BookingListScreen(),
    );
  }

  group('BookingListScreen', () {
    testWidgets('displays logo, text, and call info', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      final element = tester.element(find.byType(BookingListScreen));
      final container = ProviderScope.containerOf(element);

      // AsyncValue<List<BookingEntity>>? previousState;
      AsyncValue<List<BookingEntity>>? newState;

      container.listen<AsyncValue<List<BookingEntity>>>(
        asyncBookingsProvider,
        (prev, next) {
          // previousState = prev;
          newState = next;
          print('The provider changed from $prev to $next');
        },
      );

      // Initially, bookingProvider should be in a loading state
      // expect(subscription.read(), const AsyncValue<List<BookingEntity>>.loading());

      // Step 3: Wait for the provider to complete its Future
      await container.read(asyncBookingsProvider.future);

      // expect(previousState, const AsyncValue<List<BookingEntity>>.loading());
      expect(newState!.hasValue, isTrue);
      // expect(newState!.value, isNotNull);

      // expect(newState?.value, bookingEntities);
      // verify(() => mockListBookingsUseCase.call(any())).called(1);
    });

    testWidgets('shows mobile view on small screens', (tester) async {
      tester.view.physicalSize = const Size(600, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();
    });

    testWidgets('navigates to home on logo tap', (tester) async {
      await tester.pumpWidget(createTestWidget());
    });
  });
}
