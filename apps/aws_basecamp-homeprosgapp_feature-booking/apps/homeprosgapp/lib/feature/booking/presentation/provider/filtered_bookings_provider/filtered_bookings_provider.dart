import 'package:homeprosgapp/core/core.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import '../../../domain/booking_domain.dart';

part 'filtered_bookings_provider.g.dart';

@riverpod
class FilteredBookings extends _$FilteredBookings {
  @override
  List<BookingEntity> build(List<BookingEntity> bookingEntities) {
    final searchQuery = ref.watch(searchQueryProvider);
    final isSortAscending = ref.watch(sortAscendingProvider);
    final sortField = ref.watch(sortFieldProvider);
    final filterBy = ref.watch(filterColumnProvider);
    // Perform any filtering logic here if needed
    // Filter bookings based on the search query
    final searchedBookings = _searchBookings(bookingEntities, searchQuery);

    final filteredByBookings = _filterBookings(searchedBookings, filterBy);

    // Sort the filtered bookings if a sort field is specified
    final sortedBookings = _sortBookings(filteredByBookings, sortField, isSortAscending);

    return sortedBookings;
  }

  BookingEntity? findById(String bookingId) {
    BookingEntity? booking;

    try {
      booking = state.firstWhere((booking) => booking.id == bookingId);
    } catch (e) {
      booking = null;
    }

    return booking;
  }

  List<BookingEntity> _filterBookings(List<BookingEntity> bookings, String attribute) {
    if (attribute.isEmpty) return bookings;

    final filteredBookings = bookings
        .where((booking) =>
            booking.status.toDisplayString.toLowerCase().contains(attribute.toLowerCase()) ||
            booking.hiringStage.toDisplayString.toLowerCase().contains(attribute.toLowerCase()) ||
            getProfessionByService(booking.service).toLowerCase().contains(attribute.toLowerCase())) // Example filter by service
        .toList();

    return filteredBookings;
  }

  List<BookingEntity> _searchBookings(List<BookingEntity> bookings, String searchQuery) {
    if (searchQuery.isEmpty) return bookings;
    final filteredBookings = bookings
        .where((booking) =>
            booking.fullname.toLowerCase().contains(searchQuery.toLowerCase()) || // Example filter by booking name
            booking.service.toLowerCase().contains(searchQuery.toLowerCase()) ||
            booking.address.toLowerCase().contains(searchQuery.toLowerCase())) // Example filter by service
        .toList();

    return filteredBookings;
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
      case 'fullname':
        return a.fullname.compareTo(b.fullname); // Example sort by name
      case 'service':
        return a.service.compareTo(b.service); // Example sort by service
      // Add other cases as needed
      default:
        return 0;
    }
  }
}
