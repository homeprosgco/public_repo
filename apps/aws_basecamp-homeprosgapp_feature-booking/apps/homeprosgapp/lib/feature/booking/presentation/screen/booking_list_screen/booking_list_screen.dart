import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';

class BookingListScreen extends ConsumerWidget {
  const BookingListScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookings = ref.watch(asyncBookingsProvider);
    final ColorScheme colorScheme = Theme.of(context).colorScheme;
    // Create a DashboardViewHeader with route and breadcrumb information
    final viewHeader = PlatformDashboardViewHeaderViewModel(
      route: "Bookings List",
      breadcrumbs: ["Bookings", "Bookings"],
      color: colorScheme.primary.withOpacity(.75),
    );

    return bookings.when(
      data: (bookings) {
        final bookingTableViewModel = BookingTableViewModel(bookings);

        return SafeArea(
          child: Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.transparent,
              title: const CustomThemeText(
                text: 'Bookings',
                variant: TypographyVariant.headlineSmall,
              ),
            ),
            body: CustomDataTable(
              tableModel: bookingTableViewModel,
              viewHeader: viewHeader,
              filterColumnOptions: const {},
              onUpdate: (entityId) {
                print(entityId);
              },
              onPreview: (entityId) {
                print(entityId);
              },
            ),
          ),
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
