import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:either_dart/either.dart';

// Mock use cases
class MockCreateEarlyAdopterEmailUseCase extends Mock implements CreateEarlyAdopterEmailUseCase {}
class MockListEarlyAdopterEmailsUseCase extends Mock implements ListEarlyAdopterEmailsUseCase {}

// Fake EarlyAdopterEmailEntity
class FakeEarlyAdopterEmailEntity extends Fake implements EarlyAdopterEmailEntity {}

// Fake NoParams
class FakeNoParams extends Fake implements NoParams {}

void main() {
  late ProviderContainer container;
  late MockCreateEarlyAdopterEmailUseCase mockCreateUseCase;
  late MockListEarlyAdopterEmailsUseCase mockListUseCase;

  setUpAll(() {
    // Register fallback value
    registerFallbackValue(FakeEarlyAdopterEmailEntity());
    registerFallbackValue(FakeNoParams()); // Register NoParams fallback
  });

  setUp(() {
    // Initialize mocks
    mockCreateUseCase = MockCreateEarlyAdopterEmailUseCase();
    mockListUseCase = MockListEarlyAdopterEmailsUseCase();
    
    // Create the container with the overridden providers
    container = ProviderContainer(
      overrides: [
        createEarlyAdopterEmailUseCaseProvider.overrideWithValue(mockCreateUseCase),
        listEarlyAdopterEmailsUseCaseProvider.overrideWithValue(mockListUseCase),
      ],
    );
  });

  tearDown(() {
    container.dispose(); // Dispose the container after each test
  });

  group('AsyncEarlyAdopterEmail Provider', () {
    const email = 'test@example.com';
    final emailEntity = EarlyAdopterEmailEntity(email: email, id: '1');

    test('should set loading and success state on createEarlyAdopterEmail call', () async {
      // Arrange: Mock a successful creation response.
      when(() => mockCreateUseCase(any()))
          .thenAnswer((_) async => Right(emailEntity));

      // Act
      final notifier = container.read(asyncEarlyAdopterEmailProvider.notifier);

      // Track state changes
      final states = <AsyncValue<void>>[];
      container.listen<AsyncValue<void>>(
        asyncEarlyAdopterEmailProvider,
        (previous, next) => states.add(next),
        fireImmediately: true,
      );

      final result = await notifier.createEarlyAdopterEmail(email);

      // Assert: Verify state changes and success result
      expect(states, [
        isA<AsyncData<void>>(), // Initial state
        isA<AsyncLoading<void>>(), // Loading state
        isA<AsyncData<void>>(), // Success state
      ]);

      expect(result.isRight, true);
      verify(() => mockCreateUseCase(any())).called(1);
    });

    test('should set error state on failed createEarlyAdopterEmail call', () async {
      // Arrange: Mock a failure response.
      final exception = EarlyAdopterEmailCreateException('Creation failed');
      when(() => mockCreateUseCase(any()))
          .thenAnswer((_) async => Left(exception));

      // Act
      final notifier = container.read(asyncEarlyAdopterEmailProvider.notifier);

      // Track state changes
      final states = <AsyncValue<void>>[];
      container.listen<AsyncValue<void>>(
        asyncEarlyAdopterEmailProvider,
        (previous, next) => states.add(next),
        fireImmediately: true,
      );

      final result = await notifier.createEarlyAdopterEmail(email);

      // Assert: Verify state changes and error result
      expect(states, [
        isA<AsyncData<void>>(), // Initial state
        isA<AsyncLoading<void>>(), // Loading state
        isA<AsyncError<void>>(), // Error state
      ]);

      expect(result.isLeft, true);
      expect(result.fold((l) => l.message, (_) => ''), 'Creation failed');
      verify(() => mockCreateUseCase(any())).called(1);
    });

    test('should return list of emails on listEarlyAdopterEmails call', () async {
      // Arrange: Mock a successful response with a list of emails.
      final emailList = [
        EarlyAdopterEmailEntity(email: 'test1@example.com', id: '1'),
        EarlyAdopterEmailEntity(email: 'test2@example.com', id: '2'),
      ];
      when(() => mockListUseCase(any())).thenAnswer((_) async => Right(emailList));

      // Act
      final notifier = container.read(asyncEarlyAdopterEmailProvider.notifier);
      final result = await notifier.listEarlyAdopterEmails();

      // Assert: Verify the result and use case call.
      expect(result.isRight, true);
      expect(result.fold((_) => [], (emails) => emails), emailList);
      verify(() => mockListUseCase(any())).called(1);
    });

    test('should set error state on failed listEarlyAdopterEmails call', () async {
      // Arrange: Mock a failure response.
      final exception = EarlyAdopterEmailListException('Failed to fetch emails');
      when(() => mockListUseCase(any())).thenAnswer((_) async => Left(exception));

      // Act
      final notifier = container.read(asyncEarlyAdopterEmailProvider.notifier);
      final result = await notifier.listEarlyAdopterEmails();

      // Assert: Verify the error result and use case call.
      expect(result.isLeft, true);
      expect(result.fold((l) => l.message, (_) => ''), 'Failed to fetch emails');
      verify(() => mockListUseCase(any())).called(1);
    });
  });
}
