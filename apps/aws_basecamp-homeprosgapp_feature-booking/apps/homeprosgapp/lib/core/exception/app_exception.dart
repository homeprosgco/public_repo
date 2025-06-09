/// Base class for all exceptions in the app.
/// Provides a standardized structure for custom exceptions.
abstract class AppException implements Exception {
  final String message;
  final Exception? cause;

  AppException(this.message, [this.cause]);

  @override
  String toString() {
    return '${runtimeType.toString()}: $message'
        '${cause != null ? ", caused by: ${cause.toString()}" : ""}';
  }
}
