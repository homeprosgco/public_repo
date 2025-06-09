// Function to get the appropriate maxWidth based on screen size
import 'package:flutter/material.dart';

import 'breakpoints_util.dart';

double getScreenMaxWidth(BuildContext context) {
  double screenWidth = MediaQuery.of(context).size.width;

  if (screenWidth >= breakpointxxl) {
    // For screens equal to or larger than 1536 pixels, limit to 1536 pixels
    return breakpointxxl;
  } else if (screenWidth >= breakpointxl) {
    // For screens between 1280 and 1535 pixels, limit to 1280 pixels
    return breakpointxl;
  } else if (screenWidth >= breakpointlg) {
    // For screens between 1024 and 1279 pixels, limit to 1024 pixels
    return breakpointlg;
  } else if (screenWidth >= breakpointmd) {
    // For screens between 768 and 1023 pixels, limit to 768 pixels
    return breakpointmd;
  } else if (screenWidth >= breakpointsm) {
    // For screens between 640 and 767 pixels, limit to 640 pixels
    return breakpointsm;
  } else if (screenWidth >= breakpointxs) {
    // For screens between 350 and 639 pixels, use the actual screen width
    return screenWidth;
  } else {
    // For screens smaller than 350 pixels, use the actual screen width
    return screenWidth; // No constraint for smallest sizes
  }
}

