import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '@/shared/assets/colors/theme';

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
        name="Home"
        // component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Profile"
        // component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
