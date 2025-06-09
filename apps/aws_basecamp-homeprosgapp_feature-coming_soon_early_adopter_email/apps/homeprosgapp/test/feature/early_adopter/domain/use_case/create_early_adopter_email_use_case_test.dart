import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

// Mock repository class
class MockEarlyAdopterEmailRepository extends Mock implements EarlyAdopterEmailRepository {}

// Fake EarlyAdopterEmailEntity for use in tests
class FakeEarlyAdopterEmailEntity extends Fake implements EarlyAdopterEmailEntity {}

void main() {
  late CreateEarlyAdopterEmailUseCase useCase;
  late MockEarlyAdopterEmailRepository mockRepository;

  // Register the Fake for mocktail
  setUpAll(() {
    registerFallbackValue(FakeEarlyAdopterEmailEntity());
  });

  setUp(() {
    mockRepository = MockEarlyAdopterEmailRepository();
    useCase = CreateEarlyAdopterEmailUseCase(mockRepository);
  });

  const email = 'test@example.com';
  final emailEntity = EarlyAdopterEmailEntity(email: email, id: '1');

  group('CreateEarlyAdopterEmailUseCase', () {
    test('should return EarlyAdopterEmailEntity on success', () async {
      // Arrange: Mock the repository's response
      when(() => mockRepository.createEarlyAdopterEmail(any())).thenAnswer((_) async => Right(emailEntity));

      // Act: Execute the use case
      final result = await useCase(emailEntity);

      // Assert: Check the result
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got an error'),
        (createdEmail) => expect(createdEmail.email, email),
      );

      // Verify the repository was called once with the correct parameters
      verify(() => mockRepository.createEarlyAdopterEmail(emailEntity)).called(1);
    });

    test('should return EarlyAdopterEmailCreateException on failure', () async {
      // Arrange: Mock the repository to return a failure
      final exception = EarlyAdopterEmailCreateException('Failed to create email');
      when(() => mockRepository.createEarlyAdopterEmail(any())).thenAnswer((_) async => Left(exception));

      // Act: Execute the use case
      final result = await useCase(emailEntity);

      // Assert: Check the result
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<EarlyAdopterEmailCreateException>()),
        (_) => fail('Expected error but got success'),
      );

      // Verify the repository was called once with the correct parameters
      verify(() => mockRepository.createEarlyAdopterEmail(emailEntity)).called(1);
    });
  });
}
