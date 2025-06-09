import 'package:flutter/material.dart';

IconData buildDocumentIcon(String? extension) {
  switch (extension?.toLowerCase()) {
    case 'pdf':
      return Icons.picture_as_pdf;
    case 'doc':
    case 'docx':
      return Icons.description; // Word document icon
    default:
      return Icons.insert_drive_file; // Generic file icon
  }
}
