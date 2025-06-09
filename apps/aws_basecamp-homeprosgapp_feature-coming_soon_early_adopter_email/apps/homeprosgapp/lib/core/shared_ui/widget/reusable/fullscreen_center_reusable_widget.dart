import 'package:flutter/material.dart';
import '../../../theme/theme.dart';
import '../../layout/layout.dart';
import '../custom_theme_text_widget.dart';

class FullScreenReusable extends StatelessWidget {
  final String email;

  const FullScreenReusable({super.key, required this.email});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: StackColumn(
          horizontalAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: maxXS, maxHeight: max2XL),
                child: StackColumn(
                  horizontalAlignment: CrossAxisAlignment.center,
                  verticalAlignment: MainAxisAlignment.center,
                  spacing: const [k9, k6, k6, k6],
                  children: [
                    Image.asset(
                      'assets/image/feature/booking/booking_confirmation_email_icon.png',
                      width: k48,
                    ),
                    const CustomThemeText(
                      text: 'Confirm your email address',
                      variant: TypographyVariant.titleLarge,
                      maxLines: 1,
                      textAlign: TextAlign.center,
                    ),
                    CustomThemeText(
                      text: 'We sent a confirmation email to:',
                      variant: TypographyVariant.bodyMedium,
                      color: Theme.of(context).colorScheme.onSurface.withOpacity(.65),
                      textAlign: TextAlign.center,
                    ),
                    CustomThemeText(
                      text: email,
                      variant: TypographyVariant.bodyMedium,
                      textAlign: TextAlign.center,
                    ),
                    CustomThemeText(
                      text: 'Check you email and click on the confirmation link to continue',
                      variant: TypographyVariant.bodyMedium,
                      color: Theme.of(context).colorScheme.onSurface.withOpacity(.65),
                      maxLines: 2,
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
            ),
            Container(
              alignment: Alignment.center,
              padding: const EdgeInsets.symmetric(vertical: k8),
              child: CustomThemeText(
                text: 'Resend email',
                color: Theme.of(context).colorScheme.primary,
                variant: TypographyVariant.titleMedium,
              ),
            )
          ],
        ),
      ),
    );
  }
}
