import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/responsive_util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class VettedProSection extends StatelessWidget {
  final ThemeData theme;

  const VettedProSection({
    super.key,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return PageSection(
      padding: const EdgeInsets.only(left: k4, right: k4),
      background: Container(
        color: const Color(0xFFe6eff6),
        constraints: BoxConstraints(
          minHeight: ResponsiveUtil.responsiveHeight(
            context: context,
            defaultValue: .5,
            xs: .45,
          ),
        ),
      ),
      children: [
        ResponsiveRowColumnItem(
          child: Container(
            constraints: BoxConstraints(
              minHeight: ResponsiveUtil.responsiveHeight(
                context: context,
                defaultValue: .5,
                xs: .45,
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Wrap(
                  alignment: WrapAlignment.center,
                  runAlignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  runSpacing: k4,
                  spacing: k4,
                  children: [
                    Image.asset('images/trusted_icon.png'),
                    AutoSizeText(
                      'Vetted, Screened Professionals',
                      style: theme.textTheme.titleLarge?.copyWith(
                        color: const Color(
                          0xFF001d32,
                        ),
                      ),
                      textAlign: TextAlign.center,
                    )
                  ],
                ),
                const SizedBox(height: k10),
                AutoSizeText(
                  'Home service providers booked and paid for through The Home Pro Service Group are performed by experienced, vetted providers who are highly rated by customers like you.',
                  style: TextStyle(
                    color: Colors.grey[600],
                    fontSize: k4
                  ),
                  textAlign: TextAlign.center,
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}
