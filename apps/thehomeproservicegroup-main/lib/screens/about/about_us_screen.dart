import 'package:flutter/material.dart';
import 'package:hpsg/screens/about/section/faqs_section.dart';
import 'package:hpsg/screens/about/section/why_choose_us_section.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/layout/screen_layout.dart';

import 'section/about_us_section.dart';

class AboutUsScreen extends StatelessWidget {
  const AboutUsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Screen(
      theme: theme,
      children: [
        buildHeader(context),
        const SizedBox(height: k20),
        AboutUsSection(theme: theme),
        const SizedBox(height: k28),
        WhyChooseUsSection(theme: theme),
        const SizedBox(height: k28),
        FaqsSection(theme: theme,),
      ],
    );
  }
}

