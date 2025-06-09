import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

class MockPlatformFile extends Mock implements PlatformFile {}

void main() {

  testWidgets('CustomFileUploadPicker displays files and handles file actions', (WidgetTester tester) async {
    // Sample file for testing
    final sampleFile1 = PlatformFile(
      name: 'sample1.jpg',
      size: 1024,
      bytes: Uint8List.fromList([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0x60, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x01, 0xE2, 0x26, 0x05, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]),
    );

    final sampleFile2 = PlatformFile(
      name: 'sample2.jpg',
      size: 2048,
      bytes: Uint8List.fromList([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0x60, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x01, 0xE2, 0x26, 0x05, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]),
    );

    await tester.pumpWidget(
      const ProviderScope(
        child: MaterialApp(
          home: Scaffold(
            body: CustomFileUploadPicker(
              fieldName: 'files',
              labelText: 'Upload Files',
            ),
          ),
        ),
      ),
    );

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
}
