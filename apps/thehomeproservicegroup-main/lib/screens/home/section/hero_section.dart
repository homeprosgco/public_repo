import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class HeroSection extends StatelessWidget {
  final ThemeData theme;

  const HeroSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      designGridColumnHeight: 0,
      spacing: k16,
      background: Container(
        constraints: BoxConstraints(
          minHeight: ResponsiveUtil.responsiveHeight(
            context: context,
            defaultValue: 1.1,
            sm: 1,
            md: .7,
            lg: .66,
            xl: .5,
          ),
        ),
        child: Image.asset(
          'images/hero-section-bg.png',
          fit: BoxFit.cover,
          color: Colors.black.withOpacity(.48),
          colorBlendMode: BlendMode.darken,
        ),
      ),
      children: [
        _buildHeader(context),
        _buildContent(context, theme),
      ],
    );
  }
}

ResponsiveRowColumnItem _buildContent(BuildContext context, ThemeData theme) {
  return ResponsiveRowColumnItem(
    child: Column(
      children: [
        Container(
          padding: ResponsiveUtil.responsiveValue(
            context: context,
            defaultValue: const EdgeInsets.symmetric(horizontal: k4, vertical: k2),
            sm: const EdgeInsets.symmetric(horizontal: k12, vertical: k2),
          ),
          color: theme.colorScheme.primary.withOpacity(.3),
          child: AutoSizeText(
            'Fast Response - Quality Works',
            style: theme.textTheme.bodyLarge?.copyWith(
              color: Colors.white,
              fontWeight: FontWeight.w600,
            ),
            maxLines: 1,
          ),
        ),
        const SizedBox(
          height: k3_5,
        ),
        AutoSizeText(
          'Nonstop Services That\n Make Life Better',
          style: theme.textTheme.displayMedium?.copyWith(color: Colors.white),
          textAlign: TextAlign.center,
          maxLines: 2,
        ),
        SearchInput(theme: theme),
        const SizedBox(height: k8),
        ResponsiveRowColumn(
          layout: ResponsiveRowColumnType.COLUMN,
          columnSpacing: k4,
          children: [
            ResponsiveRowColumnItem(
              child: AutoSizeText(
                'Suggestions For You:',
                style: theme.textTheme.bodyLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
            ResponsiveRowColumnItem(
              child: Wrap(
                runSpacing: k3,
                spacing: k3,
                children: ['Handyman', 'Plumbing', 'Landscaping', 'AC Repair'].map((category) {
                  return Container(
                    padding: const EdgeInsets.symmetric(horizontal: k4, vertical: k2),
                    // margin: const EdgeInsets.only(left: k6),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(k8),
                    ),
                    child: AutoSizeText(
                      category,
                      style: theme.textTheme.labelLarge?.copyWith(
                        color: const Color(0xFFFF6635),
                      ),
                    ),
                  );
                }).toList(),
              ),
            )
          ],
        ),
      ],
    ),
  );
}

ResponsiveRowColumnItem _buildHeader(BuildContext context) {
  return ResponsiveRowColumnItem(
    child: Container(
      margin: const EdgeInsets.only(top: k4),
      padding: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: const EdgeInsets.symmetric(vertical: k4, horizontal: k4),
        sm: const EdgeInsets.symmetric(vertical: k4, horizontal: k6),
      ),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(
          Radius.circular(k12),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Flexible(
            child: Image.asset(
              'images/logo.png',
            ),
          ),
          ResponsiveUtil.responsiveVisibility(
            context: context,
            visibleOnXXS: true,
            visibleOnMD: false,
            child: const Icon(
              Icons.menu,
              color: Color(0xFFff6635),
              size: k6,
            ),
          )
        ],
      ),
    ),
  );
}
