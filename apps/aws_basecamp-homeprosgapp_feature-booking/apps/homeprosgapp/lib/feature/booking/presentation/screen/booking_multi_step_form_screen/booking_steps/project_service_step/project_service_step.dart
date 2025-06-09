// Step 1: Service selection
import 'package:flutter/material.dart';
import 'package:form_builder_extra_fields/form_builder_extra_fields.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/booking/domain/booking_domain.dart';
import 'package:homeprosgapp/feature/booking/presentation/provider/booking_providers.dart';

class ProjectServiceStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const ProjectServiceStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    return FormBuilderTypeAhead<String>(
      name: 'service',
      initialValue: booking.service,
      suggestionsCallback: (query) {
        return professionalServices.where((service) => service.toLowerCase().contains(query.toLowerCase())).toList();
      },
      itemBuilder: (context, service) {
        return ListTile(
          title: Text(service),
        );
      },
      onSuggestionSelected: (service) {
        // Set the selected value on the booking form notifier
        bookingNotifier.updateField(
          service,
          (state, newValue) => state.copyWith(service: newValue),
        );
      },
      validator: FormBuilderValidators.required(),
    );
  }
}
