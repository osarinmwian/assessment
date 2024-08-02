import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';




const App =():React.JSX.Element  =>{
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
export default App;