import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { BottomSheetDefaultBackdropProps } from './types';


const RNBottomSheetBackdrop: React.FC<BottomSheetDefaultBackdropProps> = ({
  opacity = 0.5,
  pressBehavior = 'close',
  onPress,
  children,
  style,
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity,
  }));

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    switch (pressBehavior) {
      case 'close':
        // Close the bottom sheet
        break;
      case 'collapse':
        // Collapse the bottom sheet
        break;
      case 'none':
        // Do nothing
        break;
      default:
        // Handle custom behavior
        break;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.backdrop, animatedStyle, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
});

export default RNBottomSheetBackdrop;
