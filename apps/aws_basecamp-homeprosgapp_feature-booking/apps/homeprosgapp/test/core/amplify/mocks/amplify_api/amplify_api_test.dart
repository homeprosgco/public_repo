import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'amplify_mocks.mocks.dart'; // Import the generated mocks

void main() {
  late MockAmplifyAPI mockAmplifyAPI; // Use the generated mock class

  setUp(() {
    mockAmplifyAPI = MockAmplifyAPI(); // Initialize the mock API
  });

  test('should return a successful mutation response', () async {
    // Arrange: Set up a sample response
    const mockResponse = GraphQLResponse<String>(
      data: 'success',
      errors: [],
    );
    final cancelableOperation = CancelableOperation.fromFuture(
      Future.value(mockResponse),
    );

    final mockOperation = GraphQLOperation<String>(cancelableOperation);

    // Mock the `mutate` method to return a successful response
    when(mockAmplifyAPI.mutate<String>(request: anyNamed('request'))).thenReturn(mockOperation);

    // Act: Call the mocked `mutate` method
    final operation = mockAmplifyAPI.mutate<String>(
      request: GraphQLRequest(document: 'mutation'),
    );

    expect(operation, isA<GraphQLOperation<String>>());

    // Act: Retrieve the response from the operation
    final response = await operation.response;

    // Assert: Validate the response content
    expect(response.data, equals('success'));
    expect(response.errors, isEmpty);
  });

  test('should return an error response', () async {
    // Arrange: Set up a response with an error
    const mockResponse = GraphQLResponse<String>(
      data: null,
      errors: [GraphQLResponseError(message: 'Mutation failed')],
    );

    final cancelableOperation = CancelableOperation.fromFuture(
      Future.value(mockResponse),
    );

    final mockOperation = GraphQLOperation<String>(cancelableOperation);

    // Mock the `mutate` method to return a successful response
    when(mockAmplifyAPI.mutate<String>(request: anyNamed('request'))).thenReturn(mockOperation);

    // Act: Call the mocked `mutate` method
    final operation = mockAmplifyAPI.mutate<String>(
      request: GraphQLRequest(document: 'mutation'),
    );

    expect(operation, isA<GraphQLOperation<String>>());

    // Act: Retrieve the response from the operation
    final response = await operation.response;

    // Assert: Validate the error response
    expect(response.data, isNull);
    expect(response.errors.first.message, 'Mutation failed');
  });
}
