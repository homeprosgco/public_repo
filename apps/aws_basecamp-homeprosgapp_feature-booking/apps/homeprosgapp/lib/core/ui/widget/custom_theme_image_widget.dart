import 'package:flutter/material.dart';

/// Enum for image sizes
enum ImageSize { xxs, xs, sm, md, lg, xl, xxl, xxxl, xxxxl }

/// Enum for border styles
enum ImageBorderStyle { none, thin, thick }

/// Enum for shadow styles
enum ImageShadow { none, light, medium, heavy }

/// Enum for border radius
enum ImageBorderRadius { none, small, medium, large, circular }

class CustomThemeImage extends StatelessWidget {
  final String imageUrl;
  final bool isAsset;
  final ImageSize size;
  final ImageBorderStyle borderStyle;
  final ImageShadow shadowStyle;
  final ImageBorderRadius borderRadiusStyle;
  final Widget? overlay; // Widget to position on top of the image

  const CustomThemeImage({
    super.key,
    required this.imageUrl,
    this.isAsset = true,
    this.size = ImageSize.md,
    this.borderStyle = ImageBorderStyle.none,
    this.shadowStyle = ImageShadow.none,
    this.borderRadiusStyle = ImageBorderRadius.none,
    this.overlay,
  });

  @override
  Widget build(BuildContext context) {
    final sizeDimensions = _getSize(size);
    final border = _getBorder(borderStyle);
    final borderRadius = _getBorderRadius(borderRadiusStyle);
    final shadow = _getShadow(shadowStyle);

    return Stack(
      alignment: Alignment.center,
      children: [
        Container(
          width: sizeDimensions.width,
          height: sizeDimensions.height,
          decoration: BoxDecoration(
            border: border,
            borderRadius: borderRadius,
            boxShadow: shadow,
            image: DecorationImage(
              image: isAsset ? AssetImage(imageUrl) as ImageProvider : NetworkImage(imageUrl),
              fit: BoxFit.cover,
            ),
          ),
        ),
        if (overlay != null) overlay!,
      ],
    );
  }

  // Map ImageSize enum to dimensions
  Size _getSize(ImageSize size) {
    switch (size) {
      case ImageSize.xxs:
        return const Size(40, 40);
      case ImageSize.xs:
        return const Size(60, 60);
      case ImageSize.sm:
        return const Size(80, 80);
      case ImageSize.md:
        return const Size(100, 100);
      case ImageSize.lg:
        return const Size(150, 150);
      case ImageSize.xl:
        return const Size(200, 200);
      case ImageSize.xxl:
        return const Size(250, 250);
      case ImageSize.xxxl:
        return const Size(300, 300);
      case ImageSize.xxxxl:
        return const Size(400, 400);
      default:
        return const Size(100, 100); // Default to medium
    }
  }

  // Map ImageBorderStyle enum to border
  Border? _getBorder(ImageBorderStyle style) {
    switch (style) {
      case ImageBorderStyle.thin:
        return Border.all(color: Colors.grey, width: 1.0);
      case ImageBorderStyle.thick:
        return Border.all(color: Colors.black, width: 3.0);
      case ImageBorderStyle.none:
      default:
        return null;
    }
  }

  // Map ImageBorderRadius enum to border radius
  BorderRadius _getBorderRadius(ImageBorderRadius radiusStyle) {
    switch (radiusStyle) {
      case ImageBorderRadius.small:
        return BorderRadius.circular(8.0);
      case ImageBorderRadius.medium:
        return BorderRadius.circular(16.0);
      case ImageBorderRadius.large:
        return BorderRadius.circular(32.0);
      case ImageBorderRadius.circular:
        return BorderRadius.circular(1000.0); // Fully circular
      case ImageBorderRadius.none:
      default:
        return BorderRadius.zero;
    }
  }

  // Map ImageShadow enum to box shadows
  List<BoxShadow> _getShadow(ImageShadow shadowStyle) {
    switch (shadowStyle) {
      case ImageShadow.light:
        return [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4.0,
            offset: const Offset(2, 2),
          ),
        ];
      case ImageShadow.medium:
        return [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 8.0,
            offset: const Offset(4, 4),
          ),
        ];
      case ImageShadow.heavy:
        return [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 12.0,
            offset: const Offset(6, 6),
          ),
        ];
      case ImageShadow.none:
      default:
        return [];
    }
  }
}
