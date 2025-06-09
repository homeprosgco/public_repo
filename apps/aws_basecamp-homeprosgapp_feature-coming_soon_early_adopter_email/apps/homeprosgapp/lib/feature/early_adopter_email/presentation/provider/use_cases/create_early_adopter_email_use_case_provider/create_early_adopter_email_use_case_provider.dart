import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../../domain/early_adopter_email_domain.dart';
import '../../early_adopter_email_repository_provider/early_adopter_email_repository_provider.dart';

part 'create_early_adopter_email_use_case_provider.g.dart'; // Generated file

// Riverpod provider for `CreateEarlyAdopterEmailUseCase`.
@riverpod
CreateEarlyAdopterEmailUseCase createEarlyAdopterEmailUseCase(
  Ref ref,
) {
  // Provide the repository implementation.
  final repository = ref.watch(earlyAdopterEmailRepositoryProvider);

  // Return the use case with the injected repository.
  return CreateEarlyAdopterEmailUseCase(repository);
}
