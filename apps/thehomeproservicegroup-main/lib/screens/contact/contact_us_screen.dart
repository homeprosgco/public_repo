import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class ContactUsScreen extends StatelessWidget {
  const ContactUsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Screen(
      theme: theme,
      children: [
        buildHeader(context),
        const SizedBox(height: k8),
        PageSection(
          spacing: k16,
          children: [
            ResponsiveRowColumnItem(
              child: ClipRRect(
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(k8),
                  topRight: Radius.circular(k8),
                  bottomLeft: Radius.zero,
                  bottomRight: Radius.zero,
                ),
                child: MaxWidthBox(
                  maxWidth: MediaQuery.of(context).size.width,
                  background: Container(
                    constraints: BoxConstraints(
                      minHeight: ResponsiveUtil.responsiveHeight(
                        context: context,
                        defaultValue: .8,
                        // xxs: .5,
                        // sm: 1,
                        // md: .7,
                        // lg: .66,
                        // xl: .5,
                      ),
                    ),
                    child: Image.asset(
                      'images/contact_us_screen/contact_us_info_bg_img.png',
                      fit: BoxFit.cover,
                      color: Colors.grey.shade900.withOpacity(.85),
                      colorBlendMode: BlendMode.darken,
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: k5, vertical: k12),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        AutoSizeText('REACH OUT', style: theme.textTheme.titleSmall?.copyWith(color: const Color(0xFF0489BC), fontWeight: FontWeight.w800)),
                        const SizedBox(height: k4),
                        const AutoSizeText(
                          'Have questions or need assistance? Reach out to our friendly support team at',
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: k8),
                        IconFeaturesList(
                          iconColor: Colors.blue,
                          titleColor: Colors.white,
                          descriptionColor: Colors.white,
                          iconSize: k6,
                          titleFontSize: 18.0,
                          descriptionFontSize: 14.0,
                          columnAlignment: CrossAxisAlignment.start,
                          iconToTextSpacing: 16.0,
                          titleToDescriptionSpacing: 8.0,
                          iconContainerColor: const Color(0xFF222222),
                          iconContainerPadding: const EdgeInsets.all(k2_5),
                          iconContainerBorderRadius: const BorderRadius.all(Radius.circular(k2)),
                          features: [
                            IconFeatureData(
                              icon: Icons.location_on_outlined,
                              title: 'Address',
                              description: '6901 Okeechoobee blvd Ste D5 503',
                            ),
                            IconFeatureData(
                              icon: Icons.email_sharp,
                              title: 'Email Address',
                              description: 'support@thehomeproservicegroup.com',
                            ),
                            IconFeatureData(
                              icon: Icons.phone_in_talk,
                              title: 'Phone Number',
                              description: '(561) 465-4659',
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            ResponsiveRowColumnItem(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AutoSizeText('CONTACT US', style: theme.textTheme.titleSmall?.copyWith(fontWeight: FontWeight.w800)),
                  const SizedBox(height: k4),
                  const AutoSizeText(
                    'Please use the feedback form to get in touch with us if you have any inquiries or requests. Our support team will gladly respond to you inquiry.',
                  ),
                  const SizedBox(height: k16),
                  const ContactForm(),
                ],
              ),
            )
          ],
        ),
      ],
    );
  }
}
