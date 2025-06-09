import 'package:flutter/material.dart';
import 'package:hpsg/theme/spacing.dart';

class AppTextButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final Color textColor;
  final double fontSize;

  const AppTextButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.textColor = Colors.blue,
    this.fontSize = 16.0,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onPressed,
      style: TextButton.styleFrom(
        foregroundColor: textColor,
        padding: const EdgeInsets.only(left: k0),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: textColor,
          fontSize: fontSize,
        ),
      ),
    );
  }
}
