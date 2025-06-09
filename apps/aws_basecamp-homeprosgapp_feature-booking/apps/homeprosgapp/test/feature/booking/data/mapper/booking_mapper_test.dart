import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';

import '../../booking_test_utils.dart';

// Sample Data for Testing
final bookingEntity = createMockBookingEntity();

final bookingModel = createMockBooking();

void main() {
  group('BookingModelMapper', () {
    test('should correctly map BookingEntity to Booking model', () {
      // Act
      final mappedModel = bookingEntity.toModel();

      // Assert
      expect(mappedModel.id, bookingModel.id);
      expect(mappedModel.status, bookingModel.status);
      expect(mappedModel.propertyType, bookingModel.propertyType);
      expect(mappedModel.hiringStage, bookingModel.hiringStage);
      expect(mappedModel.timeline, bookingModel.timeline);
      expect(mappedModel.timeOfDay, bookingModel.timeOfDay);
      expect(mappedModel.ownershipStatus, bookingModel.ownershipStatus);
      expect(mappedModel.details, bookingModel.details);
      expect(mappedModel.photoUploadUrls, bookingModel.photoUploadUrls);
      expect(mappedModel.termsAccepted, bookingModel.termsAccepted);
      expect(mappedModel.fullname, bookingModel.fullname);
      expect(mappedModel.address, bookingModel.address);
      expect(mappedModel.email, bookingModel.email);
      expect(mappedModel.phone, bookingModel.phone);
      expect(mappedModel.confirmed, bookingModel.confirmed);
    });

    test('should correctly map Booking model to BookingEntity', () {
      // Act
      final mappedEntity = bookingModel.toEntity();

      // Assert
      expect(mappedEntity.id, bookingEntity.id);
      expect(mappedEntity.status, bookingEntity.status);
      expect(mappedEntity.propertyType, bookingEntity.propertyType);
      expect(mappedEntity.hiringStage, bookingEntity.hiringStage);
      expect(mappedEntity.timeline, bookingEntity.timeline);
      expect(mappedEntity.timeOfDay, bookingEntity.timeOfDay);
      expect(mappedEntity.ownershipStatus, bookingEntity.ownershipStatus);
      expect(mappedEntity.details, bookingEntity.details);
      expect(mappedEntity.photoUploadUrls, bookingEntity.photoUploadUrls);
      expect(mappedEntity.termsAccepted, bookingEntity.termsAccepted);
      expect(mappedEntity.fullname, bookingEntity.fullname);
      expect(mappedEntity.address, bookingEntity.address);
      expect(mappedEntity.email, bookingEntity.email);
      expect(mappedEntity.phone, bookingEntity.phone);
      expect(mappedEntity.confirmed, bookingEntity.confirmed);
    });
  });
}
