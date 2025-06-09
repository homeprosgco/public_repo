import 'package:flutter/material.dart';

class ScreenScrollView extends StatelessWidget {
  final Widget child;

  const ScreenScrollView({
    super.key,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: SingleChildScrollView(
          child: child,
        ),
      ),
    );
  }
}
