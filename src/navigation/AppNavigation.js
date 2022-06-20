import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesListScreen from '../screens/MoviesList/MoviesListScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetailsScreen';
import {Constants} from '../utils/constants';

const Stack = createNativeStackNavigator();

const MoviesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesList"
        component={MoviesListScreen}
        options={{title: Constants.APP_TITLE}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{title: Constants.SCREEN_DETAIL_TITLE}}
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
