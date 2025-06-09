import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:auto_size_text/auto_size_text.dart';

/// A custom `CustomThemeText` widget that provides flexible text styling options,
/// including font size, weight, color, text alignment, and overflow handling.
/// It supports multiple text variants and custom font families.
///
/// ### Example Usage:
///
/// ```dart
/// CustomThemeText(
///   text: 'This is Display Large Text',
///   variant: TypographyVariant.displayLarge,
///   color: Colors.blue,
///   fontWeight: FontWeight.bold,
/// );
///
/// CustomThemeText(
///   text: 'This is Headline Medium Text with a Custom Font',
///   variant: TypographyVariant.headlineMedium,
///   color: Colors.red,
///   fontFamily: 'Roboto', // Custom font family.
/// );
///
/// CustomThemeText(
///   text: 'This is a bodyMedium variant text that might be a bit too long to fit in a single line.',
///   variant: TypographyVariant.bodyMedium,
///   textAlign: TextAlign.justify,
///   overflow: TextOverflow.ellipsis,
///   maxLines: 2,
/// );
///
/// CustomThemeText(
///   text: 'This is Label Large Text',
///   variant: TypographyVariant.labelLarge,
///   color: Colors.green,
/// );
/// ```
///
/// You can adjust the text style, font family, and other properties to fit your needs.
///
/// The default font used is Lato from the `google_fonts` package, but it can be overridden
/// by providing a `fontFamily` parameter.
class CustomThemeText extends StatelessWidget {
  /// The [TypographyVariant] to apply for the text style.
  /// This controls the font size and weight preset.
  /// Defaults to [TypographyVariant.bodyMedium].
  final TypographyVariant variant;

  /// The color of the text. If null, the default color from the theme is used.
  final Color? color;

  /// The weight of the font. Defaults to [FontWeight.normal].
  final FontWeight fontWeight;

  /// The actual text string to display. This is a required field.
  final String text;

  /// How the text should be aligned horizontally. Defaults to [TextAlign.start].
  final TextAlign textAlign;

  /// How visual overflow should be handled if the text exceeds its bounds.
  /// Defaults to [TextOverflow.clip].
  final TextOverflow overflow;

  /// The maximum number of lines to show in the text. If null, the text can expand to any number of lines.
  final int? maxLines;

  /// An optional custom font family to use. If provided, it will override the default font (Lato from Google Fonts).
  final String? fontFamily;

  /// Creates a [CustomThemeText] widget with customizable text style properties.
  ///
  /// - [text] is required.
  /// - [variant] specifies the style variant (e.g., display, headline, body, etc.).
  /// - [color], [fontWeight], [textAlign], [overflow], [maxLines], and [fontFamily] are optional.
  const CustomThemeText({
    super.key,
    this.variant = TypographyVariant.bodyMedium,
    this.color,
    this.fontWeight = FontWeight.normal,
    required this.text,
    this.textAlign = TextAlign.start,
    this.overflow = TextOverflow.clip,
    this.maxLines,
    this.fontFamily,
  });

  @override
  Widget build(BuildContext context) {
    // Get the base text style based on the variant and apply customizations.
    final TextStyle textStyle = _getTextStyle(context, variant).copyWith(
      color: color,
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
      minFontSize: 12,
    );
  }

  /// Maps each [TypographyVariant] to a specific [TextStyle], using GoogleFonts
  /// for default fonts.
  ///
  /// The default font is alexandriafrom the GoogleFonts package.
  TextStyle _getTextStyle(BuildContext context, TypographyVariant variant) {
    switch (variant) {
      case TypographyVariant.displayLarge:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.displayLarge!);
      case TypographyVariant.displayMedium:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.displayMedium!);
      case TypographyVariant.displaySmall:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.displaySmall!);
      case TypographyVariant.headlineLarge:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.headlineLarge!);
      case TypographyVariant.headlineMedium:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.headlineMedium!);
      case TypographyVariant.headlineSmall:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.headlineSmall!);
      case TypographyVariant.titleLarge:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.titleLarge!);
      case TypographyVariant.titleMedium:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.titleMedium!);
      case TypographyVariant.titleSmall:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.titleSmall!);
      case TypographyVariant.labelLarge:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.labelLarge!);
      case TypographyVariant.labelMedium:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.labelMedium!);
      case TypographyVariant.labelSmall:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.labelSmall!);
      case TypographyVariant.bodyLarge:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.bodyLarge!);
      case TypographyVariant.bodyMedium:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.bodyMedium!);
      case TypographyVariant.bodySmall:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.bodySmall!);
      default:
        return GoogleFonts.alexandria(textStyle: Theme.of(context).textTheme.bodyMedium!);
    }
  }
}

/// Enum representing different typography variants.
/// These variants map to different text styles defined in Flutter's [TextTheme].
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
