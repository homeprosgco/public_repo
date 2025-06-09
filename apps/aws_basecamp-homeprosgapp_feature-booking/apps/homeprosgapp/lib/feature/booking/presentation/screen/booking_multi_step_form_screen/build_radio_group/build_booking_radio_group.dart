import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:homeprosgapp/core/core.dart';

/// Function to generate a custom radio group based on an enum map.
Widget buildRadioGroup<T>({
  required String name,
  required Map<T, String> enumOptions,
  required T? selectedValue,
  required ValueChanged<T?> onChanged,
  Color? iconColor,
}) {
  return FormBuilderRadioGroup<T>(
    name: name,
    itemDecoration: BoxDecoration(
      borderRadius: BorderRadius.circular(8.0),
      border: Border.all(
        color: Colors.grey.shade400,
        width: 0.5,
      ),
    ),
    decoration: InputDecoration(
      border: InputBorder.none,
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(8.0),
        borderSide: const BorderSide(
          color: Colors.transparent,
          width: 0.5,
        ),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(8.0),
        borderSide: const BorderSide(
          color: Colors.transparent,
          width: 0.5,
        ),
      ),
    ),
    options: enumOptions.entries.map(
      (entry) {
        final optionValue = entry.key;
        final optionLabel = entry.value;
        safePrint(selectedValue);
        safePrint(optionValue);
        safePrint(optionLabel);
        return FormBuilderFieldOption<T>(
          value: optionValue,
          child: MouseRegion(
            cursor: SystemMouseCursors.click,
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: k2_5, vertical: k4),
              child: Row(
                children: [
                  Expanded(child: Text(optionLabel)),
                  selectedValue == optionValue
                      ? Icon(
                          Icons.check_circle_outline_outlined,
                          color: iconColor,
                          size: k5,
                        )
                      : const SizedBox.shrink()
                ],
              ),
            ),
          ),
        );
      },
    ).toList(),
    onChanged: onChanged,
    validator: FormBuilderValidators.required(),
    orientation: OptionsOrientation.wrap,
    wrapSpacing: 16.0,
    wrapRunSpacing: 16.0,
  );
}
