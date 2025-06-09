import '../enum/booking_entity_enums.dart';

class BookingEntity {
  final String id;
  final BookingStatus status;
  final String service;
  final PropertyType propertyType;
  final HiringStage hiringStage;
  final ProjectTimeline timeline;
  final TimeOfDay timeOfDay;
  final OwnershipStatus ownershipStatus;
  final String details;
  final List<String>? photoUploadUrls;
  final bool termsAccepted;
  final String fullname;
  final String address;
  final String email;
  final String? phone;
  final List<String>? professions;
  final bool? confirmed;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  BookingEntity({
    required this.id,
    required this.status,
    required this.service,
    required this.propertyType,
    required this.hiringStage,
    required this.timeline,
    required this.timeOfDay,
    required this.ownershipStatus,
    required this.details,
    this.photoUploadUrls,
    required this.termsAccepted,
    required this.fullname,
    required this.address,
    required this.email,
    this.phone,
    this.professions,
    this.confirmed,
    this.createdAt,
    this.updatedAt,
  });
}
