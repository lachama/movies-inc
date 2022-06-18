/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SafeAreaView from 'react-native';

import AppContainer from './src/navigation/AppNavigation';

const App = () => {
  return <AppContainer />;
  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <AppContainer />
  //   </SafeAreaView>
  // );
};

export default App;
