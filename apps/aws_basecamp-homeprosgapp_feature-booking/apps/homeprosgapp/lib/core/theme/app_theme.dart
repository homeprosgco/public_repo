import 'package:flutter/material.dart';

import 'colors_theme.dart';
import 'custom_theme_border_radius_theme.dart';

class AppTheme {
  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme(
      primary: primary, // The primary color of the app
      onPrimary: onPrimary, // Color for text and icons on top of primary color
      primaryContainer: primaryContainer, // The container color for the primary color
      onPrimaryContainer: onPrimaryContainer, // Text color on primaryContainer

      secondary: secondary, // Secondary color of the app
      onSecondary: onSecondary, // Color for text and icons on top of secondary color
      secondaryContainer: secondaryContainer, // Secondary container color
      onSecondaryContainer: onSecondaryContainer, // Text color on secondaryContainer

      tertiary: tertiary, // Tertiary color of the app
      onTertiary: onTertiary, // Color for text and icons on top of tertiary color
      tertiaryContainer: tertiaryContainer, // Tertiary container color
      onTertiaryContainer: onTertiaryContainer, // Text color on tertiaryContainer

      error: error, // Error color of the app
      onError: onError, // Color for text and icons on top of error color
      errorContainer: errorContainer, // Error container color
      onErrorContainer: onErrorContainer, // Text color on errorContainer

      surface: surface, // Surface color of the app (for cards, sheets, etc.)
      onSurface: onSurface, // Text color on top of the surface color
      surfaceContainerHighest: surfaceDim, // A variant of the surface color
      onSurfaceVariant: onSurfaceVariant, // Text color on top of surfaceVariant

      outline: outline, // Color for outlines (borders, dividers, etc.)
      outlineVariant: outlineVariant, // A variant color for outlines

      inverseSurface: inverseSurface, // Inverse surface color
      onInverseSurface: white, // Color for text and icons on top of inverseSurface
      inversePrimary: inversePrimary, // Inverse primary color
      shadow: shadow, // Shadow color

      surfaceTint: surfaceTint, // Tint color for surfaces
      scrim: scrim, // Scrim color for modals and dialogs
      brightness: Brightness.light, // Overall brightness of the theme (Light/Dark)
    ),

    scaffoldBackgroundColor: background, // Background color of the scaffold
    cardColor: surface, // Color for cards

    appBarTheme: AppBarTheme(
      color: primary, // AppBar background color
      foregroundColor: onPrimary, // AppBar text color
    ),

    buttonTheme: ButtonThemeData(
      buttonColor: primary, // Default button color
      textTheme: ButtonTextTheme.primary, // Text color on buttons
    ),

    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        foregroundColor: onPrimary,
        backgroundColor: primary,
      ),
    ),

    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        backgroundColor: primary,
        side: BorderSide(color: outline), // Button outline color
      ),
    ),

    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: primary, // FAB background color
      foregroundColor: onPrimary, // FAB icon/text color
    ),
    textTheme: const TextTheme(
      displayLarge: TextStyle(fontSize: 57, fontWeight: FontWeight.bold),
      displayMedium: TextStyle(
        fontSize: 45,
      ),
      displaySmall: TextStyle(fontSize: 36),
      headlineLarge: TextStyle(fontSize: 32),
      headlineMedium: TextStyle(fontSize: 28, fontWeight: FontWeight.w400),
      headlineSmall: TextStyle(fontSize: 24),
      titleLarge: TextStyle(fontSize: 22),
      titleMedium: TextStyle(fontSize: 20),
      titleSmall: TextStyle(fontSize: 18),
      labelLarge: TextStyle(fontSize: 16),
      labelMedium: TextStyle(fontSize: 14),
      labelSmall: TextStyle(fontSize: 12),
      bodyLarge: TextStyle(fontSize: 16),
      bodyMedium: TextStyle(fontSize: 14),
      bodySmall: TextStyle(fontSize: 12),
    ),
    // Define the default input decoration theme for all TextFields
    inputDecorationTheme: InputDecorationTheme(
      labelStyle: TextStyle(color: onSurface.withOpacity(.5), fontSize: 14),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2.0),
        borderSide: BorderSide(
          color: Colors.grey.shade400, // Set your desired color here
          width: 0.5,
        ),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2.0),
        borderSide: BorderSide(
          color: Colors.grey.shade400, // Set your desired color here
          width: 0.5,
        ),
      ),
      errorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2.0),
        borderSide: const BorderSide(
          color: Colors.red, // Set your desired color here
          width: 0.5,
        ),
      ),
      focusedErrorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2.0),
        borderSide: const BorderSide(
          color: Colors.red, // Set your desired color here
          width: 0.5,
        ),
      ),
    ),
    extensions: <ThemeExtension<dynamic>>[
      CustomThemeBorderRadius(
        xs: BorderRadius.circular(4),
        sm: BorderRadius.circular(8),
        md: BorderRadius.circular(16),
        lg: BorderRadius.circular(32),
        xl: BorderRadius.circular(64),
        xxl: BorderRadius.circular(double.infinity),
      ),
    ],
  );
}
