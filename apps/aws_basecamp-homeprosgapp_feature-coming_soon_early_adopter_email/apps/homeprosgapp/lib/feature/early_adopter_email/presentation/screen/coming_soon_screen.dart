import 'dart:async';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:homeprosgapp/core/core.dart';

import '../provider/early_adopter_email_provider/early_adopter_email_provider.dart';

class ComingSoonScreen extends ConsumerStatefulWidget {
  const ComingSoonScreen({super.key});

  @override
  ConsumerState<ComingSoonScreen> createState() => _ComingSoonScreenState();
}

class _ComingSoonScreenState extends ConsumerState<ComingSoonScreen> {
  // Define a fixed target date (e.g., December 1, 2024, at midnight)
  final DateTime targetDate = DateTime(2024, 12, 01, 00, 00);
  late Timer timer;
  List<String> timeStrings = ['00', '00', '00', '00']; // Initial state
  String? emailError; // Holds error message for invalid email
  String email = ''; // Holds the email entered by the user
  final TextEditingController emailController = TextEditingController();
  final emailKeyName = 'earlyAdopterEmail';
  final notifyButtonKeyName = 'notifyButton';

  @override
  void initState() {
    super.initState();
    _startTimer(); // Start the countdown timer
  }

  @override
  void dispose() {
    timer.cancel(); // Cancel the timer to avoid memory leaks
    emailController.dispose(); // Dispose the controller to free up resources.
    super.dispose();
  }

  // Start a periodic timer to update the countdown every second
  void _startTimer() {
    timer = Timer.periodic(const Duration(seconds: 1), (Timer t) {
      final now = DateTime.now();
      final remaining = targetDate.difference(now);

      if (remaining.isNegative) {
        // If the countdown has ended, stop the timer
        timer.cancel();
        setState(() {
          timeStrings = ['00', '00', '00', '00']; // Set to 0 when done
        });
      } else {
        // Update the remaining time in the UI
        setState(() {
          timeStrings = _formatDuration(remaining);
        });
      }
    });
  }

  // Convert the remaining time into [days, hours, minutes, seconds]
  List<String> _formatDuration(Duration duration) {
    final days = duration.inDays;
    final hours = duration.inHours % 24;
    final minutes = duration.inMinutes % 60;
    final seconds = duration.inSeconds % 60;

    return [
      days.toString().padLeft(2, '0'),
      hours.toString().padLeft(2, '0'),
      minutes.toString().padLeft(2, '0'),
      seconds.toString().padLeft(2, '0'),
    ];
  }

