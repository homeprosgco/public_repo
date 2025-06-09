import 'package:animations/animations.dart';
import 'package:go_router/go_router.dart';
import 'package:hpsg/screens/screens.dart';

/// The route configuration.
final GoRouter router = GoRouter(
  initialLocation: '/',
  routes: <RouteBase>[
    GoRoute(
      path: '/',
      pageBuilder: (context, state) => CustomTransitionPage<void>(
        key: state.pageKey,
        child: const HomeScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeThroughTransition(
            animation: animation,
            secondaryAnimation: secondaryAnimation,
            child: child,
          );
        },
      ),
      // builder: (BuildContext context, GoRouterState state) {
      //   return const HomeScreen();
      // },
    ),
    GoRoute(
      path: '/about-us',
      pageBuilder: (context, state) => CustomTransitionPage<void>(
        key: state.pageKey,
        child: const AboutUsScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeThroughTransition(
            animation: animation,
            secondaryAnimation: secondaryAnimation,
            child: child,
          );
        },
      ),
      // builder: (BuildContext context, GoRouterState state) {
      //   return const AboutUsScreen();
      // },
    ),
    GoRoute(
      path: '/services',
      pageBuilder: (context, state) => CustomTransitionPage<void>(
        key: state.pageKey,
        child: const AllServicesScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeThroughTransition(
            animation: animation,
            secondaryAnimation: secondaryAnimation,
            child: child,
          );
        },
      ),
      // builder: (BuildContext context, GoRouterState state) {
      //   return const AboutUsScreen();
      // },
    ),
    GoRoute(
      path: '/contact-us',
      pageBuilder: (context, state) => CustomTransitionPage<void>(
        key: state.pageKey,
        child: const ContactUsScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeThroughTransition(
            animation: animation,
            secondaryAnimation: secondaryAnimation,
            child: child,
          );
        },
      ),
      // builder: (BuildContext context, GoRouterState state) {
      //   return const AboutUsScreen();
      // },
    ),
    GoRoute(
      path: '/ada-jobs',
      pageBuilder: (context, state) => CustomTransitionPage<void>(
        key: state.pageKey,
        child: const AdaJobsScreen(),
        transitionsBuilder: (context, animation, secondaryAnimation, child) {
          return FadeThroughTransition(
            animation: animation,
            secondaryAnimation: secondaryAnimation,
            child: child,
          );
        },
      ),
      // builder: (BuildContext context, GoRouterState state) {
      //   return const AboutUsScreen();
      // },
    ),
  ],
);

String convertToGoRouterFormat(String input) {
  // Convert to lowercase
  String lowerCaseStr = input.toLowerCase();
  // Replace spaces and any other characters before or after a space with a single dash
  String formattedStr = lowerCaseStr.replaceAll(RegExp(r'\s+'), '-');
  return formattedStr;
}
