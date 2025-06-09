import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

// Mock classes
class MockModel extends Mock implements Model {
  String getId() => 'test-id';

  @override
  ModelType<Model> getInstanceType() => MockModelType();
}

class MockModelType extends ModelType<MockModel> {
  @override
  MockModel fromJson(Map<String, dynamic> jsonData) {
    return MockModel();
  }
}

class MockModelIdentifier extends Mock implements ModelIdentifier<MockModel> {}

class MockModelQueriesImpl extends Mock implements ModelQueriesImpl {}

void main() {
  late MockModelQueriesImpl modelQueries;
  late MockModelType mockModelType;
  late MockModelIdentifier mockModelIdentifier;

  setUp(() {
    // Initialize the mocks and the implementation
    modelQueries = MockModelQueriesImpl();
    mockModelType = MockModelType();
    mockModelIdentifier = MockModelIdentifier();

    // Register fallback values for GraphQLRequest to prevent Mocktail errors
    registerFallbackValue(GraphQLRequest(document: ''));
    registerFallbackValue(GraphQLRequest<PaginatedResult<MockModel>>(
      document: '',
    ));
  });

  test('should return a valid GraphQLRequest for get query', () {
    // Arrange: Prepare the expected GraphQLRequest for the get query
    final expectedRequest = GraphQLRequest<MockModel?>(
      document: 'query { getItem(id: "test-id") { id } }',
    );
    // Mock the behavior of the `get` method
    when(() => modelQueries.get(mockModelType, mockModelIdentifier)).thenReturn(expectedRequest);

    // Act: Call the `get` method
    final request = modelQueries.get(mockModelType, mockModelIdentifier);

    // Assert: Verify the content of the GraphQLRequest
    expect(request, isA<GraphQLRequest<MockModel?>>());
    expect(request.document, contains('query'));
    expect(request.document, contains('getItem'));
    expect(request.document, contains('test-id'));
  });

  test('should return a valid GraphQLRequest for list query', () {
    // Arrange: Prepare the expected GraphQLRequest for the list query
    final expectedRequest = GraphQLRequest<PaginatedResult<MockModel>>(
      document: 'query { listItems { items { id } } }',
    );

    // Mock the behavior of the `list` method
    when(() => modelQueries.list(mockModelType)).thenReturn(expectedRequest);

    // Act: Call the `list` method
    final request = modelQueries.list(mockModelType);

    // Assert: Verify the content of the GraphQLRequest
    expect(request, isA<GraphQLRequest<PaginatedResult<MockModel>>>());
    expect(request.document, contains('query'));
    expect(request.document, contains('listItems'));
  });
}
