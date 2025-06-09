import 'package:flutter/material.dart';
import 'package:homeprosgapp/core/core.dart';

import '../../domain/booking_domain.dart';
import '../model/booking_status_badge_style_model.dart';

enum Menu { preview, share, getLink, remove, download }

class BookingTableViewModel implements TableDataModel {
  final List<BookingEntity> bookingEntities;

  BookingTableViewModel(this.bookingEntities);

  @override
  Map<int, FractionColumnWidth> get columnWidths => const {
        1: FractionColumnWidth(.22),
        2: FractionColumnWidth(.14),
        3: FractionColumnWidth(.19),
        4: FractionColumnWidth(.16),
        5: FractionColumnWidth(.15),
        6: FractionColumnWidth(.10),
      };

  @override
  String get shellRoute => PlatformRoute.platformBookingsTableView;

  @override
  List<String> get ids => bookingEntities.map((booking) => booking.id).toList();


  @override
  List<String> get headers => [
        'WORK ORDER',
        'STATUS',
        'SERVICE LOCATION',
        'HIRING STAGE',
        'CATEGORY',
      ];

  @override
  Map<String, String> get sortValues => {
        'None': '',
        'Customer Name': 'fullname',
        'Service Type': 'service',
      };

  @override
  List<String> get filterColumns => ['Off', 'Status', 'Hiring Stage', 'Category'];

  @override
  List<List<Widget>> getDataRows() {
    if (bookingEntities.isEmpty) {
      return [];
    }

    return bookingEntities.map((booking) {
      final statusStyle = BookingStatusBadgeStyles.getStyle(booking.status);

      return [
        StackColumn(
          horizontalAlignment: CrossAxisAlignment.start,
          children: [
            CustomThemeText(
              text: booking.fullname,
              fontWeight: FontWeight.w600,
              fontKey: FontKey.primary,
              color: onSurfaceVariant.withOpacity(.85),
            ),
            CustomThemeText(
              text: booking.service,
              overflow: TextOverflow.ellipsis,
              maxLines: 1,
              color: onSurfaceVariant.withOpacity(.85),
            ),
          ],
        ),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: k1_5),
          decoration: BoxDecoration(
              color: statusStyle.backgroundColor.withOpacity(.25),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: statusStyle.backgroundColor.withOpacity(.4))),
          child: StackRow(
            spacing: const [k1],
            children: [
              Icon(statusStyle.icon, color: statusStyle.textColor, size: 14),
              CustomThemeText(
                text: booking.status.toDisplayString,
                color: statusStyle.textColor,
                variant: TypographyVariant.labelSmall,
                fontWeight: FontWeight.w700,
              ),
            ],
          ),
        ),
        StackRow(
          spacing: const [k2],
          children: [
            Icon(Icons.location_on_outlined, color: secondary.withOpacity(.75), size: k4),
            CustomThemeText(
              text: booking.address,
              color: onSurfaceVariant.withOpacity(.85),
            ),
          ],
        ),
        CustomThemeText(text: booking.hiringStage.toDisplayString),
        CustomThemeText(text: getProfessionByService(booking.service)),
      ];
    }).toList();
  }

  PopupMenuButton<Menu> _popupMenuButton() {
    return PopupMenuButton<Menu>(
      padding: EdgeInsets.zero,
      icon: const Icon(Icons.more_vert),
      onSelected: (Menu item) {},
      itemBuilder: (BuildContext context) => <PopupMenuEntry<Menu>>[
        const PopupMenuItem<Menu>(
          value: Menu.preview,
          child: ListTile(
            leading: Icon(Icons.visibility_outlined),
            title: Text('Preview'),
          ),
        ),
        const PopupMenuItem<Menu>(
          value: Menu.share,
          child: ListTile(
            leading: Icon(Icons.share_outlined),
            title: Text('Share'),
          ),
        ),
        const PopupMenuItem<Menu>(
          value: Menu.getLink,
          child: ListTile(
            leading: Icon(Icons.link_outlined),
            title: Text('Get link'),
          ),
        ),
        const PopupMenuDivider(),
        const PopupMenuItem<Menu>(
          value: Menu.remove,
          child: ListTile(
            leading: Icon(Icons.delete_outline),
            title: Text('Remove'),
          ),
        ),
        const PopupMenuItem<Menu>(
          value: Menu.download,
          child: ListTile(
            leading: Icon(Icons.download_outlined),
            title: Text('Download'),
          ),
        ),
      ],
    );
  }
}
