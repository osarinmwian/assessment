import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const SIZES = {
    xxSmall: 5,
    xSmall: 10,
    small: 12,
    xSMedium: 13,
    xSSMedium: 13.8,
    xMedium: 14,
    xMMXMedium: 14.2,
    xMxMedium: 14.8,
    xXMedium: 15,
    xMMedium: 15.5,
    xxMedium: 16,
    medium: 18,
    large: 20,
    xLarge: 22,
    xxLarge: 24,
    extraLarge: 26,
    xExtraLarge: 28,
    xxExtraLarge: 30,
    height,
    width,
  };
  
  export const WEIGHT = {
    small: "200" as "200",  
    medium: "400" as "400",
    regular: "500" as "500",
    semibold: "600" as "600",
    bold: "700" as "700",
    extrabold: "800" as "800",
  };
  
  