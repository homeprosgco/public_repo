// Step 6: Property ownership (Repeat similar pattern)
import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../../../../domain/booking_domain.dart'; // Import your BookingEntity and enums
import '../../../../provider/booking_providers.dart'; // Import your providers

class OwnershipStatusStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const OwnershipStatusStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {

    return CustomFormBuilderRadioGroup<OwnershipStatus>(
      name: 'ownership_status',
      enumOptions: const {
        OwnershipStatus.owner: 'Owner',
        OwnershipStatus.renter: 'Renter',
        OwnershipStatus.authorizedToImprove: 'Authorized, I am authorized to make improvements'
      }, // Pass the options map
      initialSelectedValue: booking.ownershipStatus, // Use the selected value from the state
      onChanged: (value) {
        if (value != null) {
          // Update the booking state when a new value is selected
          bookingNotifier.updateField(
            value,
            (state, newValue) => state.copyWith(ownershipStatus: newValue),
          );
        }
      },
    );
  }
}
