import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'filter_column_provider.g.dart'; // Required for code generation

@riverpod
class FilterColumn<T> extends _$FilterColumn {
  @override
  String build() => '';

  void filterOnColumn(String columnName) {
    print(columnName);
    state = columnName;
  }
}
