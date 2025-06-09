import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:mocktail/mocktail.dart';

class MockModelMutationsImpl extends Mock implements ModelMutationsImpl {}

// Mock implementation of the Model class
class MockModel extends Mock implements Model {
  String getId() => 'test-id';

  @override
  ModelType<MockModel> getInstanceType() => MockModelType();
}

// Implementation of ModelType for MockModel
class MockModelType extends ModelType<MockModel> {
  @override
  MockModel fromJson(Map<String, dynamic> jsonData) {
    return MockModel();
  }
}

void main() {
  late MockModelMutationsImpl mockMutations;
  late MockModel mockModel;

  setUp(() {
    mockMutations = MockModelMutationsImpl();
    mockModel = MockModel();

    // Register fallback value for GraphQLRequest to avoid Mocktail errors.
    registerFallbackValue(GraphQLRequest<MockModel>(document: ''));
  });

  group('ModelMutationsImpl', () {
    test('should return correct GraphQLRequest for create', () {
      // Arrange: Mock the `create` method to return a GraphQLRequest
      final mockRequest = GraphQLRequest<MockModel>(
        document: 'mutation { createItem(input: { id: "test-id" }) }',
      );
      when(() => mockMutations.create(mockModel)).thenReturn(mockRequest);

      // Act
      final request = mockMutations.create<MockModel>(mockModel);

      // Assert
      expect(request, isA<GraphQLRequest<MockModel>>());
      expect(request.document, contains('createItem'));
      expect(request.document, contains('test-id'));
    });

    test('should return correct GraphQLRequest for update', () {
      // Arrange: Mock the `update` method to return a GraphQLRequest
      final mockRequest = GraphQLRequest<MockModel>(
        document: 'mutation { updateItem(input: { id: "test-id" }) }',
      );
      when(() => mockMutations.update(mockModel)).thenReturn(mockRequest);

      // Act
      final request = mockMutations.update<MockModel>(mockModel);

      // Assert
      expect(request, isA<GraphQLRequest<MockModel>>());
      expect(request.document, contains('updateItem'));
      expect(request.document, contains('test-id'));
    });

    test('should return correct GraphQLRequest for delete', () {
      // Arrange: Mock the `delete` method to return a GraphQLRequest
      final mockRequest = GraphQLRequest<MockModel>(
        document: 'mutation { deleteItem(input: { id: "test-id" }) }',
      );
      when(() => mockMutations.delete(mockModel)).thenReturn(mockRequest);

      // Act
      final request = mockMutations.delete(mockModel);

      // Assert
      expect(request, isA<GraphQLRequest<MockModel>>());
      expect(request.document, contains('deleteItem'));
      expect(request.document, contains('test-id'));
    });
  });
}
