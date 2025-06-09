import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../../../../domain/booking_domain.dart'; // Import your BookingEntity and enums
import '../../../../provider/booking_providers.dart'; // Import your providers

class HiringStageStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const HiringStageStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    return CustomFormBuilderRadioGroup<HiringStage>(
      name: 'hiring_stage',
      enumOptions: const {
        HiringStage.planningAndBudgeting: 'Planning & Budgeting',
        HiringStage.readyToHire: 'Ready to Hire',
      }, // Pass the options map
      initialSelectedValue: booking.hiringStage, // Use the selected value from the state
      onChanged: (value) {
        if (value != null) {
          // Update the booking state when a new value is selected
          bookingNotifier.updateField(
            value,
            (state, newValue) => state.copyWith(hiringStage: newValue),
          );
        }
      },
    );
  }
}
