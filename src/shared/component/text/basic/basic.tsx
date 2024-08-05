import React from 'react';
import { StyleSheet, TextStyle, ViewStyle} from 'react-native';
import ViewWrapper from '../../view/viewWrapper';
import {SIZES, WEIGHT} from '@/shared/assets/colors';
import TextBox from '../index';

interface BasicProps {
  title: string | undefined | string[];
  textStyle?: TextStyle | TextStyle[];
  color?: TextStyle | TextStyle[];
  basicContainerStyle?: ViewStyle | ViewStyle[];
}

const Basic: React.FC<BasicProps> = ({
  title,
  textStyle,
  color,
  basicContainerStyle,
}) => {
  return (
    <ViewWrapper style={basicContainerStyle} onLayout={undefined}>
      <TextBox
        style={[styles.text, textStyle as TextStyle, color as TextStyle]}>
        {title}
      </TextBox>
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.xMMXMedium,
    fontWeight: WEIGHT.normal,
  },
});

export default Basic;
