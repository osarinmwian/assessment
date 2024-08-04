import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './shared/assets/colors/ThemeProvider';
import RootNavigation from './shared/navigations/RootNavigation';

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
