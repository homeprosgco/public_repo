import 'package:flutter/material.dart';
import '../../domain/booking_domain.dart';

class BookingStatusBadgeStyles {
  static BadgeStyle getStyle(BookingStatus status) {
    switch (status) {
      case BookingStatus.pending:
        return BadgeStyle(
          backgroundColor: const Color(0xFFFFEBF4),
          textColor: const Color(0xFFD90368).withOpacity(.85),
          icon: Icons.hourglass_empty,
        );
      case BookingStatus.confirmed:
        return BadgeStyle(
          backgroundColor: const Color(0xFFDDEEF8),
          textColor: const Color(0xFF0E3044).withOpacity(.85),
          icon: Icons.check_circle_outline,
        );
      case BookingStatus.scheduled:
        return BadgeStyle(
          backgroundColor: const Color(0xFFEBFFF5),
          textColor: const Color(0xFF00CC66).withOpacity(.85),
          icon: Icons.calendar_today,
        );
      case BookingStatus.inProgress:
        return BadgeStyle(
          backgroundColor: const Color(0xFFFFF0EB),
          textColor: const Color(0xFFFF6635).withOpacity(.85),
          icon: Icons.work,
        );
      case BookingStatus.suspended:
        return BadgeStyle(
          backgroundColor: const Color(0xFFFDF5D8),
          textColor: const Color(0xFFF1C40F).withOpacity(.85),
          icon: Icons.pause_circle_filled,
        );
      case BookingStatus.completed:
        return BadgeStyle(
          backgroundColor: const Color(0xFFF2F3F7),
          textColor: const Color(0xFF1A1C2B).withOpacity(.85),
          icon: Icons.check_circle,
        );
      case BookingStatus.cancelled:
        return BadgeStyle(
          backgroundColor: const Color(0xFFFFEBF4),
          textColor: const Color(0xFF89023E).withOpacity(.85),
          icon: Icons.cancel,
        );
      case BookingStatus.onHold:
        return BadgeStyle(
          backgroundColor: const Color(0xFFF3F4F6),
          textColor: const Color(0xFF30343F).withOpacity(.85),
          icon: Icons.pause,
        );
    }
  }
}

class BadgeStyle {
  final Color backgroundColor;
  final Color textColor;
  final IconData icon;

  const BadgeStyle({
    required this.backgroundColor,
    required this.textColor,
    required this.icon,
  });
}
