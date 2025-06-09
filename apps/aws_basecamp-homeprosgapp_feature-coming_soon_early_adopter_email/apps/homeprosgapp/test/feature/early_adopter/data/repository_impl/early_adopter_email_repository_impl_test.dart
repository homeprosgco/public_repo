import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

// Mock the data source
class MockEarlyAdopterEmailRemoteDatasource extends Mock implements EarlyAdopterEmailRemoteDatasource {}

// Register a fake for EarlyAdopterEmailModel if required by your tests
class FakeEarlyAdopterEmailModel extends Fake implements EarlyAdopter {}

void main() {
  late EarlyAdopterEmailRepositoryImpl repository;
  late MockEarlyAdopterEmailRemoteDatasource mockRemoteDatasource;

  setUpAll(() {
    registerFallbackValue(FakeEarlyAdopterEmailModel());
  });

  setUp(() {
    mockRemoteDatasource = MockEarlyAdopterEmailRemoteDatasource();
    repository = EarlyAdopterEmailRepositoryImpl(mockRemoteDatasource);
  });

  const email = 'test@example.com';
  final earlyAdopterEmailEntity = EarlyAdopterEmailEntity(email: email, id: '123');
  final earlyAdopterEmailModel = earlyAdopterEmailEntity.toModel();

  group('createEarlyAdopterEmail', () {
    test('should return EarlyAdopterEmailEntity on success', () async {
      // Arrange
      when(() => mockRemoteDatasource.createEarlyAdopterEmail(any())).thenAnswer((_) async => Right(earlyAdopterEmailModel));

      // Act
      final result = await repository.createEarlyAdopterEmail(earlyAdopterEmailEntity);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got an error'),
        (entity) => expect(entity, earlyAdopterEmailEntity),
      );
      verify(() => mockRemoteDatasource.createEarlyAdopterEmail(any())).called(1);
    });

    test('should return EarlyAdopterEmailCreateException on failure', () async {
      // Arrange
      when(() => mockRemoteDatasource.createEarlyAdopterEmail(any())).thenAnswer((_) async => Left(EarlyAdopterEmailCreateException('Failed')));

      // Act
      final result = await repository.createEarlyAdopterEmail(earlyAdopterEmailEntity);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<EarlyAdopterEmailCreateException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDatasource.createEarlyAdopterEmail(any())).called(1);
    });
  });

  group('listEarlyAdopterEmails', () {
    final emailList = [earlyAdopterEmailModel];

    test('should return a list of EarlyAdopterEmailEntity on success', () async {
      // Arrange
      when(() => mockRemoteDatasource.listEarlyAdopterEmails()).thenAnswer((_) async => Right(emailList));

      // Act
      final result = await repository.listEarlyAdopterEmails();

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got an error'),
        (entities) {
          expect(entities.length, 1);
          expect(entities.first, earlyAdopterEmailEntity);
        },
      );
      verify(() => mockRemoteDatasource.listEarlyAdopterEmails()).called(1);
    });

    test('should return EarlyAdopterEmailListException on failure', () async {
      // Arrange
      when(() => mockRemoteDatasource.listEarlyAdopterEmails()).thenAnswer((_) async => Left(EarlyAdopterEmailListException('Failed')));

      // Act
      final result = await repository.listEarlyAdopterEmails();

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<EarlyAdopterEmailListException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockRemoteDatasource.listEarlyAdopterEmails()).called(1);
    });
  });
}
