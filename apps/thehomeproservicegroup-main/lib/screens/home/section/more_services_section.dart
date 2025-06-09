import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/ui/ui.dart';
import 'package:hpsg/util/responsive_util.dart';
import 'package:responsive_framework/responsive_framework.dart';

class MoreServicesSection extends StatelessWidget {
  final ThemeData theme;

  MoreServicesSection({
    super.key,
    required this.theme,
  });

  final List<Widget> serviceItems = [
    const ServiceItem(
      imageUrl: 'images/services/lawn_care.jpg',
      title: 'Lawn Care',
      subtitle: '100 Services',
    ),
    const ServiceItem(
      imageUrl: 'images/services/handyman.jpg',
      title: 'Handyman',
      subtitle: '80 Services',
    ),
    const ServiceItem(
      imageUrl: 'images/services/carpenter.jpg',
      title: 'Carpenter',
      subtitle: '300+ Services',
    ),
    const ServiceItem(
      imageUrl: 'images/services/cleaning_services.jpeg',
      title: 'Cleaning Services',
      subtitle: '50 Services',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return PageSection(
      designGridColumnHeight: 0,
      spacing: k12,
      padding: const EdgeInsets.symmetric(horizontal: k4),
      children: [
        ResponsiveRowColumnItem(
          child: buildSectionHeader(
            theme,
            spacing: k2,
            header: 'Service you might also like',
            body: 'Get connected with expert home pros based on specific project needs including budget & location.',
          ),
        ),
        ResponsiveRowColumnItem(
          child: LayoutBuilder(
            builder: (context, constraints) {
              return ResponsiveGridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: ResponsiveGridDelegate(
                    maxCrossAxisExtent: ResponsiveUtil.responsiveValue(
                      context: context,
                      defaultValue: MediaQuery.of(context).size.width < 350 ? constraints.biggest.width : constraints.biggest.width / 2,
                      lg: constraints.biggest.width / 4,
                    ),
                    mainAxisSpacing: k4,
                    crossAxisSpacing: k4,
                    childAspectRatio: 1.1),
                itemCount: 4,
                itemBuilder: (BuildContext context, int index) {
                  return serviceItems[index];
                },
              );
            },
          ),
        )
      ],
    );
  }
}
