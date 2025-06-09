import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:homeprosgapp/feature/booking/domain/enum/booking_entity_enums.dart' as available;

const bookingId = 'booking123';
const service = 'Plumbing';
const details = 'Fix leaking pipe';
const fullname = 'John Doe';
const address = '123 Main St';
const email = 'john@example.com';
const phone = '123-456-7890';
const termsAccepted = true;
final now = DateTime.now();
const photoUploadUrls = ['https://example.com/image1.jpg'];
const professions = ['Plumber', 'Electrician'];

Booking createMockBooking() {
  return Booking(
    id: bookingId,
    status: BookingStatusEnum.pending,
    service: service,
    propertyType: PropertyTypeEnum.residential,
    hiringStage: HiringStageEnum.readyToHire,
    timeline: ProjectTimelineEnum.within1Week,
    timeOfDay: TimeOfDayEnum.earlyMorning,
    ownershipStatus: OwnershipStatusEnum.owner,
    details: details,
    photoUploadUrls: photoUploadUrls,
    termsAccepted: true,
    fullname: fullname,
    address: address,
    email: email,
    phone: phone,
    confirmed: true,
  );
}

BookingEntity createMockBookingEntity() {
  return BookingEntity(
    id: bookingId,
    status: BookingStatus.pending,
    service: service,
    propertyType: PropertyType.residential,
    hiringStage: HiringStage.readyToHire,
    timeline: ProjectTimeline.within1Week,
    timeOfDay: available.TimeOfDay.earlyMorning,
    ownershipStatus: OwnershipStatus.owner,
    details: details,
    photoUploadUrls: photoUploadUrls,
    professions: professions,
    termsAccepted: true,
    fullname: fullname,
    address: address,
    email: email,
    phone: phone,
    confirmed: true,
    createdAt: now,
    updatedAt: now,
  );
}

BookingEntity createMockBookingEntityWithNulls() {
  return BookingEntity(
    id: bookingId,
    status: BookingStatus.pending,
    service: service,
    propertyType: PropertyType.residential,
    hiringStage: HiringStage.readyToHire,
    timeline: ProjectTimeline.within1Week,
    timeOfDay: available.TimeOfDay.earlyMorning,
    ownershipStatus: OwnershipStatus.owner,
    details: details,
    termsAccepted: true,
    fullname: fullname,
    address: address,
    email: email,
  );
}

BookingEntity createMockBookingEntity2() {
  return BookingEntity(
    id: '2',
    status: BookingStatus.inProgress,
    service: 'Electrical',
    propertyType: PropertyType.commercial,
    hiringStage: HiringStage.planningAndBudgeting,
    timeline: ProjectTimeline.oneToTwoWeeks,
    timeOfDay: available.TimeOfDay.afternoon,
    ownershipStatus: OwnershipStatus.owner,
    details: 'Install new lighting fixtures',
    termsAccepted: true,
    fullname: 'Jane Doe',
    address: '456 Elm St',
    email: 'jane@example.com',
  );
}

BookingEntity createMockUpdateBookingEntity() {
  return BookingEntity(
    id: '', // ID will be generated at submission
    status: BookingStatus.pending,
    service: '',
    propertyType: PropertyType.residential,
    hiringStage: HiringStage.readyToHire,
    timeline: ProjectTimeline.within1Week,
    timeOfDay: available.TimeOfDay.morning,
    ownershipStatus: OwnershipStatus.owner,
    details: '',
    termsAccepted: false,
    fullname: '',
    address: '',
    email: '',
    phone: '',
  );
}