import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'sort_field_provider.g.dart'; // Required for code generation

@riverpod
class SortField extends _$SortField {
  @override
  String? build() => '';

  void updateSortField(String field) {
    print(field);
    state = field;
  }
}
