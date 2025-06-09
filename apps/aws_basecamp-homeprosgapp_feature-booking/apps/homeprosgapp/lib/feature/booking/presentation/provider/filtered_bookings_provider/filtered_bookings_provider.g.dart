// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'filtered_bookings_provider.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$filteredBookingsHash() => r'a80c98d87b2dcf428e31a5f0f74cefeb08d83caa';

/// Copied from Dart SDK
class _SystemHash {
  _SystemHash._();

  static int combine(int hash, int value) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + value);
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x0007ffff & hash) << 10));
    return hash ^ (hash >> 6);
  }

  static int finish(int hash) {
    // ignore: parameter_assignments
    hash = 0x1fffffff & (hash + ((0x03ffffff & hash) << 3));
    // ignore: parameter_assignments
    hash = hash ^ (hash >> 11);
    return 0x1fffffff & (hash + ((0x00003fff & hash) << 15));
  }
}

abstract class _$FilteredBookings
    extends BuildlessAutoDisposeNotifier<List<BookingEntity>> {
  late final List<BookingEntity> bookingEntities;

  List<BookingEntity> build(
    List<BookingEntity> bookingEntities,
  );
}

/// See also [FilteredBookings].
@ProviderFor(FilteredBookings)
const filteredBookingsProvider = FilteredBookingsFamily();

/// See also [FilteredBookings].
class FilteredBookingsFamily extends Family<List<BookingEntity>> {
  /// See also [FilteredBookings].
  const FilteredBookingsFamily();

  /// See also [FilteredBookings].
  FilteredBookingsProvider call(
    List<BookingEntity> bookingEntities,
  ) {
    return FilteredBookingsProvider(
      bookingEntities,
    );
  }

  @override
  FilteredBookingsProvider getProviderOverride(
    covariant FilteredBookingsProvider provider,
  ) {
    return call(
      provider.bookingEntities,
    );
  }

  static const Iterable<ProviderOrFamily>? _dependencies = null;

  @override
  Iterable<ProviderOrFamily>? get dependencies => _dependencies;

  static const Iterable<ProviderOrFamily>? _allTransitiveDependencies = null;

  @override
  Iterable<ProviderOrFamily>? get allTransitiveDependencies =>
      _allTransitiveDependencies;

  @override
  String? get name => r'filteredBookingsProvider';
}

/// See also [FilteredBookings].
class FilteredBookingsProvider extends AutoDisposeNotifierProviderImpl<
    FilteredBookings, List<BookingEntity>> {
  /// See also [FilteredBookings].
  FilteredBookingsProvider(
    List<BookingEntity> bookingEntities,
  ) : this._internal(
          () => FilteredBookings()..bookingEntities = bookingEntities,
          from: filteredBookingsProvider,
          name: r'filteredBookingsProvider',
          debugGetCreateSourceHash:
              const bool.fromEnvironment('dart.vm.product')
                  ? null
                  : _$filteredBookingsHash,
          dependencies: FilteredBookingsFamily._dependencies,
          allTransitiveDependencies:
              FilteredBookingsFamily._allTransitiveDependencies,
          bookingEntities: bookingEntities,
        );

  FilteredBookingsProvider._internal(
    super._createNotifier, {
    required super.name,
    required super.dependencies,
    required super.allTransitiveDependencies,
    required super.debugGetCreateSourceHash,
    required super.from,
    required this.bookingEntities,
  }) : super.internal();

  final List<BookingEntity> bookingEntities;

  @override
  List<BookingEntity> runNotifierBuild(
    covariant FilteredBookings notifier,
  ) {
    return notifier.build(
      bookingEntities,
    );
  }

  @override
  Override overrideWith(FilteredBookings Function() create) {
    return ProviderOverride(
      origin: this,
      override: FilteredBookingsProvider._internal(
        () => create()..bookingEntities = bookingEntities,
        from: from,
        name: null,
        dependencies: null,
        allTransitiveDependencies: null,
        debugGetCreateSourceHash: null,
        bookingEntities: bookingEntities,
      ),
    );
  }

  @override
  AutoDisposeNotifierProviderElement<FilteredBookings, List<BookingEntity>>
      createElement() {
    return _FilteredBookingsProviderElement(this);
  }

  @override
  bool operator ==(Object other) {
    return other is FilteredBookingsProvider &&
        other.bookingEntities == bookingEntities;
  }

  @override
  int get hashCode {
    var hash = _SystemHash.combine(0, runtimeType.hashCode);
    hash = _SystemHash.combine(hash, bookingEntities.hashCode);

    return _SystemHash.finish(hash);
  }
}

@Deprecated('Will be removed in 3.0. Use Ref instead')
// ignore: unused_element
mixin FilteredBookingsRef
    on AutoDisposeNotifierProviderRef<List<BookingEntity>> {
  /// The parameter `bookingEntities` of this provider.
  List<BookingEntity> get bookingEntities;
}

class _FilteredBookingsProviderElement
    extends AutoDisposeNotifierProviderElement<FilteredBookings,
        List<BookingEntity>> with FilteredBookingsRef {
  _FilteredBookingsProviderElement(super.provider);

  @override
  List<BookingEntity> get bookingEntities =>
      (origin as FilteredBookingsProvider).bookingEntities;
}
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member, deprecated_member_use_from_same_package
