import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';

import '../model/booking_status_badge_style_model.dart';
import '../provider/booking_providers.dart';
import '../../domain/booking_domain.dart';

class BookingDetailView extends ConsumerWidget {
  final String bookingId;
  const BookingDetailView({
    super.key,
    required this.bookingId,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookings = ref.watch(asyncBookingsProvider);
    final ColorScheme colorScheme = Theme.of(context).colorScheme;

    return bookings.when(
      data: (bookings) {
        final booking = ref.watch(filteredBookingsProvider(bookings).notifier).findById(bookingId);

        List<String> breadcrumbText = ['Work Order Id', 'Not found'];

        if (booking == null) {
          return PlatformViewLayout(
            viewHeader: _buildViewHeader(colorScheme, breadcrumbText, 'Result Not Found'),
            body: _buildResultNotFound(context, colorScheme),
          );
        }

        breadcrumbText = ['Work Order Id', booking.id];
        final statusStyle = BookingStatusBadgeStyles.getStyle(booking.status);

        return PlatformViewLayout(
          viewHeader: _buildViewHeader(colorScheme, breadcrumbText, booking.service),
          viewHeaderChild: _buildViewHeaderChild(booking, statusStyle),
          body: SingleChildScrollView(
            child: Row(
              children: [
                Expanded(
                  child: StackColumn(
                    horizontalAlignment: CrossAxisAlignment.stretch,
                    spacing: const [k3],
                    children: [
                      const PlatformContainer(
                        child: PlatformSectionHeader(
                          sectionHeader: 'Work Order Details',
                        ),
                      ),
                      PlatformContainer(
                        child: StackColumn(
                          spacing: const [k8, k8],
                          children: [
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                _buildService(booking, colorScheme),
                                _buildCreatedBy(colorScheme),
                              ],
                            ),
                            Divider(
                              color: colorScheme.onSurface.withOpacity(.1),
                              height: 0,
                            ),
                            ResponsiveLayout(
                              children: [
                                StackColumn(
                                  spacing: const [k5, k5, k3, k3, k3, k3, k3],
                                  children: [
                                    _buildProjectDescription(booking, colorScheme),
                                    StackColumn(
                                      children: [
                                        _buildLabel('Service Location', colorScheme),
                                        CustomThemeText(text: booking.address),
                                      ],
                                    ),
                                    _buildProjectAttribute(
                                      colorScheme,
                                      label: 'Hiring Stage',
                                      attribute: booking.hiringStage.toDisplayString,
                                    ),
                                    _buildProjectAttribute(
                                      colorScheme,
                                      label: 'Best Appointment Time',
                                      attribute: booking.timeOfDay.toDisplayString,
                                    ),
                                    _buildProjectAttribute(
                                      colorScheme,
                                      label: 'Property Type',
                                      attribute: booking.propertyType.toDisplayString,
                                    ),
                                    _buildProjectAttribute(
                                      colorScheme,
                                      label: 'Ownership Status',
                                      attribute: booking.ownershipStatus.toDisplayString,
                                    ),
                                    _buildProjectAttribute(
                                      colorScheme,
                                      label: 'Hiring Timeline',
                                      attribute: booking.timeline.toDisplayString,
                                    ),
                                    if (booking.professions != null && booking.professions!.isNotEmpty)
                                      StackRow(
                                        spacing: const [k2],
                                        children: [
                                          _buildLabel('Skills Need', colorScheme),
                                          StackRow(
                                            children: booking.professions!.map((category) {
                                              return CustomThemeText(text: category) as Widget;
                                            }).toList(),
                                          ),
                                        ],
                                      ),
                                  ],
                                ),
                                Container(),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const StackColumn(
                  children: [],
                )
              ],
            ),
          ),
        );
      },
      error: (error, _) => Text('Error: $error'),
      loading: () => _buildLoadingOverlay(),
    );
  }

  Widget _buildViewHeaderChild(BookingEntity booking, BadgeStyle statusStyle) {
    return Container(
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
    );
  }

  Widget _buildCreatedBy(
    ColorScheme colorScheme,
  ) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.end,
      children: [
        _buildLabel('Created by', colorScheme),
        StackRow(
          mainAxisAlignment: MainAxisAlignment.end,
          spacing: const [k8],
          children: [
            const Padding(
              padding: EdgeInsets.only(right: k4),
              child: CustomThemeImage(
                imageUrl: 'images/demo/booking/demo_handyman_avatar.jpg',
                borderRadiusStyle: ImageBorderRadius.circular,
                size: ImageSize.xxs,
              ),
            ),
            StackColumn(
              horizontalAlignment: CrossAxisAlignment.end,
              children: [
                _buildTitle('Jonathan Morrison'),
                _buildBody('November 26, 2024', colorScheme),
              ],
            )
          ],
        ),
      ],
    );
  }

  Widget _buildService(
    BookingEntity booking,
    ColorScheme colorScheme,
  ) {
    return Expanded(
      child: StackColumn(
        horizontalAlignment: CrossAxisAlignment.start,
        spacing: const [k0, k0, k2],
        children: [
          const SizedBox(
            height: k6,
          ),
          _buildLabel('Fixed Rate', colorScheme),
          CustomThemeText(
            text: booking.service,
            variant: TypographyVariant.headlineLarge,
            fontWeight: FontWeight.w800,
            fontKey: FontKey.primary,
          ),
          StackRow(
            spacing: const [k1],
            children: [
              const Icon(Icons.recommend_outlined, color: Colors.green),
              CustomThemeText(text: booking.confirmed == true ? 'Confirmed' : 'Unconfirmed'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildProjectDescription(BookingEntity booking, ColorScheme colorScheme) {
    return StackColumn(
      children: [
        _buildLabel('Project Description', colorScheme),
        CustomThemeText(text: booking.details),
      ],
    );
  }

  Widget _buildProjectAttribute(
    ColorScheme colorScheme, {
    required String label,
    required String attribute,
  }) {
    return StackRow(
      spacing: const [k1_5],
      children: [
        _buildLabel(label, colorScheme),
        CustomThemeText(text: attribute),
      ],
    );
  }

  Widget _buildResultNotFound(BuildContext context, ColorScheme colorScheme) {
    return Center(
      child: StackColumn(
        spacing: const [k5, k1, k5],
        horizontalAlignment: CrossAxisAlignment.center,
        children: [
          const CustomThemeImage(imageUrl: 'images/not_found/no_result_found.png'),
          const CustomThemeText(
            text: 'Result Not Found',
            variant: TypographyVariant.headlineMedium,
            fontWeight: FontWeight.w700,
            fontKey: FontKey.primary,
          ),
          CustomThemeText(
            text: 'Whoops ... this information is no longer avalilable',
            color: colorScheme.onSurface.withOpacity(.6),
            variant: TypographyVariant.bodyLarge,
          ),
          CustomThemeButton(
            keyName: 'result_not_found_button',
            buttonText: 'Go Back',
            size: 'medium',
            onPressed: () => context.pop(),
          ),
        ],
      ),
    );
  }

  _buildLabel(String text, ColorScheme colorScheme) {
    return CustomThemeText(
      text: text,
      color: colorScheme.onSurface.withOpacity(.6),
    );
  }

  _buildTitle(String text) {
    return CustomThemeText(
      text: text,
      variant: TypographyVariant.titleMedium,
      fontWeight: FontWeight.w700,
    );
  }

  _buildBody(String text, ColorScheme colorScheme) {
    return CustomThemeText(
      text: text,
      color: colorScheme.secondary.withOpacity(.7),
    );
  }

  _buildViewHeader(ColorScheme colorScheme, List<String> breadcrumbText, String header) {
    return PlatformDashboardViewHeaderViewModel(
      route: header,
      breadcrumbs: ["Work Orders", ...breadcrumbText],
      color: colorScheme.primary.withOpacity(.95),
      isNestedRoute: true,
    );
  }

  Widget _buildLoadingOverlay() {
    return Container(
      color: Colors.black.withOpacity(0.5),
      child: const Center(child: CircularProgressIndicator()),
    );
  }
}
