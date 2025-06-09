// Step 7: Project details (No changes needed)
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:homeprosgapp/feature/booking/domain/booking_domain.dart';
import 'package:homeprosgapp/feature/booking/presentation/provider/booking_providers.dart';

class ProjectDetailsStep extends StatelessWidget {
  final BookingEntity booking;
  final BookingFormNotifier bookingNotifier;

  const ProjectDetailsStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);

    return FormBuilderTextField(
      name: 'project_details',
      initialValue: booking.details,
      decoration: InputDecoration(
        labelText: 'Tell us more about your project',
        alignLabelWithHint: true,
        labelStyle: theme.textTheme.bodyMedium?.copyWith(color: theme.colorScheme.onSurface.withOpacity(.5)),
      ),
      maxLines: 15,
      validator: FormBuilderValidators.required(),
      onChanged: (details) {
        // Update the provider with the new details value
        bookingNotifier.updateField(
          details,
          (state, newValue) => state.copyWith(details: newValue),
        );
      },
    );
  }
}
