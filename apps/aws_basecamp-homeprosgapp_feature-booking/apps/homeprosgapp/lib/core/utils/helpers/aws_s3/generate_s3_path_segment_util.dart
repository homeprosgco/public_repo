import 'package:intl/intl.dart';

String generateS3PathSegment() {
  final now = DateTime.now();
  final formatter = DateFormat('yyyyMMdd_HHmmss_SSS');
  return formatter.format(now);
}