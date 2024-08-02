import React, {
  forwardRef,
  useCallback,
  useState,
  useEffect,
  useImperativeHandle,
} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import ViewWrapper from '@/shared/component/view/viewWrapper';
import {RNBottomSheetProps} from './types';
import RNBottomSheetBackdrop from './RNBackBottomPress';

const RNBottomSheet = forwardRef<any, RNBottomSheetProps>(
  (
    {
      index = 0,
      snapPoints = [0], // Default to 0 (closed)
      enableHandlePanningGesture = true,
      animateOnMount = true,
      containerStyle,
      style,
      onClose,
      backdropComponent: BackdropComponent,
      footerComponent: FooterComponent,
      children,
    },
    ref,
  ) => {
    // Shared values for animations
    const translateY = useSharedValue(0);
    const [sheetHeight, setSheetHeight] = useState<number | null>(null);

    // Determine the height of the bottom sheet when opened
    const openSheetAtSnapPoint = useCallback(
      (snapIndex: number) => {
        const snapPoint = snapPoints[snapIndex];
        translateY.value = withTiming(-snapPoint); // Negative because we're animating upwards
      },
      [snapPoints],
    );

    // Animated styles for the bottom sheet
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{translateY: translateY.value}],
    }));

    // Gesture event handler
    const onGestureEvent = useCallback(
      (event: PanGestureHandlerGestureEvent) => {
        if (enableHandlePanningGesture) {
          translateY.value = withSpring(event.nativeEvent.translationY);
        }
      },
      [translateY, enableHandlePanningGesture],
    );

    // Animated close function
    const closeSheet = useCallback(() => {
      translateY.value = withTiming(sheetHeight || 0, {}, () => {
        if (onClose) {
          onClose();
        }
      });
    }, [sheetHeight, onClose]);

    // Initial mount animation
    useEffect(() => {
      if (animateOnMount) {
        openSheetAtSnapPoint(index);
      }
    }, [animateOnMount, index, openSheetAtSnapPoint]);

    // Expose open and close methods to the parent component
    useImperativeHandle(ref, () => ({
      openSheetAtSnapPoint,
      closeSheet,
    }));

    return (
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.container, containerStyle, animatedStyle]}>
          {BackdropComponent && (
            <RNBottomSheetBackdrop
              opacity={0.5}
              pressBehavior="close"
              onPress={closeSheet}
            />
          )}
          <Animated.View style={[styles.sheet, style]}>
            <ViewWrapper
              style={styles.content}
              onLayout={event =>
                setSheetHeight(event.nativeEvent.layout.height)
              }>
              {children}
            </ViewWrapper>

            {FooterComponent && (
              <View style={styles.footer}>
                <FooterComponent />
              </View>
            )}
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    padding: 16,
  },
  footer: {
    padding: 16,
  },
});

export default RNBottomSheet;
