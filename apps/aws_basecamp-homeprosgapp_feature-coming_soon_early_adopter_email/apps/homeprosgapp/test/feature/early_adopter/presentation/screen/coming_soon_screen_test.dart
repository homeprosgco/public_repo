import 'package:either_dart/either.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:mocktail/mocktail.dart';
import 'package:responsive_framework/responsive_framework.dart';

// Widget Test: Verify "NOTIFY ME" button and email input are present.
void main() {
  late MockAsyncEarlyAdopterEmail mockNotifier;

  const emailKeyName = 'earlyAdopterEmail';
  const notifyButtonKeyName = 'notifyButton';

  setUp(() {
    // Initialize the mock notifier before each test.
    mockNotifier = MockAsyncEarlyAdopterEmail();

    // Set up mock behavior for `createEarlyAdopterEmail`.
    when(() => mockNotifier.createEarlyAdopterEmail(any())).thenAnswer((_) async => Right(EarlyAdopterEmailEntity(email: 'test@example.com')));
  });

  testWidgets('Finds "NOTIFY ME" button and email input field', (WidgetTester tester) async {
    await tester.pumpWidget(
      ProviderScope(
        child: MaterialApp(
          home: Builder(
            builder: (context) {
              return ResponsiveBreakpoints.builder(
                child: ClampingScrollWrapper.builder(context, const ComingSoonScreen()),
                breakpoints: deviceWidthBreakpoints,
              );
            },
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Find the button and input field by their keys.
    final buttonFinder = find.byKey(const Key(notifyButtonKeyName));
    final emailInputFinder = find.byKey(const Key(emailKeyName));

    // Assert: Verify that both the button and input field are present.
    expect(buttonFinder, findsOneWidget);
    expect(emailInputFinder, findsOneWidget);
  });

  testWidgets('Simulates createEarlyAdopterEmail action and verifies behavior', (WidgetTester tester) async {
    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          asyncEarlyAdopterEmailProvider.overrideWith(() => mockNotifier),
        ],
        child: MaterialApp(
          home: Builder(
            builder: (context) {
              return ResponsiveBreakpoints.builder(
                child: ClampingScrollWrapper.builder(context, const ComingSoonScreen()),
                breakpoints: deviceWidthBreakpoints,
              );
            },
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Enter a valid email into the input field.
    final emailInput = find.byKey(const Key(emailKeyName));
    await tester.enterText(emailInput, 'test@example.com');

    await tester.pumpAndSettle();

    // Tap the "NOTIFY ME" button.
    final notifyButton = find.byKey(const Key(notifyButtonKeyName));
    await tester.tap(notifyButton);

    await tester.pumpAndSettle();

    // Verify that the success snackbar is displayed.
    expect(find.text('Email registered successfully!'), findsOneWidget);
  });

  testWidgets('Should find "Email cannot be empty" when the email input is empty', (WidgetTester tester) async {
    await tester.pumpWidget(
      ProviderScope(
        child: MaterialApp(
          home: Builder(
            builder: (context) {
              return ResponsiveBreakpoints.builder(
                child: ClampingScrollWrapper.builder(context, const ComingSoonScreen()),
                breakpoints: deviceWidthBreakpoints,
              );
            },
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Tap the "NOTIFY ME" button.
    final notifyButton = find.byKey(const Key(notifyButtonKeyName));
    await tester.tap(notifyButton);

    await tester.pumpAndSettle();

    // Verify that the error snackbar is displayed.
    expect(find.text('Email cannot be empty'), findsOneWidget);
  });

  testWidgets('Should find "Enter a valid email address" when the email is invalid', (WidgetTester tester) async {
    await tester.pumpWidget(
      ProviderScope(
        child: MaterialApp(
          home: Builder(
            builder: (context) {
              return ResponsiveBreakpoints.builder(
                child: ClampingScrollWrapper.builder(context, const ComingSoonScreen()),
                breakpoints: deviceWidthBreakpoints,
              );
            },
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Enter an invalid email into the input field.
    final emailInput = find.byKey(const Key(emailKeyName));
    await tester.enterText(emailInput, 'test@example');

    await tester.pumpAndSettle();

    // Tap the "NOTIFY ME" button.
    final notifyButton = find.byKey(const Key(notifyButtonKeyName));
    await tester.tap(notifyButton);

    await tester.pumpAndSettle();

    // Verify that the error snackbar is displayed.
    expect(find.text('Enter a valid email address'), findsOneWidget);
  });

  testWidgets('Simulates email submission failure', (WidgetTester tester) async {
    when(() => mockNotifier.createEarlyAdopterEmail(any())).thenAnswer((_) async => Left(EarlyAdopterEmailCreateException('Invalid email submission')));

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          asyncEarlyAdopterEmailProvider.overrideWith(() => mockNotifier),
        ],
        child: MaterialApp(
          home: Builder(
            builder: (context) {
              return ResponsiveBreakpoints.builder(
                child: ClampingScrollWrapper.builder(context, const ComingSoonScreen()),
                breakpoints: deviceWidthBreakpoints,
              );
            },
          ),
        ),
      ),
    );

    await tester.pumpAndSettle();

    // Enter an invalid email into the input field.
    final emailInput = find.byKey(const Key(emailKeyName));
    await tester.enterText(emailInput, 'invalid@example.com');

    await tester.pumpAndSettle();

    // Tap the "NOTIFY ME" button.
    final notifyButton = find.byKey(const Key(notifyButtonKeyName));
    await tester.tap(notifyButton);

    await tester.pumpAndSettle();

    // Verify that the error snackbar is displayed.
    expect(find.text('Failed to register email: Invalid email submission'), findsOneWidget);
  });
}
