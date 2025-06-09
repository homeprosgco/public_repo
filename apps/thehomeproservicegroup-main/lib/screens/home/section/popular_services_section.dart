import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class PopularServicesSection extends StatelessWidget {
  final ThemeData theme;

  PopularServicesSection({
    super.key,
    required this.theme,
  });

  final List<String> popularServicesImgLst = [
    'appliance_services',
    'bathroom_renovation',
    'cabinet_refinishing',
    'handyman',
    'landscaping',
    'window_replacement',
    'garage_repair',
    'flooring_upgrades'
  ];

  final List<String> popularServices = [
    'Appliance Repair',
    'Bathroom Renovation',
    'Cabinet Refinishing',
    'Handyman',
    'Landscaping',
    'Window Replacement',
    'Garage Door Repair',
    'Flooring Upgrades'
  ];

  @override
  Widget build(BuildContext context) {
    return PageSection(
      spacing: k6,
      children: [
        ResponsiveRowColumnItem(
          child: buildSectionHeader(theme, header: 'Popular home projects'),
        ),
        ResponsiveRowColumnItem(
          child: Container(
            // padding: const EdgeInsets.only(top: k10),
            decoration: BoxDecoration(
              border: Border.all(color: Colors.grey.shade300),
              borderRadius: BorderRadius.circular(k2),
            ),
            child: LayoutBuilder(
              builder: (context, constraints) {
                return ResponsiveGridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: ResponsiveGridDelegate(
                    maxCrossAxisExtent: ResponsiveUtil.responsiveValue(
                      context: context,
                      defaultValue: constraints.biggest.width,
                      sm: constraints.biggest.width / 2,
                      xl: constraints.biggest.width / 4,
                    ),
                    minCrossAxisExtent: ResponsiveUtil.responsiveValue(
                      context: context,
                      defaultValue: constraints.biggest.width,
                      sm: constraints.biggest.width / 2,
                    ),
                    mainAxisSpacing: k0,
                    crossAxisSpacing: k0,
                    childAspectRatio: ResponsiveUtil.responsiveValue(
                      context: context,
                      defaultValue: 2,
                      xs: ResponsiveUtil.customBreakpointValue(
                        context: context,
                        defaultValue: 3,
                        breakpointValues: [
                          BreakpointValue(breakpoint: 450, value: 4),
                        ],
                      ),
                      sm: 1.8,
                      lg: 4,
                    ),
                  ),
                  itemCount: 8,
                  itemBuilder: (BuildContext context, int index) {
                    return Container(
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        border: Border(
                          bottom: BorderSide(color: Colors.grey.shade300),
                          right: ResponsiveUtil.responsiveValue(
                            context: context,
                            defaultValue: BorderSide.none,
                            sm: BorderSide(color: Colors.grey.shade300),
                          ),
                        ),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: k6, vertical: k6),
                      child: Wrap(
                        alignment: WrapAlignment.center,
                        runAlignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        runSpacing: k4,
                        spacing: k4,
                        children: [
                          Image.asset('images/icon_pack/${popularServicesImgLst[index]}.png', width: k8, height: k8),
                          Container(
                            alignment: ResponsiveUtil.responsiveValue(
                              context: context,
                              defaultValue: MediaQuery.of(context).size.width < 351 ? Alignment.center : null,
                            ),
                            constraints: const BoxConstraints(minWidth: k52),
                            child: AutoSizeText(
                              popularServices[index],
                              style: theme.textTheme.bodyLarge,
                              maxLines: 1,
                              minFontSize: k4,
                              textAlign: ResponsiveUtil.responsiveValue(
                                context: context,
                                defaultValue: TextAlign.left,
                                sm: TextAlign.center,
                                md: TextAlign.left
                              ),
                            ),
                          )
                        ],
                      ),
                    );
                  },
                );
              },
            ),
          ),
        )
      ],
    );
  }
}
