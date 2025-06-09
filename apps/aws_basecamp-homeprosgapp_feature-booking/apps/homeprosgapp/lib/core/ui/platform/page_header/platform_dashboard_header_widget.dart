import 'package:flutter/material.dart';

import '../../../core.dart';

class PlatformDashboardHeader extends StatelessWidget {
  const PlatformDashboardHeader({super.key});

  void _toggleDrawer(BuildContext context) {
    if (Scaffold.of(context).isDrawerOpen) {
      Navigator.of(context).pop(); // Close the drawer
    } else {
      Scaffold.of(context).openDrawer(); // Open the drawer
    }
  }

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Container(
      padding: const EdgeInsets.all(k6),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: colorScheme.outline.withOpacity(.6),
          ),
        ),
      ),
      child: StackRow(
        children: [
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => _toggleDrawer(context),
              child: Icon(
                Icons.menu,
                size: k7,
                color: colorScheme.onSurface.withOpacity(.9),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
