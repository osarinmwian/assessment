import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  TextInput,
  TextInputProps,
  ViewStyle,
  Pressable,
} from 'react-native';
import ViewWrapper from '../view/viewWrapper';
import Basic from '../text/basic/basic';
import { hexToRGB, triggerShakeAnimation } from '@/shared/utils/util';
import { theme } from '@/shared/assets/colors/theme';
import { SIZES, WEIGHT } from '@/shared/assets/colors';
import { widthPixelToDP as WP } from '@/shared/utils/util';
import { useThemeHook } from '@/shared/assets/colors/ThemeProvider';

// Define the props interface
interface InputProps extends TextInputProps {
  placeholder?: string;
  passwordShow?: boolean;
  error?: any;
  isLabel?: boolean;
  label?: string;
  containerStyle?: ViewStyle;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  passwordShow,
  error,
  isLabel,
  label,
  containerStyle,
  ...textInputProps
}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const { colors } = useThemeHook();
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (error) {
      triggerShakeAnimation(animValue);
    }
  }, [animValue, error]);

  return (
    <Animated.View style={{ transform: [{ translateX: animValue }] }}>
      <ViewWrapper style={[styles.inputContainer, containerStyle as ViewStyle]}>
        {isLabel && <Basic textStyle={styles.label} title={label} />}

        <TextInput
          allowFontScaling={false}
          style={[
            styles.input,
            error ? styles.errorInput : null,
            { color: colors.textInput },
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.simpleInput}
          selectionColor={theme.color.black}
          secureTextEntry={!passwordShow ? false : passwordVisible}
          {...textInputProps} // Spread the remaining props into TextInput
        />
        {passwordShow && (
          <Pressable
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}
            style={styles.eyeTouchable}>
            <Basic title="icon" />
          </Pressable>
        )}

        {error && (
          <Basic
            textStyle={{
              marginTop: WP(1),
              color: theme.color.red,
              fontSize: SIZES.small,
              fontWeight: WEIGHT.small,
            }}
            title={error}
          />
        )}
      </ViewWrapper>
    </Animated.View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: WP(3),
  },
  input: {
    fontSize: WP(4),
    backgroundColor: hexToRGB(theme.color.placeholderbackground, WP(20)),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: WP(14),
    borderRadius: WP(2.5),
    paddingTop: WP(3),
    paddingLeft: WP(3.2),
    paddingBottom: WP(3),
  },
  errorInput: {
    borderColor: hexToRGB(theme.color.red, 1.1),
    borderWidth: WP(0.35),
  },
  eyeTouchable: {
    marginLeft: 'auto',
    marginTop: WP(-13.5),
    width: WP(20),
    height: WP(13),
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: WP(0.3),
  },
  label: {
    marginBottom: WP(1),
    color: theme.color.black,
    fontSize: SIZES.xMedium,
    fontWeight: WEIGHT.normal,
  },
});
