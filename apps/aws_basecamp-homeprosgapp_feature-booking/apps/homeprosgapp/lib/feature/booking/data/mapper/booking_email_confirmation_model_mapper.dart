import '../../domain/booking_domain.dart';
import '../model/booking_email_confirmation_model.dart';

extension BookingEmailConfirmationModelMapper on BookingEmailConfirmationModel {
  // Convert to entity
  BookingEmailConfirmationEntity toEntity() {
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

extension BookingEmailConfirmationEntityMapper on BookingEmailConfirmationEntity {
  // Convert to model
  BookingEmailConfirmationModel toModel() {
    return BookingEmailConfirmationModel(
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