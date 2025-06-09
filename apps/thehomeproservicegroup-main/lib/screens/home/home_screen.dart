import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';

import 'section/become_a_pro_section.dart';
import 'section/contact_now_section.dart';
import 'section/feature_section.dart';
import 'section/hero_section.dart';
import 'section/more_services_section.dart';
import 'section/popular_services_section.dart';
import 'section/service_categories_section.dart';
import 'section/testimonials_section.dart';
import 'section/top_cities_section.dart';
import 'section/vetted_pro_section.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);

    return Screen(
      theme: theme,
      children: [
        HeroSection(theme: theme),
        const SizedBox(height: k24),
        ServiceCategoriesSection(theme: theme),
        const SizedBox(height: k20),
        MoreServicesSection(theme: theme),
        const SizedBox(height: k36),
        PopularServicesSection(theme: theme),
        const SizedBox(height: k44),
        FeatureSection(theme: theme),
        const SizedBox(height: k48),
        TopCitiesSection(theme: theme),
        const SizedBox(height: k40),
        VettedProSection(theme: theme),
        const SizedBox(height: k32),
        ContactNowSection(theme: theme),
        const SizedBox(height: k40),
        TestimonialsSection(theme: theme),
        const SizedBox(height: k40),
        BecomeAProSection(theme: theme),
      ],
    );
  }
}
