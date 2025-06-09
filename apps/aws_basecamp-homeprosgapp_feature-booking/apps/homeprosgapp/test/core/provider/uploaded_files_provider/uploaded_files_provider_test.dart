import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('UploadedFiles Provider', () {
    // Initialize the provider container for tests
    late ProviderContainer container;

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

    setUp(() {
      // Set up a fresh provider container before each test
      container = ProviderContainer();
    });

    tearDown(() {
      // Dispose of the provider container after each test
      container.dispose();
    });

    test('should initialize with an empty list', () {
      // Access the provider state
      final files = container.read(uploadedFilesProvider);
      expect(files, isEmpty);
    });

    test('should add files to the list', () {
      // Access the provider's notifier to add files
      container.read(uploadedFilesProvider.notifier).addFiles([sampleFile1, sampleFile2]);

      // Verify that the files were added
      final files = container.read(uploadedFilesProvider);
      expect(files, hasLength(2));
      expect(files[0].name, sampleFile1.name);
      expect(files[1].name, sampleFile2.name);
    });

    test('should remove a file at a specific index', () {
      // Add initial files to the list
      container.read(uploadedFilesProvider.notifier).addFiles([sampleFile1, sampleFile2]);

      // Remove the file at index 0
      container.read(uploadedFilesProvider.notifier).removeFileAt(0);

      // Verify that the first file was removed and only one file remains
      final files = container.read(uploadedFilesProvider);
      expect(files, hasLength(1));
      expect(files[0].name, sampleFile2.name);
    });

    test('should clear all files', () {
      // Add initial files to the list
      container.read(uploadedFilesProvider.notifier).addFiles([sampleFile1, sampleFile2]);

      // Clear all files
      container.read(uploadedFilesProvider.notifier).clearFiles();

      // Verify that the list is empty
      final files = container.read(uploadedFilesProvider);
      expect(files, isEmpty);
    });
  });
}
