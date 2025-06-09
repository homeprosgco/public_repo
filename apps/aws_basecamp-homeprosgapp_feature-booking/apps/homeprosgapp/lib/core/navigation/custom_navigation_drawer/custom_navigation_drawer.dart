import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/ui/core_ui.dart';

import '../../theme/theme.dart';
import '../platform/platform_destination.dart';

class CustomNavigationDrawer extends StatelessWidget {
  final List<PlatformDestination> destinations;

  const CustomNavigationDrawer({
    super.key,
    required this.destinations,
  });

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    return Drawer(
      child: StackColumn(
        children: [
          Padding(
            padding: const EdgeInsets.all(k6),
            child: StackRow(
              children: [
                CustomThemeText(
                  text: 'HOMEPRO',
                  variant: TypographyVariant.titleMedium,
                  color: colorScheme.onPrimary.withOpacity(.85),
                ),
                CustomThemeText(
                  text: 'SG ',
                  variant: TypographyVariant.titleMedium,
                  // color: Color(0xFFF4E04D),
                  color: colorScheme.primary.withOpacity(.85),
                  fontWeight: FontWeight.w800,
                ),
                CustomThemeText(
                  text: 'APP',
                  variant: TypographyVariant.titleMedium,
                  color: colorScheme.onPrimary.withOpacity(.85),
                ),
              ],
            ),
          ),
          Divider(
            height: k0,
            color: colorScheme.surface.withOpacity(.1),
          ),
          const SizedBox(height: k4),
          Expanded(
            child: ListView(
              padding: EdgeInsets.zero,
              children: [
                ...destinations.map(
                  (destination) => ListTile(
                    leading: FaIcon(
                      destination.icon,
                      size: k5,
                      color: const Color(0xFFe9eaec).withOpacity(.65),
                    ),
                    title: CustomThemeText(
                      text: destination.label,
                      color: const Color.fromARGB(255, 249, 244, 250).withOpacity(.75),
                      fontWeight: FontWeight.w300,
                    ),
                    onTap: () {
                      context.go(destination.route);
                    },
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
