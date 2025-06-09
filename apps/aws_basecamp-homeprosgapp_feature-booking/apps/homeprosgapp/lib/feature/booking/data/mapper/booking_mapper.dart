// Enum Conversion: Data Layer -> Domain Layer
import 'package:homeprosgapp/core/core.dart';

import '../../domain/entity/booking_entity.dart';
import '../../domain/enum/booking_entity_enums.dart';

extension BookingModelMapper on BookingEntity {
  Booking toModel() {
    return Booking(
      id: id,
      status: bookingStatusToEnum(status),
      service: service,
      propertyType: propertyTypeToEnum(propertyType),
      hiringStage: hiringStageToEnum(hiringStage),
      timeline: projectTimelineToEnum(timeline),
      timeOfDay: timeOfDayToEnum(timeOfDay),
      ownershipStatus: ownershipStatusToEnum(ownershipStatus),
      details: details,
      photoUploadUrls: photoUploadUrls,
      termsAccepted: termsAccepted,
      fullname: fullname,
      address: address,
      email: email,
      phone: phone,
      professions: professions,
      confirmed: confirmed,
    );
  }
}

extension BookingEntityMapper on Booking {
  BookingEntity toEntity() {
    return BookingEntity(
      id: id,
      status: bookingStatusFromEnum(status),
      service: service,
      propertyType: propertyTypeFromEnum(propertyType),
      hiringStage: hiringStageFromEnum(hiringStage),
      timeline: projectTimelineFromEnum(timeline),
      timeOfDay: timeOfDayFromEnum(timeOfDay),
      ownershipStatus: ownershipStatusFromEnum(ownershipStatus),
      details: details,
      photoUploadUrls: photoUploadUrls,
      termsAccepted: termsAccepted,
      fullname: fullname,
      address: address,
      email: email,
      phone: phone,
      professions: professions,
      confirmed: confirmed,
      createdAt: createdAt?.getDateTimeInUtc(),
      updatedAt: updatedAt?.getDateTimeInUtc(),
    );
  }
}

BookingStatus bookingStatusFromEnum(BookingStatusEnum statusEnum) {
  switch (statusEnum) {
    case BookingStatusEnum.pending:
      return BookingStatus.pending;
    case BookingStatusEnum.confirmed:
      return BookingStatus.confirmed;
    case BookingStatusEnum.scheduled:
      return BookingStatus.scheduled;
    case BookingStatusEnum.inProgress:
      return BookingStatus.inProgress;
    case BookingStatusEnum.suspended:
      return BookingStatus.suspended;
    case BookingStatusEnum.completed:
      return BookingStatus.completed;
    case BookingStatusEnum.cancelled:
      return BookingStatus.cancelled;
    case BookingStatusEnum.onHold:
      return BookingStatus.onHold;
  }
}

// Enum Conversion: Domain Layer -> Data Layer
BookingStatusEnum bookingStatusToEnum(BookingStatus status) {
  switch (status) {
    case BookingStatus.pending:
      return BookingStatusEnum.pending;
    case BookingStatus.confirmed:
      return BookingStatusEnum.confirmed;
    case BookingStatus.scheduled:
      return BookingStatusEnum.scheduled;
    case BookingStatus.inProgress:
      return BookingStatusEnum.inProgress;
    case BookingStatus.suspended:
      return BookingStatusEnum.suspended;
    case BookingStatus.completed:
      return BookingStatusEnum.completed;
    case BookingStatus.cancelled:
      return BookingStatusEnum.cancelled;
    case BookingStatus.onHold:
      return BookingStatusEnum.onHold;
  }
}

PropertyType propertyTypeFromEnum(PropertyTypeEnum enumValue) {
  switch (enumValue) {
    case PropertyTypeEnum.residential:
      return PropertyType.residential;
    case PropertyTypeEnum.multiUnitBuilding:
      return PropertyType.multiUnitBuilding;
    case PropertyTypeEnum.commercial:
      return PropertyType.commercial;
    case PropertyTypeEnum.mobileHome:
      return PropertyType.mobileHome;
  }
}

