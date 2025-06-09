import 'package:form_builder_file_picker/form_builder_file_picker.dart';

bool isImageFile(PlatformFile file) {
  // Check file extension to determine if it's an image
  final imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  final extension = file.extension?.toLowerCase() ?? '';
  return imageExtensions.contains(extension);
}
