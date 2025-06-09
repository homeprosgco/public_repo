import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'amplify_api_provider.g.dart';

/// A Riverpod provider to expose the Amplify API instance.
@riverpod
AmplifyAPI amplifyAPI(Ref ref) {
  return Amplify.API as AmplifyAPI; // Return the Amplify API instance
}
