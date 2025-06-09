import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

// Mock repository class
class MockEarlyAdopterEmailRepository extends Mock
    implements EarlyAdopterEmailRepository {}

// Fake NoParams to register with mocktail
class FakeNoParams extends Fake implements NoParams {}

void main() {
  late ListEarlyAdopterEmailsUseCase useCase;
  late MockEarlyAdopterEmailRepository mockRepository;

  // Register the fake for mocktail
  setUpAll(() {
    registerFallbackValue(FakeNoParams());
  });

  setUp(() {
    mockRepository = MockEarlyAdopterEmailRepository();
    useCase = ListEarlyAdopterEmailsUseCase(mockRepository);
  });

  final emailEntity1 = EarlyAdopterEmailEntity(email: 'test1@example.com', id: '1');
  final emailEntity2 = EarlyAdopterEmailEntity(email: 'test2@example.com', id: '2');
  final emailList = [emailEntity1, emailEntity2];

  group('ListEarlyAdopterEmailsUseCase', () {
    test('should return a list of EarlyAdopterEmailEntity on success', () async {
      // Arrange: Mock the repository's response with a successful result
      when(() => mockRepository.listEarlyAdopterEmails())
          .thenAnswer((_) async => Right(emailList));

      // Act: Execute the use case
      final result = await useCase.call(NoParams());

      // Assert: Verify the result
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got an error'),
        (emails) => expect(emails, emailList),
      );

      // Verify the repository was called once
      verify(() => mockRepository.listEarlyAdopterEmails()).called(1);
    });

    test('should return EarlyAdopterEmailListException on failure', () async {
      // Arrange: Mock the repository to return a failure
      final exception = EarlyAdopterEmailListException('Failed to fetch emails');
      when(() => mockRepository.listEarlyAdopterEmails())
          .thenAnswer((_) async => Left(exception));

      // Act: Execute the use case
      final result = await useCase.call(NoParams());

      // Assert: Verify the result
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<EarlyAdopterEmailListException>()),
        (_) => fail('Expected error but got success'),
      );

      // Verify the repository was called once
      verify(() => mockRepository.listEarlyAdopterEmails()).called(1);
    });
  });
}
