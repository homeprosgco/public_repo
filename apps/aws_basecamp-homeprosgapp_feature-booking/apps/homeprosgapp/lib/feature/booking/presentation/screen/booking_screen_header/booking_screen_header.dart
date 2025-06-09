import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:homeprosgapp/core/core.dart';

class BookingScreenHeader extends StatelessWidget {
  const BookingScreenHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: k4, horizontal: k4),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF190a05).withOpacity(.02),
            offset: const Offset(0, 12),
            blurRadius: 24.0,
          ),
        ],
      ),
      child: StackRow(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              child: StackRow(
                spacing: const [k2],
                children: [
                  Image.asset(
                    'images/logo/hpsg_logo.png',
                    width: responsiveValue(context: context, defaultValue: k8, md: k12),
                  ),
                  StackColumn(
                    horizontalAlignment: CrossAxisAlignment.start,
                    spacing: const [k0],
                    children: [
                      const CustomThemeText(
                        text: 'HPSG',
                        variant: TypographyVariant.labelLarge,
                      ),
                      responsiveVisibility(
                        context: context,
                        defaultValue: false,
                        visibleOnSM: true,
                        child: const CustomThemeText(
                          text: 'HOME PRO SERVICE GROUP',
                          variant: TypographyVariant.labelSmall,
                          fontWeight: FontWeight.w100,
                        ),
                      )
                    ],
                  )
                ],
              ),
              onTap: () {
                context.go('/');
              },
            ),
          ),
          StackColumn(
            horizontalAlignment: CrossAxisAlignment.end,
            children: [
              CustomThemeText(
                text: 'Call Us Now',
                variant: TypographyVariant.labelMedium,
                color: Theme.of(context).colorScheme.primary,
              ),
              const CustomThemeText(
                text: '(561) 759-5900',
                variant: TypographyVariant.labelLarge,
              )
            ],
          )
        ],
      ),
    );
  }
}
