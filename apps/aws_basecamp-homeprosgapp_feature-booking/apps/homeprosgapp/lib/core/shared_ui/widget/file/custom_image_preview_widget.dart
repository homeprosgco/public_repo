import 'package:flutter/material.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';

import '../../../theme/theme.dart';

class CustomImagePreview extends StatelessWidget {
  final PlatformFile file;

  const CustomImagePreview({
    super.key,
    required this.file,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      key: const Key('custom_image_preview_container'),
      height: k24,
      width: k24,
      decoration: BoxDecoration(
        color: Colors.grey.shade300,
        borderRadius: BorderRadius.circular(k2),
      ),
      child: file.bytes != null
          ? Image.memory(
              file.bytes!,
              fit: BoxFit.cover,
              width: double.infinity,
              height: double.infinity,
            )
          : const SizedBox.shrink(),
    );
  }
}
