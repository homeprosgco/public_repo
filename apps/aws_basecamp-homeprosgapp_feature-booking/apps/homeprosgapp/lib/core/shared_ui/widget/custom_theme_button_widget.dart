import 'package:flutter/material.dart';
import '../../theme/theme.dart';

/// A highly customizable `CustomThemeButton` widget that allows you to control
/// its appearance and behavior. This button supports different variants (solid, outlined, text),
/// colors, sizes, border radius styles, and icon positions, making it highly versatile for any UI.
///
/// ### Example Usage:
///
/// ```dart
/// // Solid Button Example
/// CustomThemeButton(
///   child: Text('Solid Button'),
///   variant: 'solid',
///   color: 'primary',
///   size: 'medium',
///   borderRadius: 'rounded-md',
///   onPressed: () {
///     print('Solid Button Pressed');
///   },
/// );
///
/// // Outlined Button with Icon Example
/// CustomThemeButton(
///   child: Text('Outlined Button'),
///   variant: 'outlined',
///   color: 'secondary',
///   size: 'large',
///   borderRadius: 'rounded-lg',
///   icon: Icon(Icons.add),
///   iconPosition: 'start',
///   onPressed: () {
///     print('Outlined Button Pressed');
///   },
/// );
///
/// // Text Button Example
/// CustomThemeButton(
///   child: Text('Text Button'),
///   variant: 'text',
///   color: 'tertiary',
///   size: 'small',
///   borderRadius: 'rounded-sm',
///   onPressed: () {
///     print('Text Button Pressed');
///   },
/// );
/// ```

class CustomThemeButton extends StatelessWidget {
  /// The child widget to display inside the button (typically a `Text` widget).
  final Widget? child;

  /// The button variant that defines its style.
  /// - `'solid'`: Filled button with a background color.
  /// - `'outlined'`: Button with an outlined border.
  /// - `'text'`: Button with only text, no background or border.
  final String variant;

  /// The button color scheme.
  /// - `'primary'`: Primary color (usually blue).
  /// - `'secondary'`: Secondary color (usually green).
  /// - `'tertiary'`: Tertiary color (usually purple).
  /// - `'neutral'`: Neutral color (usually grey).
  final String color;

  /// The size of the button.
  /// - `'small'`: Compact size.
  /// - `'medium'`: Default size.
  /// - `'large'`: Large size.
  final String size;

   /// The size of the button.
  /// - `'small'`: Compact size.
  /// - `'medium'`: Default size.
  /// - `'large'`: Large size.
  final String paddingSize;

  /// Border radius options for the button.
  /// - `'none'`: No border radius (sharp edges).
  /// - `'sm'`: Small rounded corners.
  /// - `'md'`: Medium rounded corners.
  /// - `'lg'`: Large rounded corners.
  /// - `'xl'`: Extra-large rounded corners.
  /// - `'full'`: Fully rounded, circular shape.
  final String borderRadius;

  /// Optional icon to display in the button.
  final Widget? icon;

  /// Position of the icon relative to the text.
  /// - `'start'`: Icon at the start (before text).
  /// - `'end'`: Icon at the end (after text).
  final String iconPosition;

  /// Callback function triggered when the button is pressed.
  final VoidCallback? onPressed;

  /// Optional class name for custom styling (not used directly in Flutter).
  final String? className;

  /// Optional custom padding for the button.
  final EdgeInsets customPadding;

  /// Optional custom padding for the button.
  final Size customFixedSize;

  final String keyName;

  const CustomThemeButton({
    super.key,
    required this.keyName,
    this.child,
    this.variant = 'solid',
    this.color = 'primary',
    this.size = 'medium',
    this.borderRadius = 'rounded-md',
    this.icon,
    this.iconPosition = 'start',
    this.onPressed,
    this.className,
    this.customFixedSize = const Size(k8, k64),
    this.customPadding = EdgeInsets.zero,
    this.paddingSize = 'medium'
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    switch (variant) {
      case 'outlined':
        return _buildOutlinedButton(colorScheme);
      case 'text':
        return _buildTextButton(colorScheme);
      default:
        return _buildElevatedButton(colorScheme);
    }
  }

  Widget _buildElevatedButton(ColorScheme colorScheme) {
    return ElevatedButton(
      key: Key(keyName),
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        padding: _getPadding(),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
        backgroundColor: _getBackgroundColor(colorScheme),
        foregroundColor: _getTextColor(colorScheme),
        elevation: k0,
      ),
      child: _buildContent(),
    );
  }

  Widget _buildOutlinedButton(ColorScheme colorScheme) {
    return OutlinedButton(
      key: Key(keyName),
      onPressed: onPressed,
      style: OutlinedButton.styleFrom(
        padding: _getPadding(),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
        foregroundColor: _getTextColor(colorScheme),
        side: BorderSide(color: _getBackgroundColor(colorScheme)),
      ),
      child: _buildContent(),
    );
  }

  Widget _buildTextButton(ColorScheme colorScheme) {
    return TextButton(
      key: Key(keyName),
      onPressed: onPressed,
      style: TextButton.styleFrom(
        padding: _getPadding(),
        foregroundColor: _getTextColor(colorScheme),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
      ),
      child: _buildContent(),
    );
  }

  EdgeInsetsGeometry _getPadding() {
    switch (paddingSize) {
      case 'custom':
        return customPadding;
      case 'small':
        return const EdgeInsets.symmetric(horizontal: 12, vertical: 8);
      case 'large':
        return const EdgeInsets.symmetric(horizontal: 20, vertical: 12);
      default:
        return const EdgeInsets.symmetric(horizontal: 16, vertical: 10);
    }
  }

  Size _getFixedSize() {
    switch (size) {
      case 'custom':
        return customFixedSize;
      case 'small':
        return const Size(k12, k72);
      case 'large':
        return const Size(k12, k72);
      default:
        return const Size(k12, k72);
    }
  }

  BorderRadius _getBorderRadius() {
    switch (borderRadius) {
      case 'none':
        return BorderRadius.zero;
      case 'rounded-sm':
        return BorderRadius.circular(4);
      case 'rounded':
        return BorderRadius.circular(8);
      case 'rounded-lg':
        return BorderRadius.circular(16);
      case 'rounded-xl':
        return BorderRadius.circular(24);
      case 'rounded-full':
        return BorderRadius.circular(50);
      default:
        return BorderRadius.circular(12);
    }
  }

  Color _getBackgroundColor(ColorScheme colorScheme) {
    switch (color) {
      case 'secondary':
        return colorScheme.secondary;
      case 'tertiary':
        return colorScheme.tertiary;
      case 'neutral':
        return Colors.grey.shade100;
      default:
        return colorScheme.primary;
    }
  }

  Color _getTextColor(ColorScheme colorScheme) {
    return variant == 'solid' ? Colors.white : _getBackgroundColor(colorScheme);
  }

  Widget _buildContent() {
    if (icon != null && child == null) {
      return icon!;
    }
    if (icon != null && iconPosition == 'start') {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: [icon!, const SizedBox(width: 8), child!],
      );
    }
    if (icon != null && iconPosition == 'end') {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: [child!, const SizedBox(width: 8), icon!],
      );
    }
    return child!;
  }
}
