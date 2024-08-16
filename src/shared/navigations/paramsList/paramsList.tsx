import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RouteParmaList = {
  DetailPage: { id: number };
  HomePage: undefined;
  BottomTabNavigation: undefined;
};

export type RoutesStackParmaList<T extends keyof RouteParmaList> = {
  navigation: NavigationProp<RouteParmaList, T>;
  route: RouteProp<RouteParmaList, T>;
};
