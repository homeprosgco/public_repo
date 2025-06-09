import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/feature.dart';
import 'package:responsive_framework/responsive_framework.dart';

class BookingFormView extends ConsumerWidget {
  final String? bookingId;

  const BookingFormView({
    super.key,
    this.bookingId,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ColorScheme colorScheme = Theme.of(context).colorScheme;
    final bookingFormNotifier = ref.read(bookingFormNotifierProvider.notifier);
    final booking = ref.read(bookingFormNotifierProvider);
    final List<String> breadcrumbText = booking.id.isNotEmpty ? ['Work Order Id', booking.id] : ["Create New Work Order"];

    return PlatformViewLayout(
      viewHeader: _buildViewHeader(
        colorScheme,
        breadcrumbText,
      ),
      viewHeaderChild: booking.id.isEmpty
          ? null
          : StackRow(
              spacing: const [k1_5],
              children: [
                const CustomThemeText(
                  text: 'Work Order ID: ',
                  fontWeight: FontWeight.w700,
                  fontKey: FontKey.primary,
                ),
                CustomThemeText(
                  text: booking.id,
                  color: colorScheme.onSurface.withOpacity(.75),
                )
              ],
            ),
      body: SingleChildScrollView(
        child: StackColumn(
          horizontalAlignment: CrossAxisAlignment.start,
          spacing: const [k12, k12, k16, k8],
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: k2),
              child: PlatformSectionHeader(
                sectionHeader: booking.id.isEmpty ? 'Create New Work Order' : 'Work Order Update',
              ),
            ),
            SizedBox(
              width: max5XL,
              child: StackRow(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                spacing: const [k6],
                children: [
                  Expanded(
                    child: ResponsiveLayout(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      spacing: k16,
                      children: [
                        ResponsiveLayout(
                          spacing: k6,
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            ResponsiveLayout(
                              layout: ResponsiveRowColumnType.COLUMN,
                              spacing: k6,
                              children: [
                                StackColumn(
                                  children: [
                                    StackColumn(
                                      horizontalAlignment: CrossAxisAlignment.start,
                                      spacing: const [k3_5],
                                      children: [
                                        const CustomThemeText(
                                          text: 'Work Order Service',
                                          variant: TypographyVariant.labelLarge,
                                          fontWeight: FontWeight.w700,
                                          fontKey: FontKey.primary,
                                        ),
                                        ProjectServiceStep(
                                          booking: booking,
                                          bookingNotifier: bookingFormNotifier,
                                        )
                                      ],
                                    ),
                                  ],
                                ),
                                CustomFormInput(
                                  keyName: 'booking_fullname',
                                  labelText: 'Full Name',
                                  hintText: 'Full Name',
                                  initialValue: booking.fullname,
                                  onChanged: (value) {
                                    print('form view: $value');
                                    bookingFormNotifier.updateField(
                                      value,
                                      (state, value) => state.copyWith(
                                        fullname: value,
                                      ),
                                    );
                                  },
                                ),
                                CustomFormInput(
                                  keyName: 'booking_address',
                                  labelText: 'Service Location',
                                  hintText: 'Service Location',
                                  initialValue: booking.address,
                                  onChanged: (value) {
                                    print('form view: $value');
                                    bookingFormNotifier.updateField(
                                      value,
                                      (state, value) => state.copyWith(
                                        address: value,
                                      ),
                                    );
                                  },
                                ),
                                CustomFormInput(
                                  keyName: 'booking_email',
                                  labelText: 'Email Address',
                                  hintText: 'Email Address',
                                  initialValue: booking.email,
                                  onChanged: (value) {
                                    print('form view: $value');
                                    bookingFormNotifier.updateField(
                                      value,
                                      (state, value) => state.copyWith(
                                        email: value,
                                      ),
                                    );
                                  },
                                ),
                                CustomFormInput(
                                  keyName: 'booking_phone',
                                  labelText: 'Phone Number',
                                  hintText: 'Phone Number',
                                  initialValue: booking.phone,
                                  onChanged: (value) {
                                    print('form view: $value');
                                    bookingFormNotifier.updateField(
                                      value,
                                      (state, value) => state.copyWith(
                                        phone: value,
                                      ),
                                    );
                                  },
                                ),
                              ],
                            ),
                          ],
                        ),
                        ResponsiveLayout(
                          spacing: k16,
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            ResponsiveLayout(
                              layout: ResponsiveRowColumnType.COLUMN,
                              spacing: k6,
                              children: [
                                CustomDropdownMenu(
                                  fieldName: 'booking_property_type',
                                  initialValue: booking.propertyType.toDisplayString,
                                  options: PropertyTypeDisplay.allValues.map((type) => type.toDisplayString).toList(),
                                  labelText: 'Property Type',
                                  onChange: (value) {
                                    print(value);
                                  },
                                ),
                                CustomDropdownMenu(
                                  fieldName: 'booking_owner_status',
                                  initialValue: booking.ownershipStatus.toDisplayString,
                                  options: OwnershipStatusDisplay.allValues.map((type) => type.toDisplayString).toList(),
                                  labelText: 'Ownership Status',
                                  onChange: (value) {
                                    print(value);
                                  },
                                ),
                                CustomDropdownMenu(
                                  fieldName: 'booking_time_of_day',
                                  initialValue: booking.timeOfDay.toDisplayString,
                                  options: TimeOfDayDisplay.allValues.map((type) => type.toDisplayString).toList(),
                                  labelText: 'Best Appointment Time',
                                  onChange: (value) {
                                    print(value);
                                  },
                                ),
                                CustomDropdownMenu(
                                  fieldName: 'booking_timeline',
                                  initialValue: booking.timeline.toDisplayString,
                                  options: ProjectTimelineDisplay.allValues.map((type) => type.toDisplayString).toList(),
                                  labelText: 'Hiring Timeline',
                                  onChange: (value) {
                                    print(value);
                                  },
                                ),
                                CustomDropdownMenu(
                                  fieldName: 'hiring_stage',
                                  initialValue: booking.hiringStage.toDisplayString,
                                  options: HiringStageDisplay.allValues.map((type) => type.toDisplayString).toList(),
                                  labelText: 'Hiring Stage',
                                  onChange: (value) {
                                    print(value);
                                  },
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              width: max5XL,
              child: StackColumn(
                horizontalAlignment: CrossAxisAlignment.start,
                spacing: const [k3],
                children: [
                  const CustomThemeText(
                    text: 'Project Description',
                    variant: TypographyVariant.labelLarge,
                    fontWeight: FontWeight.w700,
                    fontKey: FontKey.primary,
                  ),
                  ProjectDetailsStep(
                    booking: booking,
                    bookingNotifier: bookingFormNotifier,
                    maxLines: 8,
                  ),
                ],
              ),
            ),
            const SizedBox(
              width: max5XL,
              child: StackColumn(
                horizontalAlignment: CrossAxisAlignment.start,
                spacing: [k3],
                children: [
                  CustomThemeText(
                    text: 'Project Uploads',
                    variant: TypographyVariant.labelLarge,
                    fontWeight: FontWeight.w700,
                    fontKey: FontKey.primary,
                  ),
                  ProjectFileUploadsStep(
                    labelText: '',
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(k8),
              child: Align(
                alignment: Alignment.centerRight,
                child: CustomThemeButton(
                  keyName: '',
                  size: 'medium',
                  onPressed: () {},
                  icon: const Icon(Icons.save_outlined),
                  iconPosition: 'end',
                  child: const CustomThemeText(
                    text: 'Save',
                    color: white,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  _buildViewHeader(ColorScheme colorScheme, List<String> breadcrumbText) {
    return PlatformDashboardViewHeaderViewModel(
      route: "Work Orders",
      breadcrumbs: ["Work Orders", ...breadcrumbText],
      color: colorScheme.primary.withOpacity(.95),
      isNestedRoute: true,
    );
  }
}
