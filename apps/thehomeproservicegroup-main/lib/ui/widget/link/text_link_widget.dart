import 'package:flutter/material.dart';

class TextLink extends StatefulWidget {
  final String text;
  final VoidCallback onPressed;
  final Color textColor;
  final double fontSize;
  final Color hoverColor;

  const TextLink({
    super.key,
    required this.text,
    required this.onPressed,
    this.textColor = Colors.blue,
    this.fontSize = 16.0,
    this.hoverColor = Colors.red, // Default hover color
  });

  @override
  // ignore: library_private_types_in_public_api
  _TextLinkState createState() => _TextLinkState();
}

class _TextLinkState extends State<TextLink> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);

    return MouseRegion(
      cursor: SystemMouseCursors.click,
      onEnter: (_) => _onHover(true),
      onExit: (_) => _onHover(false),
      child: GestureDetector(
        onTap: widget.onPressed,
        child: Text(
          widget.text,
          style: theme.textTheme.bodyMedium?.copyWith(
            color: _isHovering ? widget.hoverColor : theme.colorScheme.onSurface,
          ),
        ),
      ),
    );
  }

  void _onHover(bool isHovering) {
    setState(() {
      _isHovering = isHovering;
    });
  }
}
