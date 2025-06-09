import 'package:flutter/material.dart';

final ThemeData bookingMultiStepFormInputTheme = ThemeData(
  inputDecorationTheme: InputDecorationTheme(
    labelStyle: TextStyle(
      color: Colors.grey.shade500,
      fontSize: 16,
      fontWeight: FontWeight.w400,
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(2.0),
      borderSide: BorderSide(
        color: Colors.grey.shade400,
        width: 0.5,
      ),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(2.0),
      borderSide: BorderSide(
        color: Colors.grey.shade400,
        width: 0.5,
      ),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(2.0),
      borderSide: const BorderSide(
        color: Colors.red,
        width: 0.5,
      ),
    ),
    focusedErrorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(2.0),
      borderSide: const BorderSide(
        color: Colors.red,
        width: 0.5,
      ),
    ),
  ),
);
