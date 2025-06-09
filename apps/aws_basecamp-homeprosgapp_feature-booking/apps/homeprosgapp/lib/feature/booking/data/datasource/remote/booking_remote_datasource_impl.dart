import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../../exception/booking_exception.dart';
import 'booking_remote_datasource_interface.dart';

class BookingRemoteDataSourceImpl implements BookingRemoteDataSource {
  final APICategory api;
  final ModelMutationsInterface mutations;
  final ModelQueriesInterface queries;

  BookingRemoteDataSourceImpl({
    required this.api,
    required this.mutations,
    required this.queries,
  });

  @override
  Future<Either<BookingCreateException, Booking>> createBooking(Booking booking) async {
    try {
      final request = mutations.create(booking);
      final response = await api.mutate(request: request).response;

      if (response.data != null) {
        return Right(response.data!);
      } else {
        return Left(BookingCreateException(
          response.errors.isNotEmpty ? response.errors.first.message : 'Unknown error',
        ));
      }
    } catch (e) {
      return Left(BookingCreateException(e.toString()));
    }
  }

  @override
  Future<Either<BookingGetException, Booking?>> getBookingById(String id) async {
    try {
      final identifier = BookingModelIdentifier(id: id);
      final request = queries.get(Booking.classType, identifier);

      final mutation = api.query(request: request);
      final response = await mutation.response;
      final data = response.data;

      if (response.hasErrors) {
        return Left(BookingGetException(response.errors.toString()));
      } else {
        return Right(data);
      }
    } catch (e) {
      return Left(BookingGetException(
        'Failed to fetch booking by ID: $id',
        e is Exception ? e : Exception(e.toString()), // Safely handle non-Exception errors
      ));
    }
  }

  @override
  Future<Either<BookingListException, List<Booking>>> listBookings() async {
    try {
      final request = queries.list(Booking.classType);
      final response = await api.query(request: request).response;

      if (response.data != null) {
        return Right(response.data!.items.whereType<Booking>().toList());
      } else {
        return const Right([]);
      }
    } catch (e) {
      return Left(BookingListException(
        'Failed to fetch all bookings',
        e is Exception ? e : Exception(e.toString()), // Safely handle non-Exception errors
      ));
    }
  }

  Future<Either<BookingDeleteException, void>> deleteBookingTest(Booking booking) async {
    try {
      final request = mutations.delete(booking);
      final mutation = api.mutate(request: request);
      final response = await mutation.response;

      if (response.hasErrors) {
        return Left(BookingDeleteException(response.errors.toString()));
      } else {
        return const Right(null);
      }
    } catch (e) {
      return Left(BookingDeleteException(
        'Failed to delete booking with ID: ${booking.id}',
        e is Exception ? e : Exception(e.toString()), // Safely handle non-Exception errors
      ));
    }
  }

  @override
  Future<Either<BookingDeleteException, void>> deleteBooking(Booking booking) async {
    try {
      final request = mutations.delete(booking);
      final mutation = api.mutate(request: request);
      final response = await mutation.response;

      if (response.hasErrors) {
        return Left(BookingDeleteException(response.errors.toString()));
      } else {
        return const Right(null);
      }
    } catch (e) {
      return Left(BookingDeleteException(
        'Failed to delete booking with ID: ${booking.id}',
        e is Exception ? e : Exception(e.toString()), // Safely handle non-Exception errors
      ));
    }
  }

  @override
  Future<Either<BookingUpdateException, Booking>> updateBooking(Booking booking) async {
    try {
      final request = mutations.update(booking);
      final mutation = api.mutate(request: request);
      final response = await mutation.response;

      if (response.data != null) {
        return Right(response.data!);
      } else {
        return Left(BookingUpdateException(
          response.errors.isNotEmpty ? response.errors.first.message : 'Unknown error',
        ));
      }
    } catch (e) {
      return Left(BookingUpdateException(e.toString()));
    }
  }
}
