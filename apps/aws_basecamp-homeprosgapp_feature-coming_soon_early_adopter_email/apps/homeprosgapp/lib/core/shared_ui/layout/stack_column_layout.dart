import 'package:flutter/material.dart';

/// A `StackColumn` widget is a custom Column widget that allows you to stack its children vertically,
/// with customizable vertical and horizontal alignment. It also supports setting custom spacing
/// between each child using a list of spacings.
///
/// ### Example Usage:
///
/// ```dart
/// StackColumn(
///   children: [
///     Text('First Child'),
///     Text('Second Child'),
///     Text('Third Child'),
///   ],
///   verticalAlignment: MainAxisAlignment.center,
///   horizontalAlignment: CrossAxisAlignment.start,
///   spacing: [16.0, 8.0], // Spacing between each child
/// );
/// ```
///
/// ### Parameters:
///
/// - `children`: A list of widgets to be stacked vertically.
/// - `verticalAlignment`: Controls the vertical alignment of children (default is `MainAxisAlignment.start`).
/// - `horizontalAlignment`: Controls the horizontal alignment of children (default is `CrossAxisAlignment.center`).
/// - `spacing`: An array that defines the space between each child. The length of the array determines the spacing
///   for the children. If there are fewer values than children, no additional spacing will be added for those items.
///
/// ### Alignment Options:
/// - `MainAxisAlignment.start`: Aligns children at the top of the Column.
/// - `MainAxisAlignment.center`: Aligns children in the middle of the Column.
/// - `MainAxisAlignment.end`: Aligns children at the bottom of the Column.
/// - `CrossAxisAlignment.start`: Aligns children horizontally to the start.
/// - `CrossAxisAlignment.center`: Aligns children horizontally in the center.
/// - `CrossAxisAlignment.end`: Aligns children horizontally to the end.
///
/// ### Example with Spacing:
///
/// ```dart
/// StackColumn(
///   children: [
///     Icon(Icons.star),
///     Text('Item 1'),
///     Text('Item 2'),
///   ],
///   spacing: [10.0, 20.0], // Adds 10px between first and second, and 20px between second and third
/// );
/// ```
///
/// This widget is ideal for scenarios where you need flexible alignment and spacing between column elements.
class StackColumn extends StatelessWidget {
  final List<Widget> children;
  final MainAxisAlignment verticalAlignment; // Controls vertical alignment
  final CrossAxisAlignment horizontalAlignment; // Controls horizontal alignment
  final MainAxisSize mainAxisSize;
  final List<double> spacing; // Array for spacing between each child
  final EdgeInsets padding; // Controls padding around StackColumn

  const StackColumn(
      {super.key,
      required this.children,
      this.verticalAlignment = MainAxisAlignment.start,
      this.horizontalAlignment = CrossAxisAlignment.center,
      this.mainAxisSize = MainAxisSize.min,
      this.spacing = const [], // Default empty spacing
      this.padding = EdgeInsets.zero});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: Column(
        mainAxisSize: mainAxisSize,
        mainAxisAlignment: verticalAlignment,
        crossAxisAlignment: horizontalAlignment,
        children: _buildChildrenWithSpacing(),
      ),
    );
  }

  // Function to add spacing after each child
  List<Widget> _buildChildrenWithSpacing() {
    List<Widget> spacedChildren = [];

    for (int i = 0; i < children.length; i++) {
      spacedChildren.add(children[i]);

      // Add spacing if it's not the last child and spacing exists for this index
      if (i < children.length - 1 && spacing.length > i) {
        spacedChildren.add(SizedBox(height: spacing[i]));
      }
    }

    return spacedChildren;
  }
}
