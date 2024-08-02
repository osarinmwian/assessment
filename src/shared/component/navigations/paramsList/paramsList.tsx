import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RouteParmaList = {
  Home: undefined;
};

export type RoutesStackParmaList<T extends keyof RouteParmaList> = {
  navigation: NavigationProp<RouteParmaList, T>;
  route: RouteProp<RouteParmaList, T>;
};
