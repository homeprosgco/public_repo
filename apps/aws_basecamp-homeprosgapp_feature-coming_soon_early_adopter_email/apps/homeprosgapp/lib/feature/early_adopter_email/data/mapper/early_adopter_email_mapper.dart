import 'package:homeprosgapp/core/core.dart';

import '../../domain/entity/early_adopter_email_entity.dart';

/// Extension to map the `EarlyAdopter` model to `EarlyAdopterEmailEntity`.
extension EarlyAdopterModelMapper on EarlyAdopter {
  /// Converts an `EarlyAdopter` model to an `EarlyAdopterEmailEntity`.
  EarlyAdopterEmailEntity toEntity() {
    return EarlyAdopterEmailEntity(
      id: id,
      email: email,
      createdAt: createdAt?.getDateTimeInUtc(), // Convert TemporalDateTime to DateTime
      updatedAt: updatedAt?.getDateTimeInUtc(), // Convert TemporalDateTime to DateTime
    );
  }
}

/// Extension to map the `EarlyAdopterEmailEntity` to `EarlyAdopter` model.
extension EarlyAdopterEmailEntityMapper on EarlyAdopterEmailEntity {
  /// Converts an `EarlyAdopterEmailEntity` to an `EarlyAdopter` model.
  EarlyAdopter toModel() {
    return EarlyAdopter(
      id: id,
      email: email,
    );
  }
}
