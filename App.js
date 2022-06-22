import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AppContainer from './src/navigation/AppNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
