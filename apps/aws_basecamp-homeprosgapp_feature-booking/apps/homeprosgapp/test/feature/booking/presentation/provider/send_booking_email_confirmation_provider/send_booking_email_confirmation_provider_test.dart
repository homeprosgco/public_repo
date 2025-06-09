import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:either_dart/either.dart';

class MockSendBookingEmailConfirmationUseCase extends Mock implements SendBookingEmailConfirmationUseCase {}
class FakeBookingEmailConfirmationEntity extends Fake implements BookingEmailConfirmationEntity {}

void main() {
  late ProviderContainer container;
  late MockSendBookingEmailConfirmationUseCase mockUseCase;

  final bookingEntity = FakeBookingEmailConfirmationEntity();
  final emailResponse = EmailResponseEntity(
    statusCode: 200,
    message: 'Email sent successfully',
  );

  setUpAll(() {
    registerFallbackValue(FakeBookingEmailConfirmationEntity());
  });

  setUp(() {
    mockUseCase = MockSendBookingEmailConfirmationUseCase();

    // Override the use case provider to use the mock
    container = ProviderContainer(overrides: [
      sendBookingEmailConfirmationUseCaseProvider.overrideWith((ref) => mockUseCase),
    ]);

    // Set up the mock use case to return the expected result
    when(() => mockUseCase(any())).thenAnswer((_) async => Right(emailResponse));
  });

  tearDown(() {
    container.dispose();
  });

  test('should send booking email confirmation successfully', () async {
    final provider = container.read(sendBookingEmailConfirmationProvider.notifier);
    final result = await provider.sendBookingEmailConfirmation(bookingEntity);

    expect(result, equals(emailResponse));
    verify(() => mockUseCase(bookingEntity)).called(1);
  });

  test('should throw exception when sending booking email fails', () async {
    // Set up the mock use case to return a failure
    final failure = BookingSendEmailConfirmationException('Failed to send email');
    when(() => mockUseCase(any())).thenAnswer((_) async => Left(failure));

    final provider = container.read(sendBookingEmailConfirmationProvider.notifier);

    expect(
      () async => await provider.sendBookingEmailConfirmation(bookingEntity),
      throwsA(isA<BookingSendEmailConfirmationException>()),
    );
    verify(() => mockUseCase(bookingEntity)).called(1);
  });
}
