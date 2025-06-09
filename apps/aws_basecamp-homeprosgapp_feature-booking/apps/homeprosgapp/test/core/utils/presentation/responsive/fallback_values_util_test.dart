import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('fallbackValues Function Tests', () {
    test('Replaces nulls with previous non-null value', () {
      final result = fallbackValues<int>(
        defaultValue: 1,
        values: [null, 2, null, 4, null, null],
      );
      expect(result, [1, 2, 2, 4, 4, 4]);
    });

    test('Uses defaultValue if the first element is null', () {
      final result = fallbackValues<String>(
        defaultValue: 'default',
        values: [null, 'A', null, 'B', null],
      );
      expect(result, ['default', 'A', 'A', 'B', 'B']);
    });

    test('Handles list with no nulls correctly', () {
      final result = fallbackValues<int>(
        defaultValue: 0,
        values: [1, 2, 3],
      );
      expect(result, [1, 2, 3]);
    });

    test('Returns a list of default values if all elements are null', () {
      final result = fallbackValues<double>(
        defaultValue: 3.14,
        values: [null, null, null],
      );
      expect(result, [3.14, 3.14, 3.14]);
    });

    test('Handles an empty list', () {
      final result = fallbackValues<int>(
        defaultValue: 5,
        values: [],
      );
      expect(result, []);
    });
  });
}
