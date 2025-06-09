import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../../data/early_adopter_data.dart';
import '../../../domain/early_adopter_email_domain.dart';
import '../early_adopter_email_remote_datasource_provider/early_adopter_email_remote_datasource_provider.dart';

part 'early_adopter_email_repository_provider.g.dart';

// Provider for EarlyAdopterEmailRemoteDatasourceImpl using Riverpod.
@riverpod
EarlyAdopterEmailRepository earlyAdopterEmailRepository(Ref ref) {
  final remoteDataSource = ref.watch(earlyAdopterEmailRemoteDatasourceProvider);
  return EarlyAdopterEmailRepositoryImpl(remoteDataSource);
}
