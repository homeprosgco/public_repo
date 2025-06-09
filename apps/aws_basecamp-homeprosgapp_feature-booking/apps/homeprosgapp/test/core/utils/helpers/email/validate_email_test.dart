import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';

void main() {
  group('validateEmail', () {
    test('should return null for a valid email', () {
      // Arrange
      const validEmail = 'test@example.com';

      // Act
      final result = validateEmail(validEmail);

      // Assert
      expect(result, isNull);
    });

    test('should return "Email cannot be empty" for an empty email', () {
      // Arrange
      const emptyEmail = '';

      // Act
      final result = validateEmail(emptyEmail);

      // Assert
      expect(result, 'Email cannot be empty');
    });

    test('should return "Enter a valid email address" for an invalid email', () {
      // Arrange
      const invalidEmail = 'invalid-email';

      // Act
      final result = validateEmail(invalidEmail);

      // Assert
      expect(result, 'Enter a valid email address');
    });

    test('should return "Enter a valid email address" for missing domain', () {
      // Arrange
      const missingDomainEmail = 'test@';

      // Act
      final result = validateEmail(missingDomainEmail);

      // Assert
      expect(result, 'Enter a valid email address');
    });

    test('should return "Enter a valid email address" for missing top-level domain', () {
      // Arrange
      const missingTLD = 'test@example';

      // Act
      final result = validateEmail(missingTLD);

      // Assert
      expect(result, 'Enter a valid email address');
    });
  });
}
