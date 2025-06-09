import 'package:flutter/material.dart';

import '../../../theme/theme.dart';
import '../../layout/layout.dart';
import '../widget.dart';

/// Enum defining the different types of form inputs supported.
enum FormInputType { text, email, password, date, time, number, select, textarea }

/// A versatile `CustomFormInput` widget that supports different input types such as text, password, email, date,
/// and more. It includes features like placeholder text, error messages, dynamic borders, and padding.
///
/// ### Supported Input Types:
/// - **`text`**: Single-line text input.
/// - **`email`**: Input for email addresses.
/// - **`password`**: Password input with hidden characters.
/// - **`date`**: Input for selecting a date.
/// - **`time`**: Input for selecting a time.
/// - **`number`**: Input for numeric values.
/// - **`select`**: Dropdown input for selecting an option.
/// - **`textarea`**: Multiline text input.
class CustomFormInput extends StatelessWidget {
  final String? labelText; // Optional label for the input field
  final String hintText;
  final FormInputType type; // Type of input field
  final String? initialValue; // Initial value of the input
  final ValueChanged<String>? onChanged; // Callback for value changes
  final String? placeholder; // Placeholder text
  final String? errorText; // Optional error message
  final TextStyle? hintStyle; // Custom hint text style
  final List<DropdownMenuItem<String>>? options; // Dropdown options for 'select' type
  final int rows; // Number of rows for textarea input
  final String? className; // Additional class-like styling information (optional)
  final bool showBorder; // Flag to control border visibility
  final EdgeInsets? inputPadding; // Custom padding for the input field
  final TextEditingController? controller; // New controller parameter
  final String keyName;

  const CustomFormInput({
    super.key,
    required this.hintText,
    this.labelText,
    this.type = FormInputType.text,
    this.initialValue = '',
    this.onChanged,
    this.placeholder = '',
    this.options = const [],
    this.rows = 4, // Default row size for textarea
    this.className,
    this.showBorder = true,
    this.inputPadding,
    this.hintStyle,
    this.errorText,
    this.controller, // Assign the new controller
    required this.keyName,
  });

  @override
  Widget build(BuildContext context) {
    final ThemeData baseTheme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 0.0),
      child: StackColumn(
        spacing: const [k3_5],
        horizontalAlignment: CrossAxisAlignment.start,
        children: [
          if (labelText != null)
            CustomThemeText(
              text: labelText!,
              variant: TypographyVariant.labelLarge,
              fontWeight: FontWeight.w700,
              fontKey: FontKey.primary,
            ),
          Theme(
            data: baseTheme.copyWith(
              inputDecorationTheme: baseTheme.inputDecorationTheme.copyWith(
                enabledBorder: showBorder ? null : InputBorder.none,
                focusedBorder: showBorder ? null : InputBorder.none,
                errorBorder: showBorder ? null : InputBorder.none,
                focusedErrorBorder: showBorder ? null : InputBorder.none,
              ),
            ),
            child: _buildInputField(context),
          ),
        ],
      ),
    );
  }

  /// Builds the appropriate input field based on the input type.
  Widget _buildInputField(BuildContext context) {
    switch (type) {
      case FormInputType.textarea:
        return _buildTextArea();
      case FormInputType.select:
        return _buildSelectField();
      default:
        return _buildTextField();
    }
  }

  /// Builds a standard text field for text, email, password, date, and number inputs.
  Widget _buildTextField() {
    return TextFormField(
      key: Key(keyName),
      decoration: InputDecoration(
        hintText: hintText,
      ),
      controller: controller, // Use the controller if provided
      initialValue: controller == null ? initialValue : null,
      onChanged: onChanged,
      keyboardType: _getKeyboardType(),
      obscureText: type == FormInputType.password,
    );
  }

  /// Builds a dropdown select field for `select` input type.
  Widget _buildSelectField() {
    return DropdownButtonFormField<String>(
      key: Key(keyName),
      value: initialValue,
      items: options,
      onChanged: (newValue) => onChanged?.call(newValue ?? ''),
      hint: Text(placeholder ?? 'Select an option'),
    );
  }

  /// Builds a multiline text field for textarea input type.
  Widget _buildTextArea() {
    return TextFormField(
      key: Key(keyName),
      controller: controller, // Use the controller if provided
      initialValue: controller == null ? initialValue : null,
      onChanged: onChanged,
      maxLines: rows,
    );
  }

  /// Determines the appropriate keyboard type based on the input type.
  TextInputType _getKeyboardType() {
    switch (type) {
      case FormInputType.email:
        return TextInputType.emailAddress;
      case FormInputType.number:
        return TextInputType.number;
      case FormInputType.date:
      case FormInputType.time:
        return TextInputType.datetime;
      default:
        return TextInputType.text;
    }
  }
}
