import 'package:flutter/material.dart';
import 'package:hpsg/theme/theme.dart';
import 'package:hpsg/util/responsive_util.dart';
import 'package:responsive_framework/responsive_framework.dart';

ResponsiveRowColumnItem buildHeader(BuildContext context) {
  return ResponsiveRowColumnItem(
    child: Container(
      padding: ResponsiveUtil.responsiveValue(
        context: context,
        defaultValue: const EdgeInsets.symmetric(vertical: k6, horizontal: k4),
        sm: const EdgeInsets.symmetric(vertical: k4, horizontal: k6),
      ),
      decoration: BoxDecoration(color: Colors.white, boxShadow: [
        BoxShadow(
          color: const Color(0xFF190a05).withOpacity(.02),
          offset: const Offset(0, 12),
          blurRadius: 24.0,
        ),
      ]),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Flexible(
            child: Image.asset(
              'images/logo.png',
            ),
          ),
          ResponsiveUtil.responsiveVisibility(
            context: context,
            visibleOnXXS: true,
            visibleOnMD: false,
            child: const Icon(
              Icons.menu,
              color: Color(0xFFff6635),
              size: k6,
            ),
          )
        ],
      ),
    ),
  );
}
