class EarlyAdopterEmailEntity {
  final String? id;
  final String email;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  // Constructor
  EarlyAdopterEmailEntity({
    this.id,
    required this.email,
    this.createdAt,
    this.updatedAt,
  });

  // Copy method to create a new instance with updated fields
  EarlyAdopterEmailEntity copyWith({
    String? id,
    String? email,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return EarlyAdopterEmailEntity(
      id: id ?? this.id,
      email: email ?? this.email,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  // Override toString for better debugging output
  @override
  String toString() {
    return 'EarlyAdopter(id: $id, email: $email, createdAt: $createdAt, updatedAt: $updatedAt)';
  }

  // Equality operator override
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    return other is EarlyAdopterEmailEntity && other.id == id && other.email == email && other.createdAt == createdAt && other.updatedAt == updatedAt;
  }

  // Hash code override
  @override
  int get hashCode {
    return id.hashCode ^ email.hashCode ^ createdAt.hashCode ^ updatedAt.hashCode;
  }
}
