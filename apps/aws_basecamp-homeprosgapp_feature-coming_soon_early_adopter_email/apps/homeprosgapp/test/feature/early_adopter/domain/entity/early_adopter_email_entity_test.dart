import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';

void main() {
  group('EarlyAdopterEmailEntity', () {
    // Test data
    const testId = '123';
    const testEmail = 'test@example.com';
    final testCreatedAt = DateTime(2024, 10, 26, 10, 30); // Arbitrary date
    final testUpdatedAt = DateTime(2024, 10, 27, 12, 00); // Arbitrary date

    test('should create an instance with given properties', () {
      final entity = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      expect(entity.id, testId);
      expect(entity.email, testEmail);
      expect(entity.createdAt, testCreatedAt);
      expect(entity.updatedAt, testUpdatedAt);
    });

    test('copyWith should create a new instance with updated properties', () {
      final entity = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      final updatedEntity = entity.copyWith(email: 'updated@example.com');

      expect(updatedEntity.id, testId);
      expect(updatedEntity.email, 'updated@example.com');
      expect(updatedEntity.createdAt, testCreatedAt);
      expect(updatedEntity.updatedAt, testUpdatedAt);
    });

    test('should correctly compare two identical entities', () {
      final entity1 = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      final entity2 = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      expect(entity1, entity2);
    });

    test('should correctly compare two different entities', () {
      final entity1 = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      final entity2 = EarlyAdopterEmailEntity(
        id: '456', // Different id
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      expect(entity1 == entity2, isFalse);
    });

    test('hashCode should be equal for identical entities', () {
      final entity1 = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      final entity2 = EarlyAdopterEmailEntity(
        id: testId,
        email: testEmail,
        createdAt: testCreatedAt,
        updatedAt: testUpdatedAt,
      );

      expect(entity1.hashCode, entity2.hashCode);
    });
  });
}
