import 'package:either_dart/either.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/early_adopter_email/presentation/provider/use_cases/create_early_adopter_email_use_case_provider/create_early_adopter_email_use_case_provider.dart';
import 'package:homeprosgapp/feature/early_adopter_email/presentation/provider/use_cases/list_early_adpoter_emails_use_case_provider/list_early_adopter_emails_use_case_provider.dart';
import 'package:mocktail/mocktail.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../domain/early_adopter_email_domain.dart';
import '../../../exception/early_adopter_email_exception.dart';

part 'early_adopter_email_provider.g.dart'; // Generated file

/// A provider that extends [AsyncNotifier] to manage the state of early adopter emails.
/// It supports creating and listing early adopter emails by interacting with the appropriate use cases.
@riverpod
class AsyncEarlyAdopterEmail extends _$AsyncEarlyAdopterEmail {
  late final CreateEarlyAdopterEmailUseCase _createUseCase;
  late final ListEarlyAdopterEmailsUseCase _listUseCase;

  /// Initializes the use cases required for email operations.
  @override
  FutureOr<void> build() {
    _createUseCase = ref.watch(createEarlyAdopterEmailUseCaseProvider);
    _listUseCase = ref.watch(listEarlyAdopterEmailsUseCaseProvider);
  }

  /// Creates a new early adopter email.
  ///
  /// - **Parameters**:
  ///   - `email`: The email address to be created.
  ///
  /// - **Returns**:
  ///   - An `Either<EarlyAdopterEmailCreateException, EarlyAdopterEmailEntity>` indicating success or failure.
  ///
  /// - **State**:
  ///   - Sets the state to `AsyncLoading` while processing.
  ///   - Updates the state to `AsyncData` on success, or `AsyncError` on failure.
  Future<Either<EarlyAdopterEmailCreateException, EarlyAdopterEmailEntity>> createEarlyAdopterEmail(
    String email,
  ) async {
    state = const AsyncValue.loading(); // Set state to loading

    // Simulate a network delay (e.g., 2 seconds).
    await Future.delayed(const Duration(seconds: 2));

    final emailEntity = EarlyAdopterEmailEntity(email: email);
    final result = await _createUseCase(emailEntity);

    // Update state based on result
    state = result.fold(
      (error) => AsyncValue.error(error, StackTrace.current),
      (_) => const AsyncValue.data(null),
    );

    return result; // Return the result to the caller
  }

  /// Retrieves a list of early adopter emails.
  ///
  /// - **Returns**:
  ///   - An `Either<EarlyAdopterEmailListException, List<EarlyAdopterEmailEntity>>`.
  ///
  /// - **State**:
  ///   - Sets the state to `AsyncLoading` while fetching.
  ///   - Updates the state to `AsyncData` on success, or `AsyncError` on failure.
  Future<Either<EarlyAdopterEmailListException, List<EarlyAdopterEmailEntity>>> listEarlyAdopterEmails() async {
    state = const AsyncValue.loading(); // Set state to loading

    final result = await _listUseCase(NoParams());

    // Update state based on result
    state = result.fold(
      (error) => AsyncValue.error(error, StackTrace.current),
      (emails) => const AsyncValue.data(null),
    );

    return result; // Return the result to the caller
  }
}

// A fake notifier to simulate the provider behavior.
class MockAsyncEarlyAdopterEmail extends _$AsyncEarlyAdopterEmail with Mock implements AsyncEarlyAdopterEmail {}
