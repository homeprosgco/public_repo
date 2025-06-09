import '../enum/booking_entity_enums.dart';

class BookingEmailConfirmationEntity {
  final String service;
  final PropertyType propertyType;
  final BookingStatus status;
  final OwnershipStatus ownershipStatus;
  final ProjectTimeline timeline;
  final TimeOfDay timeOfDay;
  final String details;
  final String fullname;
  final String email;
  final String confirmationLink;

  BookingEmailConfirmationEntity({
    required this.service,
    required this.propertyType,
    required this.status,
    required this.ownershipStatus,
    required this.timeline,
    required this.timeOfDay,
    required this.details,
    required this.fullname,
    required this.email,
    required this.confirmationLink,
  });
}
