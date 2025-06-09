const bool isTailwindCss = true;

const double k0 = 0.0;

/// 13rem * 4 = 208px
const double k52 = 208;

/// 15rem * 4 = 240px
const double k60 = 240;

/// max-w-2xl: 42rem; /* 672px */
const double max2XL = 672.0;

/// 2.75rem * 4 = 44px
const double k11 = 44;

/// 11rem * 4 = 176px
const double k44 = 176;

/// 0.875rem * 4 = 14px
const double k3_5 = 14;

/// 1.75rem * 4 = 28px
const double k7 = 28;

/// 3.5rem * 4 = 56px
const double k14 = 56;

/// 7rem * 4 = 112px
const double k28 = 112;

/// 14rem * 4 = 224px
const double k56 = 224;

/// max-w-md: 28rem; /* 448px */
const double maxMD = 448.0;

/// max-w-4xl: 56rem; /* 896px */
const double max4XL = 896.0;

/// 1.12rem * 4 = 18px
const double k4_5 = 18;

/// 2.25rem * 4 = 36px
const double k9 = 36;

/// 4.5rem * 4 = 144px
const double k18 = 72;

/// 9rem * 4 = 144px
const double k36 = 144;

/// 18rem * 4 = 288px
const double k72 = 288;

/// max-w-xl: 36rem; /* 576px */
const double maxXL = 576.0;

/// max-w-6xl: 72rem; /* 1152px */
const double max6XL = 1152.0;

/// max-w-xs: 20rem; /* 320px */
const double k1px = 1.0;

/// 0.125rem * 4 = 2px
const double k0_5 = 2;

/// 0.25rem * 4 = 4px
const double k1 = isTailwindCss ? 4 : 3.875;

/// 0.5rem * 4 = 8px
const double k2 = isTailwindCss ? 8 : 7.75;

/// 1rem * 4 = 16px
const double k4 = isTailwindCss ? 16 : 15.5;

/// 2rem * 4 = 32px
const double k8 = isTailwindCss ? 32 : 31;

/// 4rem * 4 = 64px
const double k16 = isTailwindCss ? 64 : 62;

/// 8rem * 4 = 128px
const double k32 = isTailwindCss ? 128 : 124;

/// 16rem * 4 = 256px
const double k64 = isTailwindCss ? 256 : 248;

/// max-w-lg: 32rem; /* 512px */
const double maxLG = isTailwindCss ? 512 : 496;

/// max-w-5xl: 64rem; /* 1024px */
const double max5XL = isTailwindCss ? 1024.0 : 992;

/// TABLET_LG
const double maxWidthScreenLG = max5XL;

/// 0.625rem * 4 = 10px
const double k2_5 = isTailwindCss ? 10 : 9.375;

/// 1.25rem * 4 = 20px
const double k5 = isTailwindCss ? 20 : 18.75;

/// 2.5rem * 4 = 40px
const double k10 = isTailwindCss ? 40 : 37.5;

/// 5rem * 4 = 80px
const double k20 = isTailwindCss ? 80 : 75;

/// 10rem * 4 = 160px
const double k40 = isTailwindCss ? 160 : 150;

/// 20rem * 4 = 320px
const double k80 = isTailwindCss ? 320 : 300;

/// max-w-xs: 20rem; /* 320px */
const double maxXS = k80;

/// MOBILE_SM
const double maxWidthScreenSM = isTailwindCss ? 640 : 600;

/// max-w-7xl: 80rem; /* 1280px */
const double max7XL = isTailwindCss ? 1280 : 1200;

/// DESKTOP_XL
const double maxWidthScreenXL = max7XL;

/// 0.375rem * 4 = 6px
const double k1_5 = isTailwindCss ? 6 : 5.4;

/// 0.75rem * 4 = 12px
const double k3 = isTailwindCss ? 12 : 10.93;

/// 1.5rem * 4 = 24px
const double k6 = isTailwindCss ? 24 : 21.875;

