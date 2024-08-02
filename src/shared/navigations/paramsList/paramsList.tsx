import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RouteParmaList = {
  LandingPage: undefined;
  ProfilePage: undefined;
};

export type RoutesStackParmaList<T extends keyof RouteParmaList> = {
  navigation: NavigationProp<RouteParmaList, T>;
  route: RouteProp<RouteParmaList, T>;
};
