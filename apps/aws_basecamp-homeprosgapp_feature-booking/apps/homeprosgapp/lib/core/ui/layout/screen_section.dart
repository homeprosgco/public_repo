import 'package:flutter/material.dart';

/// Custom object to represent a section of the screen
/// with top and bottom padding and a widget.
class ScreenSection {
  final double topPadding;
  final double bottomPadding;
  final Widget widget;

  ScreenSection({
    required this.widget,
    this.topPadding = 112,
    this.bottomPadding  = 112,
  });
}
