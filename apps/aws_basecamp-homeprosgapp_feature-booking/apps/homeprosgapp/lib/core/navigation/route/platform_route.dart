class PlatformRoute {
  PlatformRoute._();
  // Screens do not depend on a StatefulShellRoute.indexedStack and are not nested
  static const String bookingScreen = '/booking';
  static const String bookingConfirmationScreen = '/booking-confirmation';
  static const String bookingConfirmEmailScreen = '/booking-confirm-email';

  // Views depend on a StatefulShellRoute.indexedStack and are nested within the WebsiteShell or PlatformDashboardShell
  // WebShell
  static const String homepageView = '/';

  // Shell Routes
  static const String platformDashbaordView = '/platform';
  static const String homeproLeadsView = 'home-pro-leads';

  //shell route for bookings
  static const String bookingsTableView = 'bookings';
  static const String bookingCreateFormView = 'new';
  static const String bookingDetailView = ':bookingId';
  static const String bookingUpdateFormView = ':bookingId/edit';

  // used with go router in the application as constants
  static const String platformBookingFormView = '/platform/bookings/new';
  static const String platformBookingsTableView = '/platform/bookings';
  static const String platformBookingDetailView = '/platform/bookings/:bookingId';
  static const String platformBookingUpdateFormView = '/platform/bookings/:bookingId/edit';
  static const String platformBookingsView = '/platform/bookings';
}
