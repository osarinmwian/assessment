import React from 'react';
import {StyleSheet, Pressable, ViewStyle, TextStyle} from 'react-native';
import ViewWrapper from '../view/viewWrapper';
import Basic from '../text/basic/basic';
import {theme} from '@/shared/assets/colors/theme';
import {
  fontPixelToDP,
  hexToRGB,
  widthPixelToDP as WP,
} from '@/shared/utils/util';

interface BaseButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  buttonStyle?:  ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  buttonLoading?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  disabled = false,
  buttonStyle,
  textStyle,
  buttonLoading = false,
}) => {
  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <Pressable
      style={[
        styles.parentWrapper,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : hexToRGB(theme.color.blue, fontPixelToDP(20)),
        },
        {
          opacity: disabledOpacity,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <ViewWrapper
        style={{
          flexDirection: 'row',
        }}>
        <Basic
          textStyle={
           [
              styles.buttontext,
              {color: buttonLoading ? theme.color.primary : color},
              textStyle as TextStyle,
            ] 
          }
          title={buttonLoading ? 'LOADING....' : title}
        />
      </ViewWrapper>
    </Pressable>
  );
};

export default React.memo(BaseButton);

const styles = StyleSheet.create({
  parentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: WP(14),
    width: '100%',
    borderRadius: WP(2),
    marginTop: WP(1.8),
  },

  buttontext: {
    fontSize: WP(3.5),
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
