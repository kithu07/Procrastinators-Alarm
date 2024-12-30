import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddAlarmScreen from './screens/AddAlarmScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = () => {
  const [activeScreen, setActiveScreen] = useState('Home'); // Default to Home screen

  // Function to render the active screen
  const renderScreen = () => {
    switch (activeScreen) {
      case 'AddAlarm':
        return <AddAlarmScreen navigate={setActiveScreen} />;
      case 'Settings':
        return <SettingsScreen navigate={setActiveScreen} />;
      default:
        return <HomeScreen navigate={setActiveScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;