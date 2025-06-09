import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/layout/page_section_layout.dart';
import 'package:responsive_framework/responsive_framework.dart';

class ContactNowSection extends StatelessWidget {
  final ThemeData theme;

  const ContactNowSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      designGridColumnHeight: 0,
      padding: const EdgeInsets.symmetric(horizontal: k4),
      spacing: k16,
      children: [
        ResponsiveRowColumnItem(
          child: AspectRatio(
            aspectRatio: .9,
            child: Stack(
              fit: StackFit.expand,
              children: [
                Positioned(
                  bottom: k0,
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
                  right: k0,
                  bottom: k7,
                  left: k6,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(k4),
                    child: Image.asset(
                      'images/contact_now_img.png',
                      fit: BoxFit.cover
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        ResponsiveRowColumnItem(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AutoSizeText(
                'Fixed Price Service',
                style: theme.textTheme.titleMedium?.copyWith(color: theme.colorScheme.primary),
              ),
              const SizedBox(height: k4),
              Wrap(
                runSpacing: k3_5,
                spacing: k4,
                children: [
                  {"icon": Icons.paid_outlined, "text": 'See you price'},
                  {"icon": Icons.event_available_outlined, "text": 'Book a time'},
                  {"icon": Icons.contactless_outlined, "text": 'Pay when finished'}
                ].map((attr) {
                  return Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        attr['icon'] as IconData,
                        size: k5,
                      ),
                      const SizedBox(width: k3),
                      AutoSizeText(
                        attr['text'] as String,
                        style: theme.textTheme.bodyMedium,
                      )
                    ],
                  );
                }).toList(),
              ),
              const SizedBox(height: k12),
              buildSectionHeader(
                theme,
                header: 'Looking to book a fixed price service?',
                body: 'Interested in scheduling a service at a set rate? Browse our selection of fixed-price offerings and book with confidence today',
              ),
              const SizedBox(height: k6),
              AutoSizeText(
                'Plumbing, Handyman, House Cleaning, and more...',
                style: theme.textTheme.bodyMedium,
              ),
              const SizedBox(height: k12),
              PrimaryButton(
                text: 'Contact Us Now',
                backgroundColor: theme.colorScheme.primary,
                textColor: theme.colorScheme.surface,
                onPressed: () {},
              ),
            ],
          ),
        )
      ],
    );
  }
}
