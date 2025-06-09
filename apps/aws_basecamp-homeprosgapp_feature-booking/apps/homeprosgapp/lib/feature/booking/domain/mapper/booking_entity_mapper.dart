import '../entity/booking_email_confirmation_entity.dart';
import '../entity/booking_entity.dart';
import '../enum/booking_entity_enums.dart';

extension BookingEntityCopyWith on BookingEntity {
  BookingEntity copyWith({
    String? id,
    BookingStatus? status,
    String? service,
    PropertyType? propertyType,
    HiringStage? hiringStage,
    ProjectTimeline? timeline,
    TimeOfDay? timeOfDay,
    OwnershipStatus? ownershipStatus,
    String? details,
    List<String>? photoUploadUrls,
    bool? termsAccepted,
    String? fullname,
    String? address,
    String? email,
    String? phone,
    List<String>? professions,
    bool? confirmed,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return BookingEntity(
      id: id ?? this.id,
      status: status ?? this.status,
      service: service ?? this.service,
      propertyType: propertyType ?? this.propertyType,
      hiringStage: hiringStage ?? this.hiringStage,
      timeline: timeline ?? this.timeline,
      timeOfDay: timeOfDay ?? this.timeOfDay,
      ownershipStatus: ownershipStatus ?? this.ownershipStatus,
      details: details ?? this.details,
      photoUploadUrls: photoUploadUrls ?? this.photoUploadUrls,
      termsAccepted: termsAccepted ?? this.termsAccepted,
      fullname: fullname ?? this.fullname,
      address: address ?? this.address,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      professions: professions ?? this.professions,
      confirmed: confirmed ?? this.confirmed,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

extension BookingEntityExtension on BookingEntity {
  BookingEmailConfirmationEntity toBookingConfirmationEmailEntity(String confirmationLink) {
    return BookingEmailConfirmationEntity(
      service: service,
      propertyType: propertyType,
      status: status,
      ownershipStatus: ownershipStatus,
      timeline: timeline,
      timeOfDay: timeOfDay,
      details: details,
      fullname: fullname,
      email: email,
      confirmationLink: confirmationLink,
    );
  }
}

