import {Dimensions, PixelRatio, Animated} from 'react-native';
import RNStorage from './storage';

export type Currency =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'NGN'
  | 'ZAR'
  | 'JPY'
  | 'CNY'
  | 'INR'
  | 'AUD'
  | 'CAD'
  | 'BRL'
  | 'MXN'
  | 'RUB'
  | 'KRW'
  | 'SGD'
  | 'HKD'
  | 'TRY'
  | 'SAR'
  | 'AED'
  | 'CHF'
  | 'MYR';



export const Currency = (currency: string) => {
  const currencyUpper = currency?.toUpperCase();
  switch (currencyUpper) {
    case 'NGN': {
      return '₦';
    }
    case 'USD': {
      return '$';
    }
    case 'EUR': {
      return '€';
    }
    case 'GBP': {
      return '£';
    }
    case 'JPY': {
      return '¥';
    }
    case 'AUD': {
      return '$';
    }
    case 'CAD': {
      return '$';
    }
    case 'CHF': {
      return 'CHF';
    }
    case 'CNY': {
      return '元';
    }
    case 'DKK': {
      return 'Kr';
    }
    case 'GHS': {
      return 'GH₵';
    }
    case 'ZAR': {
      return 'R';
    }
    case 'INR': {
      return '₹';
    }
    case 'BRL': {
      return 'R$';
    }
    case 'MXN': {
      return '$';
    }
    case 'KRW': {
      return '₩';
    }
    case 'MYR': {
      return 'RM';
    }
    case 'NZD': {
      return '$';
    }
    case 'PHP': {
      return '₱';
    }
    default: {
      return '₦';
    }
  }
};

export function hexToRGB(hexColor: string, alpha?: number): string {
  const [r, g, b] = hexColor.match(/\w\w/g)!.map(x => parseInt(x, 16));
  return alpha ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
}

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const frame = {height: 812, width: 375};

const widthBaseScale = screenWidth / frame.width;
const heightBaseScale = screenHeight / frame.height;

function normalize(size: number, based: 'width' | 'height' = 'width'): number {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width pixel
const widthPixelToDP = (size: number): number => normalize(size, 'width');
// for height pixel
const heightPixelToDP = (size: number): number => normalize(size, 'height');
// for font pixel
const fontPixelToDP = (size: number): number => heightPixelToDP(size);

export {fontPixelToDP, heightPixelToDP, widthPixelToDP};

export const triggerShakeAnimation = (
  animValue: Animated.Value | Animated.ValueXY,
) => {
  Animated.sequence([
    Animated.timing(animValue, {
      toValue: -10,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: 10,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: -10,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};



export const getToken = async () => {
  try {
    const token = await RNStorage.getItem("token");
    return token || "";
  } catch (error) {
    // console.log("ERROR FORM", error);
    return null;
  }
};