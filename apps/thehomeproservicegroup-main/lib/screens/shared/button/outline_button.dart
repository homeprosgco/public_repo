import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';

class OutlineButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final Color borderColor;
  final double borderRadius;

  const OutlineButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.borderColor = Colors.blue,
    this.borderRadius = 30.0,
  });

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      style: OutlinedButton.styleFrom(
        side: BorderSide(color: borderColor),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(borderRadius),
        ),
        padding: const EdgeInsets.symmetric(vertical: k6, horizontal: k5),
      ),
      onPressed: onPressed,
      child: Text(
        text,
        style: TextStyle(
          color: borderColor,
          fontSize: 16.0,
        ),
      ),
    );
  }
}
