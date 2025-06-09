/// A utility method that returns a list of values where each `null` entry in the input list
/// is replaced by the most recent non-null value or a default value.
///
/// ### Example Usage:
///
/// ```dart
/// final List<int?> inputValues = [10, null, 20, null, null, 30];
/// final List<int> result = fallbackValues<int>(
///   defaultValue: 5,
///   values: inputValues,
/// );
///
/// print(result); // Output: [10, 10, 20, 20, 20, 30]
/// ```
///
/// In this example:
/// - The first value is 10, so it stays as is.
/// - The second value is `null`, so it takes the previous value (10).
/// - The third value is 20, so it stays as is.
/// - The fourth and fifth values are `null`, so they take the previous value (20).
/// - The sixth value is 30, so it stays as is.
///
/// ### Parameters:
/// - `defaultValue`: The value used as a fallback if the first element is `null` or to initialize the process.
/// - `values`: A list of nullable values to process.
///
/// ### Returns:
/// - A list where all `null` entries have been replaced with the most recent non-null value or the `defaultValue`.
///
/// ### Use Cases:
/// - Useful for handling configurations where fallback or default values are needed.
/// - Helpful in responsive designs to ensure that missing values in breakpoints are filled with the closest available value.
library;

List<T> fallbackValues<T>({
  required T defaultValue,
  required List<T?> values,
}) {
  final filledValues = <T>[]; // List to hold the processed values
  T previousValue = defaultValue; // Track the last non-null value or use the default

  for (var value in values) {
    if (value != null) {
      filledValues.add(value); // Add non-null value to the list
      previousValue = value; // Update the previous value
    } else {
      filledValues.add(previousValue); // Use the previous value for null entries
    }
  }

  return filledValues;
}
