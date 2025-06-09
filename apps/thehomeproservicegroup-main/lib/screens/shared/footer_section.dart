import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hpsg/screen_router/route_config.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class FooterSection extends StatelessWidget {
  final ThemeData theme;

  FooterSection({
    super.key,
    required this.theme,
  });

  final List<String> footerServices = [
    'deck_installation.jpg',
    'gutter_cleaning.jpg',
    'junk_removal.png',
    'privacy_fence_install.jpg',
    'tile_installtion.jpg',
    'tree_removal_services.jpg'
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(k4, k0, k4, k6),
      padding: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: const EdgeInsets.only(top: k10, left: k3, right: k3),
        sm: const EdgeInsets.only(top: k10, left: k4_5, right: k4_5),
      ),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey.shade300),
        borderRadius: BorderRadius.circular(k2),
      ),
      child: Column(
        children: [
          PageSection(
            responsiveGridPadding: EdgeInsets.zero,
            designGridColumnHeight: 0,
            spacing: k10,
            children: [
              ResponsiveRowColumnItem(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Image.asset('images/logo.png'),
                    const SizedBox(height: k4),
                    AutoSizeText(
                      'Ultimate on-demand service and handyman solution for Android, iOS, and the web.',
                      style: theme.textTheme.bodyMedium,
                    ),
                    const SizedBox(height: k6),
                    Divider(
                      color: Colors.grey.shade300,
                      height: 1,
                    ),
                    const SizedBox(height: k6),
                    Row(
                      children: [
                        Icon(
                          Icons.phone_in_talk_outlined,
                          color: theme.colorScheme.primary,
                          size: k5,
                        ),
                        const SizedBox(width: k3),
                        AutoSizeText(
                          '(555) 123-4567',
                          style: theme.textTheme.bodyMedium?.copyWith(
                            fontWeight: FontWeight.w500,
                          ),
                        )
                      ],
                    ),
                    const SizedBox(height: k4),
                    Row(
                      children: [
                        Icon(
                          Icons.email_outlined,
                          color: theme.colorScheme.primary,
                          size: k5,
                        ),
                        const SizedBox(width: k4),
                        MediaQuery.of(context).size.width >= 440
                            ? AutoSizeText(
                                'support@thehomeproservicegroup.com',
                                style: theme.textTheme.bodySmall?.copyWith(
                                  fontWeight: FontWeight.w500,
                                ),
                              )
                            : AutoSizeText(
                                'support\n@thehomepro\nservicegroup.com',
                                style: theme.textTheme.bodySmall?.copyWith(
                                  fontWeight: FontWeight.w500,
                                ),
                              )
                      ],
                    ),
                    const SizedBox(height: k5),
                    Row(
                      children: [
                        Icon(
                          Icons.location_on_outlined,
                          color: theme.colorScheme.primary,
                          size: k5,
                        ),
                        const SizedBox(width: k4),
                        AutoSizeText(
                          'West Palm Beach, FL',
                          style: theme.textTheme.bodySmall?.copyWith(
                            fontWeight: FontWeight.w500,
                          ),
                        )
                      ],
                    )
                  ],
                ),
              ),
              ResponsiveRowColumnItem(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    AutoSizeText('Company', style: theme.textTheme.titleSmall),
                    const SizedBox(height: k6),
                    ...['About Us', 'Services', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((link) {
                      return Column(
                        children: [
                          TextLink(
                            text: link,
                            hoverColor: theme.colorScheme.primary,
                            onPressed: () {
                              context.go('/${convertToGoRouterFormat(link)}');
                            },
                          ),
                          const SizedBox(height: k3),
                        ],
                      );
                    })
                  ],
                ),
              ),
              ResponsiveRowColumnItem(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    AutoSizeText('Pros', style: theme.textTheme.titleSmall),
                    const SizedBox(height: k6),
                    ...['My Account', 'How It Works', 'Become a Pro', 'Contact'].map((link) {
                      return Column(
                        children: [
                          TextLink(
                            text: link,
                            hoverColor: theme.colorScheme.primary,
                            onPressed: () {},
                          ),
                          const SizedBox(height: k3),
                        ],
                      );
                    })
                  ],
                ),
              ),
              ResponsiveRowColumnItem(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    AutoSizeText('Recent Projects', style: theme.textTheme.titleSmall),
                    const SizedBox(height: k6),
                    LayoutBuilder(
                      builder: (context, constraints) {
                        return ResponsiveGridView.builder(
                          shrinkWrap: true,
                          gridDelegate: ResponsiveGridDelegate(
                            maxCrossAxisExtent: constraints.biggest.width / 3,
                            minCrossAxisExtent: constraints.biggest.width / 3,
                            mainAxisSpacing: k3,
                            crossAxisSpacing: k3,
                            childAspectRatio: 1.3,
                          ),
                          itemCount: 6,
                          itemBuilder: (BuildContext context, int index) {
                            return Image.asset(
                              'images/services/${footerServices[index]}',
                              fit: BoxFit.cover,
                            );
                          },
                        );
                      },
                    ),
                  ],
                ),
              )
            ],
          ),
          const SizedBox(height: k8),
          Divider(
            color: Colors.grey.shade300,
            height: 1,
          ),
          const SizedBox(height: k8),
          PageSection(
            spacing: k3,
            children: [
              ResponsiveRowColumnItem(
                child: AutoSizeText(
                  'Copyright \u00A9 2024. All Rights Reserved by The Home Pro Service Group.',
                  style: theme.textTheme.labelSmall,
                  textAlign: TextAlign.center,
                ),
              ),
              ResponsiveRowColumnItem(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [FontAwesomeIcons.facebookF, FontAwesomeIcons.instagram, FontAwesomeIcons.xTwitter].map((icon) {
                    return Container(
                      alignment: Alignment.center,
                      width: k8,
                      height: k8,
                      decoration: const BoxDecoration(
                        color: Color(0xFF222222),
                        borderRadius: BorderRadius.all(
                          Radius.circular(k2),
                        ),
                      ),
                      // padding: const EdgeInsets.all(k3),
                      margin: const EdgeInsets.only(right: k4),
                      child: FaIcon(
                        icon,
                        color: theme.colorScheme.primary,
                        size: k3,
                      ),
                    );
                  }).toList(),
                ),
              )
            ],
          ),
          const SizedBox(height: k6),
        ],
      ),
    );
  }
}