PropertyTypeEnum propertyTypeToEnum(PropertyType value) {
  switch (value) {
    case PropertyType.residential:
      return PropertyTypeEnum.residential;
    case PropertyType.multiUnitBuilding:
      return PropertyTypeEnum.multiUnitBuilding;
    case PropertyType.commercial:
      return PropertyTypeEnum.commercial;
    case PropertyType.mobileHome:
      return PropertyTypeEnum.mobileHome;
  }
}

HiringStage hiringStageFromEnum(HiringStageEnum enumValue) {
  switch (enumValue) {
    case HiringStageEnum.readyToHire:
      return HiringStage.readyToHire;
    case HiringStageEnum.planningAndBudgeting:
      return HiringStage.planningAndBudgeting;
  }
}

HiringStageEnum hiringStageToEnum(HiringStage value) {
  switch (value) {
    case HiringStage.readyToHire:
      return HiringStageEnum.readyToHire;
    case HiringStage.planningAndBudgeting:
      return HiringStageEnum.planningAndBudgeting;
  }
}

ProjectTimeline projectTimelineFromEnum(ProjectTimelineEnum enumValue) {
  switch (enumValue) {
    case ProjectTimelineEnum.within1Week:
      return ProjectTimeline.within1Week;
    case ProjectTimelineEnum.oneToTwoWeeks:
      return ProjectTimeline.oneToTwoWeeks;
    case ProjectTimelineEnum.moreThanTwoWeeks:
      return ProjectTimeline.moreThanTwoWeeks;
    case ProjectTimelineEnum.timingIsFlexible:
      return ProjectTimeline.timingIsFlexible;
  }
}

ProjectTimelineEnum projectTimelineToEnum(ProjectTimeline value) {
  switch (value) {
    case ProjectTimeline.within1Week:
      return ProjectTimelineEnum.within1Week;
    case ProjectTimeline.oneToTwoWeeks:
      return ProjectTimelineEnum.oneToTwoWeeks;
    case ProjectTimeline.moreThanTwoWeeks:
      return ProjectTimelineEnum.moreThanTwoWeeks;
    case ProjectTimeline.timingIsFlexible:
      return ProjectTimelineEnum.timingIsFlexible;
  }
}

TimeOfDay timeOfDayFromEnum(TimeOfDayEnum enumValue) {
  switch (enumValue) {
    case TimeOfDayEnum.earlyMorning:
      return TimeOfDay.earlyMorning;
    case TimeOfDayEnum.morning:
      return TimeOfDay.morning;
    case TimeOfDayEnum.afternoon:
      return TimeOfDay.afternoon;
    case TimeOfDayEnum.lateAfternoon:
      return TimeOfDay.lateAfternoon;
  }
}

TimeOfDayEnum timeOfDayToEnum(TimeOfDay value) {
  switch (value) {
    case TimeOfDay.earlyMorning:
      return TimeOfDayEnum.earlyMorning;
    case TimeOfDay.morning:
      return TimeOfDayEnum.morning;
    case TimeOfDay.afternoon:
      return TimeOfDayEnum.afternoon;
    case TimeOfDay.lateAfternoon:
      return TimeOfDayEnum.lateAfternoon;
  }
}

OwnershipStatus ownershipStatusFromEnum(OwnershipStatusEnum enumValue) {
  switch (enumValue) {
    case OwnershipStatusEnum.owner:
      return OwnershipStatus.owner;
    case OwnershipStatusEnum.renter:
      return OwnershipStatus.renter;
    case OwnershipStatusEnum.authorizedToImprove:
      return OwnershipStatus.authorizedToImprove;
  }
}

OwnershipStatusEnum ownershipStatusToEnum(OwnershipStatus value) {
  switch (value) {
    case OwnershipStatus.owner:
      return OwnershipStatusEnum.owner;
    case OwnershipStatus.renter:
      return OwnershipStatusEnum.renter;
    case OwnershipStatus.authorizedToImprove:
      return OwnershipStatusEnum.authorizedToImprove;
  }
}
