import 'package:flutter/material.dart';
import 'package:hpsg/screens/shared/shared.dart';
import 'package:hpsg/theme/theme.dart';

class Screen extends StatelessWidget {
  final List<Widget> children;
  final ThemeData theme;

  const Screen({
    super.key,
    required this.children,
    required this.theme,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            ...children,
            const SizedBox(height: k20),
            FooterSection(theme: theme),
          ],
        ),
      ),
    );
  }
}
