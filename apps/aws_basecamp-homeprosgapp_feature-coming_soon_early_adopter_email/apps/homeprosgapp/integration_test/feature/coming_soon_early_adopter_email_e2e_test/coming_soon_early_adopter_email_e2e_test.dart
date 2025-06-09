import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:integration_test/integration_test.dart';
import 'package:homeprosgapp/main.dart' as app; // Your app's main entry point
import 'package:mocktail/mocktail.dart';

// Mock class for AsyncNotifier.
class MockAsyncEarlyAdopterEmail extends Mock implements AsyncEarlyAdopterEmail {}

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized(); // Required for integration tests.
  const emailKeyName = 'earlyAdopterEmail';
  const notifyButtonKeyName = 'notifyButton';

  group('ComingSoonScreen Web Integration Tests', () {
    testWidgets('should show success message on valid email submission', (WidgetTester tester) async {
      final int timestamp = DateTime.now().millisecondsSinceEpoch;
      final String uniqueEmail = 'user_$timestamp@example.com';

      try {
        await app.main();

        await tester.pumpAndSettle(); // Wait for any UI updates.

        // Enter a valid email into the input field.
        final emailInput = find.byKey(const Key(emailKeyName));
        await tester.enterText(emailInput, uniqueEmail);

        await tester.pumpAndSettle(); // Wait for any UI updates.

        // Tap the "NOTIFY ME" button.
        final buttonFinder = find.byKey(const Key(notifyButtonKeyName));
        await tester.tap(buttonFinder);

        // Rebuild the widget to reflect UI changes after the action.
        await tester.pumpAndSettle();

        // Verify that the success snackbar is displayed.
        expect(find.text('Email registered successfully!'), findsOneWidget);
      } catch (e, stackTrace) {
        print('Test failed: $e');
        safePrint('Stack trace: $stackTrace');
        fail('Unexpected error occurred during the test.');
      }
    });

    testWidgets('should show error message on invalid email', (WidgetTester tester) async {
      try {
        // Launch the app.
        await app.main();

        await tester.pumpAndSettle(); // Wait for UI updates.

        // Enter a valid email into the input field.
        final emailInput = find.byKey(const Key(emailKeyName));
        await tester.enterText(emailInput, 'validemail@example');

        await tester.pumpAndSettle(); // Wait for any UI updates.

        // Tap the "NOTIFY ME" button.
        final buttonFinder = find.byKey(const Key(notifyButtonKeyName));
        await tester.tap(buttonFinder);

        await tester.pumpAndSettle(); // Wait for the snackbar to appear.

        // Verify that the correct error snackbar is displayed.
        expect(find.text('Failed to register email: Email already registered'), findsOneWidget);
      } catch (e, stackTrace) {
        print('Test failed: $e');
        print('Stack trace: $stackTrace');
        fail('Unexpected error during the test.');
      }
    });
  });
}
