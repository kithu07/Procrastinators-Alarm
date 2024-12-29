import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddAlarmScreen from './screens/AddAlarmScreen';

export default function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState('Home'); // Manages active screen

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'AddAlarm':
        return <AddAlarmScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>{renderScreen()}</View>
      <View style={styles.navContainer}>
        <Button title="Home" onPress={() => setCurrentScreen('Home')} />
        <Button title="Add Alarm" onPress={() => setCurrentScreen('AddAlarm')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  screenContainer: { flex: 9 },
  navContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
});
