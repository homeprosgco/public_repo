import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = 'primary' | 'secondary' | 'accent' | 'neutral' | 'danger' | "success" | "warning" | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

const colors: Record<string, Tuple<string, 10>> = {
  primary: ['#ebedee', '#d8dadd', '#b0b5bc', '#89909a', '#616b79', '#3a4657', '#2e3846', '#232a34', '#171c23', '#0c0e11'],
  secondary: ['#ecf2ff', '#d8e6ff', '#b1ccff', '#8ab3ff', '#6399ff', '#3c80ff', '#3066cc', '#244d99', '#183366', '#0c1a33'],
  accent: ['#fef3e6', '#fde6cd', '#fbcd9b', '#f8b568', '#f69c36', '#f48304', '#c36903', '#924f02', '#623402', '#311a01'],
  neutral: ['#e6e6e6', '#cdcdce', '#b4b5b5', '#9b9c9d', '#838384', '#6a6a6b', '#515153', '#38393a', '#1f2022', '#060709'],
  success: ['#e4efd9', '#c8dfb3', '#add08d', '#91c067', '#76b041', '#5e8d34', '#476a27', '#2f461a', '#18230d', '#0c1206'],
  danger: ['#f7eae7', '#e7c0b6', '#d89786', '#c0583d', '#b02e0c', '#8d250a', '#6a1c07', '#461205', '#230902', '#120501'],
  warning: ['#fffae8', '#ffefb9', '#ffe48a', '#ffd95b', '#ffc914', '#e6b512', '#cca110', '#99790c', '#665008', '#332804']
  
};

export default colors;