import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';

import '../../booking_test_utils/booking_email_confirmation_test_utils.dart';

void main() {
  group('BookingEmailConfirmationEntity', () {
    test('should create a valid BookingEmailConfirmationEntity object', () {
      final booking = mockBookingEmailConfirmationEntity.copyWith(
        service: 'AC Installation',
        propertyType: PropertyType.residential,
        status: BookingStatus.pending,
        ownershipStatus: OwnershipStatus.owner,
        timeline: ProjectTimeline.within1Week,
        timeOfDay: TimeOfDay.morning,
        details: 'Detailed description of the project',
        fullname: 'John Doe',
        email: 'john.doe@example.com',
        confirmationLink: 'https://example.com/confirm',
      );

      expect(booking.service, 'AC Installation');
      expect(booking.details, 'Detailed description of the project');
      expect(booking.fullname, 'John Doe');
      expect(booking.email, 'john.doe@example.com');
      expect(booking.confirmationLink, 'https://example.com/confirm');
    });

    test('should throw AssertionError if service is empty', () {
      expect(
        () => mockBookingEmailConfirmationEntity.copyWith(
          service: '',
          propertyType: PropertyType.residential,
          status: BookingStatus.pending,
          ownershipStatus: OwnershipStatus.owner,
          timeline: ProjectTimeline.within1Week,
          timeOfDay: TimeOfDay.morning,
          details: 'Detailed description of the project',
          fullname: 'John Doe',
          email: 'john.doe@example.com',
          confirmationLink: 'https://example.com/confirm',
        ),
        throwsA(isA<AssertionError>()),
      );
    });

    test('should throw AssertionError if details are empty', () {
      expect(
        () => mockBookingEmailConfirmationEntity.copyWith(
          service: 'AC Installation',
          propertyType: PropertyType.residential,
          status: BookingStatus.pending,
          ownershipStatus: OwnershipStatus.owner,
          timeline: ProjectTimeline.within1Week,
          timeOfDay: TimeOfDay.morning,
          details: '',
          fullname: 'John Doe',
          email: 'john.doe@example.com',
          confirmationLink: 'https://example.com/confirm',
        ),
        throwsA(isA<AssertionError>()),
      );
    });

    test('should throw AssertionError if fullname is empty', () {
      expect(
        () => mockBookingEmailConfirmationEntity.copyWith(
          service: 'AC Installation',
          propertyType: PropertyType.residential,
          status: BookingStatus.pending,
          ownershipStatus: OwnershipStatus.owner,
          timeline: ProjectTimeline.within1Week,
          timeOfDay: TimeOfDay.morning,
          details: 'Detailed description of the project',
          fullname: '',
          email: 'john.doe@example.com',
          confirmationLink: 'https://example.com/confirm',
        ),
        throwsA(isA<AssertionError>()),
      );
    });

    test('should throw AssertionError if email is empty', () {
      expect(
        () => mockBookingEmailConfirmationEntity.copyWith(
          service: 'AC Installation',
          propertyType: PropertyType.residential,
          status: BookingStatus.pending,
          ownershipStatus: OwnershipStatus.owner,
          timeline: ProjectTimeline.within1Week,
          timeOfDay: TimeOfDay.morning,
          details: 'Detailed description of the project',
          fullname: 'John Doe',
          email: '',
          confirmationLink: 'https://example.com/confirm',
        ),
        throwsA(isA<AssertionError>()),
      );
    });

    test('should throw AssertionError if confirmationLink is empty', () {
      expect(
        () => mockBookingEmailConfirmationEntity.copyWith(
          service: 'AC Installation',
          propertyType: PropertyType.residential,
          status: BookingStatus.pending,
          ownershipStatus: OwnershipStatus.owner,
          timeline: ProjectTimeline.within1Week,
          timeOfDay: TimeOfDay.morning,
          details: 'Detailed description of the project',
          fullname: 'John Doe',
          email: 'john.doe@example.com',
          confirmationLink: '',
        ),
        throwsA(isA<AssertionError>()),
      );
    });
  });
}
