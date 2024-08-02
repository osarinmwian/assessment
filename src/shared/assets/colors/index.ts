import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const SIZES = {
  xxSmall: 5,
  xSmall: 10,
  small: 12,
  xSMedium: 13,
  xSSMedium: 13.8,
  xMedium: 14,
  xMMXMedium: 14.2,
  xMxMedium: 14.8,
  xXMedium: 15,
  xMMedium: 15.5,
  xxMedium: 16,
  medium: 18,
  large: 20,
  xLarge: 22,
  xxLarge: 24,
  extraLarge: 26,
  xExtraLarge: 28,
  xxExtraLarge: 30,
  height,
  width,
} as const;

export const WEIGHT = {
  small: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
  heavy: 'bold',
} as const;
