import 'package:either_dart/either.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';

import '../../../booking_test_utils/booking_email_confirmation_test_utils.dart';

class MockBookingRepository extends Mock implements BookingRepository {}

class FakeBookingEmailConfirmationEntity extends Fake implements BookingEmailConfirmationEntity {}

void main() {
  late MockBookingRepository mockRepository;
  late SendBookingEmailConfirmationUseCase useCase;

  setUpAll(() {
    registerFallbackValue(FakeBookingEmailConfirmationEntity());
  });

  setUp(() {
    mockRepository = MockBookingRepository();
    useCase = SendBookingEmailConfirmationUseCase(mockRepository);
  });

  group('SendBookingEmailConfirmationUseCase', () {
    final bookingEntity = mockBookingEmailConfirmationEntity;

    final emailResponse = EmailResponseEntity(
      statusCode: 200,
      message: 'Email sent successfully',
    );

    test('should return EmailResponseEntity on successful email confirmation', () async {
      // Arrange
      when(() => mockRepository.sendBookingEmailConfirmation(any())).thenAnswer((_) async => Right(emailResponse));

      // Act
      final result = await useCase(bookingEntity);

      // Assert
      expect(result.isRight, true);
      expect(result.right, emailResponse);
      verify(() => mockRepository.sendBookingEmailConfirmation(bookingEntity)).called(1);
    });

    test('should return BookingSendEmailConfirmationException on failure', () async {
      // Arrange
      final exception = BookingSendEmailConfirmationException('Failed to send email');
      when(() => mockRepository.sendBookingEmailConfirmation(any())).thenAnswer((_) async => Left(exception));

      // Act
      final result = await useCase.call(bookingEntity);

      // Assert
      expect(result.isLeft, true);
      expect(result.left, exception);
      verify(() => mockRepository.sendBookingEmailConfirmation(bookingEntity)).called(1);
    });
  });
}
