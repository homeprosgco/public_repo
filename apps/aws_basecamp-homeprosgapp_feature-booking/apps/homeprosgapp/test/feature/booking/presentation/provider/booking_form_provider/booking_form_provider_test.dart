import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';

void main() {
  late ProviderContainer container;
  late BookingFormNotifier notifier;

  setUp(() {
    container = ProviderContainer();
    notifier = container.read(bookingFormNotifierProvider.notifier);
  });

  tearDown(() {
    container.dispose();
  });

  group('BookingFormNotifier', () {
    test('initial state should have default BookingEntity values', () {
      final booking = container.read(bookingFormNotifierProvider);

      expect(booking.id, '');
      expect(booking.status, BookingStatus.pending);
      expect(booking.service, '');
      expect(booking.propertyType, PropertyType.residential);
      expect(booking.hiringStage, HiringStage.readyToHire);
      expect(booking.timeline, ProjectTimeline.within1Week);
      expect(booking.timeOfDay, TimeOfDay.morning);
      expect(booking.ownershipStatus, OwnershipStatus.owner);
      expect(booking.termsAccepted, false);
      expect(booking.fullname, '');
      expect(booking.address, '');
      expect(booking.email, '');
      expect(booking.phone, '');
    });

    test('should update a specific field in the BookingEntity state', () {
      // Update 'fullname' field
      notifier.updateField<String>('John Doe', (entity, value) => entity.copyWith(fullname: value));

      // Check that the state has been updated
      final updatedBooking = container.read(bookingFormNotifierProvider);
      expect(updatedBooking.fullname, 'John Doe');
    });

    test('should update multiple fields in the BookingEntity state', () {
      // Update multiple fields
      notifier.updateField<String>('test@example.com', (entity, value) => entity.copyWith(email: value));
      notifier.updateField<bool>(true, (entity, value) => entity.copyWith(termsAccepted: value));

      // Verify the state reflects these updates
      final updatedBooking = container.read(bookingFormNotifierProvider);
      expect(updatedBooking.email, 'test@example.com');
      expect(updatedBooking.termsAccepted, true);
    });
  });
}
