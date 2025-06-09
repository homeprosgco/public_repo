import 'dart:math';

import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:faker/faker.dart';

/// Random number generator
final _random = Random();

/// Generates a random `BookingStatusEnum` value
BookingStatusEnum getRandomBookingStatus() {
  return BookingStatusEnum.values[_random.nextInt(BookingStatusEnum.values.length)];
}

/// Generates a random `PropertyTypeEnum` value
PropertyTypeEnum getRandomPropertyType() {
  return PropertyTypeEnum.values[_random.nextInt(PropertyTypeEnum.values.length)];
}

/// Generates a random `HiringStageEnum` value
HiringStageEnum getRandomHiringStage() {
  return HiringStageEnum.values[_random.nextInt(HiringStageEnum.values.length)];
}

/// Generates a random `ProjectTimelineEnum` value
ProjectTimelineEnum getRandomProjectTimeline() {
  return ProjectTimelineEnum.values[_random.nextInt(ProjectTimelineEnum.values.length)];
}

/// Generates a random `TimeOfDayEnum` value
TimeOfDayEnum getRandomTimeOfDay() {
  return TimeOfDayEnum.values[_random.nextInt(TimeOfDayEnum.values.length)];
}

/// Generates a random `OwnershipStatusEnum` value
OwnershipStatusEnum getRandomOwnershipStatus() {
  return OwnershipStatusEnum.values[_random.nextInt(OwnershipStatusEnum.values.length)];
}

/// Randomly selects a `Service` from the `servicesList`
Service getRandomService() {
  return servicesList[_random.nextInt(servicesList.length)];
}

/// Generates a random booking instance using a random service from `servicesList`
Booking generateRandomBooking() {
  final randomService = getRandomService();

  return Booking(
    id: UUID.getUUID(),
    status: getRandomBookingStatus(),
    service: randomService.service, // Randomly selected service name
    propertyType: getRandomPropertyType(),
    hiringStage: getRandomHiringStage(),
    timeline: getRandomProjectTimeline(),
    timeOfDay: getRandomTimeOfDay(),
    ownershipStatus: getRandomOwnershipStatus(),
    details: faker.lorem.sentences(4).join(','),
    photoUploadUrls: [], // Assuming no photos for simplicity
    termsAccepted: true,
    fullname: faker.person.name(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phoneNumber.us(),
    professions: [randomService.professional], // Profession associated with the service
    confirmed: _random.nextBool(),
  );
}

/// Generates a list of random `Booking` instances
List<Booking> generateRandomBookings(int count) {
  return List.generate(count, (_) => generateRandomBooking());
}
