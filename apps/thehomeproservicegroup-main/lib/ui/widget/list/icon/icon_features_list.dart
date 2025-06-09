import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';

class IconFeaturesList extends StatelessWidget {
  final List<IconFeatureData> features;
  final Color iconColor;
  final Color titleColor;
  final Color descriptionColor;
  final double iconSize;
  final double titleFontSize;
  final double descriptionFontSize;
  final CrossAxisAlignment columnAlignment;
  final double iconToTextSpacing;
  final double titleToDescriptionSpacing;
  final EdgeInsets iconContainerPadding;
  final Color iconContainerColor;
  final BorderRadius iconContainerBorderRadius;

  const IconFeaturesList({
    super.key,
    required this.features,
    this.iconColor = Colors.grey,
    this.titleColor = Colors.black,
    this.descriptionColor = Colors.grey,
    this.iconSize = 48.0,
    this.titleFontSize = 18.0,
    this.descriptionFontSize = 14.0,
    this.columnAlignment = CrossAxisAlignment.start,
    this.iconToTextSpacing = 16.0,
    this.titleToDescriptionSpacing = 4.0,
    this.iconContainerPadding = EdgeInsets.zero,
    this.iconContainerColor = Colors.transparent,
    this.iconContainerBorderRadius = BorderRadius.zero,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: features.map((feature) {
        return IconFeature(
          icon: feature.icon,
          color: iconColor,
          title: feature.title,
          description: feature.description,
          iconSize: iconSize,
          titleColor: titleColor,
          descriptionColor: descriptionColor,
          titleFontSize: titleFontSize,
          descriptionFontSize: descriptionFontSize,
          columnAlignment: columnAlignment,
          iconToTextSpacing: iconToTextSpacing,
          titleToDescriptionSpacing: titleToDescriptionSpacing,
          iconContainerColor: iconContainerColor,
          iconContainerPadding: iconContainerPadding,
          iconContainerBorderRadius: iconContainerBorderRadius,
        );
      }).toList(),
    );
  }
}

class IconFeature extends StatelessWidget {
  final IconData icon;
  final Color color;
  final String title;
  final String description;
  final Color titleColor;
  final Color descriptionColor;
  final double iconSize;
  final double titleFontSize;
  final double descriptionFontSize;
  final CrossAxisAlignment columnAlignment;
  final double iconToTextSpacing;
  final double titleToDescriptionSpacing;
  final EdgeInsets iconContainerPadding;
  final Color iconContainerColor;
  final BorderRadius iconContainerBorderRadius;

  const IconFeature({
    super.key,
    required this.icon,
    required this.color,
    required this.title,
    required this.description,
    this.titleColor = Colors.black,
    this.descriptionColor = Colors.grey,
    this.iconSize = 48.0,
    this.titleFontSize = 18.0,
    this.descriptionFontSize = 14.0,
    this.columnAlignment = CrossAxisAlignment.start,
    this.iconToTextSpacing = 16.0,
    this.titleToDescriptionSpacing = 4.0,
    this.iconContainerPadding = EdgeInsets.zero,
    this.iconContainerColor = Colors.transparent,
    this.iconContainerBorderRadius = BorderRadius.zero,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: Wrap(
        runSpacing: k3,
        children: [
          Container(
            padding: iconContainerPadding,
            decoration: BoxDecoration(
              color: iconContainerColor,
              borderRadius: iconContainerBorderRadius
            ),
            child: Icon(
              icon,
              color: color,
              size: iconSize,
            ),
          ),
          Container(
            constraints: const  BoxConstraints(minWidth: k64),
            child: Column(
              crossAxisAlignment: columnAlignment,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: titleFontSize,
                    fontWeight: FontWeight.w500,
                    color: titleColor,
                  ),
                ),
                SizedBox(height: titleToDescriptionSpacing),
                Text(
                  description,
                  style: TextStyle(
                    fontSize: descriptionFontSize,
                    color: descriptionColor,
                    fontWeight: FontWeight.w100,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class IconFeatureData {
  final IconData icon;
  final String title;
  final String description;

  IconFeatureData({
    required this.icon,
    required this.title,
    required this.description,
  });
}
