import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteParmaList } from './paramsList/paramsList'; 
import LandingPage from '@/screen/dashboard/landingPage/LandingPage';

const RootStack = createNativeStackNavigator<RouteParmaList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 50,
        contentStyle: { backgroundColor: 'white' },
        animationTypeForReplace: 'push',
        customAnimationOnGesture: true,
      }}
    >
      <RootStack.Screen
        name="LandingPage"
        component={LandingPage} 
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
