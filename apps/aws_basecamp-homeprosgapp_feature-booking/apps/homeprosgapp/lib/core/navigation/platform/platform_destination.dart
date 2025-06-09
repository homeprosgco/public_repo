import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../route/platform_route.dart';

class PlatformDestination {
  final String label;
  final IconData icon;
  final String route;

  const PlatformDestination({
    required this.label,
    required this.icon,
    required this.route,
  });
}

const platformDashboardDestinations = [
  PlatformDestination(
    label: 'Bookings',
    icon: FontAwesomeIcons.clipboardList,
    route: PlatformRoute.platformBookingsTableView,
  ),
  PlatformDestination(
    label: 'Home Pro Leads',
    icon: FontAwesomeIcons.clipboardUser,
    route: PlatformRoute.homeproLeadsView,
  ),
];
