// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

import '../../../theme/theme.dart';
import '../../layout/layout.dart';
import '../platform_widgets.dart';

class PlatformViewLayout extends StatelessWidget {
  final PlatformDashboardViewHeaderViewModel viewHeader;
  final Widget? viewHeaderChild;
  final Widget body;
  final Widget? footer;

  const PlatformViewLayout({
    super.key,
    required this.viewHeader,
    required this.body,
    this.viewHeaderChild,
    this.footer,
  });

  @override
  Widget build(BuildContext context) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.stretch,
      spacing: const [k4],
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: k6),
            child: StackColumn(
              horizontalAlignment: CrossAxisAlignment.stretch,
              spacing: const [k2, k4],
              children: [
                PlatformDashboardViewHeader(
                  header: viewHeader,
                  child: viewHeaderChild,
                ),
                // _buildActionHeader(),
                // view body
                Expanded(
                  child: body,
                ),
              ],
            ),
          ),
        ),
        if (footer != null) footer!
      ],
    );
  }
}
