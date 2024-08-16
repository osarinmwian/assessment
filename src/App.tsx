import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './shared/navigations/RootNavigation';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
export default App;
