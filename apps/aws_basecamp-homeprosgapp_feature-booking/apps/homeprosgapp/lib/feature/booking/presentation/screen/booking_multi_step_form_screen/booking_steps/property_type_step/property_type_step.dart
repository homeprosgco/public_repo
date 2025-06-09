import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../../../../domain/booking_domain.dart'; // Import your BookingEntity and enums
import '../../../../provider/booking_providers.dart'; // Import your providers

class PropertyTypeStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const PropertyTypeStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    return CustomFormBuilderRadioGroup<PropertyType>(
      name: 'property_type',
      enumOptions: const {
        PropertyType.residential: 'Residential',
        PropertyType.multiUnitBuilding: 'Multi-unit Building',
        PropertyType.commercial: 'Commercial',
        PropertyType.mobileHome: 'Mobile Home',
      }, // Pass the options map
      initialSelectedValue: booking.propertyType, // Use the selected value from the state
      onChanged: (value) {
        if (value != null) {
          // Update the booking state when a new value is selected
          bookingNotifier.updateField(
            value,
            (state, newValue) => state.copyWith(propertyType: newValue),
          );
        }
      },
    );
  }
}
