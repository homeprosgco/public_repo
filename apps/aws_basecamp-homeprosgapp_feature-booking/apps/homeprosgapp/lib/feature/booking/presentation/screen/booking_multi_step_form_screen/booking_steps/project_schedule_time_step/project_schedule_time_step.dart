import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../../../../domain/booking_domain.dart'; // Import your BookingEntity and enums
import 'package:homeprosgapp/feature/booking/domain/enum/booking_entity_enums.dart' as available;
import '../../../../provider/booking_providers.dart'; // Import your providers

class ProjectScheduleTimeStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const ProjectScheduleTimeStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    return CustomFormBuilderRadioGroup<available.TimeOfDay>(
      name: 'project_schedule_time',
      enumOptions: const {
        available.TimeOfDay.earlyMorning: 'Early Morning',
        available.TimeOfDay.morning: 'Morning',
        available.TimeOfDay.afternoon: 'Afternoon',
        available.TimeOfDay.lateAfternoon: 'Late Afternoon',
      }, // Pass the options map
      initialSelectedValue: booking.timeOfDay, // Use the selected value from the state
      onChanged: (value) {
        if (value != null) {
          // Update the booking state when a new value is selected
          bookingNotifier.updateField(
            value,
            (state, newValue) => state.copyWith(timeOfDay: newValue),
          );
        }
      },
    );
  }
}
