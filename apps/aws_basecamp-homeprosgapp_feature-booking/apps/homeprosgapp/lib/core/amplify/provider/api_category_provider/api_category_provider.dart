import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'api_category_provider.g.dart';

/// A Riverpod provider to expose the Amplify API instance.
@riverpod
APICategory apiCategory(Ref ref) {
  return Amplify.API; // Return the Amplify API instance
}
