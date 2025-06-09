import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:go_router/go_router.dart';

import '../shared_ui/shared_ui.dart';

final sampleOptions = {
  'Option1': 'First Option',
  'Option2': 'Second Option',
  'Option3': 'Third Option',
};

final formKey = GlobalKey<FormBuilderState>();

/// The route configuration.
final GoRouter router = GoRouter(initialLocation: '/', routes: [
  GoRoute(
    path: '/',
    name: 'booking',
    builder: (context, state) {
      return Scaffold(
        body: FormBuilder(
          key: formKey,
          child: CustomFormBuilderRadioGroup<String>(
            name: 'sampleRadioGroup',
            enumOptions: sampleOptions,
            initialSelectedValue: null,
            onChanged: (_) {},
            iconColor: Colors.grey[900],
          ),
        ),
      );
    },
  ),
]);
