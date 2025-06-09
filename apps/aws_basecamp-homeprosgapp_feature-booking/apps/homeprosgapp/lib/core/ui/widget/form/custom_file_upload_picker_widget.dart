import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';

import '../../../provider/uploaded_files_provider/uploaded_files_provider.dart';
import '../../../theme/theme.dart';

class CustomFileUploadPicker<T> extends ConsumerWidget {
  final String fieldName;
  final String? labelText;
  final Key? customFileUploadPickerKey;

  const CustomFileUploadPicker({
    super.key,
    required this.fieldName,
    this.labelText,
    this.customFileUploadPickerKey
  });

  Future<void> _handleFileSelection(WidgetRef ref, List<PlatformFile>? files) async {
    if (files == null) return;

    // Add files to the provider
    ref.read(uploadedFilesProvider.notifier).addFiles(files);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final providerFiles = ref.watch(uploadedFilesProvider);

    return FormBuilderFilePicker(
      key: customFileUploadPickerKey ?? const Key('custom_file_upload_picker'),
      name: fieldName,
      decoration: InputDecoration(
        labelText: labelText ?? '',
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(2.0),
          borderSide: BorderSide(
            color: Colors.grey.shade400,
            width: 0.5,
          ),
        ),
      ),
      maxFiles: null,
      allowMultiple: true,
      onChanged: (files) => _handleFileSelection(ref, files),
      typeSelectors: [
        TypeSelector(
          type: FileType.image,
          selector: Container(
            key: const Key('custom_file_uploader_picker_container'),
            height: k16,
            alignment: Alignment.center,
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.photo),
                SizedBox(width: 8),
                Text("Add Photos"),
              ],
            ),
          ),
        ),
      ],
      previewImages: true,
      customFileViewerBuilder: (files, removeFiles) {
        return providerFiles.isEmpty
            ? const SizedBox()
            : Container(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                height: k36,
                child: GridView.builder(
                  itemCount: providerFiles.length,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 6,
                    crossAxisSpacing: 16.0,
                    mainAxisSpacing: 16.0,
                    childAspectRatio: 4 / 3,
                  ),
                  itemBuilder: (context, index) {
                    final file = providerFiles[index];
                    return Stack(
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadius.circular(4.0),
                          child: file.bytes != null
                              ? Image.memory(
                                  file.bytes!,
                                  fit: BoxFit.cover,
                                  width: double.infinity,
                                  height: double.infinity,
                                )
                              : const SizedBox.shrink(),
                        ),
                        Positioned(
                          top: 4,
                          right: 4,
                          child: MouseRegion(
                            cursor: SystemMouseCursors.click,
                            child: GestureDetector(
                              onTap: () {
                                ref.read(uploadedFilesProvider.notifier).removeFileAt(index);
                                // removeFiles.call([...providerFiles]..removeAt(index));
                              },
                              child: const Icon(
                                Icons.close,
                                color: Colors.red,
                              ),
                            ),
                          ),
                        ),
                      ],
                    );
                  },
                ),
              );
      },
    );
  }
}
