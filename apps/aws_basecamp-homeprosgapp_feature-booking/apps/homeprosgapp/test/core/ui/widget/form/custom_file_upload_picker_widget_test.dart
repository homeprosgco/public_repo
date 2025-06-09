import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../test_utils/test_utils.dart';

class MockPlatformFile extends Mock implements PlatformFile {}

void main() {
  createTestWidget() {
    return createMaterialAppTestWidget(
      child: const Scaffold(
        body: CustomFileUploadPicker(
          fieldName: 'files',
          labelText: 'Upload Files',
        ),
      ),
    );
  }

  testWidgets('CustomFileUploadPicker displays files and handles file actions', (WidgetTester tester) async {
    await tester.pumpWidget(createTestWidget());

    await tester.pumpAndSettle();

    // Act: Add files to the provider
    final element = tester.element(find.byType(CustomFileUploadPicker));
    final container = ProviderScope.containerOf(element);

    // Act: Add files to the provider
    container.read(uploadedFilesProvider.notifier).addFiles([sampleFile1, sampleFile2]);

    await tester.pumpAndSettle();

    // Assert: Check that files are displayed in the GridView
    expect(find.byType(Image), findsNWidgets(2));
    expect(find.text('sample1.jpg'), findsNothing); // Image preview does not show text
    expect(find.text('sample2.jpg'), findsNothing);

    // // Act: Remove the first file and trigger UI update
    await tester.tap(find.byIcon(Icons.close).first);
    await tester.pumpAndSettle();

    // // Assert: Ensure the file count decreased and only one file remains
    expect(container.read(uploadedFilesProvider).length, 1);
    expect(find.byType(Image), findsOneWidget);
  });

  testWidgets('displays file picker and handles file selection', (WidgetTester tester) async {
    await tester.pumpWidget(createTestWidget());
    await tester.pumpAndSettle();

    // Tap on the TypeSelector to simulate file selection
    final typeSelectorFinder = find.text('Add Photos');
    expect(typeSelectorFinder, findsOneWidget);

    // Simulate file selection by directly calling onChanged in FormBuilderFilePicker
    final filePickerFinder = find.byType(FormBuilderFilePicker);
    final FormBuilderFilePicker filePicker = tester.widget(filePickerFinder);
    filePicker.onChanged?.call([sampleFile1]);
    await tester.pumpAndSettle();

    expect(find.byType(Image), findsNWidgets(1));
  });
}
