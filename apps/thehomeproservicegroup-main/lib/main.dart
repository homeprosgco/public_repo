import 'package:flutter/material.dart';
import 'package:hpsg/screen_router/route_config.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:url_strategy/url_strategy.dart';

import 'theme/theme.dart';
import 'util/responsive_util.dart';

void main() {
  setPathUrlStrategy();
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'The Home Pro Service Group',
      theme: AppTheme.theme,
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: ClampingScrollWrapper.builder(context, child!),
        breakpoints: ResponsiveUtil.breakpoints,
      ),
      routerConfig: router,
      debugShowCheckedModeBanner: false,
    );
  }
}
