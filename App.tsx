import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/shared/navigations/RootNavigation';
import {ThemeProvider} from './src/shared/assets/colors/ThemeProvider';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
