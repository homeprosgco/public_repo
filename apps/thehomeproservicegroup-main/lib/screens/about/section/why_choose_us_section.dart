import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

class WhyChooseUsSection extends StatelessWidget {
  final ThemeData theme;

  const WhyChooseUsSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      children: [
        ResponsiveRowColumnItem(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AutoSizeText(
                'Why Choose Us',
                style: theme.textTheme.titleMedium,
              ),
              const SizedBox(height: k4),
              AutoSizeText(
                'Discover why our customers trust us for all their home service needs..',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: k8),
              ImageFeaturesList(
                features: [
                  ImageFeatureData(
                    imagePath: 'images/about_us_screen/why_choose_us/trusted_home_pros_img.png',
                    title: 'Trusted Professionals',
                    description: 'All our technicians are background-checked and vetted, providing you with safe and reliable service.',
                  ),
                  ImageFeatureData(
                    imagePath: 'images/about_us_screen/why_choose_us/expedient_service_img.png',
                    title: 'Fast Service',
                    description: 'We offer quick and efficient service to address your urgent home repair and maintenance needs promptly.',
                  ),
                  ImageFeatureData(
                    imagePath: 'images/about_us_screen/why_choose_us/online_booking_img.png',
                    title: 'Convenient Booking',
                    description: 'Enjoy easy online scheduling and flexible appointment times to fit your busy lifestyle.',
                  ),
                ],
                
              ),
            ],
          ),
        ),
      ],
    );
  }
}
