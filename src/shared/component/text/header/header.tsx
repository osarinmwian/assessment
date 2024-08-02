import React from 'react';
import { Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ViewWrapper from "../../view/viewWrapper";
import { SIZES, WEIGHT } from "@/shared/assets/colors";


interface HeaderProps {
  title: string;
  textStyle?: TextStyle; 
  color?: TextStyle;  
  basicContainerStyle?: ViewStyle; 
}

const Header: React.FC<HeaderProps> = ({ title, textStyle, color, basicContainerStyle }) => {
  return (
    <ViewWrapper style={basicContainerStyle}>
      <Text style={[styles.text, textStyle, color]} allowFontScaling={true}>
        {title}
      </Text>
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.xLarge,
    fontWeight: WEIGHT.normal,
  },
});

export default Header;
