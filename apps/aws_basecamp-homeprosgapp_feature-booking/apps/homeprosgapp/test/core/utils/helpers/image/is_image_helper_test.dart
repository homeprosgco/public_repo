import 'package:flutter_test/flutter_test.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('isImageFile', () {
    test('returns true for image file extensions', () {
      final jpgFile = PlatformFile(name: 'photo.jpg', size: 100);
      final jpegFile = PlatformFile(name: 'photo.jpeg', size: 100);
      final pngFile = PlatformFile(name: 'photo.png', size: 100);
      final gifFile = PlatformFile(name: 'photo.gif', size: 100);

      expect(isImageFile(jpgFile), isTrue);
      expect(isImageFile(jpegFile), isTrue);
      expect(isImageFile(pngFile), isTrue);
      expect(isImageFile(gifFile), isTrue);
    });

    test('returns false for non-image file extensions', () {
      final pdfFile = PlatformFile(name: 'document.pdf', size: 100);
      final docFile = PlatformFile(name: 'document.doc', size: 100);
      final txtFile = PlatformFile(name: 'note.txt', size: 100);
      final xlsFile = PlatformFile(name: 'sheet.xls', size: 100);

      expect(isImageFile(pdfFile), isFalse);
      expect(isImageFile(docFile), isFalse);
      expect(isImageFile(txtFile), isFalse);
      expect(isImageFile(xlsFile), isFalse);
    });

    test('returns false for files with no extension', () {
      final noExtensionFile = PlatformFile(name: 'file', size: 100);

      expect(isImageFile(noExtensionFile), isFalse);
    });

    test('is case-insensitive when checking file extension', () {
      final uppercaseJpgFile = PlatformFile(name: 'PHOTO.JPG', size: 100);
      final uppercasePngFile = PlatformFile(name: 'PHOTO.PNG', size: 100);

      expect(isImageFile(uppercaseJpgFile), isTrue);
      expect(isImageFile(uppercasePngFile), isTrue);
    });
  });
}