  void _showSnackbar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  // Handle email submission with validation
  void _onNotifyMePressed() async {
    final email = emailController.text;

    setState(() {
      emailError = validateEmail(email); // Validate email on button press
    });

    if (emailError == null) {
      final result = await ref.read(asyncEarlyAdopterEmailProvider.notifier).createEarlyAdopterEmail(email);
      result.fold(
        (error) => _showSnackbar('Failed to register email: ${error.message}'),
        (_) {
          _showSnackbar('Email registered successfully!');
          // Clear the input field after submission.
          emailController.clear();
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    ColorScheme colorScheme = Theme.of(context).colorScheme;
    BoxConstraints screenConstraints = const BoxConstraints(maxWidth: max5XL, maxHeight: max2XL);
    bool isLoading = ref.watch(asyncEarlyAdopterEmailProvider).isLoading;

    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.grey.shade50,
        body: Stack(
          children: [
            _buildUI(colorScheme, screenConstraints, isLoading),
            _showLoading(isLoading),
          ],
        ),
      ),
    );
  }

  Widget _buildUI(
    ColorScheme colorScheme,
    BoxConstraints screenConstraints,
    bool isLoading,
  ) {
    return StackColumn(
      horizontalAlignment: CrossAxisAlignment.stretch,
      children: [
        Expanded(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: maxXS, maxHeight: max2XL),
            child: ResponsiveLayout(
              children: [
                StackColumn(
                  horizontalAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Expanded(
                      child: ConstrainedBox(
                        constraints: screenConstraints,
                        child: StackColumn(
                          horizontalAlignment: CrossAxisAlignment.center,
                          verticalAlignment: MainAxisAlignment.center,
                          spacing: const [k1_5, k1_5, k8, k8],
                          padding: const EdgeInsets.symmetric(horizontal: k4, vertical: k0),
                          children: [
                            CustomThemeText(
                              text: 'OUR WEBSITE IS',
                              variant: responsiveValue(context: context, defaultValue: TypographyVariant.titleLarge, sm: TypographyVariant.displayMedium),
                              maxLines: 1,
                              textAlign: TextAlign.center,
                              fontWeight: FontWeight.bold,
                            ),
                            AutoSizeText(
                              'COMING SOON!',
                              style: Theme.of(context).textTheme.displayLarge!.copyWith(color: colorScheme.primary, fontSize: 87, fontWeight: FontWeight.bold),
                              textAlign: TextAlign.center,
                              maxLines: 1,
                            ),
                            CustomThemeText(
                              text: 'We have been spending long hours in order to launch our new website. Stay tuned!',
                              variant: TypographyVariant.bodyMedium,
                              textAlign: TextAlign.center,
                              color: colorScheme.onSurface,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                StackRow(
                                  spacing: responsiveValue(context: context, defaultValue: const [k1_5, k1_5, k1_5], sm: const [k4, k4, k4]),
                                  children: List.generate(
                                    4,
                                    (index) {
                                      return _buildCountdownBox(colorScheme, index);
                                    },
                                  ),
                                )
                              ],
                            ),
                            responsiveVisibility(
                              context: context,
                              defaultValue: false,
                              visibleOnXXS: false,
                              visibleOnSM: true,
                              child: Container(
                                constraints: screenConstraints,
                                padding: const EdgeInsets.symmetric(horizontal: k5, vertical: k5),
                                color: colorScheme.primary,
                                child: StackColumn(
                                  horizontalAlignment: CrossAxisAlignment.center,
                                  spacing: const [k2, k4],
                                  children: [
                                    CustomThemeText(
                                      text: 'GET NOTIFIED ABOUT OUR LAUNCH',
                                      color: colorScheme.surfaceContainer,
                                      variant: TypographyVariant.titleMedium,
                                      fontWeight: FontWeight.w500,
                                      maxLines: 2,
                                    ),
                                    Container(
                                      padding: const EdgeInsets.only(left: k4),
                                      color: Colors.white,
                                      child: Row(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children: [
                                          Expanded(
                                            child: CustomFormInput(
                                              keyName: emailKeyName,
                                              controller: emailController,
                                              onChanged: (value) {
                                                setState(() {
                                                  email = value;
                                                });
                                                // Only re-validate if there's already an error
                                                if (emailError != null) {
                                                  setState(() {
                                                    emailError = validateEmail(value); // Clear error if valid
                                                  });
                                                }
                                              },
                                              type: FormInputType.text,
                                              placeholder: 'Enter Your Email Address',
                                              showBorder: false,
                                              inputPadding: const EdgeInsets.symmetric(horizontal: k2, vertical: k0),
                                            ),
                                          ),
                                          CustomThemeButton(
                                            keyName: notifyButtonKeyName,
                                            onPressed: isLoading ? null : () => _onNotifyMePressed(),
                                            borderRadius: 'none',
                                            size: 'custom',
                                            color: 'neutral',
                                            customSize: const EdgeInsets.symmetric(horizontal: k16, vertical: k6),
                                            child: const CustomThemeText(
                                              text: 'NOTIFY ME',
                                              variant: TypographyVariant.titleSmall,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    CustomThemeText(
                                      text: '\u00A9 Copyright 2024 All Rights Reserved | thehomeproservicegroup.com',
                                      color: colorScheme.surfaceContainer,
                                      fontWeight: FontWeight.w100,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            SizedBox(
                              width: double.infinity,
                              child: Text(
                                emailError ?? '',
                                textAlign: TextAlign.left,
                              ),
                            ),
                            responsiveVisibility(
                              context: context,
                              defaultValue: false,
                              visibleOnXXS: true,
                              visibleOnSM: false,
                              child: StackColumn(
                                horizontalAlignment: CrossAxisAlignment.center,
                                spacing: const [k2, k2, k4],
                                children: [
                                  CustomThemeText(
                                    text: 'GET NOTIFIED ABOUT OUR LAUNCH',
                                    color: colorScheme.primary,
                                    variant: responsiveValue(
                                      context: context,
                                      defaultValue: TypographyVariant.bodySmall,
                                      sm: TypographyVariant.titleMedium,
                                    ),
                                    fontWeight: FontWeight.w600,
                                    maxLines: 2,
                                  ),
                                  LayoutBuilder(
                                    builder: (context, constraints) {
                                      return SizedBox(
                                        height: 114,
                                        child: Stack(
                                          children: [
                                            SizedBox(
                                              height: 84,
                                              child: CustomFormInput(
                                                keyName: emailKeyName,
                                                controller: emailController,
                                                onChanged: (value) {
                                                  setState(() {
                                                    email = value;
                                                  });
                                                  // Only re-validate if there's already an error
                                                  if (emailError != null) {
                                                    setState(() {
                                                      emailError = validateEmail(value); // Clear error if valid
                                                    });
                                                  }
                                                },
                                                type: FormInputType.text,
                                                placeholder: 'Enter Your Email Address',
                                                errorText: emailError, // Show error if invalid
                                                hintStyle: const TextStyle(fontSize: k4),
                                                inputPadding: const EdgeInsets.symmetric(horizontal: k2, vertical: k0),
                                              ),
                                            ),
                                            Positioned(
                                              bottom: 0,
                                              left: (constraints.biggest.width - 116) / 2,
                                              child: CustomThemeButton(
                                                keyName: notifyButtonKeyName,
                                                onPressed: isLoading ? null : () => _onNotifyMePressed(),
                                                borderRadius: 'none',
                                                size: 'large',
                                                child: CustomThemeText(
                                                  text: 'NOTIFY ME',
                                                  variant: TypographyVariant.bodyMedium,
                                                  color: colorScheme.onPrimaryContainer,
                                                ),
                                              ),
                                            )
                                          ],
                                        ),
                                      );
                                    },
                                  ),
                                  SizedBox(
                                    height: MediaQuery.of(context).size.height * .1,
                                  ),
                                  CustomThemeText(
                                    text: '\u00A9 Copyright 2024 All Rights Reserved\n thehomeproservicegroup.com',
                                    color: colorScheme.onSurface.withOpacity(.75),
                                    fontWeight: FontWeight.w100,
                                    textAlign: TextAlign.center,
                                    variant: TypographyVariant.labelSmall,
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _showLoading(bool isLoading) {
    if (isLoading) {
      return const Align(
        alignment: Alignment.topCenter,
        child: MaterialBanner(
          content: Text('Processing your request, please wait...'),
          backgroundColor: Colors.blueGrey,
          actions: [],
        ),
      );
    }
    return const SizedBox.shrink();
  }

  Widget _buildCountdownBox(ColorScheme colorScheme, int index) {
    return StackColumn(
      children: [
        Container(
          width: responsiveValue(context: context, defaultValue: k14, sm: k28),
          height: responsiveValue(context: context, defaultValue: k14, sm: k28),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(k0_5),
            border: Border.all(color: Colors.grey.shade200),
          ),
          child: CustomThemeText(
            text: timeStrings[index],
            variant: responsiveValue(
              context: context,
              defaultValue: TypographyVariant.bodyMedium,
              sm: TypographyVariant.displayMedium,
            ),
            fontWeight: FontWeight.w700,
            maxLines: 1,
          ),
        ),
        CustomThemeText(
          text: ['days', 'hours', 'minutes', 'seconds'][index],
          variant: TypographyVariant.labelSmall,
          color: colorScheme.onSurface.withOpacity(.65),
          fontWeight: FontWeight.w200,
        ),
      ],
    );
  }
}
