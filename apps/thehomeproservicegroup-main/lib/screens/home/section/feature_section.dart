import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:responsive_framework/responsive_framework.dart';

class FeatureSection extends StatelessWidget {
  final ThemeData theme;

  const FeatureSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k28,
      children: [
        ResponsiveRowColumnItem(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              buildSectionHeader(theme, header: 'Trust and safety features for your protection'),
              const SizedBox(height: k12),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.asset('images/feature_images/secure_payment_feature_img.png'),
                  const SizedBox(width: k4),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        AutoSizeText(
                          'Secure payments',
                          style: theme.textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: k3),
                        AutoSizeText(
                          'Only release payment when the task is completed to your satisfaction',
                          maxLines: 3,
                          style: theme.textTheme.bodyMedium,
                        ),
                        const SizedBox(height: k4),
                        AppTextButton(
                          text: 'Read More',
                          textColor: theme.colorScheme.primary,
                          onPressed: () {},
                        )
                      ],
                    ),
                  )
                ],
              ),
              const SizedBox(height: k12),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.asset('images/feature_images/trusted_review_feature_img.png'),
                  const SizedBox(width: k4),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        AutoSizeText('Trusted ratings and reviews', style: theme.textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold)),
                        const SizedBox(height: k3),
                        AutoSizeText(
                          'Pick the right person for the task based on real ratings and reviews from other users',
                          maxLines: 3,
                          style: theme.textTheme.bodyMedium,
                        ),
                        const SizedBox(height: k4),
                        AppTextButton(
                          text: 'Read More',
                          textColor: theme.colorScheme.primary,
                          onPressed: () {},
                        )
                      ],
                    ),
                  )
                ],
              ),
              const SizedBox(height: k12),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Image.asset('images/feature_images/insurance_feature_img.png'),
                  const SizedBox(width: k4),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        AutoSizeText('Insurance for peace of mind', style: theme.textTheme.bodyLarge?.copyWith(fontWeight: FontWeight.bold)),
                        const SizedBox(height: k3),
                        AutoSizeText(
                          'Your happiness is our goal. If you’re not happy, we’ll work to make it right.',
                          maxLines: 3,
                          style: theme.textTheme.bodyMedium,
                        ),
                        const SizedBox(height: k4),
                        AppTextButton(
                          text: 'Read More',
                          textColor: theme.colorScheme.primary,
                          onPressed: () {},
                        )
                      ],
                    ),
                  )
                ],
              ),
              const SizedBox(height: k16),
              PrimaryButton(
                text: 'Hire A Pro',
                backgroundColor: theme.colorScheme.primary,
                textColor: theme.colorScheme.surface,
                padding: const EdgeInsets.symmetric(horizontal: k16, vertical: k6),
                onPressed: () {},
              ),
            ],
          ),
        ),
        ResponsiveRowColumnItem(
          child: AspectRatio(
            aspectRatio: .9,
            child: Stack(
              fit: StackFit.expand,
              children: [
                Positioned(
                  bottom: k0,
                  right: k0,
                  child: Container(
                    decoration: BoxDecoration(
                      color: const Color(0xFF0E0D39),
                      borderRadius: BorderRadius.circular(k4),
                    ),
                    width: k52,
                    height: k64,
                  ),
                ),
                Positioned(
                  top: k0,
                  right: k8,
                  bottom: k7,
                  left: k0,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(k4),
                    child: Image.asset(
                      'images/feature_images/feature_section_img.png',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
