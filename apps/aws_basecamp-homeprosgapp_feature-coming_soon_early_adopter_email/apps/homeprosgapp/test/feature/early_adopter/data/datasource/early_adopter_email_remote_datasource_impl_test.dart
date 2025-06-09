import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:amplify_api/amplify_api.dart';
import 'package:homeprosgapp/core/core.dart';

// Mock classes using mocktail.
class MockAPICategory extends Mock implements APICategory {}

class MockModelMutations extends Mock implements ModelMutationsInterface {}

class MockModelQueries extends Mock implements ModelQueriesInterface {}

class MockAmplifyAPI extends Mock implements AmplifyAPI {}

class MockGraphQLOperation<T> extends Mock implements GraphQLOperation<T> {}

class MockGraphQLResponse<T> extends Mock implements GraphQLResponse<T> {}

void main() {
  late MockAPICategory mockApi;
  late MockModelMutations mockMutations;
  late MockModelQueries mockQueries;
  late EarlyAdopterEmailRemoteDatasourceImpl datasource;

  // Specific mocks for `createEarlyAdopterEmail`.
  late MockGraphQLOperation<EarlyAdopter> createMockOperation;
  late MockGraphQLResponse<EarlyAdopter> createMockResponse;

  // Specific mocks for `listEarlyAdopterEmails`.
  late MockGraphQLOperation<PaginatedResult<EarlyAdopter>> listMockOperation;
  late MockGraphQLResponse<PaginatedResult<EarlyAdopter>> listMockResponse;

  setUp(() {
    // Initialize mocks and the datasource.
    mockApi = MockAPICategory();
    mockMutations = MockModelMutations();
    mockQueries = MockModelQueries();

    datasource = EarlyAdopterEmailRemoteDatasourceImpl(
      api: mockApi,
      mutations: mockMutations,
      queries: mockQueries,
    );

// Register fallback value for EarlyAdopter.
    registerFallbackValue(EarlyAdopter(email: 'fallback@email.com'));
    // Register fallback values for mocktail.
    registerFallbackValue(
      GraphQLRequest<EarlyAdopter>(document: '', variables: {}),
    );
    registerFallbackValue(
      const GraphQLResponse<EarlyAdopter>(data: null, errors: []),
    );
    registerFallbackValue(
      GraphQLRequest<PaginatedResult<EarlyAdopter>>(document: '', variables: {}),
    );
  });

  group('createEmail', () {
    setUp(() {
      // Initialize mocks specific to createEmail tests.
      createMockOperation = MockGraphQLOperation<EarlyAdopter>();
      createMockResponse = MockGraphQLResponse<EarlyAdopter>();
    });

    test('should return Right with EarlyAdopter when email creation is successful', () async {
      // Arrange: Set up the mock return value.
      final earlyAdopter = EarlyAdopter(email: 'testemail@email.com');

      final mockRequest = GraphQLRequest<EarlyAdopter>(
        document: 'mutation { createEarlyAdopter }',
        variables: {'email': earlyAdopter.email},
      );

      final response = GraphQLResponse<EarlyAdopter>(data: earlyAdopter, errors: []);

      final cancelableOperation = CancelableOperation.fromFuture(
        Future.value(response),
      );

      final operation = GraphQLOperation<EarlyAdopter>(cancelableOperation);

      when(() => mockMutations.create<EarlyAdopter>(any())).thenReturn(mockRequest);
      when(() => mockApi.mutate<EarlyAdopter>(request: mockRequest)).thenReturn(operation);
      when(() => createMockOperation.response).thenAnswer((_) async => response);
      when(() => createMockResponse.data).thenReturn(earlyAdopter);
      when(() => createMockResponse.hasErrors).thenReturn(false);

      // Act: Call the createEmail method.
      final result = await datasource.createEarlyAdopterEmail(earlyAdopter);

      // Assert: Check the result is as expected.
      expect(result.isRight, true);
      expect(result.right.email, equals(earlyAdopter.email));
      expect(result.right, isA<EarlyAdopter>());
      verify(() => mockMutations.create<EarlyAdopter>(any())).called(1);
      verify(() => mockApi.mutate<EarlyAdopter>(request: mockRequest)).called(1);
    });

    test('should return Left with EarlyAdopterEmailCreateException when email is empty', () async {
      // Arrange: Define the input with an empty email.
      final earlyAdopter = EarlyAdopter(email: '');

      // Act: Call the createEmail method.
      final result = await datasource.createEarlyAdopterEmail(earlyAdopter);

      // Assert: Verify that a Left with an exception is returned.
      expect(result.isLeft, true);
      expect(result.left, isA<EarlyAdopterEmailCreateException>());
      expect(result.left.message, contains('Email cannot be empty'));
    });

    test('should return Left with EarlyAdopterEmailCreateException on unexpected exception', () async {
      // Arrange: Define the input with an empty email.
      final earlyAdopter = EarlyAdopter(email: 'testemail@email.com');

      final mockRequest = GraphQLRequest<EarlyAdopter>(
        document: 'mutation { createEarlyAdopter }',
        variables: {'email': earlyAdopter.email},
      );

      const response = GraphQLResponse<EarlyAdopter>(
        data: null,
        errors: [GraphQLResponseError(message: 'Error creating early adopter email')],
      );

      final cancelableOperation = CancelableOperation.fromFuture(
        Future.value(response),
      );

      final operation = GraphQLOperation<EarlyAdopter>(cancelableOperation);

      when(() => mockMutations.create<EarlyAdopter>(any())).thenReturn(mockRequest);
      when(() => mockApi.mutate<EarlyAdopter>(request: mockRequest)).thenReturn(operation);
      when(() => createMockOperation.response).thenAnswer((_) async => response);
      when(() => createMockResponse.data).thenReturn(null);
      when(() => createMockResponse.hasErrors).thenReturn(true);

      // Act: Call the createEmail method.
      final result = await datasource.createEarlyAdopterEmail(earlyAdopter);

      // Assert: Verify that a Left with an exception is returned.
      expect(result.isLeft, true);
      expect(result.left, isA<EarlyAdopterEmailCreateException>());
      expect(result.left.message, contains('Error creating early adopter email'));
    });
  });

  group('listEarlyAdopterEmails', () {
    setUp(() {
      // Initialize mocks specific to listEmails tests.
      listMockOperation = MockGraphQLOperation<PaginatedResult<EarlyAdopter>>();
      listMockResponse = MockGraphQLResponse<PaginatedResult<EarlyAdopter>>();
    });
    test('should return Right with list of EarlyAdopter on success', () async {
      // Arrange: Define a valid request and mock a successful query response.
      final earlyAdopter1 = EarlyAdopter(email: 'test1@email.com');
      final earlyAdopter2 = EarlyAdopter(email: 'test2@email.com');
      final request = GraphQLRequest<PaginatedResult<EarlyAdopter>>(
        document: 'query { listEarlyAdopters }',
      );

      final paginatedData = PaginatedResult<EarlyAdopter>(
        [earlyAdopter1, earlyAdopter2],
        20,
        null,
        null,
        EarlyAdopter.classType,
        null,
      );

      final response = GraphQLResponse<PaginatedResult<EarlyAdopter>>(data: paginatedData, errors: []);

      final cancelableOperation = CancelableOperation.fromFuture(
        Future.value(response),
      );

      final operation = GraphQLOperation<PaginatedResult<EarlyAdopter>>(cancelableOperation);

      when(() => mockQueries.list(EarlyAdopter.classType)).thenReturn(request);
      when(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).thenReturn(operation);
      when(() => listMockOperation.response).thenAnswer((_) async => response);
      when(() => listMockResponse.data).thenReturn(paginatedData);
      when(() => listMockResponse.hasErrors).thenReturn(false);

      // Act: Call the listEarlyAdopterEmails method.
      final result = await datasource.listEarlyAdopterEmails();

      // Assert: Verify the result and that all methods were called correctly.
      expect(result.isRight, true);
      expect(result.right, containsAll([earlyAdopter1, earlyAdopter2]));
      verify(() => mockQueries.list(EarlyAdopter.classType)).called(1);
      verify(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).called(1);
    });

    test('should return Right with empty list when no data is available', () async {
      // Arrange: Mock a response with no data.
      final request = GraphQLRequest<PaginatedResult<EarlyAdopter>>(
        document: 'query { listEarlyAdopters }',
      );

      when(() => mockQueries.list(EarlyAdopter.classType)).thenReturn(request);
      when(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).thenReturn(listMockOperation);
      when(() => listMockOperation.response).thenAnswer((_) async => listMockResponse);
      when(() => listMockResponse.data).thenReturn(null);
      when(() => listMockResponse.hasErrors).thenReturn(false);

      // Act: Call the listEarlyAdopterEmails method.
      final result = await datasource.listEarlyAdopterEmails();

      // Assert: Verify the result is a Right with an empty list.
      expect(result.isRight, true);
      expect(result.right, isEmpty);
      verify(() => mockQueries.list(EarlyAdopter.classType)).called(1);
      verify(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).called(1);
      verify(() => listMockOperation.response).called(1);
    });

    test('should return Left with EarlyAdopterEmailListException when response has errors', () async {
      // Arrange: Mock a response with errors.
      final request = GraphQLRequest<PaginatedResult<EarlyAdopter>>(
        document: 'query { listEarlyAdopters }',
      );

      when(() => mockQueries.list(EarlyAdopter.classType)).thenReturn(request);
      when(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).thenReturn(listMockOperation);
      when(() => listMockOperation.response).thenAnswer((_) async => listMockResponse);
      when(() => listMockResponse.data).thenReturn(null);
      when(() => listMockResponse.hasErrors).thenReturn(true);
      when(() => listMockResponse.errors).thenReturn([const GraphQLResponseError(message: 'Error occurred')]);

      // Act: Call the listEarlyAdopterEmails method.
      final result = await datasource.listEarlyAdopterEmails();

      // Assert: Verify the result is a Left with an appropriate exception.
      expect(result.isLeft, true);
      expect(result.left, isA<EarlyAdopterEmailListException>());
      expect(result.left.message, contains('Error occurred'));
      verify(() => mockQueries.list(EarlyAdopter.classType)).called(1);
      verify(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).called(1);
      verify(() => listMockOperation.response).called(1);
    });

    test('should return Left with EarlyAdopterEmailListException on unexpected exception', () async {
      // Arrange: Mock an unexpected exception during query execution.
      final request = GraphQLRequest<PaginatedResult<EarlyAdopter>>(
        document: 'query { listEarlyAdopters }',
      );

      when(() => mockQueries.list(EarlyAdopter.classType)).thenReturn(request);
      when(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).thenThrow(Exception('Unexpected error'));

      // Act: Call the listEarlyAdopterEmails method.
      final result = await datasource.listEarlyAdopterEmails();

      // Assert: Verify the result is a Left with the exception message.
      expect(result.isLeft, true);
      expect(result.left, isA<EarlyAdopterEmailListException>());
      expect(result.left.message, contains('Unexpected error'));
      verify(() => mockQueries.list(EarlyAdopter.classType)).called(1);
      verify(() => mockApi.query<PaginatedResult<EarlyAdopter>>(request: request)).called(1);
    });
  });
}
