import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'uploaded_files_provider.g.dart';

@riverpod
class UploadedFiles extends _$UploadedFiles {
  @override
  List<PlatformFile> build() {
    return []; // Initialize with an empty list
  }

  // Method to add new files to the list
  void addFiles(List<PlatformFile> files) {
    state = [...state, ...files];
  }

  // Method to remove a specific file (by identifier or unique property)
  void removeFileAt(int index) {
    if (index >= 0 && index < state.length) {
      state = [...state]..removeAt(index);
    }
  }

  // Method to clear all files
  void clearFiles() {
    state = [];
  }
}

// A fake notifier to simulate the provider behavior.
class MockUploadedFiles extends _$UploadedFiles with Mock implements UploadedFiles {}
