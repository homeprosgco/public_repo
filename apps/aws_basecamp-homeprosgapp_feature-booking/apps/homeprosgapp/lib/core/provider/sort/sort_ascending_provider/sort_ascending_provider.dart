import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'sort_ascending_provider.g.dart'; // Required for code generation

@riverpod
class SortAscending extends _$SortAscending {
  @override
  bool build() => true;

  void updateSortOrder(bool isSortAscending) {
    state = isSortAscending;
  }
}
