import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/layout/page_section_layout.dart';
import 'package:hpsg/ui/widget/widget.dart';
import 'package:responsive_framework/responsive_framework.dart';

class FaqsSection extends StatelessWidget {
  final ThemeData theme;

  FaqsSection({
    super.key,
    required this.theme,
  });

  final List<Map<String, dynamic>> accordionData = [
    {
      'title': 'What services are offered by HPSG?',
      'content':
          'HPSG offers a diverse range of services, including but not limited to home maintenance, power washing, cleaning, plumbing, landscaping, drywall repair, interior door installation, exterior painting, re-screening patios, awning installation, and assembly.',
    },
    {
      'title': 'How does HPSG work for users?',
      'content':
          'HPSG simplifies the process for users. Sign up, browse services, select what you need, place an order, connect with your vendor, and enjoy top-notch service. Our dedicated teams ensure a smooth experience, and your feedback is always valued',
    },
    {
      'title': 'How do small local home service professinal businesses join HPSG?',
      'content':
          'Small local home service and repair businesses can easily join HPSG by signing up, showcasing their services, and becoming part of our community. Our platform provides a space for home repair professinals to connect with local customers and deliver exceptional services.',
    },
    {
      'title': 'What sets HPSG apart from other on-demand service platforms?',
      'content':
          'HPSG stands out with its user-friendly interface, dedicated teams of local home repair professionals and business owners, budget-friendly solutions, transparent pricing, and a community-focused approach. We prioritize innovation and aim to make every service experience extraordinary.',
    },
  ];

  @override
  Widget build(BuildContext context) {
    return PageSection(
      children: [
        ResponsiveRowColumnItem(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AutoSizeText(
                'Frequently Asked Questions',
                style: theme.textTheme.titleMedium,
              ),
              const SizedBox(height: k4),
              AutoSizeText(
                'Learn more about our services and how we ensure top-notch quality and customer satisfaction.',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: k8),
              Wrap(
                runSpacing: k3,
                children: accordionData.map((item) {
                  return AccordionItem(
                    title: item['title'],
                    content: AutoSizeText(
                      item['content'],
                      style: TextStyle(
                        fontSize: k3_5,
                        color: Colors.grey[600],
                      ),
                    ),
                  );
                }).toList(),
              )
            ],
          ),
        )
      ],
    );
  }
}
