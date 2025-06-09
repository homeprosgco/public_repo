import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../carousel/job_images_carousel.dart';

class HandrailsSection extends StatelessWidget {
  final ThemeData theme;

  const HandrailsSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k8,
      children: [
        ResponsiveRowColumnItem(
          child: Row(
            children: [
              Icon(
                Icons.build_circle_outlined,
                color: theme.colorScheme.primary,
                size: k5,
              ),
              const SizedBox(width: k3),
              AutoSizeText(
                'Handrails',
                style: theme.textTheme.titleSmall,
              ),
            ],
          ),
        ),
        const ResponsiveRowColumnItem(
          child: JobImagesCarouselWithIndicator(
            jobImages: [
              'images/ada_jobs_screen/handriails/aluminum_handrail_one.jpg',
              'images/ada_jobs_screen/handriails/aluminum_handrail_two.jpg',
              'images/ada_jobs_screen/handriails/stair_case_one.jpg',
              'images/ada_jobs_screen/handriails/staircase_two.jpg',
              'images/ada_jobs_screen/handriails/wood_handrail_one.jpg',
            ],
          ),
        )
      ],
    );
  }
}
