import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('CustomDocumentPlaceholder', () {
    testWidgets('displays PDF icon when file extension is pdf', (WidgetTester tester) async {
      // Arrange: Create a mock PlatformFile with PDF extension
      final pdfFile = PlatformFile(name: 'sample.pdf', size: 1024);

      // Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomDocumentPlaceholder(file: pdfFile),
          ),
        ),
      );

      // Assert: Check that the icon for PDF is displayed
      expect(find.byIcon(Icons.picture_as_pdf), findsOneWidget);
    });

    testWidgets('displays Word document icon when file extension is doc', (WidgetTester tester) async {
      // Arrange: Create a mock PlatformFile with DOC extension
      final docFile = PlatformFile(name: 'sample.doc', size: 1024);

      // Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomDocumentPlaceholder(file: docFile),
          ),
        ),
      );

      // Assert: Check that the icon for DOC is displayed
      expect(find.byIcon(Icons.description), findsOneWidget);
    });

    testWidgets('displays generic file icon for unsupported extensions', (WidgetTester tester) async {
      // Arrange: Create a mock PlatformFile with an unsupported extension
      final txtFile = PlatformFile(name: 'sample.txt', size: 1024);

      // Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomDocumentPlaceholder(file: txtFile),
          ),
        ),
      );

      // Assert: Check that the generic file icon is displayed
      expect(find.byIcon(Icons.insert_drive_file), findsOneWidget);
    });

    testWidgets('displays generic file icon when extension is null', (WidgetTester tester) async {
      // Arrange: Create a mock PlatformFile with a null extension
      final nullExtensionFile = PlatformFile(name: 'sample', size: 1024);

      // Act
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: CustomDocumentPlaceholder(file: nullExtensionFile),
          ),
        ),
      );

      // Assert: Check that the generic file icon is displayed
      expect(find.byIcon(Icons.insert_drive_file), findsOneWidget);
    });
  });
}
