import React, {ReactNode} from 'react';
import {LayoutChangeEvent, View, ViewStyle} from 'react-native';

interface ViewWrapperProps {
  style?: ViewStyle | ViewStyle[] ;
  children?: ReactNode;
  onLayout?:((event: LayoutChangeEvent) => void) | undefined
}

const ViewWrapper: React.FC<ViewWrapperProps> = ({style, children = null,  onLayout}) => {
  return <View style={style}  onLayout={ onLayout}>{children}</View>;
};

export default React.memo(ViewWrapper);
