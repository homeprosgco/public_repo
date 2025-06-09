import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'section/aluminum_ramps_section.dart';
import 'section/bathroom_modifications_section.dart';
import 'section/grab_bars_section.dart';
import 'section/handrails_section.dart';
import 'section/plumbing_section.dart';
import 'section/wood_ramps_section.dart';

class AdaJobsScreen extends StatelessWidget {
  const AdaJobsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Screen(
      theme: theme,
      children: [
        buildHeader(context),
        const SizedBox(height: k8),
        PageSection(
          children: [
            ResponsiveRowColumnItem(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AutoSizeText(
                    'ADA Jobs',
                    style: theme.textTheme.titleMedium,
                  ),
                  const SizedBox(height: k4),
                  AutoSizeText(
                    'Delivering ADA-compliant home services, we ensure accessibility and quality in every job, from cleaning to repairs and maintenance.',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
        const SizedBox(height: k16),
        AluminumRampsSection(theme: theme),
        const SizedBox(height: k16),
        BathroomModificationsSection(theme: theme),
        const SizedBox(height: k16),
        GrabBarsSection(theme: theme),
        const SizedBox(height: k16),
        HandrailsSection(theme: theme),
        const SizedBox(height: k16),
        PlumbingSection(theme: theme),
        const SizedBox(height: k16),
        WoodRampsSection(theme: theme),
      ],
    );
  }
}
