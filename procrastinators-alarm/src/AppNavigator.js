import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddAlarmScreen from './screens/AddAlarmScreen';
import SettingsScreen from './screens/SettingsScreen';
import GameScreen from './screens/GameScreen';

const AppNavigator = () => {
  const [activeScreen, setActiveScreen] = useState('Home'); 
  const [alarm, setAlarm] = useState({ hour: '00', minute: '00' });
  const [gameSolved, setGameSolved] = useState(false); 


  // Function to render the active screen
  const renderScreen = () => {
    switch (activeScreen) {
      case 'AddAlarm':
        return (
          <AddAlarmScreen
            navigate={setActiveScreen}
            setAlarm={(hour, minute) => {
              setAlarm({ hour, minute });
              setGameSolved(false);
            }}
          />
        );
      case 'Settings':
        return <SettingsScreen navigate={setActiveScreen} />;
      case 'Game':
        return <GameScreen navigate={setActiveScreen} />;
      default:
        return <HomeScreen  
        navigate={setActiveScreen}
        alarm={alarm}
        gameSolved={gameSolved}
        setGameSolved={setGameSolved} />;
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
