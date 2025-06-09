import 'package:flutter/material.dart';
import 'package:animations/animations.dart';

class SharedAxisZPageTransitionBuilder extends PageTransitionsBuilder {
  final SharedAxisTransitionType transitionType;

  const SharedAxisZPageTransitionBuilder({
    this.transitionType = SharedAxisTransitionType.scaled,
  });

  @override
  Widget buildTransitions<T>(
    PageRoute<T> route,
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
    Widget child,
  ) {
    return SharedAxisTransition(
      animation: animation,
      secondaryAnimation: secondaryAnimation,
      transitionType: transitionType,
      child: child,
    );
  }
}
