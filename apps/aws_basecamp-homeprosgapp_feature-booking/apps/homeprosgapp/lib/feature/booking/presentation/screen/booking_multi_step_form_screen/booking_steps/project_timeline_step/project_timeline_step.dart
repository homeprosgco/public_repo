// Step 4: Project status
import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../../../../domain/booking_domain.dart'; // Import your BookingEntity and enums
import '../../../../provider/booking_providers.dart'; // Import your providers

class ProjectTimelineStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const ProjectTimelineStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    return CustomFormBuilderRadioGroup<ProjectTimeline>(
      name: 'project_timeline',
      enumOptions: const {
        ProjectTimeline.moreThanTwoWeeks: 'More than 2 Weeks',
        ProjectTimeline.oneToTwoWeeks: '1 - 2 Weeks',
        ProjectTimeline.timingIsFlexible: 'Timing is Flexible',
        ProjectTimeline.within1Week: 'Within 1 week'
      }, // Pass the options map
      initialSelectedValue: booking.timeline, // Use the selected value from the state
      onChanged: (value) {
        if (value != null) {
          // Update the booking state when a new value is selected
          bookingNotifier.updateField(
            value,
            (state, newValue) => state.copyWith(timeline: newValue),
          );
        }
      },
    );
  }
}
