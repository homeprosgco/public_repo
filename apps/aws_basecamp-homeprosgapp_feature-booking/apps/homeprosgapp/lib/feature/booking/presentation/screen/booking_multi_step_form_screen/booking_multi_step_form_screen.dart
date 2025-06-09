import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';
import '../../provider/booking_providers.dart';
import '../../../domain/booking_domain.dart';
import '../booking_screen_header/booking_screen_header.dart';
import 'booking_steps_data/booking_steps_data.dart';
import 'input_decoration_theme/booking_input_decoration_theme.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';

class BookingMultiStepFormScreen extends ConsumerStatefulWidget {
  final String? service;

  const BookingMultiStepFormScreen({super.key, this.service});

  @override
  ConsumerState<BookingMultiStepFormScreen> createState() => _BookingMultiStepFormScreenState();
}

class _BookingMultiStepFormScreenState extends ConsumerState<BookingMultiStepFormScreen> {
  final _formKey = GlobalKey<FormBuilderState>();
  int _currentStep = 0;

  late List<Map<String, dynamic>> _stepsData;

  @override
  void initState() {
    super.initState();

// Initialize _stepsData with bookingNotifier and booking entity
    final bookingNotifier = ref.read(bookingFormNotifierProvider.notifier);
    final booking = ref.read(bookingFormNotifierProvider);
    _stepsData = getStepsData(
      bookingNotifier: bookingNotifier,
      booking: booking,
    );

    if (widget.service != null) {
      _currentStep = 1;
      WidgetsBinding.instance.addPostFrameCallback((_) {
        // Automatically set the service value in the provider's state.
        ref.read(bookingFormNotifierProvider.notifier).updateField(
              widget.service,
              (state, newValue) => state.copyWith(service: newValue),
            );
      });
    }
  }

  void _onBack() {
    if (_currentStep > 0) {
      setState(() {
        _currentStep--;
      });
    }
  }

  void _onNext(BuildContext context) {
    if (_formKey.currentState?.saveAndValidate() ?? false) {
      String currentField = _stepsData[_currentStep]['field'];

      // Handle the composite field for "contact_details" step
      if (currentField == 'contact_details') {
        final contactDetails = _formKey.currentState?.fields['contact_details']?.value as Map<String, dynamic>?;

        if (contactDetails != null &&
            contactDetails['full_name']?.isNotEmpty == true &&
            contactDetails['address']?.isNotEmpty == true &&
            contactDetails['email_address']?.isNotEmpty == true &&
            contactDetails['terms_accepted'] == true) {
          context.go('booking-confirmation');
        } else {
          _formKey.currentState?.fields['contact_details']?.invalidate('Please complete all required fields.');
        }
      } else {
        // Handle single fields as usual
        if ((_formKey.currentState?.fields[currentField]?.value ?? '').toString().isNotEmpty) {
          setState(() {
            _currentStep++;
          });
        } else {
          _formKey.currentState?.fields[currentField]?.invalidate('This field is required.');
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Theme(
        data: bookingMultiStepFormInputTheme,
        child: Scaffold(
          body: StackColumn(
            horizontalAlignment: CrossAxisAlignment.stretch,
            children: [
              LinearPercentIndicator(
                padding: const EdgeInsets.symmetric(horizontal: 0),
                lineHeight: 8.0,
                percent: (_currentStep + 1) / _stepsData.length,
                progressColor: Theme.of(context).colorScheme.primary,
                backgroundColor: Colors.grey[300],
              ),
              const BookingScreenHeader(),
              Expanded(
                child: Center(
                  child: Container(
                    constraints: const BoxConstraints(maxWidth: max2XL),
                    padding: const EdgeInsets.symmetric(horizontal: k4),
                    child: FormBuilder(
                      key: _formKey,
                      initialValue: {'service': widget.service},
                      child: StackColumn(
                        horizontalAlignment: CrossAxisAlignment.stretch,
                        spacing: const [k4, k8, k8],
                        children: [
                          if (widget.service != null)
                            FormBuilderTextField(
                              name: 'service',
                              initialValue: widget.service,
                              style: const TextStyle(color: Colors.transparent),
                              decoration: InputDecoration(
                                border: InputBorder.none,
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(k0_5),
                                  borderSide: const BorderSide(
                                    color: Colors.transparent,
                                    width: 0.5,
                                  ),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(k0_5),
                                  borderSide: const BorderSide(
                                    color: Colors.transparent,
                                    width: 0.5,
                                  ),
                                ),
                              ),
                            ),
                          CustomThemeText(
                            text: _stepsData[_currentStep]['title'],
                            variant: TypographyVariant.titleLarge,
                            maxLines: 3,
                          ),
                          if (_stepsData[_currentStep]['body'] != null)
                            CustomThemeText(
                              text: _stepsData[_currentStep]['body'],
                              variant: TypographyVariant.bodyLarge,
                              color: Theme.of(context).colorScheme.onSurface.withOpacity(.75),
                              fontWeight: FontWeight.w100,
                              maxLines: 3,
                            ),
                          Center(
                            child: _stepsData[_currentStep]['step'],
                          )
                        ],
                      ),
                    ),
                  ),
                ),
              )
            ],
          ),
          bottomNavigationBar: _buildBottomNavigation(context),
        ),
      ),
    );
  }

  Widget _buildBottomNavigation(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: k0, vertical: k0),
      child: Row(
        children: [
          if (_currentStep > 0)
            Expanded(
              child: GestureDetector(
                onTap: _onBack,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: k8, vertical: k4),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  child: Row(
                    children: [
                      Icon(Icons.arrow_back, color: Theme.of(context).colorScheme.primary),
                      const SizedBox(width: 8.0),
                      Text(
                        'Previous',
                        style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                              color: Theme.of(context).colorScheme.primary,
                            ),
                      ),
                    ],
                  ),
                ),
              ),
            )
          else
            const Spacer(),
          GestureDetector(
            onTap: () => _onNext(context),
            child: Container(
              height: k12,
              constraints: const BoxConstraints(maxWidth: k56),
              padding: const EdgeInsets.symmetric(horizontal: k8, vertical: k4),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.primary,
                borderRadius: BorderRadius.circular(k0),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Next',
                    style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                          color: Colors.white,
                        ),
                  ),
                  const SizedBox(width: 8.0),
                  const Icon(Icons.arrow_forward, color: Colors.white),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
