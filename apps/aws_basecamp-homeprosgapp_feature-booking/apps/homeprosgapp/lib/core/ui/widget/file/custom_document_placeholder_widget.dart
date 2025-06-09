import 'package:flutter/material.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';

import '../../../theme/theme.dart';
import 'build_document_icon_widget.dart';

class CustomDocumentPlaceholder extends StatelessWidget {
  final PlatformFile file;

  const CustomDocumentPlaceholder({
    super.key,
    required this.file,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: k24,
      width: k24,
      decoration: BoxDecoration(
        color: Colors.grey.shade300,
        borderRadius: BorderRadius.circular(k2),
      ),
      child: Center(
        child: Icon(
          buildDocumentIcon(file.extension),
          size: 16,
          color: Colors.grey.shade700,
        ),
      ),
    );
  }
}
