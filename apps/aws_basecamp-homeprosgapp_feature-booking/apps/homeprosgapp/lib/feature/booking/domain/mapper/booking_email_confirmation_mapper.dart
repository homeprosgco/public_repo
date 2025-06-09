import '../entity/booking_email_confirmation_entity.dart';
import '../enum/booking_entity_enums.dart';

extension BookingEmailConfirmationEntityCopyWith on BookingEmailConfirmationEntity {
  BookingEmailConfirmationEntity copyWith({
    String? service,
    PropertyType? propertyType,
    BookingStatus? status,
    OwnershipStatus? ownershipStatus,
    ProjectTimeline? timeline,
    TimeOfDay? timeOfDay,
    String? details,
    String? fullname,
    String? email,
    String? confirmationLink,
  }) {
    return BookingEmailConfirmationEntity(
      service: service ?? this.service,
      propertyType: propertyType ?? this.propertyType,
      status: status ?? this.status,
      ownershipStatus: ownershipStatus ?? this.ownershipStatus,
      timeline: timeline ?? this.timeline,
      timeOfDay: timeOfDay ?? this.timeOfDay,
      details: details ?? this.details,
      fullname: fullname ?? this.fullname,
      email: email ?? this.email,
      confirmationLink: confirmationLink ?? this.confirmationLink,
    );
  }
}
