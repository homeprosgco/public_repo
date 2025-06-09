import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:auto_size_text/auto_size_text.dart';

class CustomThemeText extends StatelessWidget {
  final TypographyVariant variant;
  final Color? color;
  final FontWeight fontWeight;
  final String text;
  final TextAlign textAlign;
  final TextOverflow overflow;
  final int? maxLines;
  final String? fontFamily;
  final FontKey fontKey; // New property to determine the font key (primary, secondary, neutral)

  const CustomThemeText({
    super.key,
    this.variant = TypographyVariant.bodyLarge,
    this.color,
    this.fontWeight = FontWeight.normal,
    required this.text,
    this.textAlign = TextAlign.start,
    this.overflow = TextOverflow.clip,
    this.maxLines,
    this.fontFamily,
    this.fontKey = FontKey.neutral,
  });

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;

    // Get the base text style based on the variant and apply customizations.
    final TextStyle textStyle = _getTextStyle(context, variant).copyWith(
      color: color ?? colorScheme.onSurface,
      fontWeight: fontWeight,
      fontFamily: fontFamily, // Apply custom font family if provided.
    );

    // Return the Text widget with the customized style.
    return AutoSizeText(
      text,
      style: textStyle,
      textAlign: textAlign,
      overflow: overflow,
      maxLines: maxLines,
      minFontSize: 10,
    );
  }

  /// Selects the appropriate TextStyle based on the fontKey and TypographyVariant.
  TextStyle _getTextStyle(BuildContext context, TypographyVariant variant) {
    final googleFont = _getGoogleFontForKey(fontKey);

    switch (variant) {
      case TypographyVariant.displayLarge:
        return googleFont(textStyle: Theme.of(context).textTheme.displayLarge!);
      case TypographyVariant.displayMedium:
        return googleFont(textStyle: Theme.of(context).textTheme.displayMedium!);
      case TypographyVariant.displaySmall:
        return googleFont(textStyle: Theme.of(context).textTheme.displaySmall!);
      case TypographyVariant.headlineLarge:
        return googleFont(textStyle: Theme.of(context).textTheme.headlineLarge!);
      case TypographyVariant.headlineMedium:
        return googleFont(textStyle: Theme.of(context).textTheme.headlineMedium!);
      case TypographyVariant.headlineSmall:
        return googleFont(textStyle: Theme.of(context).textTheme.headlineSmall!);
      case TypographyVariant.titleLarge:
        return googleFont(textStyle: Theme.of(context).textTheme.titleLarge!);
      case TypographyVariant.titleMedium:
        return googleFont(textStyle: Theme.of(context).textTheme.titleMedium!);
      case TypographyVariant.titleSmall:
        return googleFont(textStyle: Theme.of(context).textTheme.titleSmall!);
      case TypographyVariant.labelLarge:
        return googleFont(textStyle: Theme.of(context).textTheme.labelLarge!);
      case TypographyVariant.labelMedium:
        return googleFont(textStyle: Theme.of(context).textTheme.labelMedium!);
      case TypographyVariant.labelSmall:
        return googleFont(textStyle: Theme.of(context).textTheme.labelSmall!);
      case TypographyVariant.bodyLarge:
        return googleFont(textStyle: Theme.of(context).textTheme.bodyLarge!);
      case TypographyVariant.bodyMedium:
        return googleFont(textStyle: Theme.of(context).textTheme.bodyMedium!);
      case TypographyVariant.bodySmall:
        return googleFont(textStyle: Theme.of(context).textTheme.bodySmall!);
      default:
        return googleFont(textStyle: Theme.of(context).textTheme.bodyMedium!);
    }
  }

  /// Maps FontKey values to specific GoogleFonts functions.
  Function _getGoogleFontForKey(FontKey key) {
    switch (key) {
      case FontKey.primary:
        return GoogleFonts.sourceSans3; // Example font for primary
      case FontKey.secondary:
        return GoogleFonts.openSans; // Example font for secondary
      case FontKey.neutral:
      default:
        return GoogleFonts.figtree; // Default font (neutral)
    }
  }
}

/// Enum representing different typography variants.
enum TypographyVariant {
  displayLarge,
  displayMedium,
  displaySmall,
  headlineLarge,
  headlineMedium,
  headlineSmall,
  titleLarge,
  titleMedium,
  titleSmall,
  labelLarge,
  labelMedium,
  labelSmall,
  bodyLarge,
  bodyMedium,
  bodySmall,
}

enum FontKey {
  primary,
  secondary,
  neutral, // Default value
}
