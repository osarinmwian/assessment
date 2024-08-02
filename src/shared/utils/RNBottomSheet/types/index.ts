import { ViewProps } from "react-native";

// types.ts
export interface RNBottomSheetProps {
    index?: number;
    snapPoints?: number[];
    detached?: boolean;
    enableContentPanningGesture?: boolean;
    enableHandlePanningGesture?: boolean;
    enableOverDrag?: boolean;
    enablePanDownToClose?: boolean;
    enableDynamicSizing?: boolean;
    animateOnMount?: boolean;
    handleHeight?: number;
    containerHeight?: number;
    contentHeight?: number;
    containerOffset?: number;
    topInset?: number;
    bottomInset?: number;
    maxDynamicContentSize?: number;
    keyboardBehavior?: 'interactive' | 'extend' | 'fullScreen';
    keyboardBlurBehavior?: 'none' | 'restore';
    android_keyboardInputMode?: 'adjustResize' | 'adjustPan' | 'adjustNothing';
    containerStyle?: object;
    style?: object;
    backgroundStyle?: object;
    handleStyle?: object;
    handleIndicatorStyle?: object;
    gestureEventsHandlersHook?: any;
    animatedPosition?: any;
    animatedIndex?: any;
    onChange?: (index: number) => void;
    onClose?: () => void;
    onAnimate?: (fromIndex: number, toIndex: number) => void;
    handleComponent?: React.ComponentType<any>;
    backdropComponent?: React.ComponentType<any>;
    backgroundComponent?: React.ComponentType<any>;
    footerComponent?: React.ComponentType<any>;
    children?: React.ReactNode;
  }
  export interface RNBottomSheetBackdropProps
  extends Pick<ViewProps, 'style'> {
}
export type BackdropPressBehavior = 'none' | 'close' | 'collapse' | number;

export interface BottomSheetDefaultBackdropProps
  extends RNBottomSheetBackdropProps {
  opacity?: number;
  appearsOnIndex?: number;
  disappearsOnIndex?: number;
  enableTouchThrough?: boolean;
  pressBehavior?: BackdropPressBehavior;
  onPress?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}
