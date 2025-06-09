import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:homeprosgapp/core/core.dart';

class CustomDropdownMenu extends StatelessWidget {
  final String fieldName;
  final String labelText;
  final String? hintText;
  final TextStyle? labelStyle;
  final TextStyle? formFieldLabelStyle;
  final String? initialValue;
  final FormFieldValidator<String>? validators;
  final ValueChanged<String?>? onChange;
  final List<String> options;

  const CustomDropdownMenu({
    super.key,
    required this.fieldName,
    required this.options,
    required this.labelText,
    required this.onChange,
    this.initialValue = '',
    this.hintText = '',
    this.validators,
    this.formFieldLabelStyle,
    this.labelStyle,
  });

  void _handleFieldChange(value) {
    // Check if `onChange` is provided, then call it with the new value
    if (onChange != null) {
      onChange!(value);
    }
  }

  @override
  Widget build(BuildContext context) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.stretch,
      spacing: const [k3_5],
      children: [
        CustomThemeText(
          text: labelText,
          variant: TypographyVariant.labelLarge,
          fontWeight: FontWeight.w700,
          fontKey: FontKey.primary,
        ),
        SizedBox(
          width: double.infinity,
          child: DropdownMenu<String>(
            width: maxLG,
            trailingIcon: FaIcon(
              FontAwesomeIcons.angleDown,
              color: Colors.grey[900],
              size: k4,
            ),
            initialSelection: initialValue,
            onSelected: _handleFieldChange,
            dropdownMenuEntries: options.map<DropdownMenuEntry<String>>(
              (String value) {
                return DropdownMenuEntry<String>(value: value, label: value);
              },
            ).toList(),
          ),
        ),
      ],
    );
  }
}
