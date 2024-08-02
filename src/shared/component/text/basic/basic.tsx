import React from 'react';
import { Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ViewWrapper from "../../view/viewWrapper";
import { SIZES, WEIGHT } from "@/shared/assets/colors";


interface BasicProps {
  title: string;
  textStyle?: TextStyle | TextStyle[]; 
  color?: TextStyle | TextStyle[];
  basicContainerStyle?: ViewStyle | ViewStyle[]; 
}

const Basic: React.FC<BasicProps> = ({ title, textStyle, color, basicContainerStyle }) => {
  return (
    <ViewWrapper style={basicContainerStyle} onLayout={undefined}>
      <Text style={[styles.text, textStyle, color]} allowFontScaling={true}>
        {title}
      </Text>
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
