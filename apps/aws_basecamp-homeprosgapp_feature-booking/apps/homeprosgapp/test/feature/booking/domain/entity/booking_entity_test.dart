import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';

import '../../booking_test_utils.dart';

void main() {
  group('BookingEntity', () {
    const id = 'booking123';
    const service = 'Plumbing';
    const details = 'Fix leaking pipe';
    const fullname = 'John Doe';
    const address = '123 Main St';
    const email = 'john@example.com';
    const phone = '123-456-7890';
    const photoUploadUrls = ['https://example.com/image1.jpg'];
    const professions = ['Plumber', 'Electrician'];

    test('should correctly create a BookingEntity instance', () {
      // Arrange & Act
      final booking = createMockBookingEntity();

      // Assert
      expect(booking.id, equals(id));
      expect(booking.status, equals(BookingStatus.pending));
      expect(booking.service, equals(service));
      expect(booking.propertyType, equals(PropertyType.residential));
      expect(booking.hiringStage, equals(HiringStage.readyToHire));
      expect(booking.timeline, equals(ProjectTimeline.within1Week));
      expect(booking.timeOfDay, equals(TimeOfDay.earlyMorning));
      expect(booking.ownershipStatus, equals(OwnershipStatus.owner));
      expect(booking.details, equals(details));
      expect(booking.photoUploadUrls, equals(photoUploadUrls));
      expect(booking.termsAccepted, isTrue);
      expect(booking.fullname, equals(fullname));
      expect(booking.address, equals(address));
      expect(booking.email, equals(email));
      expect(booking.phone, equals(phone));
      expect(booking.professions, equals(professions));
      expect(booking.confirmed, isTrue);
      expect(booking.createdAt, equals(now));
      expect(booking.updatedAt, equals(now));
    });

    test('should allow nullable properties to be null', () {
      // Arrange & Act
      final booking = createMockBookingEntityWithNulls();

      // Assert
      expect(booking.id, equals(id));
      expect(booking.phone, isNull);
      expect(booking.photoUploadUrls, isNull);
      expect(booking.professions, isNull);
      expect(booking.confirmed, isNull);
      expect(booking.createdAt, isNull);
      expect(booking.updatedAt, isNull);
    });
  });
}
