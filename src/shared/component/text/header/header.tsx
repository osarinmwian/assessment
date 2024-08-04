import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ViewWrapper from "../../view/viewWrapper";
import { SIZES, WEIGHT } from "@/shared/assets/colors";
import TextBox from "../index"


interface HeaderProps {
  title: string;
  textStyle?: TextStyle ; 
  color?: TextStyle;  
  basicContainerStyle?: ViewStyle; 
}

const Header: React.FC<HeaderProps> = ({ title, textStyle, color, basicContainerStyle }) => {
  return (
    <ViewWrapper style={basicContainerStyle}>
      <TextBox style={[styles.text, textStyle as TextStyle, color as TextStyle]}>
        {title}
      </TextBox>
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
