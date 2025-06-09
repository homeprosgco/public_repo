import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../../test_utils/test_utils.dart';

void main() {
  late MockGoRouter mockGoRouter;

  setUp(() {
    mockGoRouter = MockGoRouter();
  });

  Widget createTestWidget() {
    return createMaterialAppTestWidget(
      mockGoRouter: mockGoRouter,
      child: const BookingScreenHeader(),
    );
  }

  group('BookingScreenHeader', () {
    testWidgets('displays logo, text, and call info', (tester) async {
      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Assert: Logo is displayed
      expect(find.byType(Image), findsOneWidget);
      expect(find.text('HPSG'), findsOneWidget);
      expect(find.text('HOME PRO SERVICE GROUP'), findsOneWidget);

      // Assert: Call info is displayed
      expect(find.text('Call Us Now'), findsOneWidget);
      expect(find.text('(561) 759-5900'), findsOneWidget);
    });

    testWidgets('shows reduced text on small screens', (tester) async {
      tester.view.physicalSize = const Size(600, 800);
      tester.view.devicePixelRatio = 1.0;

      await tester.pumpWidget(createTestWidget());
      await tester.pumpAndSettle();

      // Assert: Logo and main text are displayed
      expect(find.byType(Image), findsOneWidget);
      expect(find.text('HPSG'), findsOneWidget);
      expect(find.text('HOME PRO SERVICE GROUP'), findsNothing);

      // Assert: Call info is displayed
      expect(find.text('Call Us Now'), findsOneWidget);
      expect(find.text('(561) 759-5900'), findsOneWidget);

      // Reset the view after the test
      addTearDown(tester.view.resetPhysicalSize);
    });

    testWidgets('navigates to home on logo tap', (tester) async {
      await tester.pumpWidget(createTestWidget());

      // Act: Tap the logo
      await tester.tap(find.byType(GestureDetector).first);
      await tester.pumpAndSettle();

      // Assert: GoRouter navigation is triggered
      verify(() => mockGoRouter.go('/')).called(1);
    });
  });
}
