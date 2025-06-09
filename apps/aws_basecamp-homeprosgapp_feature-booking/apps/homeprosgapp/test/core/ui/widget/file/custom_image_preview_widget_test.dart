import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

class MockPlatformFile extends Mock implements PlatformFile {}

void main() {
  group('CustomImagePreview', () {
    testWidgets('displays image when file.bytes is provided', (WidgetTester tester) async {

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

      // Act: Pump the CustomImagePreview widget with the sample file
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomImagePreview(file: mockImageFile),
          ),
        ),
      );

      // Assert: Verify the container with key is displayed
      final containerFinder = find.byKey(const Key('custom_image_preview_container'));
      expect(containerFinder, findsOneWidget);

      // Check the color to confirm it has the background grey color, indicating the image background
      final containerWidget = tester.widget<Container>(containerFinder);
      final decoration = containerWidget.decoration as BoxDecoration;
      expect(decoration.color, Colors.grey.shade300);
      expect(find.byType(Image), findsOneWidget);
    });

    testWidgets('displays empty container when file.bytes is null', (WidgetTester tester) async {
      // Arrange: Create a file without bytes
      final sampleFile = PlatformFile(
        name: 'sample.jpg',
        size: 1024,
        bytes: null,
      );

      // Act: Pump the CustomImagePreview widget with the sample file
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomImagePreview(file: sampleFile),
          ),
        ),
      );

      // Assert: Ensure no Image widget is displayed, indicating an empty container
      expect(find.byType(Image), findsNothing);
    });
  });
}
