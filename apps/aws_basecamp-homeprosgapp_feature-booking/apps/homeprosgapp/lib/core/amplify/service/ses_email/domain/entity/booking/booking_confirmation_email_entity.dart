/// A data model class `BookingConfirmationEmailEntity` that represents the essential 
/// information for a booking confirmation email. This entity includes the recipient's 
/// details, the service they booked, booking status, and a confirmation link.
///
/// ### Example Usage:
///
/// ```dart
/// final booking = BookingConfirmationEmailEntity(
///   email: 'john.doe@example.com',
///   fullname: 'John Doe',
///   service: 'Cleaning Service',
///   propertyType: 'Apartment',
///   status: 'Confirmed',
///   timeline: 'Next Monday, 10 AM',
///   timeOfDay: 'Morning',
///   ownership: 'Renter',
///   details: 'Bring your own cleaning supplies.',
///   confirmationLink: 'https://example.com/confirm?token=12345',
/// );
///
/// print(booking.toString());
/// // Output: BookingConfirmationEmailEntity(email: john.doe@example.com, fullname: John Doe, ...)
/// ```
///
/// ### Properties:
///
/// - `email`: The recipient's email address (e.g., `john.doe@example.com`).
/// - `fullname`: The recipient's full name.
/// - `service`: The service booked by the recipient (e.g., Cleaning Service).
/// - `propertyType`: The type of property for the service (e.g., Apartment, House).
/// - `status`: The booking status (e.g., Confirmed, Pending).
/// - `timeline`: The scheduled timeline for the service (e.g., "Next Monday, 10 AM").
/// - `timeOfDay`: The preferred time of day (e.g., Morning, Afternoon).
/// - `ownership`: The type of ownership (e.g., Owner, Renter).
/// - `details`: Any additional booking details or instructions.
/// - `confirmationLink`: A link to confirm the booking.
///
/// ### JSON Serialization:
///
/// This class provides utility methods to convert between `BookingConfirmationEmailEntity` 
/// instances and JSON objects for easy data interchange.
///
/// #### Convert from JSON:
/// ```dart
/// final bookingJson = {
///   'email': 'john.doe@example.com',
///   'fullname': 'John Doe',
///   'service': 'Cleaning Service',
///   'propertyType': 'Apartment',
///   'status': 'Confirmed',
///   'timeline': 'Next Monday, 10 AM',
///   'timeOfDay': 'Morning',
///   'ownership': 'Renter',
///   'details': 'Bring your own cleaning supplies.',
///   'confirmationLink': 'https://example.com/confirm?token=12345',
/// };
///
/// final booking = BookingConfirmationEmailEntity.fromJson(bookingJson);
/// print(booking.fullname); // Output: John Doe
/// ```
///
/// #### Convert to JSON:
/// ```dart
/// final booking = BookingConfirmationEmailEntity(
///   email: 'john.doe@example.com',
///   fullname: 'John Doe',
///   service: 'Cleaning Service',
///   propertyType: 'Apartment',
///   status: 'Confirmed',
///   timeline: 'Next Monday, 10 AM',
///   timeOfDay: 'Morning',
///   ownership: 'Renter',
///   details: 'Bring your own cleaning supplies.',
///   confirmationLink: 'https://example.com/confirm?token=12345',
/// );
///
/// final json = booking.toJson();
/// print(json['email']); // Output: john.doe@example.com
/// ```
///
/// ### Code:
class BookingConfirmationEmailEntity {
  final String email;           // The recipient's email address
  final String fullname;        // The recipient's full name
  final String service;         // The service the recipient booked
  final String propertyType;    // The type of property (e.g., house, apartment)
  final String status;          // Booking status (e.g., confirmed, pending)
  final String timeline;        // Timeline of the service
  final String timeOfDay;       // Preferred time of day for the service
  final String ownership;       // Ownership type (e.g., owner, renter)
  final String details;         // Additional booking details
  final String confirmationLink; // The confirmation link

  const BookingConfirmationEmailEntity({
    required this.email,
    required this.fullname,
    required this.service,
    required this.propertyType,
    required this.status,
    required this.timeline,
    required this.timeOfDay,
    required this.ownership,
    required this.details,
    required this.confirmationLink,
  });

  /// Factory constructor to create a `BookingConfirmationEmailEntity` from a JSON object.
  factory BookingConfirmationEmailEntity.fromJson(Map<String, dynamic> json) {
    return BookingConfirmationEmailEntity(
      email: json['email'] as String,
      fullname: json['fullname'] as String,
      service: json['service'] as String,
      propertyType: json['propertyType'] as String,
      status: json['status'] as String,
      timeline: json['timeline'] as String,
      timeOfDay: json['timeOfDay'] as String,
      ownership: json['ownership'] as String,
      details: json['details'] as String,
      confirmationLink: json['confirmationLink'] as String,
    );
  }

  /// Converts a `BookingConfirmationEmailEntity` instance to a JSON object.
  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'fullname': fullname,
      'service': service,
      'propertyType': propertyType,
      'status': status,
      'timeline': timeline,
      'timeOfDay': timeOfDay,
      'ownership': ownership,
      'details': details,
      'confirmationLink': confirmationLink,
    };
  }

  @override
  String toString() {
    return 'BookingConfirmationEmailEntity(email: $email, fullname: $fullname, service: $service, '
        'propertyType: $propertyType, status: $status, timeline: $timeline, '
        'timeOfDay: $timeOfDay, ownership: $ownership, details: $details, '
        'confirmationLink: $confirmationLink)';
  }
}
