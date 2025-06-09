import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class BecomeAProSection extends StatelessWidget {
  final ThemeData theme;

  const BecomeAProSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      designGridColumnHeight: k64,
      layout: ResponsiveUtil.getResponsiveRowColumnType(context, md: ResponsiveRowColumnType.ROW),
      spacing: k12,
      children: [
        ResponsiveRowColumnItem(
          rowFlex: 5,
          child: buildSectionHeader(
            theme,
            header: 'Are You a Home Improvement or Service Pro?',
            body:
                'The Home Pro Service Group offers a range of solutions that can help you attract new customers and convert more leads. Find out how we can help your business.',
          ),
        ),
        ResponsiveRowColumnItem(
          rowFlex: 3,
          child: SizedBox(
            height: ResponsiveUtil.responsiveValue(
              context: context,
              defaultValue: k16,
              md: k52,
            ),
            child: Align(
              alignment: Alignment.bottomCenter,
              child: SizedBox(
                width: double.infinity,
                child: OutlineButton(
                  text: 'Join Our Network',
                  borderColor: theme.colorScheme.primary,
                  onPressed: () {},
                ),
              ),
            ),
          ),
        )
      ],
    );
  }
}
