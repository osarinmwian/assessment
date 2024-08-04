import {SIZES, WEIGHT} from '@/shared/assets/colors';
import {theme} from '@/shared/assets/colors/theme';
import {  useThemeHook } from '@/shared/assets/colors/ThemeProvider';

import {fontPixelToDP, hexToRGB} from '@/shared/utils/util';
import * as React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.xLarge,
    fontWeight: WEIGHT.bold,
    color: hexToRGB(theme.color.black, fontPixelToDP(1)),
  } as TextStyle,
});

interface TextBoxProps {
  children?: React.ReactNode;
  style?: TextStyle  | TextStyle[];
  onPress?: () => void;
  numberOfLines?: number;
}

const TextBox: React.FC<TextBoxProps> = ({
  children = null,
  style,
  onPress,
  numberOfLines,
}) => {
  const {colors} =  useThemeHook();
  return (
    <Text
      style={[{...styles.text, color: colors.text}, style]}
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default React.memo(TextBox);
