import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/typography/shared_typography.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/layout/page_section_layout.dart';
import 'package:responsive_framework/responsive_framework.dart';

class TopCitiesSection extends StatelessWidget {
  final ThemeData theme;

  const TopCitiesSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k8,
      children: [
        ResponsiveRowColumnItem(
          child: buildSectionHeader(theme, header: 'Top cities for hiring a pro'),
        ),
        ResponsiveRowColumnItem(
          child: Wrap(
            runSpacing: k3,
            spacing: k3,
            children: [
              'Boca Raton',
              'Boynton Beach',
              'Coral Springs',
              'Davie',
              'Delray Beach',
              'Deerfield Beach',
              'Doral',
              'Fort Pierce',
              'Fort Lauderdale',
              'Hialeah',
              'Hollywood',
              'Homestead',
              'Jupiter',
              'Lauderhill',
              'Miami',
              'Miami Beach',
              'Miami Gardens',
              'Miramar',
              'North Miami',
              'Palm Beach Gardens',
              'Pembroke Pines',
              'Plantation',
              'Pompano Beach',
              'Port St. Lucie',
              'Royal Palm Beach',
              'Stuart',
              'Tamarac',
              'Wellington',
              'West Palm Beach',
            ].map((category) {
              return Container(
                padding: const EdgeInsets.symmetric(horizontal: k4, vertical: k2),
                decoration: BoxDecoration(
                  color: const Color(0xFFeaeaeb).withOpacity(.3),
                  borderRadius: BorderRadius.circular(k8),
                ),
                child: AutoSizeText(
                  category,
                  style: theme.textTheme.labelLarge?.copyWith(
                    color: const Color(0xFF2a2d34),
                  ),
                ),
              );
            }).toList(),
          ),
        )
      ],
    );
  }
}
