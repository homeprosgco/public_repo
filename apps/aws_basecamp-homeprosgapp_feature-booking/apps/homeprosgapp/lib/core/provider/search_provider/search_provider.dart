import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'search_provider.g.dart'; // Required for code generation

@riverpod
class SearchQuery extends _$SearchQuery {
  @override
  String build() => '';

  void searchQuery(String query) {
    state = query;
  }
}
