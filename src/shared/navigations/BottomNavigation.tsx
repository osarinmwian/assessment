import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '@/shared/assets/colors/theme';
import LandingPage from '@/screen/dashboard/landingPage/LandingPage';
import ProfilePage from '@/screen/dashboard/profilePage/ProfilePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.color.blue,
        tabBarInactiveTintColor: theme.color.gray,
      }}>
      <Tab.Screen
        name="LandingPage"
        component={LandingPage}
        options={{title: 'LandingPage'}}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{title: 'ProfilePage'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
