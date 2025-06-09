import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class AboutUsSection extends StatelessWidget {
  final ThemeData theme;

  const AboutUsSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k8,
      children: [
        ResponsiveRowColumnItem(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AutoSizeText(
                'Empowering businesses and connecting people',
                style: theme.textTheme.titleMedium,
              ),
              const SizedBox(height: k4),
              AutoSizeText(
                'We are on a mission to simplify your daily life by providing a comprehensive on-demand service solution. From home maintenance to creative endeavors, we strive to create a community where users and vendors come together for extraordinary service experiences',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: k16),
              Wrap(
                spacing: k4,
                // runSpacing: k6,
                children: [
                  Container(
                    constraints: const BoxConstraints(minWidth: maxSM),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        'On-Demand Services',
                        'User-Friendly Website',
                        'Tranparent and Competetive',
                      ].map(
                        (feature) {
                          return Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  FaIcon(
                                    FontAwesomeIcons.circleCheck,
                                    color: theme.colorScheme.primary,
                                    size: k4_5,
                                  ),
                                  const SizedBox(width: k3),
                                  AutoSizeText(
                                    feature,
                                    style: theme.textTheme.labelLarge,
                                  ),
                                ],
                              ),
                              const SizedBox(height: k6),
                            ],
                          );
                        },
                      ).toList(),
                    ),
                  ),
                  Container(
                    constraints: const BoxConstraints(minWidth: maxSM),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        'Dedicated Teams',
                        'Budget-Friendly',
                        'Innovation and Community',
                      ].map(
                        (feature) {
                          return Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  FaIcon(
                                    FontAwesomeIcons.circleCheck,
                                    color: theme.colorScheme.primary,
                                    size: k4_5,
                                  ),
                                  const SizedBox(width: k3),
                                  AutoSizeText(
                                    feature,
                                    style: theme.textTheme.labelLarge,
                                  ),
                                ],
                              ),
                              const SizedBox(height: k6),
                            ],
                          );
                        },
                      ).toList(),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: k16),
              Container(
                width: double.infinity,
                padding: ResponsiveUtil.responsiveValue(
                  context: context,
                  defaultValue: const EdgeInsets.only(top: k10, left: k4, right: k4, bottom: k6),
                  sm: const EdgeInsets.only(top: k10, left: k4_5, right: k4_5),
                ),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey.shade300),
                  borderRadius: BorderRadius.circular(k2),
                ),
                child: Wrap(
                  runSpacing: k12,
                  children: <Map<String, dynamic>>[
                    {"count": "150+", "title": "SERVICE PROVIDERS"},
                    {"count": "3K+", "title": "SATISFIED CUSTOMERS"},
                    {"count": "1500+", "title": "PROJECTS COMPLETED"}
                  ].map(
                    (stat) {
                      return Container(
                        constraints: const BoxConstraints(maxWidth: k52),
                        child: Wrap(
                          spacing: k6,
                          children: [
                            AutoSizeText(
                              stat["count"],
                              style: theme.textTheme.headlineSmall,
                            ),
                            AutoSizeText(
                              stat["title"],
                              style: theme.textTheme.bodyMedium?.copyWith(fontWeight: FontWeight.w600, color: Colors.grey[600]),
                            )
                          ],
                        ),
                      );
                    },
                  ).toList(),
                ),
              ),
            ],
          ),
        ),
        ResponsiveRowColumnItem(
          child: AspectRatio(
            aspectRatio: 1,
            child: ClipRRect(
              borderRadius: const BorderRadius.all(Radius.circular(k3)),
              child: Image.asset(
                'images/about_us_screen/about_us_intro_img.jpg',
                fit: BoxFit.cover,
              ),
            ),
          ),
        )
      ],
    );
  }
}
