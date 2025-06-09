import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';

part 's3_file_upload_provider.g.dart';

/// Provider for managing file uploads to AWS Amplify Storage using PlatformFile.
@riverpod
class S3FileUploader extends _$S3FileUploader {
  late final StorageCategory _s3Storage;

  /// Initial state to track the status of file uploads.
  @override
  String build() {
    _s3Storage = ref.read(s3StorageProvider);

    return 'Idle';
  } // Initial state, can also use enums if preferred

  /// Uploads the provided file to Amplify Storage.
  Future<String> uploadFile({required PlatformFile file, required String uploadPath}) async {
    // Create an AWSFile from PlatformFile, using either path or bytes if available
    final awsFile = file.path != null
        ? AWSFile.fromPath(file.path!) // Use the file path
        : AWSFile.fromData(file.bytes!, name: file.name); // Use in-memory data

    // Set the state to indicate an upload is in progress
    state = 'Uploading';

    try {
      // Perform the file upload
      final operation = _s3Storage.uploadFile(
        localFile: awsFile,
        path: StoragePath.fromString(uploadPath),
      );

      final result = await operation.result;

      // Update the state with success message
      state = 'Uploaded file: ${result.uploadedItem.path}';
      state = 'Idle';

      return result.uploadedItem.path;
    } catch (e) {
      if (e is StorageHttpStatusException) {
        safePrint('Network error: ${e.recoverySuggestion}');
        state = 'Error: ${e.message}';
        throw S3NetworkException(e.message, e);
      } else if (e is StorageNotFoundException) {
        safePrint('File not found: ${e.recoverySuggestion}');
        state = 'Error: ${e.message}';
        throw S3FileNotFoundException(e.message, e);
      } else if (e is StorageAccessDeniedException) {
        safePrint('Access denied: ${e.recoverySuggestion}');
        state = 'Error: ${e.message}';
        throw S3PermissionDeniedException(e.message, e);
      } else if (e is StorageException) {
        // Handle other types of StorageException
        safePrint('Unhandled storage error: ${e.message}');
        state = 'Error: ${e.message}';
        throw S3StorageException('Unhandled storage error', e);
      } else {
        // Handle any other exceptions
        state = 'Error: An unknown error occurred';
        throw Exception('An unknown error occurred: $e');
      }
    } finally {
      state = 'Idle';
    }
  }
}

class MockS3FileUploader extends _$S3FileUploader with Mock implements S3FileUploader {}
