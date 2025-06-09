import '../../domain/booking_domain.dart';

class BookingEmailConfirmationModel {
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

  BookingEmailConfirmationModel({
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

  // Factory constructor to create a model from JSON data
  factory BookingEmailConfirmationModel.fromJson(Map<String, dynamic> json) {
    return BookingEmailConfirmationModel(
      service: json['service'] as String,
      propertyType: PropertyType.values.firstWhere((e) => e.toString() == json['propertyType']),
      status: BookingStatus.values.firstWhere((e) => e.toString() == json['status']),
      ownershipStatus: OwnershipStatus.values.firstWhere((e) => e.toString() == json['ownershipStatus']),
      timeline: ProjectTimeline.values.firstWhere((e) => e.toString() == json['timeline']),
      timeOfDay: TimeOfDay.values.firstWhere((e) => e.toString() == json['timeOfDay']),
      details: json['details'] as String,
      fullname: json['fullname'] as String,
      email: json['email'] as String,
      confirmationLink: json['confirmationLink'] as String,
    );
  }

  // Method to convert model to JSON
  Map<String, dynamic> toJson() {
    return {
      'service': service,
      'propertyType': propertyType.toString(),
      'status': status.toString(),
      'ownershipStatus': ownershipStatus.toString(),
      'timeline': timeline.toString(),
      'timeOfDay': timeOfDay.toString(),
      'details': details,
      'fullname': fullname,
      'email': email,
      'confirmationLink': confirmationLink,
    };
  }

}