import 'package:flutter/material.dart';

/// A `StackRow` widget that arranges its children in a horizontal row with customizable spacing
/// between them. It supports both predefined `MainAxisAlignment` values (such as space-between, space-evenly)
/// and custom spacing between each child using an array of spacing values.
///
/// ### Example Usage:
///
/// ```dart
/// StackRow(
///   children: [
///     Icon(Icons.star),
///     Text('First Child'),
///     Text('Second Child'),
///   ],
///   spacing: [16.0, 8.0], // Custom spacing between children
///   crossAxisAlignment: CrossAxisAlignment.start, // Align children to the top of the row
/// );
///
/// StackRow(
///   children: [
///     Icon(Icons.home),
///     Text('Home'),
///     Text('Profile'),
///   ],
///   mainAxisAlignment: MainAxisAlignment.spaceBetween, // Use space-between alignment
/// );
/// ```
///
/// ### Parameters:
///
/// - `children`: A list of widgets to be arranged horizontally in the row.
/// - `mainAxisAlignment`: Controls the horizontal alignment and spacing between children (optional).
///   If provided, this will override custom spacing. For example, `MainAxisAlignment.spaceBetween`
///   will distribute children evenly with space between them.
/// - `crossAxisAlignment`: Controls the vertical alignment of children in the row (default is `CrossAxisAlignment.center`).
/// - `spacing`: A list of spacing values applied between each child. The length of the array defines
///   the spacing between consecutive children. If the array is shorter than the number of children,
///   the remaining children will have no spacing.
///
/// ### Predefined MainAxisAlignment Options:
/// - `MainAxisAlignment.start`: Aligns children to the start of the row.
/// - `MainAxisAlignment.center`: Aligns children in the center of the row.
/// - `MainAxisAlignment.end`: Aligns children to the end of the row.
/// - `MainAxisAlignment.spaceBetween`: Distributes children evenly with space in between.
/// - `MainAxisAlignment.spaceAround`: Adds equal spacing around each child.
/// - `MainAxisAlignment.spaceEvenly`: Distributes children evenly with equal space between all items.
///
/// ### Custom Spacing Example:
/// ```dart
/// StackRow(
///   children: [
///     Text('Child 1'),
///     Text('Child 2'),
///     Text('Child 3'),
///   ],
///   spacing: [10.0, 20.0], // 10px between first and second, 20px between second and third
/// );
/// ```
///
/// This widget is perfect for use cases where either predefined or custom spacing between
/// horizontally arranged elements is needed.
class StackRow extends StatelessWidget {
  final List<Widget> children;
  final MainAxisAlignment? mainAxisAlignment; // Predefined spacing (e.g., space-between, space-evenly)
  final CrossAxisAlignment crossAxisAlignment; // Controls vertical alignment
  final MainAxisSize mainAxisSize;
  final List<double> spacing; // Array for spacing between each child

  const StackRow({
    super.key,
    required this.children,
    this.mainAxisAlignment, // Optional, for space-between, space-evenly, etc.
    this.crossAxisAlignment = CrossAxisAlignment.center,
    this.mainAxisSize = MainAxisSize.min,
    this.spacing = const [], // Default empty spacing array
  });

  @override
  Widget build(BuildContext context) {
    // If no mainAxisAlignment is provided, use the custom spacing
    if (mainAxisAlignment == null) {
      return Row(
        crossAxisAlignment: crossAxisAlignment,
        children: _buildChildrenWithSpacing(),
      );
    } else {
      // Use mainAxisAlignment if provided
      return Row(
        mainAxisAlignment: mainAxisAlignment!,
        crossAxisAlignment: crossAxisAlignment,
        mainAxisSize: mainAxisSize,
        children: children,
      );
    }
  }

  // Function to add spacing after each child if mainAxisAlignment is null
  List<Widget> _buildChildrenWithSpacing() {
    List<Widget> spacedChildren = [];

    for (int i = 0; i < children.length; i++) {
      spacedChildren.add(children[i]);

      // Add spacing if it's not the last child and spacing exists for this index
      if (i < children.length - 1 && spacing.length > i) {
        spacedChildren.add(SizedBox(width: spacing[i]));
      }
    }

    return spacedChildren;
  }
}
