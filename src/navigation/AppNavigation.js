import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesListScreen from '../screens/MoviesList/MoviesListScreen';

const Stack = createNativeStackNavigator();

const MoviesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies List"
        component={MoviesListScreen}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MoviesStackNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;
