import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'amplify_s3_storage_provider.g.dart';

/// A Riverpod provider to expose the Amplify API instance.
@riverpod
StorageCategory s3Storage(Ref ref) {
  return Amplify.Storage; // Return the Amplify API instance
}
