import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <>
      {/* Set the status bar style */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <AppNavigator />
    </>
  );
};

export default App;
