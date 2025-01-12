import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailPage from '../../screen/dashboard/detailPage/DetailPage';
import HomePage from '../../screen/dashboard/homePage/HomePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{title: 'LandingPage'}}
      />
      <Tab.Screen
        name="DetailPage"
        component={DetailPage}
        options={{title: 'ProfilePage'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
