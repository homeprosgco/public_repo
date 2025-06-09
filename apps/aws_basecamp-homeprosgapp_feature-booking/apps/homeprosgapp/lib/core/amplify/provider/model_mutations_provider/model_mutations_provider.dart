import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../model_mutations/amplify_mutations.dart';


part 'model_mutations_provider.g.dart';

// Provider for ModelMutationsImpl
@riverpod
ModelMutationsInterface modelMutations(Ref ref) {
  return ModelMutationsImpl();
}
