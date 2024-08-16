import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteParmaList} from './paramsList/paramsList';
import BottomTabNavigation from './BottomNavigation';
import DetailPage from '@/screen/dashboard/profilePage/DetailPage';

const RootStack = createNativeStackNavigator<RouteParmaList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 50,
        contentStyle: {backgroundColor: 'white'},
        animationTypeForReplace: 'push',
        customAnimationOnGesture: true,
      }}>
      <RootStack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
