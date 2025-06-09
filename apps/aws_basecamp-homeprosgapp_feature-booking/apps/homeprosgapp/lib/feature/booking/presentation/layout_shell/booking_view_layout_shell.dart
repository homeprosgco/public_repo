import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';

class BookingViewLayoutShell extends StatelessWidget {
  final StatefulNavigationShell navigationShell;

  const BookingViewLayoutShell({
    Key? key,
    required this.navigationShell,
  }) : super(key: key ?? const ValueKey<String>('booking_view_layout_shell'));

  @override
  Widget build(BuildContext context) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: navigationShell,
        )
      ],
    );
  }
}