/// 3rem * 4 = 48px
const double k12 = isTailwindCss ? 48 : 43.75;

/// 6rem * 4 = 96px
const double k24 = isTailwindCss ? 96 : 87.5;

/// 12rem * 4 = 192px
const double k48 = isTailwindCss ? 192 : 175;

/// 24rem * 4 = 384px
const double k96 = isTailwindCss ? 384.0 : 350;

/// max-w-sm: 24rem; /* 384px */
const double maxSM = k96;

/// max-w-3xl: 48rem; /* 768px */
const double max3XL = isTailwindCss ? 768.0 : 700;

/// TABLET_MD
const double maxWidthScreenMD = max3XL;

/// 1536
const double maxWidthScreen2XL = isTailwindCss ? 1536.0 : 1400;

// used by the layout grid to measure width and height of web blocks
const List<Map<String, dynamic>> dimensions = [
  {'name': 'k0', 'value': k0},
  {'name': 'k1px', 'value': k1px},
  {'name': 'k0_5', 'value': k0_5},
  {'name': 'k1', 'value': k1},
  {'name': 'k1_5', 'value': k1_5},
  {'name': 'k2', 'value': k2},
  {'name': 'k2_5', 'value': k2_5},
  {'name': 'k3', 'value': k3},
  {'name': 'k3_5', 'value': k3_5},
  {'name': 'k4', 'value': k4},
  {'name': 'k5', 'value': k5},
  {'name': 'k6', 'value': k6},
  {'name': 'k7', 'value': k7},
  {'name': 'k8', 'value': k8},
  {'name': 'k9', 'value': k9},
  {'name': 'k10', 'value': k10},
  {'name': 'k11', 'value': k11},
  {'name': 'k12', 'value': k12},
  {'name': 'k14', 'value': k14},
  {'name': 'k16', 'value': k16},
  {'name': 'k20', 'value': k20},
  {'name': 'k24', 'value': k24},
  {'name': 'k28', 'value': k28},
  {'name': 'k32', 'value': k32},
  {'name': 'k36', 'value': k36},
  {'name': 'k40', 'value': k40},
  {'name': 'k44', 'value': k44},
  {'name': 'k48', 'value': k48},
  {'name': 'k52', 'value': k52},
  {'name': 'k56', 'value': k56},
  {'name': 'k60', 'value': k60},
  {'name': 'k64', 'value': k64},
  {'name': 'k72', 'value': k72},
  {'name': 'k80', 'value': k80},
  {'name': 'k96', 'value': k96},
  {'name': 'maxXS', 'value': maxXS},
  {'name': 'maxSM', 'value': maxSM},
  {'name': 'maxMD', 'value': maxMD},
  {'name': 'maxLG', 'value': maxLG},
  {'name': 'maxXL', 'value': maxXL},
  {'name': 'max2XL', 'value': max2XL},
  {'name': 'max3XL', 'value': max3XL},
  {'name': 'max4XL', 'value': max4XL},
  {'name': 'max5XL', 'value': max5XL},
  {'name': 'max6XL', 'value': max6XL},
  {'name': 'max7XL', 'value': max7XL},
  {'name': 'maxWidthScreenSM', 'value': maxWidthScreenSM},
  {'name': 'maxWidthScreenMD', 'value': maxWidthScreenMD},
  {'name': 'maxWidthScreenLG', 'value': maxWidthScreenLG},
  {'name': 'maxWidthScreenXL', 'value': maxWidthScreenXL},
  {'name': 'maxWidthScreen2XL', 'value': maxWidthScreen2XL},
];

const spacexxs = k0_5;
const spacexs = k1;
const spacesm = k2;
const spacemd = k4;
const spacelg = k6;
const spacexl = k8;
const space2xl = k10;
const space3xl = k12;
const space4xl = k16;
const space5xl = k28;
const space6xl = k32;
const space7xl = k40;
