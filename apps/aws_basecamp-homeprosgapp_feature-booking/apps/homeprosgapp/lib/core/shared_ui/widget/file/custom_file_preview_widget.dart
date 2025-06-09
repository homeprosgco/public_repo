import 'package:flutter/material.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/shared_ui/widget/file/custom_image_preview_widget.dart';

import '../../../utils/utils.dart';
import 'custom_document_placeholder_widget.dart';

class CustomFilePreview extends StatelessWidget {
  final PlatformFile file;

  const CustomFilePreview({
    super.key,
    required this.file,
  });

  @override
  Widget build(BuildContext context) {
    return isImageFile(file) ? CustomImagePreview(file: file) : CustomDocumentPlaceholder(file: file);
  }
}
