import 'package:flutter/material.dart';

import 'screen_section.dart';

/// The ScreenLayout widget responsible for laying out
/// its children in a vertical column with cross alignment stretched.
/// Each child is wrapped with vertical padding to separate it from others.
/// This is useful for screen sections similar to an HTML section element.
class ScreenSectionLayout extends StatelessWidget {
  final List<ScreenSection> sections;

  const ScreenSectionLayout({super.key, required this.sections});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: sections.map((section) {
        return Padding(
          padding: EdgeInsets.only(
            top: section.topPadding,
            bottom: section.bottomPadding,
          ),
          child: section.widget,
        );
      }).toList(),
    );
  }
}
