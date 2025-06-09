import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('buildDocumentIcon', () {
    test('returns PDF icon for .pdf extension', () {
      // Act
      final icon = buildDocumentIcon('pdf');

      // Assert
      expect(icon, Icons.picture_as_pdf);
    });

    test('returns Word document icon for .doc extension', () {
      // Act
      final icon = buildDocumentIcon('doc');

      // Assert
      expect(icon, Icons.description);
    });

    test('returns Word document icon for .docx extension', () {
      // Act
      final icon = buildDocumentIcon('docx');

      // Assert
      expect(icon, Icons.description);
    });

    test('returns generic file icon for unknown extension', () {
      // Act
      final icon = buildDocumentIcon('unknown');

      // Assert
      expect(icon, Icons.insert_drive_file);
    });

    test('returns generic file icon for null extension', () {
      // Act
      final icon = buildDocumentIcon(null);

      // Assert
      expect(icon, Icons.insert_drive_file);
    });
  });
}
