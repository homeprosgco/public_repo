import 'package:flutter/material.dart';

import '../../theme/theme.dart';
import 'custom_theme_text_widget.dart';

class CustomThemeButton extends StatelessWidget {
  final Widget? child;
  final String variant;
  final String color;
  final String size;
  final String paddingSize;
  final String borderRadius;
  final Widget? icon;
  final String iconPosition;
  final VoidCallback? onPressed;
  final String? className;
  final EdgeInsets customPadding;
  final Size? customFixedSize;
  final String keyName;
  final String? buttonText;

  const CustomThemeButton({
    super.key,
    required this.keyName,
    this.child,
    this.variant = 'solid',
    this.color = 'primary',
    this.size = '',
    this.paddingSize = 'medium',
    this.borderRadius = 'rounded-md',
    this.icon,
    this.iconPosition = 'start',
    this.onPressed,
    this.className,
    this.customPadding = EdgeInsets.zero,
    this.customFixedSize,
    this.buttonText,
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
        padding: size.isNotEmpty ? null : _getPadding(),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
        backgroundColor: _getBackgroundColor(colorScheme),
        foregroundColor: _getTextColor(colorScheme),
        fixedSize: size.isNotEmpty ? _getSize() : null,
        elevation: k0,
      ),
      child: _buildContent(colorScheme),
    );
  }

  Widget _buildOutlinedButton(ColorScheme colorScheme) {
    return OutlinedButton(
      key: Key(keyName),
      onPressed: onPressed,
      style: OutlinedButton.styleFrom(
        padding: customFixedSize != null ? null : _getPadding(),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
        foregroundColor: _getTextColor(colorScheme),
        backgroundColor: white,
        side: BorderSide(color: _getBackgroundColor(colorScheme)),
        fixedSize: customFixedSize != null ? _getSize() : null,
      ),
      child: _buildContent(colorScheme),
    );
  }

  Widget _buildTextButton(ColorScheme colorScheme) {
    return TextButton(
      key: Key(keyName),
      onPressed: onPressed,
      style: TextButton.styleFrom(
        padding: customFixedSize != null ? null : _getPadding(),
        foregroundColor: _getTextColor(colorScheme),
        shape: RoundedRectangleBorder(borderRadius: _getBorderRadius()),
        fixedSize: customFixedSize != null ? _getSize() : null,
      ),
      child: _buildContent(colorScheme),
    );
  }

  EdgeInsets _getPadding() {
    switch (paddingSize) {
      case 'custom':
        return customPadding;
      case 'small':
        return const EdgeInsets.symmetric(horizontal: k3, vertical: k2);
      case 'large':
        return const EdgeInsets.symmetric(horizontal: k6, vertical: k8);
      default:
        return const EdgeInsets.symmetric(horizontal: k4, vertical: k4);
    }
  }

  Size? _getSize() {
    switch (size) {
      case 'custom':
        return customFixedSize;
      case 'small':
        return const Size(k64, k12);
      case 'medium':
        return const Size(k64, k12);
      case 'large':
        return const Size(k64, k12);
      default:
        return const Size(k64, k12);
    }
  }

  BorderRadius _getBorderRadius() {
    switch (borderRadius) {
      case 'rounded-none':
        return BorderRadius.circular(0);
      case 'rounded-xs':
        return BorderRadius.circular(2);
      case 'rounded-sm':
        return BorderRadius.circular(4);
      case 'rounded-lg':
        return BorderRadius.circular(16);
      case 'rounded-xl':
        return BorderRadius.circular(24);
      case 'rounded-full':
        return BorderRadius.circular(50);
      default:
        return BorderRadius.circular(2);
    }
  }

  Color _getBackgroundColor(ColorScheme colorScheme) {
    switch (color) {
      case 'secondary':
        return colorScheme.secondaryContainer;
      case 'tertiary':
        return colorScheme.tertiary;
      case 'neutral':
        return Colors.grey.shade800;
      default:
        return colorScheme.primary;
    }
  }

  Color _getTextColor(ColorScheme colorScheme) {
    return variant == 'solid' ? Colors.white : _getBackgroundColor(colorScheme);
  }

  Widget _buildContent(ColorScheme colorScheme) {
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
    return child ??
        CustomThemeText(
          text: buttonText ?? 'Button',
          color: _getTextColor(colorScheme),
        );
  }
}
