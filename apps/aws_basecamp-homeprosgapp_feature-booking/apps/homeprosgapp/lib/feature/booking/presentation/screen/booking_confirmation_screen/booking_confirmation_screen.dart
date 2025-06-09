import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:form_builder_file_picker/form_builder_file_picker.dart';
import 'package:homeprosgapp/core/core.dart';
import 'package:homeprosgapp/feature/booking/domain/booking_domain.dart';
import 'package:responsive_framework/responsive_framework.dart';

import '../../provider/booking_providers.dart';
import '../booking_screen_header/booking_screen_header.dart';

class BookingConfirmationScreen extends ConsumerWidget {
  const BookingConfirmationScreen({
    super.key,
  });

  // Submit the booking data
  Future<void> _submitData(WidgetRef ref) async {
    // implemented reading uploaded files from a file upload provider
    // if files were uploaded
    final bookingFormData = ref.read(bookingFormNotifierProvider);
    final bookingFormNotifier = ref.read(bookingFormNotifierProvider.notifier);
    final uploadedFiles = ref.read(uploadedFilesProvider);
    final List<String> fileUrls = [];

    if (uploadedFiles.isNotEmpty) {
      for (var file in uploadedFiles) {
        final url = await ref.read(s3FileUploaderProvider.notifier).uploadFile(file: file, uploadPath: '/bookings/${generateS3PathSegment()}/${file.name}');
        fileUrls.add(url);
      }
      bookingFormNotifier.updateField(fileUrls, (state, newValue) => state.copyWith(photoUploadUrls: newValue));
    }
    await ref.read(asyncBookingsProvider.notifier).createBooking(bookingFormData);
  }

  // // Submit the booking data
  // Future<void> _sendBookingConfirmationEmail(WidgetRef ref) async {
  //   final bookingEmailConfirmation = ref.read(bookingFormNotifierProvider).toBookingConfirmationEmailEntity('https://example.com/confirm')

  //   final result = await ref.read(asyncEmailNotifierProvider.notifier).sendBookingConfirmationEmail(bookingConfirmationEmail);

  //   result.fold(
  //     (failure) => safePrint('Email sending failed: $failure'),
  //     (success) => safePrint('Email sent successfully!'),
  //   );
  // }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Watch the booking submission state
    final bookingState = ref.watch(asyncBookingsProvider);
    final bookingFormData = ref.read(bookingFormNotifierProvider);

    // Listen for changes to the booking state
    // ref.listen<AsyncValue<List<BookingEntity>>>(asyncBookingsProvider, (previous, next) {
    //   if (!context.mounted) return; // Ensure the context is valid

    //   next.when(
    //     data: (_) async {
    //       // Send the booking confirmation email after a successful booking
    //       await _sendBookingConfirmationEmail(ref);

    //       if (!context.mounted) return; // Ensure the context is still valid

    //       // Navigate to the booking confirmation email screen
    //       await ScaffoldMessenger.of(context)
    //           .showSnackBar(
    //             const SnackBar(content: Text('Booking successfully submitted! Please check your email for confirmation.')),
    //           )
    //           .closed;

    //       if (!context.mounted) return; // Ensure the context is still valid

    //       context.go('/booking-confirm-email?email=${bookingFormData.email}');
    //     },
    //     error: (error, _) async {
    //       safePrint('ERROR: $error');

    //       // Handle other errors
    //       ScaffoldMessenger.of(context).showSnackBar(
    //         SnackBar(content: Text('Error submitting booking: $error')),
    //       );
    //     },
    //     loading: () {
    //       // Handle loading state if needed
    //       safePrint('Loading...');
    //     },
    //   );
    // });

