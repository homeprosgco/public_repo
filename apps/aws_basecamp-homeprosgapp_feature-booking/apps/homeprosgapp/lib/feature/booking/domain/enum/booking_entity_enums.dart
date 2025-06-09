/// Enum representing the status of a booking.
enum BookingStatus {
  pending, // Initial booking, awaiting confirmation
  confirmed, // Booking has been confirmed
  scheduled, // Booking has been scheduled with the customer
  inProgress, // Work has started
  suspended, // Work is stopped indefinitely, pending resolution
  completed, // Work has been completed
  cancelled, // Booking was cancelled
  onHold, // Booking is paused or rescheduled
}

/// Enum representing the type of property.
enum PropertyType {
  residential,
  multiUnitBuilding,
  commercial,
  mobileHome,
}

/// Enum representing the hiring stage.
enum HiringStage {
  readyToHire,
  planningAndBudgeting,
}

/// Enum representing the project timeline.
enum ProjectTimeline {
  within1Week,
  oneToTwoWeeks,
  moreThanTwoWeeks,
  timingIsFlexible,
}

/// Enum representing the preferred time of day.
enum TimeOfDay {
  earlyMorning,
  morning,
  afternoon,
  lateAfternoon,
}

/// Enum representing the ownership status.
enum OwnershipStatus {
  owner,
  renter,
  authorizedToImprove,
}
