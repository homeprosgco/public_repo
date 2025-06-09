import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../carousel/job_images_carousel.dart';

class WoodRampsSection extends StatelessWidget {
  final ThemeData theme;

  const WoodRampsSection({
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
                'Wood Ramps',
                style: theme.textTheme.titleSmall,
              ),
            ],
          ),
        ),
        const ResponsiveRowColumnItem(
          child: JobImagesCarouselWithIndicator(
            jobImages: [
              'images/ada_jobs_screen/wood_ramps/3_feet_wood_ramp.jpg',
              'images/ada_jobs_screen/wood_ramps/23_feet_wood_ramp_miami.jpg',
              'images/ada_jobs_screen/wood_ramps/ada_ramp_pembroke_pines_fl.jpg',
              'images/ada_jobs_screen/wood_ramps/ada_ramp_wellington.jpg',
              'images/ada_jobs_screen/wood_ramps/ada_ramp_west_palm_beach.jpg',
              'images/ada_jobs_screen/wood_ramps/ada_wood_ramp.jpg',
              'images/ada_jobs_screen/wood_ramps/handicap_ramp.jpg',
              'images/ada_jobs_screen/wood_ramps/wheel_chair_ramp.jpg',
              'images/ada_jobs_screen/wood_ramps/wood_ramp_davie_fl.jpg',
              'images/ada_jobs_screen/wood_ramps/wood_ramp_ft_lauderdale.jpg',
              'images/ada_jobs_screen/wood_ramps/wood_ramp_hollywood_fl.jpg',
            ],
          ),
        )
      ],
    );
  }
}
