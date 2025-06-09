// Step 9: Contact details (No changes needed)
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:homeprosgapp/feature/booking/domain/booking_domain.dart';
import 'package:homeprosgapp/feature/booking/presentation/provider/booking_providers.dart';

import '../../../../../../../core/core.dart';

class ContactDetailsStep extends StatelessWidget {
  final BookingFormNotifier bookingNotifier;
  final BookingEntity booking;

  const ContactDetailsStep({
    super.key,
    required this.booking,
    required this.bookingNotifier,
  });

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    TextStyle? labelStyle = theme.textTheme.bodyMedium?.copyWith(color: theme.colorScheme.onSurface.withOpacity(.5));
    TextStyle? formFieldLabelStyle = theme.textTheme.bodyLarge?.copyWith(
      fontWeight: FontWeight.w500,
      color: theme.colorScheme.onSurface,
    );

    return FormBuilderField(
      name: 'contact_details', // Composite field name
      initialValue: {
        'full_name': booking.fullname,
        'address': booking.address,
        'phone_number': booking.phone ?? '',
        'email_address': booking.email,
        'terms_accepted': booking.termsAccepted,
      },
      validator: (value) {
        final details = value as Map<String, dynamic>?; // Cast to Map<String, dynamic>?

        // Initialize a list to collect validation errors
        final errors = <String>[];

        if (details == null || (details['full_name']?.isEmpty ?? true)) {
          errors.add('Full Name is required.');
        }
        if (details == null || (details['address']?.isEmpty ?? true)) {
          errors.add('Address is required.');
        }
        if (details == null || (details['email_address']?.isEmpty ?? true)) {
          errors.add('Email Address is required.');
        }
        if (details == null || details['terms_accepted'] != true) {
          errors.add('Terms must be accepted to continue.');
        }

        // Return all errors as a single message, or null if no errors
        return errors.isNotEmpty ? errors.join('\n') : null;
      },
      builder: (FormFieldState<Map<String, dynamic>> field) {
        return StackColumn(
          horizontalAlignment: CrossAxisAlignment.start,
          spacing: const [k5, k5, k4],
          children: [
            CustomFormBuilderTextField<BookingFormNotifier, BookingEntity>(
              key: const Key('full_name'),
              fieldName: 'full_name',
              labelText: 'Full Name',
              labelStyle: labelStyle,
              formFieldLabelStyle: formFieldLabelStyle,
              notifier: bookingNotifier,
              updateField: bookingNotifier.updateField,
              initialValue: booking.fullname,
              copyWithField: (state, newValue) => state.copyWith(fullname: newValue),
              validators: FormBuilderValidators.required(),
            ),
            CustomFormBuilderTextField<BookingFormNotifier, BookingEntity>(
              key: const Key('address'),
              fieldName: 'address',
              labelText: 'Address',
              labelStyle: labelStyle,
              formFieldLabelStyle: formFieldLabelStyle,
              initialValue: booking.address,
              notifier: bookingNotifier,
              updateField: bookingNotifier.updateField,
              copyWithField: (state, newValue) => state.copyWith(address: newValue),
              validators: FormBuilderValidators.required(),
            ),
            StackRow(
              spacing: const [k4],
              children: [
                Expanded(
                  child: CustomFormBuilderTextField<BookingFormNotifier, BookingEntity>(
                    key: const Key('phone_number'),
                    fieldName: 'phone_number',
                    labelText: 'Phone Number',
                    labelStyle: labelStyle,
                    formFieldLabelStyle: formFieldLabelStyle,
                    notifier: bookingNotifier,
                    updateField: bookingNotifier.updateField,
                    initialValue: booking.phone ?? '',
                    copyWithField: (state, value) => state.copyWith(phone: value),
                  ),
                ),
                Expanded(
                  child: CustomFormBuilderTextField<BookingFormNotifier, BookingEntity>(
                    key: const Key('email_address'),
                    fieldName: 'email_address',
                    labelText: 'Email Address',
                    labelStyle: labelStyle,
                    formFieldLabelStyle: formFieldLabelStyle,
                    notifier: bookingNotifier,
                    updateField: bookingNotifier.updateField,
                    initialValue: booking.email,
                    copyWithField: (state, value) => state.copyWith(email: value),
                    validators: FormBuilderValidators.required(),
                  ),
                ),
              ],
            ),
            FormBuilderCheckbox(
              key: const Key('terms_accepted'),
              name: 'terms_accepted',
              initialValue: booking.termsAccepted,
              decoration: const InputDecoration(border: InputBorder.none),
              title: const Text('By submitting, I acknowledge and agree to the Terms of Use and Privacy Policy'),
              validator: (value) {
                if (value != true) {
                  return 'You must accept terms and conditions to continue';
                }
                return null;
              },
              onChanged: (value) {
                bookingNotifier.updateField(
                  value,
                  (state, value) => state.copyWith(termsAccepted: value), // Uses the specific field's copyWith logic
                );
              },
            ),
          ],
        );
      },
    );
  }
}
