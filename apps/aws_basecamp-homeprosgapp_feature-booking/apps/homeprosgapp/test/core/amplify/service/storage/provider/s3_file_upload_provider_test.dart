import 'dart:typed_data';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';

class MockStorageCategory extends Mock implements StorageCategory {}
class MockPlatformFile extends Mock implements PlatformFile {}
class MockStorageUploadFileOperation extends Mock implements StorageUploadFileOperation<StorageUploadFileRequest, StorageUploadFileResult<StorageItem>> {}
class MockStorageUploadFileResult extends Mock implements StorageUploadFileResult<StorageItem> {}

void main() {
  late ProviderContainer container;
  late MockStorageCategory mockS3Storage;
  late S3FileUploader s3FileUploader;

  setUpAll(() {
    // Register any necessary fallback values for Mocktail.
    registerFallbackValue(AWSFile.fromData([0, 1, 2]));
    registerFallbackValue(const StoragePath.fromString('dummy/path'));
  });

  setUp(() {
    // Mock the StorageCategory (Amplify.Storage equivalent) and inject it.
    mockS3Storage = MockStorageCategory();
    container = ProviderContainer(overrides: [
      s3StorageProvider.overrideWithValue(mockS3Storage), // Override with mock dependency.
    ]);

    s3FileUploader = container.read(s3FileUploaderProvider.notifier);
  });

  tearDown(() {
    container.dispose();
  });

  Future<void> simulateAndExpectException<T>(
    Exception exception,
    String expectedStateErrorMessage,
  ) async {
    final mockFile = MockPlatformFile();
    when(() => mockFile.path).thenReturn(null);
    when(() => mockFile.bytes).thenReturn(Uint8List.fromList([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0x60, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x01, 0xE2, 0x26, 0x05, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]));
    when(() => mockFile.name).thenReturn('test.jpg');

    final mockOperation = MockStorageUploadFileOperation();
    when(() => mockOperation.result).thenThrow(exception);

    when(() => mockS3Storage.uploadFile(
      localFile: any(named: 'localFile'),
      path: any(named: 'path'),
    )).thenReturn(mockOperation);

    // Track state changes
    final states = <String>[];
    container.listen<String>(
      s3FileUploaderProvider,
      (previous, next) {
        states.add(next);
      },
      fireImmediately: true,
    );

    // Act and assert for exception rethrowing
    expect(
      () async => await s3FileUploader.uploadFile(file: mockFile, uploadPath: 'uploads/test.jpg'),
      throwsA(isA<T>()),
    );

    // Assert the expected states
    expect(states, [
      'Idle',                        // Initial state
      'Uploading',                   // State during upload
      expectedStateErrorMessage,     // Expected error message in state
      'Idle',                        // Reset to Idle after failure
    ]);
  }

  test('Provider initializes with "Idle" state', () {
    // Assert that the initial state is "Idle"
    expect(container.read(s3FileUploaderProvider), 'Idle');
  });

  test('uploadFile sets state to "Uploading" and then "Idle" on success', () async {
    // Arrange
    final mockFile = MockPlatformFile();
    when(() => mockFile.path).thenReturn(null);
    when(() => mockFile.bytes).thenReturn(Uint8List.fromList([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
        0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
        0x0A, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0x60, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x01, 0xE2, 0x26, 0x05, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x49,
        0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
      ]));
    when(() => mockFile.name).thenReturn('test.jpg');

    final mockOperation = MockStorageUploadFileOperation();
    final mockResult = MockStorageUploadFileResult();
    when(() => mockResult.uploadedItem).thenReturn(const StorageItem(path: 'uploads/test.jpg'));
    when(() => mockOperation.result).thenAnswer((_) async => mockResult);

    when(() => mockS3Storage.uploadFile(
      localFile: any(named: 'localFile'),
      path: any(named: 'path'),
    )).thenReturn(mockOperation);

    // Track state changes
    final states = <String>[];

    container.listen<String>(
      s3FileUploaderProvider,
      (previous, next) {
        states.add(next); // Collect each state change
      },
      fireImmediately: true,
    );

    // Act
    await s3FileUploader.uploadFile(file: mockFile, uploadPath: 'uploads/test.jpg');

    expect(states, [
      'Idle',       // Initial state
      'Uploading',  // State during upload
      'Uploaded file: uploads/test.jpg',
      'Idle',       // Final state after successful upload
    ]);

    // Assert
    expect(container.read(s3FileUploaderProvider), 'Idle');
  });

  test('Handles file not found error and rethrows S3FileNotFoundException', () async {
    await simulateAndExpectException<S3FileNotFoundException>(
      const StorageNotFoundException(
        'The specified file does not exist',
        recoverySuggestion: 'Ensure the file path is correct',
      ),
      'Error: The specified file does not exist',
    );
  });

  test('Handles permission denied error and rethrows S3PermissionDeniedException', () async {
    await simulateAndExpectException<S3PermissionDeniedException>(
      const StorageAccessDeniedException(
        'Permission denied',
        recoverySuggestion: 'Check your permissions',
      ),
      'Error: Permission denied',
    );
  });

  test('Handles unknown error and rethrows as generic Exception', () async {
    await simulateAndExpectException<Exception>(
      Exception('Unknown error'),
      'Error: An unknown error occurred',
    );
  });
  
}
