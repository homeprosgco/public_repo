import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';

class CustomFormBuilderRadioGroup<T> extends StatefulWidget {
  final String name;
  final Map<T, String> enumOptions;
  final T? initialSelectedValue;
  final ValueChanged<T?> onChanged;
  final Color? iconColor;

  const CustomFormBuilderRadioGroup({
    super.key,
    required this.name,
    required this.enumOptions,
    required this.initialSelectedValue,
    required this.onChanged,
    this.iconColor,
  });

  @override
  CustomFormBuilderRadioGroupState<T> createState() => CustomFormBuilderRadioGroupState<T>();
}

class CustomFormBuilderRadioGroupState<T> extends State<CustomFormBuilderRadioGroup<T>> {
  T? selectedValue;

  @override
  void initState() {
    super.initState();
    selectedValue = widget.initialSelectedValue; // Set the initial selected value
  }

  void _onChanged(T? value) {
    setState(() {
      selectedValue = value;
    });
    widget.onChanged(value);
  }

  @override
  Widget build(BuildContext context) {
    return FormBuilderRadioGroup<T>(
      name: widget.name,
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
      options: widget.enumOptions.entries.map(
        (entry) {
          final optionValue = entry.key;
          final optionLabel = entry.value;

          return FormBuilderFieldOption<T>(
            value: optionValue,
            child: MouseRegion(
              cursor: SystemMouseCursors.click,
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 16.0),
                child: Row(
                  children: [
                    Expanded(child: Text(optionLabel)),
                    selectedValue == optionValue
                        ? Icon(
                            Icons.check_circle_outline_outlined,
                            color: widget.iconColor,
                            size: 20.0,
                          )
                        : const SizedBox.shrink(),
                  ],
                ),
              ),
            ),
          );
        },
      ).toList(),
      onChanged: _onChanged,
      validator: FormBuilderValidators.required(),
      orientation: OptionsOrientation.wrap,
      wrapSpacing: 16.0,
      wrapRunSpacing: 16.0,
    );
  }
}
