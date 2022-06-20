import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayingNowScreen from '../screens/PlayingNow/PlayingNow';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import {constants} from '../utils/constants';

const Stack = createNativeStackNavigator();

const MoviesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesList"
        component={PlayingNowScreen}
        options={{title: constants.APP_TITLE}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{title: constants.SCREEN_DETAIL_TITLE}}
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