    return SafeArea(
      child: Scaffold(
        body: Stack(
          children: [
            SingleChildScrollView(
              child: StackColumn(
                horizontalAlignment: CrossAxisAlignment.stretch,
                children: [
                  const BookingScreenHeader(),
                  _buildConfirmationView(context, bookingFormData, ref),
                ],
              ),
            ),
            if (bookingState.isLoading) // Show loading overlay when submitting
              Container(
                color: Colors.black.withOpacity(0.5), // Semi-transparent background
                child: const Center(
                  child: CircularProgressIndicator(), // Loading spinner
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildConfirmationView(
    BuildContext context,
    BookingEntity booking,
    WidgetRef ref,
  ) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.stretch,
      padding: const EdgeInsets.only(top: k16),
      spacing: responsiveValue(context: context, defaultValue: const [k12], lg: const [k24]),
      children: [
        StackColumn(
          spacing: const [k8],
          children: [
            const CustomThemeText(
              text: 'Good news! We have home repair\n professionals who match your project.',
              variant: TypographyVariant.headlineMedium,
              fontWeight: FontWeight.w700,
              maxLines: 2,
              textAlign: TextAlign.center,
            ),
            ConstrainedBox(
              constraints: responsiveValue(
                context: context,
                defaultValue: const BoxConstraints(maxWidth: k44),
                sm: const BoxConstraints(maxWidth: maxXL),
              ),
              child: ResponsiveLayout(
                layout: responsiveValue(
                  context: context,
                  defaultValue: ResponsiveRowColumnType.COLUMN,
                  sm: ResponsiveRowColumnType.ROW,
                ),
                crossAxisAlignment: CrossAxisAlignment.center,
                spacing: k5,
                children: [
                  StackRow(
                    spacing: const [k3],
                    children: [
                      Icon(
                        Icons.group,
                        size: k6,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                      CustomThemeText(
                        text: 'Get Introduced',
                        variant: TypographyVariant.labelSmall,
                        fontWeight: FontWeight.w100,
                        color: Theme.of(context).colorScheme.inverseSurface,
                      )
                    ],
                  ),
                  StackRow(
                    spacing: const [k3],
                    children: [
                      Icon(
                        Icons.calendar_today,
                        size: k6,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                      CustomThemeText(
                        text: 'Schedule Site Visits',
                        variant: TypographyVariant.labelSmall,
                        fontWeight: FontWeight.w100,
                        color: Theme.of(context).colorScheme.inverseSurface,
                      )
                    ],
                  ),
                  StackRow(
                    spacing: const [k3],
                    children: [
                      Icon(
                        Icons.compare_arrows,
                        size: k6,
                        color: Theme.of(context).colorScheme.primary,
                      ),
                      CustomThemeText(
                        text: 'Compare Estimates',
                        variant: TypographyVariant.labelSmall,
                        fontWeight: FontWeight.w100,
                        color: Theme.of(context).colorScheme.inverseSurface,
                      )
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
        Padding(
          padding: responsiveValue(
            context: context,
            defaultValue: const EdgeInsets.fromLTRB(k4, k0, k4, k4),
            xxl: const EdgeInsets.fromLTRB(k64, k0, k20, k24),
          ),
          child: StackColumn(
            spacing: const [k16],
            children: [
              ResponsiveLayout(
                layout: responsiveValue(
                  context: context,
                  defaultValue: ResponsiveRowColumnType.COLUMN,
                  lg: ResponsiveRowColumnType.ROW,
                ),
                crossAxisAlignment: CrossAxisAlignment.start,
                spacing: k32,
                children: [
                  StackColumn(
                    spacing: const [k3, k16, k5, k5],
                    horizontalAlignment: CrossAxisAlignment.start,
                    children: [
                      const CustomThemeText(
                        text: 'Service Requested',
                        variant: TypographyVariant.titleSmall,
                      ),
                      CustomThemeText(
                        text: booking.service,
                        variant: TypographyVariant.titleLarge,
                      ),
                      _buildTextField(context, label: 'Full Name', value: booking.fullname),
                      _buildTextField(context, label: 'Email Address', value: booking.email),
                      _buildTextField(context, label: 'Phone number', value: booking.phone ?? ''),
                    ],
                  ),
                  StackColumn(
                    horizontalAlignment: CrossAxisAlignment.start,
                    spacing: const [k5],
                    children: [
                      _buildProjectDetails(context, booking),
                      _buildUploadedPhotos([]),
                    ],
                  ),
                ],
              ),
              StackRow(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: responsiveValue(
                  context: context,
                  defaultValue: MainAxisAlignment.center,
                  xs: MainAxisAlignment.end,
                ),
                children: [
                  CustomThemeButton(
                    keyName: 'booking_confirm_button',
                    onPressed: () => _submitData(ref),
                    borderRadius: 'none',
                    customFixedSize: const Size(k64, k12),
                    child: const Text('Confirm Project'),
                  ),
                ],
              )
            ],
          ),
        )
      ],
    );
  }

  Widget _buildTextField(BuildContext context, {required String label, required String value}) {
    return SizedBox(
      width: k96,
      child: StackColumn(
        horizontalAlignment: CrossAxisAlignment.start,
        spacing: const [k3],
        children: [
          CustomThemeText(
            text: label,
            variant: TypographyVariant.bodyMedium,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(.65),
          ),
          TextFormField(
            initialValue: value,
            decoration: InputDecoration(
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(k0_5),
                borderSide: BorderSide(
                  color: Colors.grey.shade400, // Set your desired color here
                  width: 0.5,
                ),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(k0_5),
                borderSide: BorderSide(
                  color: Colors.grey.shade400, // Set your desired color here
                  width: 0.5,
                ),
              ),
            ),
            readOnly: true, // Make the field read-only
          )
        ],
      ),
    );
  }

  Widget _buildProjectDetails(BuildContext context, BookingEntity booking) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.start,
      // spacing: const [k5, k5],
      children: [
        ResponsiveLayout(
          crossAxisAlignment: CrossAxisAlignment.start,
          layout: responsiveValue(
            context: context,
            defaultValue: ResponsiveRowColumnType.COLUMN,
            lg: ResponsiveRowColumnType.ROW,
          ),
          spacing: responsiveValue(
            context: context,
            defaultValue: k0,
            lg: k32,
            xl: k64,
          ),
          children: [
            _DetailRow(
              title: 'Property Type',
              value: booking.propertyType,
            ),
            _DetailRow(
              title: 'Property Ownership',
              value: booking.ownershipStatus,
            ),
          ],
        ),
        ResponsiveLayout(
          crossAxisAlignment: CrossAxisAlignment.start,
          layout: responsiveValue(
            context: context,
            defaultValue: ResponsiveRowColumnType.COLUMN,
            lg: ResponsiveRowColumnType.ROW,
          ),
          spacing: responsiveValue(
            context: context,
            defaultValue: k0,
            lg: k32,
            xl: k64,
          ),
          children: [
            _DetailRow(
              title: 'Project Status',
              value: booking.status,
            ),
            _DetailRow(
              title: 'Project Timeline',
              value: booking.timeline,
            ),
          ],
        ),
        _DetailRow(
          title: 'Project Details',
          value: booking.details,
        ),
      ],
    );
  }

  Widget _buildUploadedPhotos(List<PlatformFile> uploadedFiles) {
    // Check if there are uploaded files
    if (uploadedFiles.isEmpty) {
      return const Text('No files uploaded');
    }

    // Build a list of photo/document previews
    return StackColumn(
      spacing: const [k8],
      horizontalAlignment: CrossAxisAlignment.start,
      children: [
        const CustomThemeText(
          text: 'Photos and Documents',
          variant: TypographyVariant.bodyMedium,
        ),
        Wrap(
          spacing: k8, // Spacing between items
          runSpacing: k8, // Spacing between rows
          children: uploadedFiles.map((file) => CustomFilePreview(file: file)).toList(),
        ),
      ],
    );
  }
}

class _DetailRow<T> extends StatelessWidget {
  final String title;
  final T value;

  const _DetailRow({
    required this.title,
    required this.value,
  });

  @override
  Widget build(BuildContext context) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.start,
      padding: const EdgeInsets.only(bottom: k8),
      spacing: const [k4],
      children: [
        CustomThemeText(
          text: title,
          variant: TypographyVariant.bodyMedium,
          maxLines: 1,
        ),
        CustomThemeText(
          text: value.toString(),
          variant: TypographyVariant.bodyMedium,
          fontWeight: FontWeight.w200,
          textAlign: TextAlign.right,
          color: Theme.of(context).colorScheme.onSurface.withOpacity(.4),
          maxLines: 5,
        ),
      ],
    );
  }
}
