import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

class MockPlatformFile extends Mock implements PlatformFile {}

void main() {
  group('CustomFilePreview', () {
    testWidgets('displays ImagePreview when file is an image', (WidgetTester tester) async {
      // Arrange: Set up a mock image file
      final mockImageFile = MockPlatformFile();
      when(() => mockImageFile.extension).thenReturn('jpg');
      when(() => mockImageFile.bytes).thenReturn(Uint8List.fromList([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0x60, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x01, 0xE2, 0x26, 0x05, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]));

      // Act: Build the widget
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFilePreview(file: mockImageFile),
          ),
        ),
      );

      // Assert: Verify that ImagePreview is displayed
      expect(find.byType(Image), findsOneWidget);
      expect(find.byType(CustomDocumentPlaceholder), findsNothing);
    });

    testWidgets('displays DocumentPlaceholder when file is not an image', (WidgetTester tester) async {
      // Arrange: Set up a mock non-image file
      final mockDocumentFile = MockPlatformFile();
      when(() => mockDocumentFile.extension).thenReturn('pdf');
      when(() => mockDocumentFile.bytes).thenReturn(null);

      // Act: Build the widget
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomFilePreview(file: mockDocumentFile),
          ),
        ),
      );

      // Assert: Verify that DocumentPlaceholder is displayed
      expect(find.byType(CustomDocumentPlaceholder), findsOneWidget);
      expect(find.byType(Image), findsNothing);
    });
  });
}
