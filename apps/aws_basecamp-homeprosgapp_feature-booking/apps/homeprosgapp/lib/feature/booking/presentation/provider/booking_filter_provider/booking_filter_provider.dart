import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../domain/booking_domain.dart';
import '../booking_providers.dart';

part 'booking_filter_provider.g.dart';

@riverpod
Future<List<BookingEntity>> bookingsFilter(Ref ref) async {
  final searchQuery = ref.watch(searchQueryProvider);
  final isSortAscending = ref.watch(sortAscendingProvider);
  final sortField = ref.watch(sortFieldProvider);
  final bookings = await ref.watch(asyncBookingsProvider.future);

  // Filter bookings based on the search query
  final filteredBookings = _searchBookings(bookings, searchQuery);

  // Sort the filtered bookings if a sort field is specified
  return _sortBookings(filteredBookings, sortField, isSortAscending);
}

List<BookingEntity> _searchBookings(List<BookingEntity> bookings, String searchQuery) {
  if (searchQuery.isEmpty) return bookings;
  return bookings
      .where((booking) =>
          booking.fullname.toLowerCase().contains(searchQuery.toLowerCase()) || // Example filter by booking name
          booking.service.toLowerCase().contains(searchQuery.toLowerCase()) ||
          booking.address.toLowerCase().contains(searchQuery.toLowerCase())) // Example filter by service
      .toList();
}

List<BookingEntity> _sortBookings(List<BookingEntity> bookings, String? sortField, bool ascending) {
  if (sortField == null) return bookings; // No sorting if no sort field specified
  bookings.sort((a, b) {
    final comparison = compareByField(a, b, sortField);
    return ascending ? comparison : -comparison;
  });
  return bookings;
}

int compareByField(BookingEntity a, BookingEntity b, String sortField) {
  switch (sortField) {
    case 'name':
      return a.fullname.compareTo(b.fullname); // Example sort by name
    case 'service':
      return a.service.compareTo(b.service); // Example sort by service
    case 'address':
      return a.address.compareTo(b.address); // Example sort by service
    // Add other cases as needed
    default:
      return 0;
  }
}
