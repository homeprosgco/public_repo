import 'package:flutter/material.dart';

class ImageFeaturesList extends StatelessWidget {
  final List<ImageFeatureData> features;

  const ImageFeaturesList({
    super.key,
    required this.features,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: features.map((feature) {
        return ImageFeature(
          imagePath: feature.imagePath,
          title: feature.title,
          description: feature.description,
        );
      }).toList(),
    );
  }
}

class ImageFeature extends StatelessWidget {
  final String imagePath;
  final String title;
  final String description;

  const ImageFeature({
    super.key,
    required this.imagePath,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.asset(imagePath, width: 48, height: 48),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  description,
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.grey[600],
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

class ImageFeatureData {
  final String imagePath;
  final String title;
  final String description;

  ImageFeatureData({
    required this.imagePath,
    required this.title,
    required this.description,
  });
}
