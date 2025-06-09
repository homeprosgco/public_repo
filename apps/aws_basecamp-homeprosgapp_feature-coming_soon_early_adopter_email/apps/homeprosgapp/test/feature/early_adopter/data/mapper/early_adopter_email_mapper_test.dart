import 'package:flutter_test/flutter_test.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart'; // Replace with your actual import paths

void main() {
  group('EarlyAdopterModelMapper', () {
    const testId = '123';
    const testEmail = 'test@example.com';
    final testCreatedAt = TemporalDateTime(DateTime(2024, 10, 26, 10, 30));
    final testUpdatedAt = TemporalDateTime(DateTime(2024, 10, 27, 12, 00));

    test('should map EarlyAdopter to EarlyAdopterEmailEntity', () {
      final model = EarlyAdopter(
        id: testId,
        email: testEmail,
      );

      final entity = model.toEntity();

      expect(entity.id, testId);
      expect(entity.email, testEmail);
    });

    test('should map EarlyAdopterEmailEntity to EarlyAdopter', () {
      final entity = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt.getDateTimeInUtc(),
        updatedAt: testUpdatedAt.getDateTimeInUtc(),
      );

      final model = entity.toModel();

      expect(model.id, testId);
      expect(model.email, testEmail);
      expect(model.createdAt, isNull); // Managed by Amplify
      expect(model.updatedAt, isNull); // Managed by Amplify
    });
  });
}
