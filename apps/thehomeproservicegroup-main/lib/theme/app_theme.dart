import 'package:flutter/material.dart';

import 'colors.dart';
import 'spacing.dart';
import 'typography.dart';

class AppTheme {
  static ThemeData get theme {
    // Define the base theme data
    return ThemeData(
      useMaterial3: true,
      // Primary color used across the app
      primaryColor: primary,
      // Color scheme with additional specifications
      scaffoldBackgroundColor: background,
      colorScheme: ColorScheme.fromSwatch().copyWith(
        primary: primary,
        onPrimary: white,
        primaryContainer: primaryContainer,
        onPrimaryContainer: onPrimaryContainer,
        inversePrimary: inversePrimary,
        secondary: secondary,
        secondaryContainer: secondaryContainer,
        onSecondaryContainer: onSecondaryContainer,
        tertiary: tertiary,
        onTertiary: onTertiary,
        tertiaryContainer: tertiaryContainer,
        onTertiaryContainer: onTertiaryContainer,
        surface: surface,
        onSurface: onSurface,
        onSurfaceVariant: onSurfaceVariant,
        surfaceTint: surfaceTint,
        inverseSurface: inverseSurface,
        onInverseSurface: background,
        outline: outline,
        outlineVariant: outlineVariant,
      ),
      // Text theming
      textTheme: TextTheme(
        displayLarge: displayLgTextStyle,
        displayMedium: displayMdTextStyle,
        displaySmall: displaySmTextStyle,
        headlineLarge: headlineLgTextStyle,
        headlineMedium: headlineMdTextStyle,
        headlineSmall: headlineSmTextStyle,
        titleLarge: titleLgTextStyle,
        titleMedium: titleMdTextStyle,
        titleSmall: titleSmTextStyle,
        bodyLarge: bodyLgTextStyle,
        bodyMedium: bodyMdTextStyle,
        bodySmall: bodySmTextStyle,
        labelLarge: labelLgTextStyle,
        labelMedium: labelMdTextStyle,
        labelSmall: labelSmTextStyle,
      ),
      primaryTextTheme: TextTheme(bodyLarge: bodyLgTextStyle,),
      // Button theming
      buttonTheme: ButtonThemeData(
        height: k14,
        shape: const RoundedRectangleBorder(),
        buttonColor: primary, // Background color of buttons
        textTheme: ButtonTextTheme.primary, // Use the primary text color (from the color scheme)
      ),
    );
  }
}
