import React from 'react';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';
import BaseButton from '../baseButton/baseButton';
import ViewWrapper from "../view/viewWrapper"
import {widthPixelToDP as WP} from '@/shared/utils/util';
import {theme} from '@/shared/assets/colors/theme';

interface AppLayoutProps {
  sideSpacing?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  hasBottomButton?: boolean;
  bottomButtonPress?: () => void;
  bottomButtonBackgroundColor?: string;
  bottomButtonText?: string;
  bottomButtonColor?: string;
  bottomButtonStyle?: StyleProp<ViewStyle>;
  bottomButtonLoading?: boolean;
  bottomButtonDisabled?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  sideSpacing = false,
  containerStyle,
  children,
  hasBottomButton = false,
  bottomButtonPress = () => {},
  bottomButtonBackgroundColor,
  bottomButtonText,
  bottomButtonColor,
  bottomButtonStyle,
  bottomButtonLoading = false,
  bottomButtonDisabled = false,
}) => {
  return (
    <ViewWrapper
      style={[
        
        {
          paddingBottom: WP(30),
          marginHorizontal: sideSpacing ? 0 : WP(15),
        },
        containerStyle as ViewStyle,
      ]}>
      {children}

      {hasBottomButton && (
        <ViewWrapper style={styles.bottomButtonStyle}>
          <BaseButton
            title={bottomButtonText || ''}
            backgroundColor={
              bottomButtonBackgroundColor
                ? bottomButtonBackgroundColor
                : theme.color.blue
            }
            color={bottomButtonColor ? bottomButtonColor : theme.color.primary}
            buttonLoading={bottomButtonLoading}
            buttonStyle={[
              {
                width: WP(90),
                borderRadius: WP(2),
              },
              bottomButtonStyle as ViewStyle,
            ]}
            onPress={bottomButtonPress}
            disabled={bottomButtonDisabled}
          />
        </ViewWrapper>
      )}
    </ViewWrapper>
  );
};

export default React.memo(AppLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomButtonStyle: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});
