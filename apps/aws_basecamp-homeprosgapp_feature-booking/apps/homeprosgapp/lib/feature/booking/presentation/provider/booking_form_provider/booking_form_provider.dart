import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../domain/booking_domain.dart';

part 'booking_form_provider.g.dart';

@riverpod
class BookingFormNotifier extends _$BookingFormNotifier {
  @override
  BookingEntity build() {
    // Initialize with default values
    return BookingEntity(
      id: '', // ID will be generated at submission
      status: BookingStatus.pending,
      service: '',
      propertyType: PropertyType.residential,
      hiringStage: HiringStage.readyToHire,
      timeline: ProjectTimeline.within1Week,
      timeOfDay: TimeOfDay.morning,
      ownershipStatus: OwnershipStatus.owner,
      details: '',
      termsAccepted: false,
      fullname: '',
      address: '',
      email: '',
      phone: '',
      photoUploadUrls: [],
      professions: [],
      confirmed: false,
      createdAt: null,
      updatedAt: null,
    );
  }

  // Method to update a specific field in the form state
  void updateField<T>(T value, BookingEntity Function(BookingEntity, T) updateFunc) {
    state = updateFunc(state, value);
  }
}

class MockBookingFormNotifier extends _$BookingFormNotifier with Mock implements BookingFormNotifier {}
