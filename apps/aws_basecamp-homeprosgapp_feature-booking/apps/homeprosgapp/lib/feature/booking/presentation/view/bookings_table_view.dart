import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';

class BookingsTableView extends ConsumerWidget {
  const BookingsTableView({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookings = ref.watch(asyncBookingsProvider);
    final bookingFormNotifier = ref.watch(bookingFormNotifierProvider.notifier);
    final ColorScheme colorScheme = Theme.of(context).colorScheme;
    // Create a DashboardViewHeader with route and breadcrumb information
    final viewHeader = PlatformDashboardViewHeaderViewModel(
      route: "Work Orders",
      breadcrumbs: ["Work Orders", "Work Orders List"],
      color: colorScheme.primary.withOpacity(.75),
    );

    return bookings.when(
      data: (bookings) {
        final filteredBookings = ref.watch(filteredBookingsProvider(bookings));
        final bookingTableViewModel = BookingTableViewModel(filteredBookings);

        return CustomDataTable(
          tableModel: bookingTableViewModel,
          viewHeader: viewHeader,
          filterColumnOptions: {
            'Off': const [],
            'Status': bookings.map((entity) => entity.status.toDisplayString).toSet().toList(),
            'Hiring Stage': bookings.map((entity) => entity.hiringStage.toDisplayString).toSet().toList(),
            'Category': bookings.map((entity) => getProfessionByService(entity.service)).toSet().toList(),
          },
          onUpdate: (entityId) {
            print(entityId);
            final booking = bookings.firstWhere((item) => item.id == entityId);

            if (booking.id.isEmpty) return;
            bookingFormNotifier.updateForm(bookingEntity: booking);

            context.go('${PlatformRoute.platformBookingsView}/${booking.id}/edit');
          },
          onPreview: (entityId) {
            print(entityId);
            final booking = bookings.firstWhere((item) => item.id == entityId);

            if (booking.id.isEmpty) return;

            context.go('${PlatformRoute.platformBookingsView}/${booking.id}');
          },
        );
      },
      error: (error, _) => Text('Error: $error'),
      loading: () => _buildLoadingOverlay(),
    );
  }

  Widget _buildLoadingOverlay() {
    return Container(
      color: Colors.black.withOpacity(0.5),
      child: const Center(child: CircularProgressIndicator()),
    );
  }
}
