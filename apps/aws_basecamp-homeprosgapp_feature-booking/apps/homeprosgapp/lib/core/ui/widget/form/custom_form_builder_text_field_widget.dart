import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

import '../../../theme/theme.dart';
import '../../layout/stack_column_layout.dart';

/// A reusable FormBuilder TextField widget that updates a specific field
/// in a provided form notifier using a custom `copyWithField` function.
class CustomFormBuilderTextField<FormNotifierType, EntityType> extends StatelessWidget {
  final String fieldName;
  final String labelText;
  final TextStyle? labelStyle;
  final TextStyle? formFieldLabelStyle;
  final FormNotifierType notifier;
  final EntityType Function(EntityType, String?) copyWithField;
  final String initialValue;
  final void Function(String?, EntityType Function(EntityType, String?)) updateField;
  final FormFieldValidator<String>? validators;
  final ValueChanged<String>? onChange;

  const CustomFormBuilderTextField({
    super.key,
    required this.fieldName,
    required this.labelText,
    this.labelStyle,
    this.formFieldLabelStyle,
    required this.notifier,
    required this.copyWithField,
    required this.initialValue,
    required this.updateField,
    this.validators,
    this.onChange,
  });

  void _handleFieldChange(value) {
    // Check if `onChange` is provided, then call it with the new value
    if (onChange != null) {
      onChange!(value);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return StackColumn(
      spacing: const [k2],
      children: [
        Text(
          labelText,
          style: formFieldLabelStyle ??
              theme.textTheme.bodyLarge?.copyWith(
                fontWeight: FontWeight.w500,
                color: theme.colorScheme.onSurface,
              ),
        ),
        FormBuilderTextField(
          name: fieldName,
          initialValue: initialValue,
          decoration: InputDecoration(
            // labelText: labelText,
            labelStyle: labelStyle ?? theme.textTheme.bodyMedium?.copyWith(color: theme.colorScheme.onSurface.withOpacity(.5)),
          ),
          validator: validators,
          onChanged: (value) {
            updateField(
              value,
              copyWithField, // Uses the specific field's copyWith logic
            );
            _handleFieldChange(value);
          },
        ),
      ],
    );
  }
}
