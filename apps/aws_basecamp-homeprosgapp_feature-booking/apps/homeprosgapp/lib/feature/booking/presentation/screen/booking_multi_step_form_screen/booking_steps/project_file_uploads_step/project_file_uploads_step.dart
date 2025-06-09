import 'package:flutter/material.dart';

import '../../../../../../../core/core.dart';

class ProjectFileUploadsStep extends StatelessWidget {

  const ProjectFileUploadsStep({super.key});

  @override
  Widget build(BuildContext context) {
    return const CustomFileUploadPicker(
      fieldName: 'project_files',
      labelText: 'Attach Plans and Photos',
    );
  }
}
