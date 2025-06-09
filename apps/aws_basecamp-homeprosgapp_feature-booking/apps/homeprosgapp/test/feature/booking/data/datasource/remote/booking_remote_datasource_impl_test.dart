import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../../booking_test_utils.dart';

// Mock Classes
class MockAPICategory extends Mock implements APICategory {}

class MockModelMutationsInterface extends Mock implements ModelMutationsInterface {}

class MockModelQueriesInterface extends Mock implements ModelQueriesInterface {}

class MockGraphQLOperation<T> extends Mock implements GraphQLOperation<T> {}

class MockGraphQLResponse<T> extends Mock implements GraphQLResponse<T> {}

// Mock for ModelType<Booking>
class MockBookingModelType extends Mock implements ModelType<Booking> {}

class FakeBooking extends Fake implements Booking {}

void main() {
  late BookingRemoteDataSourceImpl remoteDataSource;
  late MockAPICategory mockAPI;
  late MockModelMutationsInterface mockMutations;
  late MockModelQueriesInterface mockQueries;

  const bookingIdentifier = BookingModelIdentifier(id: bookingId);

  final bookingModel = createMockBooking();

  setUpAll(() {
    registerFallbackValue(FakeBooking());
    // Register fallback values for mocktail.
    registerFallbackValue(MockBookingModelType()); // Register the mock ModelType<Booking>.
    registerFallbackValue(bookingIdentifier); // Register ModelIdentifier<Booking> fallback.
  });

  setUp(() {
    mockAPI = MockAPICategory();
    mockMutations = MockModelMutationsInterface();
    mockQueries = MockModelQueriesInterface();

    remoteDataSource = BookingRemoteDataSourceImpl(
      api: mockAPI,
      mutations: mockMutations,
      queries: mockQueries,
    );
  });

  group('createBooking', () {
    late MockGraphQLOperation<Booking> mockOperation;
    late MockGraphQLResponse<Booking> mockResponse;

    setUp(() {
      mockOperation = MockGraphQLOperation<Booking>();
      mockResponse = MockGraphQLResponse<Booking>();
    });

    test('should return Booking on successful creation', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.create<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate(request: request)).thenReturn(mockOperation);
      when(() => mockOperation.response).thenAnswer((_) async => mockResponse);
      when(() => mockResponse.data).thenReturn(bookingModel);
      when(() => mockResponse.hasErrors).thenReturn(false);

      // Act
      final result = await remoteDataSource.createBooking(bookingModel);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (booking) => expect(booking.id, bookingModel.id),
      );

      verify(() => mockMutations.create<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });

    test('should return BookingCreateException on failure', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.create<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate(request: request)).thenReturn(mockOperation);
      when(() => mockOperation.response).thenAnswer((_) async => mockResponse);
      when(() => mockResponse.data).thenReturn(null);
      when(() => mockResponse.hasErrors).thenReturn(true);
      when(() => mockResponse.errors).thenReturn([const GraphQLResponseError(message: 'Error occurred')]);

      // Act
      final result = await remoteDataSource.createBooking(bookingModel);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error.message, contains('Error occurred')),
        (_) => fail('Expected error but got success'),
      );

      verify(() => mockMutations.create<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });
  });

  group('getBookingById', () {
    late MockGraphQLOperation<Booking?> getOperation;
    late MockGraphQLResponse<Booking> getResponse;

    setUp(() {
      getOperation = MockGraphQLOperation<Booking>();
      getResponse = MockGraphQLResponse<Booking>();
    });

    test('should return Booking on success', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'query');
      when(() => mockQueries.get<Booking>(any(), any())).thenReturn(request);
      when(() => mockAPI.query<Booking?>(request: request)).thenReturn(getOperation);
      when(() => getOperation.response).thenAnswer((_) async => getResponse);
      when(() => getResponse.data).thenReturn(bookingModel);
      when(() => getResponse.hasErrors).thenReturn(false);

      // Act
      final result = await remoteDataSource.getBookingById(bookingId);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (booking) => expect(booking?.id, bookingId),
      );

      verify(() => mockQueries.get<Booking>(any(), any())).called(1);
      verify(() => mockAPI.query<Booking?>(request: request)).called(1);
    });

    test('should return BookingGetException on failure', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'query');
      when(() => mockQueries.get<Booking>(any(), any())).thenReturn(request);
      when(() => mockAPI.query(request: request)).thenThrow(Exception('Query failed'));

      // Act
      final result = await remoteDataSource.getBookingById(bookingId);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingGetException>()),
        (_) => fail('Expected error but got success'),
      );

      verify(() => mockQueries.get<Booking>(any(), any())).called(1);
      verify(() => mockAPI.query<Booking?>(request: request)).called(1);
    });
  });

  group('listBookings', () {
    late MockGraphQLOperation<PaginatedResult<Booking>> listOperation;
    late MockGraphQLResponse<PaginatedResult<Booking>> listResponse;

    setUp(() {
      listOperation = MockGraphQLOperation<PaginatedResult<Booking>>();
      listResponse = MockGraphQLResponse<PaginatedResult<Booking>>();
    });

    test('should return list of Bookings on success', () async {
      // Arrange
      final request = GraphQLRequest<PaginatedResult<Booking>>(document: 'query');
      final paginatedResult = PaginatedResult<Booking>(
        [bookingModel],
        20,
        null,
        null,
        Booking.classType,
        null,
      );

      when(() => mockQueries.list<Booking>(any())).thenReturn(request);
      when(() => mockAPI.query(request: request)).thenReturn(listOperation);
      when(() => listOperation.response).thenAnswer((_) async => listResponse);
      when(() => listResponse.data).thenReturn(paginatedResult);
      when(() => listResponse.hasErrors).thenReturn(false);

      // Act
      final result = await remoteDataSource.listBookings();

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (bookings) => expect(bookings.length, 1),
      );

      verify(() => mockQueries.list<Booking>(any())).called(1);
      verify(() => mockAPI.query(request: request)).called(1);
    });

    test('should return BookingListException on failure', () async {
      // Arrange
      final request = GraphQLRequest<PaginatedResult<Booking>>(document: 'query');
      when(() => mockQueries.list<Booking>(any())).thenReturn(request);
      when(() => mockAPI.query(request: request)).thenThrow(Exception('Query failed'));

      // Act
      final result = await remoteDataSource.listBookings();

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingListException>()),
        (_) => fail('Expected error but got success'),
      );

      verify(() => mockQueries.list<Booking>(any())).called(1);
      verify(() => mockAPI.query(request: request)).called(1);
    });
  });

  group('deleteBooking', () {
    late MockGraphQLOperation<Booking> deleteOperation;
    late MockGraphQLResponse<Booking> deleteResponse;

    setUp(() {
      deleteOperation = MockGraphQLOperation<Booking>();
      deleteResponse = MockGraphQLResponse<Booking>();
    });
    test('should return Right(null) on successful deletion', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.delete<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate<Booking>(request: request)).thenReturn(deleteOperation);
      when(() => deleteOperation.response).thenAnswer((_) async => deleteResponse);
      when(() => deleteResponse.hasErrors).thenReturn(false);

      // Act
      final result = await remoteDataSource.deleteBookingTest(bookingModel);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (_) => fail('Expected success but got an error'),
        (_) => null, // Success
      );
      verify(() => mockMutations.delete<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });

    test('should return BookingDeleteException on failure', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.delete<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate(request: request)).thenThrow(Exception('Delete failed'));

      // Act
      final result = await remoteDataSource.deleteBooking(bookingModel);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingDeleteException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockMutations.delete<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });
  });

  group('updateBooking', () {
    late MockGraphQLOperation<Booking> updateOperation;
    late MockGraphQLResponse<Booking> updateResponse;

    setUp(() {
      updateOperation = MockGraphQLOperation<Booking>();
      updateResponse = MockGraphQLResponse<Booking>();
    });
    test('should return Booking on successful update', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.update<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate(request: request)).thenReturn(updateOperation);
      when(() => updateOperation.response).thenAnswer((_) async => updateResponse);
      when(() => updateResponse.data).thenReturn(bookingModel);
      when(() => updateResponse.hasErrors).thenReturn(false);

      // Act
      final result = await remoteDataSource.updateBooking(bookingModel);

      // Assert
      expect(result.isRight, true);
      result.fold(
        (error) => fail('Expected success but got error: $error'),
        (booking) => expect(booking.id, bookingModel.id),
      );
      verify(() => mockMutations.update<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });

    test('should return BookingUpdateException on failure', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.update<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate(request: request)).thenThrow(Exception('Update failed'));

      // Act
      final result = await remoteDataSource.updateBooking(bookingModel);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error, isA<BookingUpdateException>()),
        (_) => fail('Expected error but got success'),
      );
      verify(() => mockMutations.update<Booking>(any())).called(1);
      verify(() => mockAPI.mutate(request: request)).called(1);
    });

    test('should return BookingUpdateException when response has errors', () async {
      // Arrange
      final request = GraphQLRequest<Booking>(document: 'mutation');
      when(() => mockMutations.update<Booking>(any())).thenReturn(request);
      when(() => mockAPI.mutate<Booking>(request: request)).thenReturn(updateOperation);
      when(() => updateOperation.response).thenAnswer((_) async => updateResponse);
      when(() => updateResponse.data).thenReturn(null);
      when(() => updateResponse.hasErrors).thenReturn(true);
      when(() => updateResponse.errors).thenReturn([const GraphQLResponseError(message: 'Update failed')]);

      // Act
      final result = await remoteDataSource.updateBooking(bookingModel);

      // Assert
      expect(result.isLeft, true);
      result.fold(
        (error) => expect(error.message, contains('Update failed')),
        (_) => fail('Expected error but got success'),
      );
      // verify(() => mockMutations.update<Booking>(any())).called(1);
      // verify(() => mockAPI.mutate(request: request)).called(1);
    });
  });
}
