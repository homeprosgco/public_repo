// booking_routes.dart

import 'package:animations/animations.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';

import '../layout_shell/booking_view_layout_shell.dart';
import '../screen/booking_screens.dart';
import '../view/booking_views.dart';

class BookingRoutes {
  static void registerRoutes() {
    // Register a dashboard route for Bookings under the dashboard shell
    RouteManager.addDashboardRoute(
      StatefulShellRoute.indexedStack(
        builder: (context, state, navigationShell) => BookingViewLayoutShell(
          navigationShell: navigationShell,
        ),
        branches: [
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: PlatformRoute.bookingsTableView,
                builder: (context, state) => const BookingsTableView(),
                routes: [
                  GoRoute(
                    path: PlatformRoute.bookingCreateFormView,
                    pageBuilder: (context, state) => CustomTransitionPage(
                      key: state.pageKey,
                      child: const BookingFormView(),
                      transitionsBuilder: (context, animation, secondaryAnimation, child) {
                        return SharedAxisTransition(
                          animation: animation,
                          secondaryAnimation: secondaryAnimation,
                          transitionType: SharedAxisTransitionType.scaled,
                          child: child,
                        );
                      },
                    ),
                  ),
                  GoRoute(
                    path: PlatformRoute.bookingUpdateFormView,
                    pageBuilder: (context, state) => CustomTransitionPage(
                      key: state.pageKey,
                      child: BookingFormView(bookingId: state.pathParameters['bookingId']),
                      transitionsBuilder: (context, animation, secondaryAnimation, child) {
                        return SharedAxisTransition(
                          animation: animation,
                          secondaryAnimation: secondaryAnimation,
                          transitionType: SharedAxisTransitionType.scaled,
                          child: child,
                        );
                      },
                    ),
                  ),
                  GoRoute(
                    path: PlatformRoute.bookingDetailView,
                    pageBuilder: (context, state) => CustomTransitionPage(
                      key: state.pageKey,
                      child: BookingDetailView(bookingId: state.pathParameters['bookingId']!),
                      transitionsBuilder: (context, animation, secondaryAnimation, child) {
                        return SharedAxisTransition(
                          animation: animation,
                          secondaryAnimation: secondaryAnimation,
                          transitionType: SharedAxisTransitionType.scaled,
                          child: child,
                        );
                      },
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );

    RouteManager.addInitialRoutes([
      GoRoute(
        path: PlatformRoute.bookingScreen,
        builder: (context, state) {
          return const BookingMultiStepFormScreen();
        },
      ),
      GoRoute(
        path: PlatformRoute.bookingConfirmationScreen,
        builder: (context, state) => const BookingConfirmationScreen(),
      ),
      GoRoute(
        path: PlatformRoute.bookingConfirmEmailScreen,
        builder: (context, state) => const BookingConfirmEmailScreen(),
      ),
    ]);
  }
}
